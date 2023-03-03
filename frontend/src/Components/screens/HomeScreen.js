import { Link } from 'react-router-dom';
import { useState, useEffect, useReducer } from 'react';
import axios from 'axios';
import logger from 'use-reducer-logger';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, products: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function HomeScreen() {
  // const [products, setProducts] = useState([]);
  const [{ loading, error, products }, dispatch] = useReducer(logger(reducer), {
    products: [],
    loading: 'true',
    error: '',
  });
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get('/api/products');
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: err.message });
      }
      //setProducts(result.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Featured Products</h1>
      <div className="products">
        {loading ? (
          <div>loading..</div>
        ) : error ? (
          <div>{error}</div>
        ) : (
          <Row>
            {products.map((product) => (
              <Col sm={6} md={4} lg={3} className="mb-3">
                <div key={product.slug} className="card " >
                  <Link to={`/product/${product.slug}`}>
                    <img
                      className="medium card-size"
                      src={product.image}
                      alt={product.name}
                    />
                  </Link>
                  <div className="card-body item-center">
                    <Link  to={`/product/${product.slug}`}>
                      <h2 className='font'> {product.name}</h2>
                    </Link>

                    <div className="row">
                      <div className="price">${product.price}</div>
                      <Button className='product-btn-color'>Add to Cart</Button>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        )}
      </div>
    </div>
  );
}
export default HomeScreen;
