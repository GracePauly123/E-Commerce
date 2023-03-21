import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Rating from './rating';
import axios from 'axios';
import { useContext } from 'react';
import { Store } from '../Components/Store';

function Product(props){
    const {product}=props;
    const { state, dispatch: ctxDispatch } = useContext(Store);
    const {
      cart: { cartItems },
    } = state;

    const addToCartHandler = async (item) => {
      const existItem = cartItems.find((x) => x._id === product._id);
      const quantity = existItem ? existItem.quantity + 1 : 1;
      const { data } = await axios.get(`/api/products/${item._id}`);
      if (data.countInStock < quantity) {
        window.alert('Sorry. Product is out of stock');
        return;
      }
      ctxDispatch({
        type: 'CART_ADD_ITEM',
        payload: { ...item, quantity },
      });
    };

    return (
        <div>
  <div className="card " >
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
                    <Rating rating ={product.rating} numReviews={product.numReviews} />
                    <div className="row">
                      <div className="price">${product.price}</div>
                      <Button onClick={() => addToCartHandler(product)} className='product-btn-color '>Add to Cart</Button>
                    </div>
                  </div>
                </div>
        </div>
    )
}
export default Product;