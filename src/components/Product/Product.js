import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Prouduct.css'
import Rating from 'react-rating';

const Product = (props) => {
    // console.log(props);
    const {name, img, seller, price, stock, star} = props.product;
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className="product">
            <div className="product-img">
                <img src={img} alt=""/> 
            </div>
            <div>
                <h5 className="product-name">Name: {name}</h5>
                <p><small>Seller: {seller}</small></p>
                <p>Price: {price}</p>
                <p><small>Seller: Only {stock} left in stock - order soon</small></p>
                <Rating
                    initialRating={star}
                    emptySymbol="far fa-star rating-color"
                    fullSymbol="fas fa-star rating-color"
                    readonly></Rating> <br />
                <button
                onClick={() => props.handleAddToCart(props.product)}
                className="btn-regular"
                >{cartIcon} Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;