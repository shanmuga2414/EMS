import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import Sidebar from './Sidebar';
export class Akarathi extends Component {
    render() {
        return (
            <div>
            <div className="breadcrumb-area">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <ul className="breadcrumb">
                            <li><a href="/home">Home</a></li>
                            <li className="current"><a>அகராதி</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        
        <main id="content" className="main-content-wrapper">
            <div className="shop-area pt--40 pb--80 pt-sm--30 pb-sm--60">
                <div className="container">
                    <div className="row">
                    <Sidebar/>
                    <div class="col-lg-9 order-lg-2 order-1 mb-md--30">
                    <div class="row">
                        <div className="col-lg-6 mb--30">
                            <article class="post sticky single-post format-image">
                                <header class="entry-header text-center">
                                   
                                    <h1 class="post-title">காமூஸ்-அரபு-தமிழ்-அகராதி (பல புதிய சொற்களுடன்) </h1>
                                    
                                </header>
                                <div class="post-thumbnail">
                                <Link  to='/book12'><img src="assets/img/books/Kamoos.jpg"/></Link>
                                </div>
                                <div class="post-info text-center">
                                    <div class="post-content">
                                        <p>இன்று மதுரஸாக்களில் நூறு வருடங்களுக்கு முன் எழுதப்பட்ட அரபீ கிரந்தங்களே பாடப் புத்தகங்களாய் விளங்குகின்றமையால் கால வேறுபாட்டிற்கேற்ப்ப புதிதாய் உற்பத்தியான அல்லது ...</p>
                                    </div>
                                   <Link  to='/book12' className="btn btn-read-more btn-style-3">View More</Link>
                         
                                </div>
                            </article>
                        </div>
                     
        
        
             
                 
       
            
                    </div>
                  
                </div>
                       
                    </div>
                </div>
            </div>
        </main>
       
        
        <a class="scroll-to-top" href="#"><i class="fa fa-angle-up"></i></a>

       
        <div class="modal fade product-modal" id="productModal" tabindex="-1" role="dialog" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-body">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
                <div class="row">
                    <div class="col-md-5">
                    <div class="tab-content product-thumb-large">
                            <div id="thumb1" class="tab-pane active show fade">
                                <img src="assets/img/books/peace.png" alt="product thumb"/>
                            </div>
                            <div id="thumb2" class="tab-pane fade">
                                <img src="assets/img/books/madhab.jpg" alt="product thumb"/>
                            </div>
                            <div id="thumb3" class="tab-pane fade">
                                <img src="assets/img/books/hajj.png" alt="product thumb"/>
                            </div>
                            <div id="thumb4" class="tab-pane fade">
                                <img src="assets/img/books/peace.png" alt="product thumb"/>
                            </div>
                            <div id="thumb5" class="tab-pane fade">
                                <img src="assets/img/books/peace.png" alt="product thumb"/>
                            </div>
                            <div id="thumb6" class="tab-pane fade">
                                <img src="assets/img/books/peace.png" alt="product thumb"/>
                            </div>
                            <div id="thumb7" class="tab-pane fade">
                                <img src="assets/img/books/peace.png" alt="product thumb"/>
                            </div>
                            <div id="thumb8" class="tab-pane fade">
                                <img src="assets/img/books/peace.png" alt="product thumb"/>
                            </div>
                        </div>
               <div class="product-thumbnail">
                            <div class="thumb-menu owl-carousel" id="thumbmenu" >
                                <div class="thumb-menu-item">
                                    <a href="#thumb1" data-toggle="tab" class="nav-link active">
                                        <img src="assets/img/books/peace.png" alt="product thumb"/>
                                    </a>
                                </div>
                                <div class="thumb-menu-item">
                                    <a href="#thumb2" data-toggle="tab" class="nav-link">
                                        <img src="assets/img/books/peace.png" alt="product thumb"/>
                                    </a>
                                </div>
                                <div class="thumb-menu-item">
                                    <a href="#thumb3" data-toggle="tab" class="nav-link">
                                        <img src="assets/img/books/peace.png" alt="product thumb"/>
                                    </a>
                                </div>
                                <div class="thumb-menu-item">
                                    <a href="#thumb4" data-toggle="tab" class="nav-link">
                                        <img src="assets/img/books/peace.png" alt="product thumb"/>
                                    </a>
                                </div>
                                <div class="thumb-menu-item">
                                    <a href="#thumb5" data-toggle="tab" class="nav-link active">
                                        <img src="assets/img/books/peace.png" alt="product thumb"/>
                                    </a>
                                </div>
                                <div class="thumb-menu-item">
                                    <a href="#thumb6" data-toggle="tab" class="nav-link">
                                        <img src="assets/img/books/peace.png" alt="product thumb"/>
                                    </a>
                                </div>
                                <div class="thumb-menu-item">
                                    <a href="#thumb7" data-toggle="tab" class="nav-link">
                                        <img src="assets/img/books/peace.png" alt="product thumb"/>
                                    </a>
                                </div>
                                <div class="thumb-menu-item">
                                    <a href="#thumb8" data-toggle="tab" class="nav-link">
                                        <img src="assets/img/books/peace.png" alt="product thumb"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-7">
                        <div class="modal-box product">
                            <h3 class="product-title">PEACE AND SUBMISSION</h3>
                            <div class="product-price">
                                <span class="regular-price">$100.50</span>
                                <span class="sale-price">$98.98</span>
                            </div>
                            <a class="product-link" href="single-book.html">See all featurs</a>
                            <p class="product-availability">200 In Stock</p> 
                            <div class="product-action-wrapper">
                                <div class="quantity">
                                    <input type="number" class="quantity-input" name="qty" id="qty" value="1" min="1"/>
                                </div>
                                <button type="button" class="btn btn-style-1 add-to-cart color-1">
                                    Add To Cart
                                </button>
                            </div>  
                            
                            <div class="social-share">
                                <h4>Share This Product</h4>
                                <ul class="social boxed-social">
                                    <li class="social__item"><a href="#" class="social__link facebook"><i class="fa fa-facebook"></i></a></li>
                                    <li class="social__item"><a href="#" class="social__link twitter"><i class="fa fa-twitter"></i></a></li>
                                    <li class="social__item"><a href="#" class="social__link google-plus"><i class="fa fa-google-plus"></i></a></li>
                                    <li class="social__item"><a href="#" class="social__link pinterest"><i class="fa fa-pinterest"></i></a></li>
                                    <li class="social__item"><a href="#" class="social__link linkedin"><i class="fa fa-linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
           
        )
    }
}
export default Akarathi