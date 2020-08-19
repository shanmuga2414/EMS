import React, { Component } from 'react'

export class Checkout extends Component {
    render() {
        return (
            <div>
            <div className="breadcrumb-area">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <ul className="breadcrumb">
                            <li><a href="index.html">Home</a></li>
                            <li className="current"><a>Checkout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
               
       
        <main id="content" className="main-content-wrapper">
           
        <div class="main-content-wrapper">
        <div class="checkout-area pt--40 pb--80 pt-sm--30 pb-sm--60">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                       
                        <div class="user-actions">
                            <div class="row">
                                <div class="col-12">
                                    <div class="user-actions__single user-actions__login">
                                        <h3><i class="fa fa-cube"></i> Returning Customer? <span class="expand_action" data-attr="#checkout_login">Click here to login.</span></h3>
                                        <div id="checkout_login" class="bg--white user-actions__form hide-in-default">
                                            <div class="checkout-login__info">
                                                <p class="checkout-login__text">
                                                    If you have shopped with us before, please enter your details in the boxes below. If you are a new customer, please proceed to the Billing & Shipping section.
                                                </p>
                                                <form class="form quick-login-form">
                                                    <div class="form__group">
                                                        <label class="form__label" for="login_email">Username Or Email <sup>*</sup></label>
                                                        <input type="email" name="login_email" id="login_email" class="form__input"/>
                                                    </div>
                                                    <div class="form__group">
                                                        <label class="form__label" for="login_password">Password <sup>*</sup></label>
                                                        <input type="password" name="login_password" id="login_password" class="form__input"/>
                                                    </div>
                                                    <div class="form__group d-flex align-items-center">
                                                        <button type="submit" class="btn btn-5 btn-style-1 color-1">Login</button>
                                                        <div class="form__checkbox--group ml--20">
                                                            <input type="checkbox" name="sessionStore" id="sessionStore" class="form__checkbox"/>
                                                            <label for="sessionStore" class="form__checkbox--label">Remember me</label>
                                                        </div>
                                                    </div>
                                                    <a href="#" class="forgot-pass">Forgot your password?</a>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="user-actions__single user-actions__coupon">
                                        <h3><i class="fa fa-cube"></i> Have A Coupon? <span class="expand_action" data-attr="#coupon_info">Click Here To Enter Your Code.</span></h3>
                                        <div id="coupon_info" class="user-actions__form user-actions--coupon bg--white hide-in-default">
                                            <form action="#" class="form form--cart">
                                                <div class="form__group d-flex">
                                                    <input type="text" name="coupon" id="coupon" class="form__input mr--40" placeholder="Coupon Code"/>
                                                    <button type="submit" class="btn btn-5 btn-style-1 color-1">Apply Coupon</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div> 
                <div class="row">
                    <div class="col-12">
                      
                        <div class="checkout-wrapper bg--white">
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="checkout-title">
                                        <h2>Billing Details</h2>
                                    </div>
                                    <div class="checkout-form">
                                        <form action="#" class="form">
                                            <div class="form-row mb--30">
                                                <div class="form__group col-md-6 mb-sm--30">
                                                    <label for="billing_fname" class="form__label">First Name <span>*</span></label>
                                                    <input type="text" name="billing_fname" id="billing_fname" class="form__input"/>
                                                </div>
                                                <div class="form__group col-md-6">
                                                    <label for="billing_lname" class="form__label">Last Name <span>*</span></label>
                                                    <input type="text" name="billing_lname" id="billing_lname" class="form__input"/>
                                                </div>
                                            </div>
                                            <div class="form-row mb--30">
                                                <div class="form__group col-12">
                                                    <label for="billing_company" class="form__label">Company</label>
                                                    <input type="text" name="billing_company" id="billing_company" class="form__input"/>
                                                </div>
                                            </div>
                                            <div class="form-row mb--30">
                                                <div class="form__group col-12">
                                                    <label for="billing_country" class="form__label">Country</label>
                                                    <select id="billing_country" name="billing_country" class="form__input nice-select">
                                                        <option value="">Select a country…</option>
                                                        <option value="AF">Afghanistan</option>
                                                        <option value="AL">Albania</option>
                                                        <option value="DZ">Algeria</option>
                                                        <option value="AR">Argentina</option>
                                                        <option value="AM">Armenia</option>
                                                        <option value="AU">Australia</option>
                                                        <option value="AT">Austria</option>
                                                        <option value="AZ">Azerbaijan</option>
                                                        <option value="BH">Bahrain</option>
                                                        <option value="BD" selected="selected">Bangladesh</option>
                                                        <option value="BD">Brazil</option>
                                                        <option value="CN">China</option>
                                                        <option value="EG">Egypt</option>
                                                        <option value="FR">France</option>
                                                        <option value="DE">Germany</option>
                                                        <option value="HK">Hong Kong</option>
                                                        <option value="HU">Hungary</option>
                                                        <option value="IS">Iceland</option>
                                                        <option value="IN">India</option>
                                                        <option value="ID">Indonesia</option>
                                                        <option value="IR">Iran</option>
                                                        <option value="IQ">Iraq</option>
                                                        <option value="IE">Ireland</option>
                                                        <option value="IT">Italy</option>
                                                        <option value="JP">Japan</option>
                                                        <option value="KW">Kuwait</option>
                                                        <option value="MY">Malaysia</option>
                                                        <option value="MV">Maldives</option>
                                                        <option value="MX">Mexico</option>
                                                        <option value="MC">Monaco</option>
                                                        <option value="NP">Nepal</option>
                                                        <option value="RU">Russia</option>
                                                        <option value="KR">South Korea</option>
                                                        <option value="SS">South Sudan</option>
                                                        <option value="ES">Spain</option>
                                                        <option value="LK">Sri Lanka</option>
                                                        <option value="SD">Sudan</option>
                                                        <option value="SZ">Swaziland</option>
                                                        <option value="SE">Sweden</option>
                                                        <option value="CH">Switzerland</option>
                                                        <option value="TN">Tunisia</option>
                                                        <option value="TR">Turkey</option>
                                                        <option value="UA">Ukraine</option>
                                                        <option value="AE">United Arab Emirates</option>
                                                        <option value="GB">United Kingdom (UK)</option>
                                                        <option value="US">United States (US)</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="form-row mb--30">
                                                <div class="form__group col-12">
                                                    <label for="billing_streetAddress" class="form__label">Street Address</label>
                                                    <input type="text" name="billing_streetAddress" id="billing_streetAddress" class="form__input"/>
                                                </div>
                                            </div>
                                            <div class="form-row mb--30">
                                                <div class="form__group col-12">
                                                    <label for="billing_apartment" class="form__label">Apartment, suite, unit etc. (optional)</label>
                                                    <input type="text" name="billing_apartment" id="billing_apartment" class="form__input"/>
                                                </div>
                                            </div>
                                            <div class="form-row mb--30">
                                                <div class="form__group col-12">
                                                    <label for="billing_city" class="form__label">Town/City <span>*</span></label>
                                                    <input type="text" name="billing_city" id="billing_city" class="form__input"/>
                                                </div>
                                            </div>
                                            <div class="form-row mb--30">
                                                <div class="form__group col-12">
                                                    <label for="billing_district" class="form__label">Distrin <span>*</span></label>
                                                    <select name="billing_district" id="billing_district" class="form__input nice-select">
                                                        <option value="">Select a District…</option>
                                                        <option>BARISAL</option>
                                                        <option>BHOLA</option>
                                                        <option>BANDARBAN</option>
                                                        <option>BRAHMANBARIA</option>
                                                        <option>CHANDPUR</option>
                                                        <option>CHITTAGONG</option>
                                                        <option>COMILLA</option>
                                                        <option>COX'S BAZAR</option>
                                                        <option>DHAKA</option>
                                                        <option>FARIDPUR</option>
                                                        <option>FENI</option>
                                                        <option>GAZIPUR</option>
                                                        <option>GOPALGANJ</option>
                                                        <option>JAMALPUR</option>
                                                        <option>KHAGRACHHARI</option>
                                                        <option>KISHOREGONJ</option>
                                                        <option>LAKSHMIPU</option>
                                                        <option>RMADARIPUR</option>
                                                        <option>MUNSHIGANJ</option>
                                                        <option>MYMENSINGH</option>
                                                        <option>NARAYANGANJ</option>
                                                        <option>NARSINGDI</option>
                                                        <option>NETRAKONA</option>
                                                        <option>NOAKHALI</option>
                                                        <option>RANGAMATI </option>
                                                        <option>RAJBARI</option>
                                                        <option>SHARIATPUR</option>
                                                        <option>SHERPUR</option>
                                                        <option>TANGAIL</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="form-row mb--30">
                                                <div class="form__group col-12">
                                                    <label for="billing_zip" class="form__label">Post/Zip Code <span>*</span></label>
                                                    <input type="text" name="billing_zip" id="billing_zip" class="form__input"/>
                                                </div>
                                            </div>
                                            <div class="form-row mb--30">
                                                <div class="form__group col-md-6 mb-sm--30">
                                                    <label for="billing_phone" class="form__label">Phone</label>
                                                    <input type="text" name="billing_phone" id="billing_phone" class="form__input"/>
                                                </div>
                                                <div class="form__group col-md-6">
                                                    <label for="billing_email" class="form__label">Email Address <span>*</span></label>
                                                    <input type="email" name="billing_email" id="billing_email" class="form__input"/>
                                                </div>
                                            </div>
                                            <div class="form-row mb--30">
                                                <div class="form__group col-12">
                                                    <div class="form-checkbox">
                                                        <input type="checkbox" name="createaccount" id="createaccount" class="form__checkbox"/>
                                                        <label for="createaccount" class="form__checkbox--label">Create An Account?</label>
                                                    </div>
                                                    <div class="new-account hide-in-default">
                                                        <p>Create an account by entering the information below. If you are a returning customer please login at the top of the page.</p>
                                                        <label for="newPass" class="form__label">Password <span>*</span></label>
                                                        <input type="text" name="newPass" id="newPass" class="form__input"/>
                                                    </div>
                                                </div>
                                            </div> 
                                            <div class="form-row mb--30">
                                                <div class="form__group col-12">
                                                    <div class="form__checkbox--group">
                                                        <input type="checkbox" name="shipdifferetads" id="shipdifferetads" class="form__checkbox"/>
                                                        <label for="shipdifferetads" class="form__checkbox--label shipping-label">Ship To A Different Address?</label>
                                                    </div>
                                                    <div class="ship-box-info hide-in-default mt--30">
                                                        <div class="form-row mb--30">
                                                            <div class="form__group col-md-6 mb-sm--30">
                                                                <label for="shipping_fname" class="form__label">First Name <span>*</span></label>
                                                                <input type="text" name="shipping_fname" id="shipping_fname" class="form__input"/>
                                                            </div>
                                                            <div class="form__group col-md-6">
                                                                <label for="shipping_lname" class="form__label">Last Name <span>*</span></label>
                                                                <input type="text" name="shipping_lname" id="shipping_lname" class="form__input"/>
                                                            </div>
                                                        </div>
                                                        <div class="form-row mb--30">
                                                            <div class="form__group col-12">
                                                                <label for="shipping_company" class="form__label">Company</label>
                                                                <input type="text" name="shipping_company" id="shipping_company" class="form__input"/>
                                                            </div>
                                                        </div>
                                                        <div class="form-row mb--30">
                                                            <div class="form__group col-12">
                                                                <label for="shipping_country" class="form__label">Country</label>
                                                                <select id="shipping_country" name="shipping_country" class="form__input nice-select">
                                                                    <option value="">Select a country…</option>
                                                                    <option value="AF">Afghanistan</option>
                                                                    <option value="AL">Albania</option>
                                                                    <option value="DZ">Algeria</option>
                                                                    <option value="AR">Argentina</option>
                                                                    <option value="AM">Armenia</option>
                                                                    <option value="AU">Australia</option>
                                                                    <option value="AT">Austria</option>
                                                                    <option value="AZ">Azerbaijan</option>
                                                                    <option value="BH">Bahrain</option>
                                                                    <option value="BD" selected="selected">Bangladesh</option>
                                                                    <option value="BD">Brazil</option>
                                                                    <option value="CN">China</option>
                                                                    <option value="EG">Egypt</option>
                                                                    <option value="FR">France</option>
                                                                    <option value="DE">Germany</option>
                                                                    <option value="HK">Hong Kong</option>
                                                                    <option value="HU">Hungary</option>
                                                                    <option value="IS">Iceland</option>
                                                                    <option value="IN">India</option>
                                                                    <option value="ID">Indonesia</option>
                                                                    <option value="IR">Iran</option>
                                                                    <option value="IQ">Iraq</option>
                                                                    <option value="IE">Ireland</option>
                                                                    <option value="IT">Italy</option>
                                                                    <option value="JP">Japan</option>
                                                                    <option value="KW">Kuwait</option>
                                                                    <option value="MY">Malaysia</option>
                                                                    <option value="MV">Maldives</option>
                                                                    <option value="MX">Mexico</option>
                                                                    <option value="MC">Monaco</option>
                                                                    <option value="NP">Nepal</option>
                                                                    <option value="RU">Russia</option>
                                                                    <option value="KR">South Korea</option>
                                                                    <option value="SS">South Sudan</option>
                                                                    <option value="ES">Spain</option>
                                                                    <option value="LK">Sri Lanka</option>
                                                                    <option value="SD">Sudan</option>
                                                                    <option value="SZ">Swaziland</option>
                                                                    <option value="SE">Sweden</option>
                                                                    <option value="CH">Switzerland</option>
                                                                    <option value="TN">Tunisia</option>
                                                                    <option value="TR">Turkey</option>
                                                                    <option value="UA">Ukraine</option>
                                                                    <option value="AE">United Arab Emirates</option>
                                                                    <option value="GB">United Kingdom (UK)</option>
                                                                    <option value="US">United States (US)</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div class="form-row mb--30">
                                                            <div class="form__group col-12">
                                                                <label for="shipping_streetAddress" class="form__label">Street Address</label>
                                                                <input type="text" name="shipping_streetAddress" id="shipping_streetAddress" class="form__input"/>
                                                            </div>
                                                        </div>
                                                        <div class="form-row mb--30">
                                                            <div class="form__group col-12">
                                                                <label for="shipping_apartment" class="form__label">Apartment, suite, unit etc. (optional)</label>
                                                                <input type="text" name="shipping_apartment" id="shipping_apartment" class="form__input"/>
                                                            </div>
                                                        </div>
                                                        <div class="form-row mb--30">
                                                            <div class="form__group col-12">
                                                                <label for="shipping_city" class="form__label">Town/City <span>*</span></label>
                                                                <input type="text" name="shipping_city" id="shipping_city" class="form__input"/>
                                                            </div>
                                                        </div>
                                                        <div class="form-row mb--30">
                                                            <div class="form__group col-12">
                                                                <label for="shipping_district" class="form__label">Distring <span>*</span></label>
                                                                <select id="shipping_district" name="shipping_district" class="form__input nice-select">
                                                                    <option value="">Select a District…</option>
                                                                    <option>BARISAL</option>
                                                                    <option>BHOLA</option>
                                                                    <option>BANDARBAN</option>
                                                                    <option>BRAHMANBARIA</option>
                                                                    <option>CHANDPUR</option>
                                                                    <option>CHITTAGONG</option>
                                                                    <option>COMILLA</option>
                                                                    <option>COX'S BAZAR</option>
                                                                    <option>DHAKA</option>
                                                                    <option>FARIDPUR</option>
                                                                    <option>FENI</option>
                                                                    <option>GAZIPUR</option>
                                                                    <option>GOPALGANJ</option>
                                                                    <option>JAMALPUR</option>
                                                                    <option>KHAGRACHHARI</option>
                                                                    <option>KISHOREGONJ</option>
                                                                    <option>LAKSHMIPU</option>
                                                                    <option>RMADARIPUR</option>
                                                                    <option>MUNSHIGANJ</option>
                                                                    <option>MYMENSINGH</option>
                                                                    <option>NARAYANGANJ</option>
                                                                    <option>NARSINGDI</option>
                                                                    <option>NETRAKONA</option>
                                                                    <option>NOAKHALI</option>
                                                                    <option>RANGAMATI </option>
                                                                    <option>RAJBARI</option>
                                                                    <option>SHARIATPUR</option>
                                                                    <option>SHERPUR</option>
                                                                    <option>TANGAIL</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div class="form-row mb--30">
                                                            <div class="form__group col-12">
                                                                <label for="shipping_zip" class="form__label">Post/Zip Code <span>*</span></label>
                                                                <input type="text" name="shipping_zip" id="shipping_zip" class="form__input"/>
                                                            </div>
                                                        </div>
                                                        <div class="form-row mb--30">
                                                            <div class="form__group col-md-6 mb-sm--30">
                                                                <label for="shipping_phone" class="form__label">Phone</label>
                                                                <input type="text" name="shipping_phone" id="shipping_phone" class="form__input"/>
                                                            </div>
                                                            <div class="form__group col-md-6">
                                                                <label for="shipping_email" class="form__label">Email Address <span>*</span></label>
                                                                <input type="email" name="shipping_email" id="shipping_email" class="form__input"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> 
                                            <div class="form-row">
                                                <div class="form__group col-12">
                                                    <label for="orderNotes" class="form__label">Order Notes</label>
                                                    <textarea class="form__input form__input--textarea" id="orderNotes" name="orderNotes" placeholder="Notes about your order, e.g. special notes for delivery."></textarea>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div class="col-lg-6 mt-md--30">
                                    <div class="order-details">
                                        <h3 class="heading-tertiary">Your Order</h3>
                                        <div class="order-table table-content table-responsive mb--30">
                                            <table class="table">
                                                <thead>
                                                    <tr>
                                                        <th>Product</th>
                                                        <th>Total</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Aliquam lobortis est <strong>x1</strong></td>
                                                        <td>$80.00</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Auctor gravida enim <strong>x1</strong></td>
                                                        <td>$60.00</td>
                                                    </tr>
                                                </tbody>
                                                <tfoot>
                                                    <tr class="cart-subtotal">
                                                        <th>Cart Subtotal</th>
                                                        <td>$56.00</td>
                                                    </tr>
                                                    <tr class="shipping">
                                                        <th>Shipping</th>
                                                        <td>Flat Rate: $5.00</td>
                                                    </tr>
                                                    <tr class="order-total">
                                                        <th>Order Total</th>
                                                        <td><span class="order-total-ammount">$56.00</span></td>
                                                    </tr>
                                                </tfoot>
                                            </table>
                                        </div>
                                        <div class="checkout-payment">
                                            <form action="#" class="payment-form">
                                                <div class="payment-group">
                                                    <div class="payment-radio">
                                                        <input type="radio" value="cash" name="payment-method" id="cheque" checked/>
                                                        <label class="payment-label" for="cheque">Cheque Payment</label>
                                                    </div>
                                                    <div class="payment-info" data-method="cash">
                                                        <p>Please send your cheque to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</p>
                                                    </div>
                                                </div>
                                                <div class="payment-group">
                                                    <div class="payment-radio">
                                                        <input type="radio" value="paypal" name="payment-method" id="paypal"/>
                                                        <label class="payment-label" for="paypal">
                                                            Paypal 
                                                            <img src="assets/img/others/AM_mc_vs_ms_ae_UK.png" alt="payment"/>
                                                            <a href="https://www.paypal.com/gb/webapps/mpp/paypal-popup">What is PayPal?</a>
                                                        </label>
                                                    </div>
                                                    <div class="payment-info paypal hide-in-default" data-method="paypal">
                                                        <p>Pay via PayPal; you can pay with your credit card if you don’t have a PayPal account.</p>
                                                    </div>
                                                </div>
                                                <div class="payment-group">
                                                    <button type="submit" class="btn btn-6 btn-style-2">Place Order</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>     
        </div>
    </div>

        
      
            </main>
                </div>

        )
    }
}

export default Checkout
