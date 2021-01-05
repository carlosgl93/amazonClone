import React from "react";
import StarRate from "@material-ui/icons/StarRate";
import "../Css/CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct(props) {
  const [{ basket }, dispatch] = useStateValue();

  console.log("props", props);

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: props.id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img src={props.image} alt="productImage" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{props.title}</p>
        <p className="checkoutProduct__Price">
          <small>$</small>
          <strong>{props.price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(props.rating)
            .fill()
            .map((_) => (
              <p>
                <StarRate />
              </p>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove from basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
