import React from "react";
import { useStateValue } from "../Components/StateProvider";
import CheckoutProduct from "../Components/CheckoutProduct";
import Subtotal from "../Components/Subtotal";
import "../Css/Checkout.css";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://cdn.electronicfirst.com/uploads/2020/04/24102257/Amazon-Gift-Cards-Banner.jpg"
          alt=""
          className="checkout__ad"
        />
        {basket?.length === 0 ? (
          <div>
            <h2 className="checkout__title">Your Shopping Basket is Empty</h2>
            <p>You have no items in your basket.</p>
          </div>
        ) : (
          <div>
            <h2 className="checkout__title">Your Shopping Basket:</h2>
            {/* List all the checkout products */}
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className="checkout__right">
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
