import React from "react";
import { Slider } from "@mui/material";
import FeatureItem from "./FeatureItem";
import Product_Menu from "./Product_Menu";
import Recommend from "./Recommend";
// import Main_Category from "./Main_Category";

const Category = () => {
  return (
    <div class="container">
      <div class="row">
        <div class="col-sm-3">
          <div class="left-sidebar">
            <h2>Category</h2>
            <div class="panel-group category-products" id="accordian">
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h4 class="panel-title">
                    <a
                      data-toggle="collapse"
                      data-parent="#accordian"
                      href="#sportswear"
                    >
                      <span class="badge pull-right">
                        <i class="fa fa-plus"></i>
                      </span>
                      Sportswear
                    </a>
                  </h4>
                </div>
                <div id="sportswear" class="panel-collapse collapse">
                  <div class="panel-body">
                    <ul>
                      <li>
                        <a href="#">Nike </a>
                      </li>
                      <li>
                        <a href="#">Under Armour </a>
                      </li>
                      <li>
                        <a href="#">Adidas </a>
                      </li>
                      <li>
                        <a href="#">Puma</a>
                      </li>
                      <li>
                        <a href="#">ASICS </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h4 class="panel-title">
                    <a
                      data-toggle="collapse"
                      data-parent="#accordian"
                      href="#mens"
                    >
                      <span class="badge pull-right">
                        <i class="fa fa-plus"></i>
                      </span>
                      Mens
                    </a>
                  </h4>
                </div>
                <div id="mens" class="panel-collapse collapse">
                  <div class="panel-body">
                    <ul>
                      <li>
                        <a href="#">Fendi</a>
                      </li>
                      <li>
                        <a href="#">Guess</a>
                      </li>
                      <li>
                        <a href="#">Valentino</a>
                      </li>
                      <li>
                        <a href="#">Dior</a>
                      </li>
                      <li>
                        <a href="#">Versace</a>
                      </li>
                      <li>
                        <a href="#">Armani</a>
                      </li>
                      <li>
                        <a href="#">Prada</a>
                      </li>
                      <li>
                        <a href="#">Dolce and Gabbana</a>
                      </li>
                      <li>
                        <a href="#">Chanel</a>
                      </li>
                      <li>
                        <a href="#">Gucci</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="panel panel-default">
                <div class="panel-heading">
                  <h4 class="panel-title">
                    <a
                      data-toggle="collapse"
                      data-parent="#accordian"
                      href="#womens"
                    >
                      <span class="badge pull-right">
                        <i class="fa fa-plus"></i>
                      </span>
                      Womens
                    </a>
                  </h4>
                </div>
                <div id="womens" class="panel-collapse collapse">
                  <div class="panel-body">
                    <ul>
                      <li>
                        <a href="#">Fendi</a>
                      </li>
                      <li>
                        <a href="#">Guess</a>
                      </li>
                      <li>
                        <a href="#">Valentino</a>
                      </li>
                      <li>
                        <a href="#">Dior</a>
                      </li>
                      <li>
                        <a href="#">Versace</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h4 class="panel-title">
                    <a href="#">Kids</a>
                  </h4>
                </div>
              </div>
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h4 class="panel-title">
                    <a href="#">Fashion</a>
                  </h4>
                </div>
              </div>
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h4 class="panel-title">
                    <a href="#">Households</a>
                  </h4>
                </div>
              </div>
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h4 class="panel-title">
                    <a href="#">Interiors</a>
                  </h4>
                </div>
              </div>
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h4 class="panel-title">
                    <a href="#">Clothing</a>
                  </h4>
                </div>
              </div>
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h4 class="panel-title">
                    <a href="#">Bags</a>
                  </h4>
                </div>
              </div>
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h4 class="panel-title">
                    <a href="#">Shoes</a>
                  </h4>
                </div>
              </div>
            </div>

            <div class="brands_products">
              <h2>Brands</h2>
              <div class="brands-name">
                <ul class="nav nav-pills nav-stacked">
                  <li>
                    <a href="#">
                      {" "}
                      <span class="pull-right">(50)</span>Acne
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {" "}
                      <span class="pull-right">(56)</span>Grüne Erde
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {" "}
                      <span class="pull-right">(27)</span>Albiro
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {" "}
                      <span class="pull-right">(32)</span>Ronhill
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {" "}
                      <span class="pull-right">(5)</span>Oddmolly
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {" "}
                      <span class="pull-right">(9)</span>Boudestijn
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {" "}
                      <span class="pull-right">(4)</span>Rösch creative culture
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="price-range">
              <h2>Price Range</h2>
              <div class="well text-center">
                <Slider
                  getAriaLabel={() => "Temperature range"}
                  value="100"
                  valueLabelDisplay="auto"
                />
                <br />
                <b class="pull-left">$ 0</b> <b class="pull-right">$ 600</b>
              </div>
            </div>

            <div class="shipping text-center">
              <img src="assets/images/home/shipping.jpg" alt="" />
            </div>
          </div>
        </div>

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
