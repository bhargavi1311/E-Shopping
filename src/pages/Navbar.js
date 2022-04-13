import React from "react";
import {useDispatch,useSelector} from 'react-redux';
import { Link } from "react-router-dom";	
//import { useSelector} from "react-redux";

const Navbar = () => {

	const items = useSelector((state)=> state.cart);
 
  return (
	  
    <>
      <div className="header_top">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div className="contactinfo">
                <ul className="nav nav-pills">
                  <li>
                    <a href="#">
                      <i className="fa fa-phone"></i> +2 95 01 88 821
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-envelope"></i> info@domain.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="social-icons pull-right">
                <ul className="nav navbar-nav">
                  <li>
                    <a href="#">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-dribbble"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-google-plus"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="header-middle">
			<div className="container">
				<div className="row">
					<div className="col-md-4 clearfix">
						<div className="logo pull-left">
							<a href="index.html"><img src="assets/images/home/logo.png" alt="logo" /></a>
						</div>
						<div className="btn-group pull-right clearfix">
							<div className="btn-group">
								<button type="button" className="btn btn-default dropdown-toggle usa" data-toggle="dropdown">
									USA
									<span className="caret"></span>
								</button>
								<ul className="dropdown-menu">
									<li><a href="">Canada</a></li>
									<li><a href="">UK</a></li>
								</ul>
							</div>
							
							<div className="btn-group">
								<button type="button" className="btn btn-default dropdown-toggle usa" data-toggle="dropdown">
									DOLLAR
									<span className="caret"></span>
								</button>
								<ul className="dropdown-menu">
									<li><a href="">Canadian Dollar</a></li>
									<li><a href="">Pound</a></li>
								</ul>
							</div>
						</div>
					</div>
					<div className="col-md-8 clearfix">
						<div className="shop-menu clearfix pull-right">
							<ul className="nav navbar-nav">
								<li>
								<a href="">
								<i className="fa fa-user"></i> Account</a>
								</li>
								<li>
								<a href="">
								<i className="fa fa-star"></i>
								 Wishlist</a>
								 </li>
								<li>
								<Link to="/Checkout">
								<i className="fa fa-crosshairs">
								</i> Checkout</Link>
								</li>
								<li>
								<Link to="/Cart">
								<i className="fa fa-shopping-cart">
								</i> Cart<span>Cart Items: {items?.length} </span> 
								</Link>
								</li>
								<li>
								
								<Link to="/Login">
								<i className="fa fa-lock"></i> Login</Link></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>

        <div className="header-bottom">
			<div className="container">
				<div className="row">
					<div className="col-sm-9">
						<div className="navbar-header">
							<button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
								<span className="sr-only">Toggle navigation</span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
							</button>
						</div>
						<div className="mainmenu pull-left">
							<ul className="nav navbar-nav collapse navbar-collapse">
								<li>
								<Link to="/">Home</Link>
								{/* <a href="index.html">Home
								</a> */}
								</li>
								<li className="dropdown"><a href="#">Shop<i className="fa fa-angle-down"></i></a>
                                    <ul role="menu" className="sub-menu">
                                        <li>
										<Link to="/Product">Products</Link>										</li>
										<li>
										<Link to="/ProductDetails">Product Details</Link>
										</li> 
										<li>
										<Link to="/Checkout">Checkout</Link>	
										</li> 
										<li>
										<Link to="/Cart">Cart</Link>
										</li> 
										<li>
										<Link to="/Login">Login</Link>
										</li> 
                                    </ul>
                                </li> 
								<li className="dropdown">
								<a href="#">Blog<i className="fa fa-angle-down"></i></a>
                                    <ul role="menu" className="sub-menu">
                                        <li>
										<Link to="/BlogList">Blog List</Link>
										</li>
										<li>
										<Link to="/BlogSingle">Blog Single</Link>
										</li>
                                    </ul>
                                </li> 
								<li>
								<Link to="/404">404</Link>
								</li>
								<li>
								<Link to="/Contact">Contact</Link>
								</li>
							</ul>
						</div>
					</div>
					<div className="col-sm-3">
						<div className="search_box pull-right">
							<input type="text" placeholder="Search"/>
						</div>
					</div>
				</div>
			</div>
		</div>
	
    </>
  );
};

export default Navbar;
