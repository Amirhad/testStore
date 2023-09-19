import React from "react";
import logo from "../images/shop.svg";

interface Base {
  id: number;
  name: string;
  price: number;
  bought: boolean;
  rating: number;
  image: string;
}

interface CheckoutProps {
  state: Base[]
}

export const Checkout: React.FC<CheckoutProps> = ({ state }) => {
  let sum = state.filter((quantity):boolean => quantity.bought === true);

  return (
    <div>
      <div className="checkout">
        <img src={logo} alt="" />
        <span className="counter">{sum.length}</span>
      </div>
    </div>
  );
};
