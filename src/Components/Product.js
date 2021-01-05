import React from "react";
import StarRate from "@material-ui/icons/StarRate";
import {useStateValue} from "./StateProvider"
import "../Css/Product.css";

function Product({ id, title, image, price, rating }) {
  const [ { basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        rating: rating,
        price: price
      }
    })
  }

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>

        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>
                <StarRate />
              </p>
            ))}
        </div>
      </div>
      <img src={image} alt="" className="product__image" />
      <button 
      onClick={addToBasket}
      className="product__button">Add to basket</button>
    </div>
  );
}

export default Product;
