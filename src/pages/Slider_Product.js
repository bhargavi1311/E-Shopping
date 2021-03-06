import React from "react";
import FeatureItem1 from "./FeatureItem1";
import Footer from "./Footer";
import Slidebar from "./slidebar";

export const Slider_Product = () => {
  return (
    <>
      <div class="container">
        <div class="row">
          <Slidebar />
          <div class="col-sm-9 padding-right">
            <div class="features_items">
              <h2 class="title text-center">Features Items</h2>
              <FeatureItem1 />
            </div>
            <ul class="pagination">
              <li class="active">
                <a href="">1</a>
              </li>
              <li>
                <a href="">2</a>
              </li>
              <li>
                <a href="">3</a>
              </li>
              <li>
                <a href="">&raquo;</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
