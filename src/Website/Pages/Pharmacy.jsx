import React, { useContext, useEffect, useState } from 'react'
import Header from '../Componest/Header'
import Footar from '../Componest/Footar'
import axios from 'axios'
import { Link, NavLink, useNavigate, useParams, } from 'react-router-dom';
import './Web.style.css'
import { Helmet } from 'react-helmet';
import { GlobalStateContext } from './GlobalStateProvider';


function Pharmacy() {
    const redirect = useNavigate();
    useEffect(() => {
        fetch();
        fetch1();
        fetch2();
        fetch3();
    }, [])
    const { search } = useContext(GlobalStateContext);
    const [data, setdata] = useState([])
    const fetch = async () => {
        const result = await axios.get(`http://localhost:3000/Categories`)
        console.log(result.data);
        setdata(result.data)
    }

    const [data1, setdata1] = useState([])
    const fetch1 = async () => {
        const result = await axios.get(`http://localhost:3000/Products?productvalue=True`)
        console.log("PRODUCT VALUE", result.data);
        setdata1(result.data)
    }
    const [data2, setdata2] = useState([])
    const fetch2 = async () => {
        const result = await axios.get(`http://localhost:3000/Products/?productvalue=True`)
        console.log("PRODUCT VALUE", result.data);
        setdata2(result.data)
    }
    const [data3, setdata3] = useState([])
    const fetch3 = async () => {
        const result = await axios.get(`http://localhost:3000/Products?disc=50%`)
        console.log("PRODUCT VALUE", result.data);
        setdata3(result.data)
    }
    return (
        <div>

            <Header />
            <div className="page-hero bg-image overlay-dark" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1585435557343-3b092031a831?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}>
                <div className="hero-section">
                    <div className="container text-center wow zoomIn">
                        <span className="subhead">
                            From the Leading Online </span>
                        <h1 class="mb-3 text-bold">New Medicine <strong class="text-primary">Everyday</strong></h1>
                        <a href="#" className="btn btn-primary">Shop Now</a>
                    </div>
                </div>
            </div>
            <div className="page-section py-3 mt-md-n5 custom-index">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-4 py-3 py-md-0"  >
                            <div className=" card-service wow fadeInUp" style={{ background: "#ffede3" }}>
                                <div>
                                    <img src="https://media.istockphoto.com/id/1215484804/vector/delivery-men-or-courier-in-protective-medical-face-mask-with-a-box-in-his-hands-and.jpg?s=612x612&w=0&k=20&c=sxU_M_-tfGjW1StBr6t1fzVeqdrgOgX4FZR0tlDKegw=" width="100px" height="100px" style={{ objectFit: "contain" }} alt="" />
                                </div>
                                <p className='mt-3 text-dark ' style={{ fontSize: "16px", lineHeight: "20px" }}> Free Delivery</p>
                            </div>
                        </div>
                        <div className="col-md-4 py-3 py-md-0">
                            <div className="card-service wow fadeInUp" style={{ background: "#d6f8ff", }}>
                                <img src="https://img.freepik.com/free-vector/isometric-gastroenterology-composition-with-view-medication-with-tubes-pills-illustration_1284-63536.jpg?size=338&ext=jpg&ga=GA1.1.1224184972.1714867200&semt=sph" width="100px" height="100px" style={{ objectFit: "contain" }} alt="" />
                                <p className='text-primary' style={{ fontSize: "16px", lineHeight: "20px" }}>New Medicine Everyday</p>
                            </div>
                        </div>
                        <div className="col-md-4 py-3 py-md-0">
                            <div className="card-service wow fadeInUp" style={{ background: "#f6eeff", }}>
                                <img src="https://thumbs.dreamstime.com/b/medication-safety-medical-care-healthcare-insurance-protect-guarantee-safety-patients-modern-medicine-technology-pills-98516698.jpg" width="100px" height="100px" style={{ objectFit: "contain" }} alt="" />
                                <p className='text-primary' style={{ fontSize: "16px", lineHeight: "20px" }}>Medicines Guaranteed</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> {/* .page-section */}

            <div className="d-flex flex-wrap justify-content-center gap-5 mt-5">
                <div>
                    <img src="https://images.apollo247.in/pub/media/magestore/bannerslider/images/8/2/824x400summer_skin_new.jpg?tr=w-400,q-100,f-webp,c-at_max" className='img-fluid' alt="" />
                </div>
                <div>
                    <img src="https://images.apollo247.in/pub/media/magestore/bannerslider/images/8/2/824x400nivea16apr24.jpg?tr=w-400,q-100,f-webp,c-at_max" className='img-fluid' alt="" />
                </div>
                <div>
                    <img src="https://images.apollo247.in/pub/media/magestore/bannerslider/images/8/2/824x400new_vmhs.jpg?tr=w-400,q-100,f-webp,c-at_max" className='img-fluid' alt="" />
                </div>
            </div>
            <div className="page-section">
                <div className="container">
                    <div className="row justify-content-around">
                        <div className="row mt-0  wow fadeInUp">
                            <h1 className='mb-4 mt-4  ' style={{ fontSize: "25px", fontWeight: "550" }}>Shop Popular Categories</h1>
                            {
                                data.filter((value) => {
                                    return search === '' ? value : (value.name && value.name.
                                        toLowerCase().includes(search.toLowerCase()));
                                }).map((value) => {
                                    return (
                                        <div className="col-md-2 mt-2">
                                            <div className="card">
                                                <Link to={'/view_shop/' + value.id} className="card-title text-center" style={{ textDecoration: "none" }}>
                                                    <img className="card-img-top" src={value.image} width='100%' height='100px' style={{ objectFit: "contain" }} alt="Card image cap" />
                                                    <div className="card-block">
                                                        <h1 className="card-title text-center" style={{ fontSize: "18px", fontWeight: "550" }}>{value.name}</h1>
                                                        <p className='text-center' style={{ color: "grey", fontSize: "15px" }}> {value.products} Products</p>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            {/* <div className="col-md-2  mt-2">
                                <div className="card">
                                    <img className="card-img-top" src="https://doccure.dreamstechnologies.com/html/template/assets/img/category/categorie-02.png" width='100%' height='100px' style={{ objectFit: "contain" }} alt="Card image cap" />
                                    <div className="card-block">
                                        <h5 className="card-title text-center" style={{ fontSize: "18px", fontWeight: "550" }}>Covid Essentials</h5>
                                        <p className='text-center' style={{ color: "grey", fontSize: "15px" }}> 924 Products</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-2 mt-2">
                                <div className="card">
                                    <img className="card-img-top" src="https://doccure.dreamstechnologies.com/html/template/assets/img/category/categorie-04.png" width='100%' height='100px' style={{ objectFit: "contain" }} alt="Card image cap" />
                                    <div className="card-block">
                                        <h4 className="card-title text-center" style={{ fontSize: "18px", fontWeight: "550" }}>Glucometers</h4>
                                        <p className='text-center' style={{ color: "grey", fontSize: "15px" }}> 580 Products</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2 mt-2">
                                <div className="card">
                                    <img className="card-img-top" src="https://doccure.dreamstechnologies.com/html/template/assets/img/category/categorie-05.png" width='100%' height='100px' style={{ objectFit: "contain" }} alt="Card image cap" />
                                    <div className="card-block">
                                        <h4 className="card-title text-center" style={{ fontSize: "18px", fontWeight: "550" }}>Eye Glasses</h4>
                                        <p className='text-center' style={{ color: "grey", fontSize: "15px" }}> 620 Products</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2 mt-2">
                                <div className="card">
                                    <img className="card-img-top" src="https://doccure.dreamstechnologies.com/html/template/assets/img/category/categorie-06.png" width='100%' height='100px' style={{ objectFit: "contain" }} alt="Card image cap" />
                                    <div className="card-block">
                                        <h4 className="card-title text-center" style={{ fontSize: "18px", fontWeight: "550" }}>Weight</h4>
                                        <p className='text-center' style={{ color: "grey", fontSize: "15px" }}> 720 Products</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-2 mt-3">
                                <div className="card">
                                    <img className="card-img-top" src="https://doccure.dreamstechnologies.com/html/template/assets/img/category/categorie-08.png" width='100%' height='100px' style={{ objectFit: "contain" }} alt="Card image cap" />
                                    <div className="card-block">
                                        <h4 className="card-title text-center" style={{ fontSize: "18px", fontWeight: "550" }}>Baby Care</h4>
                                        <p className='text-center' style={{ color: "grey", fontSize: "15px" }}> 680 Products</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2 mt-3">
                                <div className="card">
                                    <img className="card-img-top" src="https://doccure.dreamstechnologies.com/html/template/assets/img/category/categorie-09.png" width='100%' height='100px' style={{ objectFit: "contain" }} alt="Card image cap" />
                                    <div className="card-block">
                                        <h4 className="card-title text-center" style={{ fontSize: "18px", fontWeight: "550" }}>Home & Health</h4>
                                        <p className='text-center' style={{ color: "grey", fontSize: "15px" }}> 440 Products</p>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                        <div className="col-lg-12 d-flex justify-content-center mt-5  wow fadeInUp">
                            <img src="https://images.apollo247.in/images/Super6NewDesktop.png?tr=w-1276,q-100,f-webp,c-at_max" className='img-fluid' alt="" />
                        </div>

                        <div className='mb-4 mt-5 d-flex  flex-wrap justify-content-between'>
                            <h1 className=' wow zoomIn' style={{ fontSize: "25px", fontWeight: "550" }}>Summer Skin Products</h1>
                            <NavLink className='text-primary' to='/view_shop/1714149763839' onClick={() => redirect('')} style={{ fontSize: "17px", fontWeight: "600", textDecoration: "none" }}>View All</NavLink>
                        </div>
                        <div className="owl-carousel vegetable-carousel wow fadeInUp    mb-5">
                            {/* {
                    (
                        (
                            ()
                        )
                    )
                 } */}
                            {
                                data1 && data1.map(product =>
                                    product.prod_id == "1714149763839" &&
                                    // console.log("hii",product.prod_id) &&
                                    (
                                        (
                                            <div className="border rounded product_card1  mx-auto" style={{ width: "230px" }} >
                                                <Link to={'/view_shop/' + product.prod_id} className="card-title " style={{ textDecoration: "none" }}>
                                                    <div className="vesitable-img">
                                                        <img src={product.image} className="img-fluid rounded-top mx-auto mt-3" style={{ width: "100px", height: "100px", objectFit: "contain" }} alt />
                                                    </div>
                                                    <div className="p-3 rounded-bottom">
                                                        <p className="text-dark fs-5 fw-bold mb-0 product_name">{product.name}</p>
                                                        <div className='d-flex mt-3'>
                                                            <h1 style={{ fontSize: "20px", fontWeight: "600" }}>₹{product.price}</h1>
                                                            <p className='ms-1 25px text-primary' style={{ fontWeight: "550", fontSize: "12px" }}>{product.disc} off</p>
                                                        </div>
                                                        <button className="btn btn-outline-primary btn-rounded mt-3 w-100">Add</button>
                                                    </div>
                                                </Link>
                                            </div>
                                        )
                                    ))
                            }
                        </div>

                        <div className='mb-4 mt-5 d-flex flex-wrap justify-content-between'>
                            <h1 className=' wow zoomIn' style={{ fontSize: "25px", fontWeight: "550" }}>Baby Care Products</h1>
                            <NavLink className='text-primary' to='/view_shop/1714149623860' onClick={() => redirect('')} style={{ fontSize: "17px", fontWeight: "600", textDecoration: "none" }}>View All</NavLink>
                        </div>
                        <div className="owl-carousel vegetable-carousel wow fadeInUp    mb-5">
                            {
                                data2 && data2.map(product =>
                                    product.prod_id == "1714149623860" &&
                                    (
                                        (
                                            <div className="border rounded product_card1  mx-auto" style={{ width: "230px" }} >
                                                <Link to={'/view_shop/' + product.prod_id} className="card-title " style={{ textDecoration: "none" }}>
                                                    <div className="vesitable-img">
                                                        <img src={product.image} className="img-fluid rounded-top mx-auto mt-3" style={{ width: "100px", height: "100px", objectFit: "contain" }} alt />
                                                    </div>
                                                    <div className="p-3 rounded-bottom">
                                                        <p className="text-dark fs-6 fw-bold mb-0 product_name">{product.name}</p>
                                                        <div className='d-flex mt-3'>
                                                            <h1 style={{ fontSize: "20px", fontWeight: "600" }}>₹{product.price}</h1>
                                                            <p className='ms-1 25px text-primary' style={{ fontWeight: "550", fontSize: "12px" }}>{product.disc} off</p>
                                                        </div>
                                                        <button className="btn btn-outline-primary btn-rounded mt-3 w-100">Add</button>
                                                    </div>
                                                </Link>
                                            </div>
                                        )
                                    ))
                            }
                        </div>
                    </div>
                    <div className="col-lg-12 d-flex justify-content-center  mt-3  wow fadeInUp">
                        <img src="https://images.apollo247.in/images/dtdashboard/DT_Banner_2.png?tr=w-1276,q-80,f-webp,dpr-1.25,c-at_max" alt="" className='img-fluid' />
                    </div>


                    <div className='mb-4 mt-5 d-flex flex-wrap justify-content-between'>
                        <h1 className=' wow zoomIn' style={{ fontSize: "25px", fontWeight: "550" }}>Minimum 50 Percent off</h1>
                        <NavLink className='text-primary' to='/view_shop/1714149763839' onClick={() => redirect('')} style={{ fontSize: "17px", fontWeight: "600", textDecoration: "none" }}>View All</NavLink>
                    </div>
                    <div className="owl-carousel vegetable-carousel wow fadeInUp    mb-5">
                        {
                            data3 && data3.map(product =>
                            (
                                (
                                    <div className="border rounded product_card1  mx-auto" style={{ width: "230px" }} >
                                        <Link to={'/view_shop/' + product.prod_id} className="card-title " style={{ textDecoration: "none" }}>
                                            <div className="vesitable-img">
                                                <img src={product.image} className="img-fluid rounded-top mx-auto mt-3" style={{ width: "100px", height: "100px", objectFit: "contain" }} alt />
                                            </div>
                                            <div className="p-3 rounded-bottom">
                                                <p className="text-dark fs-6 fw-bold mb-0 product_name">{product.name}</p>
                                                <div className='d-flex mt-3'>
                                                    <h1 style={{ fontSize: "20px", fontWeight: "600" }}>₹{product.price}</h1>
                                                    <p className='ms-1 25px text-primary' style={{ fontWeight: "550", fontSize: "12px" }}>{product.disc} off</p>
                                                </div>
                                                <button className="btn btn-outline-primary btn-rounded mt-3 w-100">Add</button>
                                            </div>
                                        </Link>
                                    </div>
                                )
                            ))
                        }
                    </div>
                    <div className="col-lg-12 d-flex justify-content-center mt-3  wow fadeInUp">
                        <img src="https://images.apollo247.in/pd-cms/cms/2023-09/Diag_Web_Desktop.jpg?tr=w-1276,q-100,f-webp,c-at_max" alt="" className='img-fluid rounded-3 ' />
                    </div>


                    <div className='mb-4 mt-5'>
                        <h1 className=' wow zoomIn' style={{ fontSize: "25px", fontWeight: "550" }}>Browse by Health Conditions</h1>
                    </div>
                    <div className="row justify-content-between mt-2">
                        <div className="col-md-2 mt-2 ">
                            <div className="d-flex flex-wrap border mx-auto rounded-3 text-center gap-2" style={{ width: "280px", height: "80px", alignItems: "center" }} >
                                <div className='ms-3' >
                                    <img className="" src="https://images.apollo247.in/pub/media/healtharea/247images/d/i/diabetic_1.png?tr=w-125,q-100,f-webp,c-at_max" width='60px' height='60px' style={{ objectFit: "contain" }} alt="Card image cap" />
                                </div>
                                <div className='ms-2'>
                                    <h4 className="" style={{ fontSize: "18px", fontWeight: "550" }}>Eye Glasses</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 mt-2">
                            <div className="d-flex flex-wrap border  mx-auto rounded-3 text-center gap-2" style={{ width: "280px", height: "80px", alignItems: "center" }} >
                                <div className='ms-3' >
                                    <img className="" src="https://images.apollo247.in/pub/media/healtharea/247images/c/a/cardio_1.png?tr=w-125,q-100,f-webp,c-at_max" width='60px' height='60px' style={{ objectFit: "contain" }} alt="Card image cap" />
                                </div>
                                <div className='ms-2'>
                                    <h4 className="" style={{ fontSize: "18px", fontWeight: "550" }}>Cardiac Care</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 mt-2">
                            <div className="d-flex flex-wrap border mx-auto rounded-3 text-center gap-2" style={{ width: "280px", height: "80px", alignItems: "center" }} >
                                <div className='ms-3' >
                                    <img className="" src="https://images.apollo247.in/pub/media/healtharea/247images/g/r/group-10_1.png?tr=w-125,q-100,f-webp,c-at_max" width='60px' height='60px' style={{ objectFit: "contain" }} alt="Card image cap" />
                                </div>
                                <div className='ms-2'>
                                    <h4 className="" style={{ fontSize: "18px", fontWeight: "550" }}>Stomach Care</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 mt-2">
                            <div className="d-flex flex-wrap border mx-auto rounded-3 text-center gap-2" style={{ width: "280px", height: "80px", alignItems: "center" }} >
                                <div className='ms-3' >
                                    <img className="" src="https://images.apollo247.in/pub/media/healtharea/247images/p/a/pain_relief_1.png?tr=w-125,q-100,f-webp,c-at_max" width='60px' height='60px' style={{ objectFit: "contain" }} alt="Card image cap" />
                                </div>
                                <div className='ms-2'>
                                    <h4 className="" style={{ fontSize: "18px", fontWeight: "550" }}>Pain Relief</h4>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="row justify-content-between mt-2">
                        <div className="col-md-2 mt-2 ">
                            <div className="d-flex flex-wrap border mx-auto rounded-3 text-center gap-2" style={{ width: "280px", height: "80px", alignItems: "center" }} >
                                <div className='ms-3' >
                                    <img className="" src="https://images.apollo247.in/pub/media/healtharea/247images/g/r/group-5_1.png?tr=w-125,q-100,f-webp,c-at_max" width='60px' height='60px' style={{ objectFit: "contain" }} alt="Card image cap" />
                                </div>
                                <div className='ms-2'>
                                    <h4 className="" style={{ fontSize: "18px", fontWeight: "550" }}>Oral Care</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 mt-2">
                            <div className="d-flex flex-wrap border  mx-auto rounded-3 text-center gap-2" style={{ width: "280px", height: "80px", alignItems: "center" }} >
                                <div className='ms-3' >
                                    <img className="" src="https://images.apollo247.in/pub/media/healtharea/247images/g/r/group-68_1.png?tr=w-125,q-100,f-webp,c-at_max" width='60px' height='60px' style={{ objectFit: "contain" }} alt="Card image cap" />
                                </div>
                                <div className='ms-2'>
                                    <h4 className="" style={{ fontSize: "18px", fontWeight: "550" }}>Respiratory </h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 mt-2">
                            <div className="d-flex flex-wrap border mx-auto rounded-3 text-center gap-2" style={{ width: "280px", height: "80px", alignItems: "center" }} >
                                <div className='ms-3' >
                                    <img className="" src="https://images.apollo247.in/pub/media/healtharea/247images/g/r/group-68_1.png?tr=w-125,q-100,f-webp,c-at_max" width='60px' height='60px' style={{ objectFit: "contain" }} alt="Card image cap" />
                                </div>
                                <div className='ms-2'>
                                    <h4 className="" style={{ fontSize: "18px", fontWeight: "550" }}>Sexual Health</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 mt-2">
                            <div className="d-flex flex-wrap border mx-auto rounded-3 text-center gap-2" style={{ width: "280px", height: "80px", alignItems: "center" }} >
                                <div className='ms-3' >
                                    <img className="" src="https://images.apollo247.in/pub/media/healtharea/247images/e/l/elderly_care_1.png?tr=w-125,q-100,f-webp,c-at_max" width='60px' height='60px' style={{ objectFit: "contain" }} alt="Card image cap" />
                                </div>
                                <div className='ms-2'>
                                    <h4 className="" style={{ fontSize: "18px", fontWeight: "550" }}>Elderly Care</h4>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="row mt-2">
                        <div className="col-md-2 mt-2 ">
                            <div className="d-flex flex-wrap border mx-auto rounded-3 text-center gap-2" style={{ width: "280px", height: "80px", alignItems: "center" }} >
                                <div className='ms-3' >
                                    <img className="" src="https://images.apollo247.in/pub/media/healtharea/247images/i/m/immunity_1.png?tr=w-125,q-80,f-webp,dpr-1.25,c-at_max" width='60px' height='60px' style={{ objectFit: "contain" }} alt="Card image cap" />
                                </div>
                                <div className='ms-2'>
                                    <h4 className="text-secoundary" style={{ fontSize: "18px", fontWeight: "550" }}>Cold & Immunity</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container'>
                    <div className='mb-4 mt-5'>
                        <h1 className=' wow zoomIn' style={{ fontSize: "15px", fontWeight: "550" }}>100% Genuine Medicine From One-Health Pharmacy</h1>
                        <p className='text-muted' style={{fontSize:"12px"}}>All medicines/healthcare products sold on One-Health Pharmacy are procured from our sister company - One-Health Pharmacy, with a reputation of selling only 100% genuine products. The products sold through One-Health Pharmacy are inspected thoroughly to ensure only genuine products make the cut. We believe that when it comes to medicines, quality and authenticity should never be compromised.</p>
                    </div>
                    <div className='mb-4 mt-5'>
                        <h1 className=' wow zoomIn' style={{ fontSize: "15px", fontWeight: "550" }}>Most Trusted Online Medical Store Of India</h1>
                        <p className='text-muted' style={{fontSize:"12px"}}>As pioneers in the healthcare segment, we understand the importance of trust. And that is why, over the years, we worked on building that trust. We ensure that every product sold through our offline/online stores are checked for their authenticity, quality, and compliance with the Central Drugs Standard Control Organization, the national regulatory body for Indian pharmaceuticals and medical devices.</p>
                    </div>
                    <div className='mb-4 mt-5'>
                        <h1 className=' wow zoomIn' style={{ fontSize: "15px", fontWeight: "550" }}>Extra Benefits Of Online Medicine Orders</h1>
                        <p className='text-muted' style={{fontSize:"12px"}}>When you order medicines at One-Health  Pharmacy, not only do you get your medicines delivered on time and at your doorstep, but you also get additional benefits. You can earn One-Health Health Credits whenever you order medicine online and also when you purchase other non-pharma products (not applicable on discounted products including the ones where coupon codes have been applied). You can use these Health Credits to make more purchases on our platform. And not to forget the discounts and exclusive offers we bring out from time to time.</p>
                    </div>
                </div>
            </div>

            <Helmet>

                {/* <script src="Website/js/scrollreveal.min.js"></script>
    <script src="Website/js/custom.js"></script> */}

                {/* <link href="Website/css/owl.carousel.min.css" rel="stylesheet"/> */}
                {/* <link href="Website/css/bootstrap.min.css" rel="stylesheet"/> */}
                {/* <link href="Website/css/style.css" rel="stylesheet"/> */}
                {/* <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script> */}
                {/* <script src="/Website/js/owl.carousel.min.js"></script> */}
                <script src="/Website/js/main.js"></script>

            </Helmet>





            <Footar />
        </div>
    )
}

export default Pharmacy