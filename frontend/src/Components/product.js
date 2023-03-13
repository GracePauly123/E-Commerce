import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Rating from './rating';

function Product(props){
    const {product}=props;
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
                      <Button className='product-btn-color'>Add to Cart</Button>
                    </div>
                  </div>
                </div>
        </div>
    )
}
export default Product;