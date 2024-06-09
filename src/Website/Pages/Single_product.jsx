import React, { useEffect, useState } from 'react'
import './Web.style.css'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Header from '../Componest/Header';
import Footar from '../Componest/Footar';

function Single_product() {
    useEffect(() => {
        fetch();
    }, [])
    const { new_id } = useParams();
    const [data, setdata] = useState([]);
    const [count, setCount] = useState(1);
    const fetch = async () => {
        const result = await axios.get(`http://localhost:3000/Products?id=${new_id}`)
        console.log(result.data);
        setdata(result.data)
    }

    const plus = () => {
        setCount(count + 1);
    }

    const minus = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    }
    return (
        <div>
            <Header />
            {
                data && data.map((value) => {
                    return (
                        <div class="container py-5">
                            <div class="row px-xl-5 ">
                                <div class="col-lg-5 pb-5">
                                    <div id="product-carousel" class="carousel slide" data-ride="carousel">
                                        <div class="carousel-inner border"  >
                                            <div class="carousel-item active" >
                                                <img class="w-100 " src={value.image} alt="Image" style={{ height: "550px", objectFit: "contain" }} />
                                            </div>
                                            <div class="carousel-item ">
                                                <img class="w-100" src={value.image} alt="Image" style={{ height: "550px", objectFit: "contain" }} />
                                            </div>
                                        </div>
                                        <a class="carousel-control-prev" href="#product-carousel" data-slide="prev">
                                            <i class="fa fa-2x fa-angle-left text-dark"></i>
                                        </a>
                                        <a class="carousel-control-next" href="#product-carousel" data-slide="next">
                                            <i class="fa fa-2x fa-angle-right text-dark"></i>
                                        </a>
                                    </div>
                                </div>

                                <div class="col-lg-7 pb-5">
                                    <h3 class="font-weight-semi-bold">{value.name}</h3>
                                    <div class="d-flex mb-3">
                                        <div class="text-dark mr-2">
                                            <small class="fas fa-star"></small>
                                            <small class="fas fa-star"></small>
                                            <small class="fas fa-star"></small>
                                            <small class="fas fa-star-half-alt"></small>
                                            <small class="far fa-star"></small>
                                        </div>
                                        <small class="pt-1">(50 Reviews)</small>
                                    </div>
                                    <h3 class="font-weight-semi-bold mb-4">₹{value.price}</h3>
                                    <p class="mb-4">Volup erat ipsum diam elitr rebum et dolor. Est nonumy elitr erat diam stet sit clita ea. Sanc invidunt ipsum et, labore clita lorem magna lorem ut. Erat lorem duo dolor no sea nonumy. Accus labore stet, est lorem sit diam sea et justo, amet at lorem et eirmod ipsum diam et rebum kasd rebum.</p>

                                    <div class="d-flex align-items-center flex-wrap gap-5 mb-4 pt-2 mt-5">
                                        <div class="btn-group mr-5 " style={{ width: "130px" }}>
                                            <div class="input-group-btn">
                                                <button class="btn btn-primary btn-minus" onClick={() => plus()} >
                                                    <i class="fa fa-plus"></i>
                                                </button>
                                            </div>
                                            <button class="btn btn-outline-light text-dark disabled btn-minus"  >
                                                {count}
                                            </button>

                                            <div class="input-group-btn">
                                                <button class="btn btn-primary btn-plus" onClick={() => minus()} >

                                                    <i class="fa fa-minus"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <Link class="btn btn-outline-primary btn-rounded px-3 ms-4" ><i class="fa fa-shopping-cart mr-1"></i> Add To Cart</Link>
                                    </div>
                                    <div class="d-flex justify-content-between  flex-wrap text-center mt-5 ">
                                        <div>
                                            <img src="https://images.apollo247.in/images/ui_revamp_secure_payment_widget.svg?tr=w-160,q-60,f-webp,dpr-1.25,c-at_max" alt="" />
                                            <p className='mt-2' style={{ color: "#106c89" }}>Secure Payment</p>
                                        </div>
                                        <div>
                                            <img src="https://images.apollo247.in/images/ui_revamp_fullyreliable_widget.svg?tr=w-160,q-60,f-webp,dpr-1.25,c-at_max  " alt="" />
                                            <p className='mt-2 vw' style={{ color: "#106c89" }}>Trusted by 8 Crore Indians</p>
                                        </div>
                                        <div>
                                            <img src="https://images.apollo247.in/images/ui_revamp_fullyreliable_widget.svg?tr=w-160,q-60,f-webp,dpr-1.25,c-at_max" alt="" />
                                            <p className='mt-2' style={{ color: "#106c89" }}>Genuine Products</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    )
                })
            }
            <Footar />
        </div>
    )
}

export default Single_product