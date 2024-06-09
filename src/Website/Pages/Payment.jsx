import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function Payment() {
    const redirect = useNavigate();
    const [count, setCount] = useState(1);
    const plus = () => {
        setCount(count + 1);

        var price = document.getElementById("price");
        var priceText = price.innerText;
        var priceValue = parseFloat(priceText.replace("$", ""));
        var total = priceValue * 2;
        price.innerHTML = '$' + total;

    }

    const minus = () => {
        if (count > 0) {
            setCount(count - 1);
            // var price = document.getElementById("price");
            // var priceText = price.innerText;
            // var priceValue = parseFloat(priceText.replace("$", ""));
            // var total = priceValue / 2;
            // price.innerHTML = '$' + total;

        }
    }

    return (
        <div className="site-section">
            <div className="container">
                <div className="row mb-5">
                    <form className="col-md-12" method="post">
                        <div className="site-blocks-table">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th className="product-thumbnail">Image</th>
                                        <th className="product-name">Product</th>
                                        <th className="product-price">Price</th>
                                        <th className="product-quantity">Quantity</th>
                                        <th className="product-total">Total</th>
                                        <th className="product-remove">Remove</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="product-thumbnail">
                                            <img src="images/product_02.png" alt="Image" className="img-fluid" />
                                        </td>
                                        <td className="product-name">
                                            <h2 className="h5 text-black">Ibuprofen</h2>
                                        </td>
                                        <td>$55.00</td>
                                        <td>
                                            <div className="input-group mb-3 mx-auto" style={{ maxWidth: 180 }}>
                                                <div className="input-group-prepend">
                                                    <button className="btn btn-outline-primary js-btn-minus" type="button" onClick={() => minus()}>−</button>
                                                </div>
                                                <div class="border "style={{width : "60px"}} >
                                               <p className=' text-center mt-3'> {count} </p> 
                                                </div>   
                                                <div className="input-group-append">
                                                    <button className="btn btn-outline-primary js-btn-plus" type="button" onClick={() => plus()}>+</button>
                                                </div>
                                            </div>
                                        </td>
                                        <td id='price'>$55.00</td>
                                        <td><a href="#" className="btn btn-primary height-auto btn-sm">X</a></td>
                                    </tr>
                                    <tr>
                                        <td className="product-thumbnail">
                                            <img src="images/product_01.png" alt="Image" className="img-fluid" />
                                        </td>
                                        <td className="product-name">
                                            <h2 className="h5 text-black">Bioderma</h2>
                                        </td>
                                        <td>$49.00</td>
                                        <td>
                                            <div className="input-group mb-3 mx-auto " style={{ maxWidth: 180 }}>
                                                <div className="input-group-prepend">
                                                    <button className="btn btn-outline-primary js-btn-minus" type="button" onClick={() => minus()}>−</button>
                                                </div>
                                                <div class="border "style={{width : "60px"}} >
                                               <p className=' text-center mt-3'> {count} </p> 
                                                </div>                                                
                                                <div className="input-group-append">
                                                    <button className="btn btn-outline-primary js-btn-plus" type="button" onClick={() => plus()}>+</button>
                                                </div>
                                            </div>
                                        </td>
                                        <td id='price'>$49.00</td>
                                        <td><a href="#" className="btn btn-primary height-auto btn-sm">X</a></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </form>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="row mb-5">
                            <div className="col-md-6 mb-3 mb-md-0">
                                <button className="btn btn-primary btn-md btn-block">Update Cart</button>
                            </div>
                            <div className="col-md-6">
                                <button className="btn btn-outline-primary btn-md btn-block">Continue Shopping</button>
                            </div>
                        </div>
                        {/* <div className="row">
                            <div className="col-md-12">
                                <label className="text-black h4" htmlFor="coupon">Coupon</label>
                                <p>Enter your coupon code if you have one.</p>
                            </div>
                            <div className="col-md-8 mb-3 mb-md-0">
                                <input type="text" className="form-control py-3" id="coupon" placeholder="Coupon Code" />
                            </div>
                            <div className="col-md-4">
                                <button className="btn btn-primary btn-md px-4">Apply Coupon</button>
                            </div>
                        </div> */}
                    </div>
                    <div className="col-md-6 pl-5">
                        <div className="row justify-content-end">
                            <div className="col-md-7">
                                <div className="row">
                                    <div className="col-md-12 text-right border-bottom mb-5">
                                        <h3 className="text-black h4 text-uppercase">Cart Totals</h3>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-md-6">
                                        <span className="text-black">Subtotal</span>
                                    </div>
                                    <div className="col-md-6 text-right">
                                        <strong className="text-black">$230.00</strong>
                                    </div>
                                </div>
                                <div className="row mb-5">
                                    <div className="col-md-6">
                                        <span className="text-black">Total</span>
                                    </div>
                                    <div className="col-md-6 text-right">
                                        <strong className="text-black">$230.00</strong>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <button className="btn btn-primary btn-lg btn-block" onClick={()=>redirect('/checkout')} >Proceed To Checkout</button>
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

export default Payment