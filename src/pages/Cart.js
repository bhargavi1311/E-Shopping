import React from "react";
import { useSelector } from "react-redux";

const Cart = (cartItems) => {
  const items = useSelector((state) => state.cart);

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
				<button>Remove</button>
              </div>
            ))}
          </div>
        </div>
      </section>

    
    </>
  );
};

export default Cart;
