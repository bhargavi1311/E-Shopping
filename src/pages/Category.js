import React from "react";
import FeatureItem from "./FeatureItem";
import Product_Menu from "./Product_Menu";
import Recommend from "./Recommend";
import Slidebar from "./slidebar";

const Category = () => {
  return (
    <div class="container">
      <div class="row">
      <Slidebar/>
        <div class="col-sm-9 padding-right">
          <div class="features_items">
            <h2 class="title text-center">Features Items</h2>
            <FeatureItem />
          </div>
          <Product_Menu />
          <Recommend />
        </div>
      </div>
    </div>
  );
};

export default Category;
