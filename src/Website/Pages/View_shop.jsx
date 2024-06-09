import React, { useContext, useEffect, useState } from 'react'
import Header from '../Componest/Header'
import Footar from '../Componest/Footar'
import axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom';
import './Web.style.css';
import { GlobalStateContext } from './GlobalStateProvider';
import { Helmet } from 'react-helmet';

function View_shop() {
    useEffect(() => {
        fetch();
        fetch1();
    }, [])
    const { search } = useContext(GlobalStateContext);
    const { prod_id } = useParams();
    const [data, setdata] = useState([])
    const fetch = async () => {
        const result = await axios.get(`http://localhost:3000/Products?prod_id=${prod_id}`)
        console.log(result.data);
        setdata(result.data)
    }

    const [data1, setdata1] = useState([])
    const fetch1 = async () => {
        const result = await axios.get(`http://localhost:3000/Categories?id=${prod_id}`)
        console.log(result.data);
        setdata1(result.data)
    }

    return (
        <div>
            <Header />
            <div className="page-hero bg-image overlay-dark" style={{ backgroundImage: 'url(https://cdn.pixabay.com/photo/2018/01/17/07/14/pharmacy-3087599_1280.jpg)' }}>
                <div className="hero-section">
                    <div className="container text-center wow zoomIn">
                        <h1 className="display-6">Buy Medicines</h1>
                        <a href="#" className="btn btn-primary">Shop Now</a>
                    </div>
                </div>
            </div>
            <div className="page-section py-3 mt-md-n5 custom-index">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-4 py-3 py-md-0" >
                            <div className="card-service wow fadeInUp" style={{ background: "#ffede3" }}>
                                <img src="https://doccure.dreamstechnologies.com/html/template/assets/img/products/product-16.png" width="100%" height="100px" style={{ objectFit: "contain" }} alt="" />
                                <p style={{ fontSize: "15px" }}> 10% Cashback on Dietary Suppliments</p>
                            </div>
                        </div>
                        <div className="col-md-4 py-3 py-md-0">
                            <div className="card-service wow fadeInUp" style={{ background: "#d6f8ff" }}>
                                <img src="https://doccure.dreamstechnologies.com/html/template/assets/img/products/product-17.png" width="100%" height="100px" style={{ objectFit: "contain" }} alt="" />
                                <p style={{ fontSize: "15px" }}>New Throat Freshner</p>
                            </div>
                        </div>
                        <div className="col-md-4 py-3 py-md-0">
                            <div className="card-service wow fadeInUp" style={{ background: "#f6eeff" }}>
                                <img src="https://doccure.dreamstechnologies.com/html/template/assets/img/products/product-18.png" width="100%" height="100px" style={{ objectFit: "contain" }} alt="" />
                                <p style={{ fontSize: "15px" }}>Get a Product Worth 1000 in a Pack</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> {/* .page-section */}

            {/* <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Accordion Item #1
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div> */}

            <div className="page-section">
                <div className="container">
                    <div class="row">
                        {/* <div className="col-md-8 col-lg-10 order-md-last">
                            <div className="row">
                                {
                                    data1 && data1.map((value) => {
                                        return (
                                            <div className="row mt-5  wow fadeInUp">
                                                <h1 className='mb-4 mt-4 ' style={{ fontSize: "25px", fontWeight: "550" }}>{value.name} Products</h1>
                                            </div>
                                        )
                                    })
                                }
                                {
                                    data.filter((value) => {
                                        return search === '' ? value : (value.name && value.name.
                                            toLowerCase().includes(search.toLowerCase()));
                                    }).map((value) => {
                                        return (
                                            <div className="col-md-4 product_card mt-4 " >
                                                <div className="card hover" key={value.id}>
                                                    <Link to={'/single_product/' + value.id} className='text-dark' style={{ textDecoration: "none" }}>
                                                        <img className="card-img-top" src={value.image} width='100%' height='200px' style={{ objectFit: "contain" }} alt="Card image cap" />
                                                        <div className="card-block ms-3">
                                                            <h1 className="card-title mt-3 mb-3 product_name  " style={{ fontSize: "18px", fontWeight: "550", }}>{value.name}</h1>
                                                            <div className='d-flex mt-3 gap-5 justify-content-between '>
                                                                <div className='d-flex'>
                                                                    <h1 style={{ fontSize: "20px", fontWeight: "600" }}>₹{value.price}</h1>
                                                                    <p className='ms-1 25px text-primary' style={{ fontWeight: "550", fontSize: "12px" }}>{value.disc} off</p>
                                                                </div>
                                                                <Link to={'/single_product/' + value.id} className="btn btn-outline-primary btn-rounded mb-2 me-2 w-40">Add</Link>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div> */}
                        {/* <div className="col-sm-12 col-md-12 col-lg-4 ftco-animate d-flex">
                                    <div className="product">
                                        <a href="#" className="img-prod"><img className="img-fluid" src="images/product-8.png" alt="Colorlib Template" />
                                            <div className="overlay" />
                                        </a>
                                        <div className="text py-3 pb-4 px-3">
                                            <div className="d-flex">
                                                <div className="cat">
                                                    <span>Lifestyle</span>
                                                </div>
                                                <div className="rating">
                                                    <p className="text-right mb-0">
                                                        <a href="#"><span className="ion-ios-star-outline" /></a>
                                                        <a href="#"><span className="ion-ios-star-outline" /></a>
                                                        <a href="#"><span className="ion-ios-star-outline" /></a>
                                                        <a href="#"><span className="ion-ios-star-outline" /></a>
                                                        <a href="#"><span className="ion-ios-star-outline" /></a>
                                                    </p>
                                                </div>
                                            </div>
                                            <h3><a href="#">Nike Free RN 2019 iD</a></h3>
                                            <div className="pricing">
                                                <p className="price"><span>$120.00</span></p>
                                            </div>
                                            <p className="bottom-area d-flex px-3">
                                                <a href="#" className="add-to-cart text-center py-2 mr-1"><span>Add to cart <i className="ion-ios-add ml-1" /></span></a>
                                                <a href="#" className="buy-now text-center py-2">Buy now<span><i className="ion-ios-cart ml-1" /></span></a>
                                            </p>
                                        </div>
                                    </div>
                                </div> */}

                        {/* <div className="col-md-4 col-lg-2">
                            <div className="sidebar">
                                <div className="sidebar-box-2">
                                    <h2 className="heading">Categories</h2>
                                    <div className="fancy-collapse-panel">
                                        <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                                            <div className="panel panel-default">
                                                <div className="panel-heading" role="tab" id="headingOne">
                                                    <h4 className="panel-title">
                                                        <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Men's Shoes
                                                        </a>
                                                    </h4>
                                                </div>
                                                <div id="collapseOne" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
                                                    <div className="panel-body">
                                                        <ul>
                                                            <li><a href="#">Sport</a></li>
                                                            <li><a href="#">Casual</a></li>
                                                            <li><a href="#">Running</a></li>
                                                            <li><a href="#">Jordan</a></li>
                                                            <li><a href="#">Soccer</a></li>
                                                            <li><a href="#">Football</a></li>
                                                            <li><a href="#">Lifestyle</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="panel panel-default">
                                                <div className="panel-heading" role="tab" id="headingTwo">
                                                    <h4 className="panel-title">
                                                        <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Women's Shoes
                                                        </a>
                                                    </h4>
                                                </div>
                                                <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                                                    <div className="panel-body">
                                                        <ul>
                                                            <li><a href="#">Sport</a></li>
                                                            <li><a href="#">Casual</a></li>
                                                            <li><a href="#">Running</a></li>
                                                            <li><a href="#">Jordan</a></li>
                                                            <li><a href="#">Soccer</a></li>
                                                            <li><a href="#">Football</a></li>
                                                            <li><a href="#">Lifestyle</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="panel panel-default">
                                                <div className="panel-heading" role="tab" id="headingThree">
                                                    <h4 className="panel-title">
                                                        <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Accessories
                                                        </a>
                                                    </h4>
                                                </div>
                                                <div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                                                    <div className="panel-body">
                                                        <ul>
                                                            <li><a href="#">Jeans</a></li>
                                                            <li><a href="#">T-Shirt</a></li>
                                                            <li><a href="#">Jacket</a></li>
                                                            <li><a href="#">Shoes</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="panel panel-default">
                                                <div className="panel-heading" role="tab" id="headingFour">
                                                    <h4 className="panel-title">
                                                        <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="false" aria-controls="collapseThree">Clothing
                                                        </a>
                                                    </h4>
                                                </div>
                                                <div id="collapseFour" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFour">
                                                    <div className="panel-body">
                                                        <ul>
                                                            <li><a href="#">Jeans</a></li>
                                                            <li><a href="#">T-Shirt</a></li>
                                                            <li><a href="#">Jacket</a></li>
                                                            <li><a href="#">Shoes</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="sidebar-box-2">
                                    <h2 className="heading">Price Range</h2>
                                    <form method="post" className="colorlib-form-2">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label htmlFor="guests">Price from:</label>
                                                    <div className="form-field">
                                                        <i className="icon icon-arrow-down3" />
                                                        <select name="people" id="people" className="form-control">
                                                            <option value="#">1</option>
                                                            <option value="#">200</option>
                                                            <option value="#">300</option>
                                                            <option value="#">400</option>
                                                            <option value="#">1000</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label htmlFor="guests">Price to:</label>
                                                    <div className="form-field">
                                                        <i className="icon icon-arrow-down3" />
                                                        <select name="people" id="people" className="form-control">
                                                            <option value="#">2000</option>
                                                            <option value="#">4000</option>
                                                            <option value="#">6000</option>
                                                            <option value="#">8000</option>
                                                            <option value="#">10000</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div> */}
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-lg-8 wow fadeInUp">
                            <h1 className="text-center mb-3">Welcome to Your Products</h1>
                            <div className="text-lg">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt neque sit, explicabo vero nulla animi nemo quae cumque, eaque pariatur eum ut maxime! Tenetur aperiam maxime iure explicabo aut consequuntur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt neque sit, explicabo vero nulla animi nemo quae cumque, eaque pariatur eum ut maxime! Tenetur aperiam maxime iure explicabo aut consequuntur.</p>
                            </div>
                        </div>
                        {
                            data1 && data1.map((value) => {
                                return (
                                    <div className="row mt-5  wow fadeInUp">
                                        <h1 className='mb-4 mt-4 ' style={{ fontSize: "25px", fontWeight: "550" }}>{value.name} Products</h1>
                                    </div>
                                )
                            })
                        }

                        {
                            data.filter((value) => {
                                return search === '' ? value : (value.name && value.name.
                                    toLowerCase().includes(search.toLowerCase()));
                            }).map((value) => {
                                return (
                                    <div className="col-md-4 product_card mt-4 " >
                                        <div className="card hover" key={value.id}>
                                            <Link to={'/single_product/' + value.id} className='text-dark' style={{ textDecoration: "none" }}>
                                                <img className="card-img-top" src={value.image} width='100%' height='200px' style={{ objectFit: "contain" }} alt="Card image cap" />
                                                <div className="card-block ms-3">
                                                    <h1 className="card-title mt-3 mb-3 product_name  " style={{ fontSize: "18px", fontWeight: "550", }}>{value.name}</h1>
                                                    {/* <span className='' style={{ color: "orangered" }}>₹18 cashback</span> */}
                                                    <div className='d-flex mt-3 gap-5 justify-content-between '>
                                                        <div className='d-flex'>
                                                            <h1 style={{ fontSize: "20px", fontWeight: "600" }}>₹{value.price}</h1>
                                                            <p className='ms-1 25px text-primary' style={{ fontWeight: "550", fontSize: "12px" }}>{value.disc} off</p>
                                                        </div>
                                                        <Link to={'/single_product/' + value.id} className="btn btn-outline-primary btn-rounded mb-2 me-2 w-40">Add</Link>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </div>

            <Footar />

        </div>
    )
}

export default View_shop