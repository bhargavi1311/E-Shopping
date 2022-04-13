import React, { useState } from "react";
import { Slider_Product } from "./Slider_Product";

const Product = () => {
  return (
    <>
      <section id="advertisement">
        <div class="container">
          <img src="assets/images/shop/advertisement.jpg" alt="" />
        </div>
      </section>
      <Slider_Product/>
    </>
  );
};

export default Product;
