import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";

const Cart = (cartItems) => {
  const dispatch = useDispatch();

  const items = useSelector((state) => state.cart);

  const handleRemove = (itemId) => {
   	 dispatch(remove(itemId));
  };

  return (
    <>
      <section id="cart_items">
        <div class="container">
          <div class="breadcrumbs">
            <ol class="breadcrumb">
              <li>
                <a href="#">Home</a>
              </li>
              <li class="active">Shopping Cart</li>
            </ol>
          </div>
          <div class="table-responsive cart_info">
            {items.map((item) => (
              <div className="cartcard">
                <img src={item.images} alt="" />
                <h2>{item.price}</h2>
                <p>{item.title}</p>
                <button onClick={() => handleRemove(item.id)}>Remove</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
