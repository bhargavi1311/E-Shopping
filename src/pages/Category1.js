import React from "react";
import Recommend from "./Recommend";
import Details from "./Details";
import Slidebar from "./slidebar";

const Category1 = () => {
  return (
    <div class="container">
      <div class="row">
        <Slidebar/>
        <div class="col-sm-9 padding-right">
          <div class="product-details">
            <div class="col-sm-5">
              <div class="view-product">
                <img src="assets/images/product-details/1.jpg" alt="" />
                <h3>ZOOM</h3>
              </div>
            </div>
            <Details />
            <Recommend />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category1;
