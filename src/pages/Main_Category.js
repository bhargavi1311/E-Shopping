import React from "react";
import BlogSinge_Image from "./BlogSingle_Image";
import Slidebar from "./slidebar";

const Main_Category = () => {
  return (
    <div class="container">
      <div class="row">
        <Slidebar />
        <div class="col-sm-9 padding-right">
          <BlogSinge_Image />
        </div>
      </div>
    </div>
  );
};

export default Main_Category;
