import React, { useState } from "react";
import Menu from "../Menu";
import ProductMenu from "../ProductMenu";
import { useDispatch } from "react-redux";
import  {add} from '../store/cartSlice';

const FeatureItem1 = () => {
  const dispatch = useDispatch();

  const handleAdd = (item) =>{
    dispatch(add(item));
  }
  
  return (
    ProductMenu.map((item)=>{
      return(
        <>
        <div class="col-sm-4">
                  <div class="product-image-wrapper">
                    <div class="single-products">
                      <div class="productinfo text-center">
                        <img src={item.images} alt="" />
                        <h2>{item.price}</h2>
                        <p>{item.title}</p>
                        <button onClick={()=>{
														handleAdd(item)
													}}
													 class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to Cart
													</button>
                        {/* <a href="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</a> */}
                      </div>
                      <div class="product-overlay">
                        <div class="overlay-content">
                          <h2>{item.price}</h2>
                          <p>{item.title}</p>
                          <button onClick={()=>{
														handleAdd(item)
													}}
													 class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to Cart
													</button>
                          {/* <a href="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</a> */}
                        </div>
                      </div>
                      <img src="images/home/new.png" class="new" alt="" />
                    </div>
                    <div class="choose">
                      <ul class="nav nav-pills nav-justified">
                        <li><a href="#"><i class="fa fa-plus-square"></i>Add to wishlist</a></li>
                        <li><a href="#"><i class="fa fa-plus-square"></i>Add to compare</a></li>
                      </ul>
                    </div>
                  </div>
               </div>
               
        </>
        
      );
    }
  
  )
  )
}
export default FeatureItem1;
