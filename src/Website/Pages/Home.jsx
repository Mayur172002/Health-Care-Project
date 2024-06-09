import React, { useState } from 'react'
import Header from '../Componest/Header'
import Footar from '../Componest/Footar'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'



function Home() {
    const [formvalue, setformvalue] = useState({
        name: "",
        email: "",
        number: "",
        date: "",
        age : "",
        doctor : "",
    })
    
    const ChnageHandel = (e) => {
    const user_id = localStorage.getItem('Wid')
    console.log(user_id);
    setformvalue({ ...formvalue, id: user_id, [e.target.name]: e.target.value })
    console.log(formvalue);
     }
     
    function validation() {
        var ans = true
        if (formvalue.name == "") {
            toast.error("Please enter your name")
            ans = false;
            return false
        }
        if (formvalue.email == "") {
            toast.error("Please enter your email")
            ans = false
            return false
        }
        if (formvalue.number == "") {
            toast.error("Please enter your number")
            ans = false
            return false
        }
        return true    
    }

    const SubmitHandel = async (e,user_id) => {
        e.preventDefault();
        if (validation()) {
            if(localStorage.getItem('Wid')){
                const result = await axios.post(`http://localhost:3000/Appointment?id=${user_id}`, formvalue)
                console.log(result);
                if (result.status == 201) {
                    toast.success("Submit request Success!! ")
                    setformvalue({ ...formvalue, name: "", number: "", email: "", date: "", age: "",doctor : "" })
                }
            }
            else{
                toast.error("Please Login Here!! ")
                    setformvalue({ ...formvalue, name: "", number: "", email: "", date: "", age: "",doctor : "" })
            }
           
        }
    }
    return (
        <div>
            <Header />
            <div>
                <div className="page-hero bg-image overlay-dark" style={{ backgroundImage: 'url(../Website/img/bg_image_1.jpg)' }}>
                    <div className="hero-section">
                        <div className="container text-center wow zoomIn">
                            <span className="subhead">Let's make your life happier</span>
                            <h1 className="display-4">Healthy Living</h1>
                            <a href="#" className="btn btn-primary">Let's Consult</a>
                        </div>
                    </div>
                </div>
                <div className="bg-light">
                    <div className="page-section py-3 mt-md-n5 custom-index">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-md-4 py-3 py-md-0">
                                    <div className="card-service wow fadeInUp">
                                        <div className="circle-shape bg-secondary text-white">
                                            <span className="mai-chatbubbles-outline" />
                                        </div>
                                        <p><span>Chat</span> with a doctors</p>
                                    </div>
                                </div>
                                <div className="col-md-4 py-3 py-md-0">
                                    <div className="card-service wow fadeInUp">
                                        <div className="circle-shape bg-primary text-white">
                                            <span className="mai-shield-checkmark" />
                                        </div>
                                        <p><span>One</span>-Health Protection</p>
                                    </div>
                                </div>
                                <div className="col-md-4 py-3 py-md-0">

                                    <div className="card-service wow fadeInUp">
                                        <div className="circle-shape bg-accent text-white">
                                            <span className="mai-basket" />
                                        </div>
                                        <p><span>One</span>-Health Pharmacy</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> {/* .page-section */}
                    <div className="page-section pb-0">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6 py-3 wow fadeInUp">
                                    <h1>Welcome to Your Health <br /> Center</h1>
                                    <p className="text-grey mb-4">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Accusantium aperiam earum ipsa eius, inventore nemo labore eaque porro consequatur ex aspernatur. Explicabo, excepturi accusantium! Placeat voluptates esse ut optio facilis!</p>
                                    <a href="about.html" className="btn btn-primary">Learn More</a>
                                </div>
                                <div className="col-lg-6 wow fadeInRight" data-wow-delay="400ms">
                                    <div className="img-place custom-img-1">
                                        <img src="../Website/img/bg-doctor.png" alt />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> {/* .bg-light */}
                </div> {/* .bg-light */}
                <div className="page-section">
                    <div className="container">
                        <h1 className="text-center mb-5 wow fadeInUp">Our Doctors</h1>
                        <div className="owl-carousel wow fadeInUp" id="doctorSlideshow">
                            <div className="item">
                                <div className="card-doctor">
                                    <div className="header">
                                        <img src="https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt />
                                        <div className="meta">
                                            <a href="#"><span className="mai-call" /></a>
                                            <a href="#"><span className="mai-logo-whatsapp" /></a>
                                        </div>
                                    </div>
                                    <div className="body">
                                        <p className="text-xl mb-0">Dr. Stein Albert</p>
                                        <span className="text-sm text-grey">Cardiology</span>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="card-doctor">
                                    <div className="header">
                                        <img src="https://images.pexels.com/photos/6129500/pexels-photo-6129500.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt />
                                        <div className="meta">
                                            <a href="#"><span className="mai-call" /></a>
                                            <a href="#"><span className="mai-logo-whatsapp" /></a>
                                        </div>
                                    </div>
                                    <div className="body">
                                        <p className="text-xl mb-0">Dr. Arbaj</p>
                                        <span className="text-sm text-grey">Dental</span>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="card-doctor">
                                    <div className="header">
                                        <img src="https://images.pexels.com/photos/6627898/pexels-photo-6627898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt />
                                        <div className="meta">
                                            <a href="#"><span className="mai-call" /></a>
                                            <a href="#"><span className="mai-logo-whatsapp" /></a>
                                        </div>
                                    </div>
                                    <div className="body">
                                        <p className="text-xl mb-0">Dr. Mary</p>
                                        <span className="text-sm text-grey">General Health</span>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="card-doctor">
                                    <div className="header">
                                        <img src="https://images.pexels.com/photos/5998474/pexels-photo-5998474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt />
                                        <div className="meta">
                                            <a href="#"><span className="mai-call" /></a>
                                            <a href="#"><span className="mai-logo-whatsapp" /></a>
                                        </div>
                                    </div>
                                    <div className="body">
                                        <p className="text-xl mb-0"> Dr.Swader Sheri</p>
                                        <span className="text-sm text-grey">	Neurology</span>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="card-doctor">
                                    <div className="header">
                                        <img src="https://images.pexels.com/photos/8460159/pexels-photo-8460159.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt />
                                        <div className="meta">
                                            <a href="#"><span className="mai-call" /></a>
                                            <a href="#"><span className="mai-logo-whatsapp" /></a>
                                        </div>
                                    </div>
                                    <div className="body">
                                        <p className="text-xl mb-0">Dr. Smith Matthew </p>
                                        <span className="text-sm text-grey">	Ophthalmology</span>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="card-doctor">
                                    <div className="header">
                                        <img src="https://images.pexels.com/photos/14438790/pexels-photo-14438790.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt />
                                        <div className="meta">
                                            <a href="#"><span className="mai-call" /></a>
                                            <a href="#"><span className="mai-logo-whatsapp" /></a>
                                        </div>
                                    </div>
                                    <div className="body">
                                        <p className="text-xl mb-0">Dr. Sparks  Jessica</p>
                                        <span className="text-sm text-grey">	Pediatric Endocrinology</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="page-section bg-light">
                    <div className="container">
                        <h1 className="text-center wow fadeInUp">Latest News</h1>
                        <div className="row mt-5">
                            <div className="col-lg-4 py-2 wow zoomIn">
                                <div className="card-blog">
                                    <div className="header">
                                        <div className="post-category">
                                            <a href="#">Covid19</a>
                                        </div>
                                        <a href="blog-details.html" className="post-thumb">
                                            <img src="../Website/img/blog/blog_1.jpg" alt />
                                        </a>
                                    </div>
                                    <div className="body">
                                        <h5 className="post-title"><a href="blog-details.html">List of Countries without Coronavirus case</a></h5>
                                        <div className="site-info">
                                            <div className="avatar mr-2">
                                                <div className="avatar-img">
                                                    <img src="../Website/img/person/person_1.jpg" alt />
                                                </div>
                                                <span>Roger Adams</span>
                                            </div>
                                            <span className="mai-time" /> 1 week ago
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 py-2 wow zoomIn">
                                <div className="card-blog">
                                    <div className="header">
                                        <div className="post-category">
                                            <a href="#">Covid19</a>
                                        </div>
                                        <a href="blog-details.html" className="post-thumb">
                                            <img src="../Website/img/blog/blog_2.jpg" alt />
                                        </a>
                                    </div>
                                    <div className="body">
                                        <h5 className="post-title"><a href="blog-details.html">Recovery Room: News beyond the pandemic</a></h5>
                                        <div className="site-info">
                                            <div className="avatar mr-2">
                                                <div className="avatar-img">
                                                    <img src="../Website/img/person/person_1.jpg" alt />
                                                </div>
                                                <span>Roger Adams</span>
                                            </div>
                                            <span className="mai-time" /> 4 weeks ago
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 py-2 wow zoomIn">
                                <div className="card-blog">
                                    <div className="header">
                                        <div className="post-category">
                                            <a href="#">Covid19</a>
                                        </div>
                                        <a href="blog-details.html" className="post-thumb">
                                            <img src="../Website/img/blog/blog_3.jpg" alt />
                                        </a>
                                    </div>
                                    <div className="body">
                                        <h5 className="post-title"><a href="blog-details.html">What is the impact of eating too much sugar?</a></h5>
                                        <div className="site-info">
                                            <div className="avatar mr-2">
                                                <div className="avatar-img">
                                                    <img src="../Website/img/person/person_2.jpg" alt />
                                                </div>
                                                <span>Diego Simmons</span>
                                            </div>
                                            <span className="mai-time" /> 2 months ago
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 text-center mt-4 wow zoomIn">
                                <a href="blog.html" className="btn btn-primary">Read More</a>
                            </div>
                        </div>
                    </div>
                </div> {/* .page-section */}

                <div className="page-section bg-light">
                    <div className="container">
                        <h1 className="text-center wow fadeInUp">Latest Product</h1>
                        <div className="row mt-5">
                            <div className="col-md-4 mt-4 wow zoomIn" >
                                <div className="card hover product_card">
                                    <Link to={'/view_shop/1714149763839'} className='text-dark' style={{textDecoration: "none"}}>
                                    <img className="card-img-top" src='https://images.apollo247.in/pub/media/catalog/product/n/i/niv0424_1-sep2023_1_.png?tr=w-350,q-100,f-webp,c-at_max' width='100%' height='200px' style={{ objectFit: "contain" }} alt="Card image cap" />
                                    <div className="card-block ms-3">
                                        <h1 className="card-title   " style={{ fontSize: "20px", fontWeight: "550", }}>Nivea Body</h1>
                                        {/* <span className='' style={{ color: "orangered" }}>₹18 cashback</span> */}
                                        <div className='d-flex mt-3 gap-5 justify-content-between '>
                                            <div className='d-flex'>
                                                <h1 style={{ fontSize: "20px", fontWeight: "600" }}>₹559.20</h1>
                                                <p className='ms-1 25px text-primary' style={{ fontWeight: "550", fontSize: "12px" }}>30% off</p>
                                            </div>
                                            <Link   to={'/view_shop/1714149763839'}  className="btn btn-primary btn-rounded mb-2 me-2 w-40">Add</Link>
                                        </div>
                                    </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-md-4 mt-4 wow zoomIn" >
                                <div className="card hover product_card">
                                <Link to={'/view_shop/1714149763839'} className='text-dark' style={{textDecoration: "none"}}>

                                    <img className="card-img-top" src='https://cdn01.pharmeasy.in/dam/products_otc/I40695/dettol-antiseptic-liquid-bottle-of-550-ml-2-1669710729.jpg' width='100%' height='200px' style={{ objectFit: "contain" }} alt="Card image cap" />
                                    <div className="card-block ms-3">
                                        <h1 className="card-title   " style={{ fontSize: "20px", fontWeight: "550", }}>Dettol Antiseptic Disinfectant</h1>
                                        {/* <span className='' style={{ color: "orangered" }}>₹18 cashback</span> */}
                                        <div className='d-flex mt-3 gap-5 justify-content-between '>
                                            <div className='d-flex'>
                                                <h1 style={{ fontSize: "20px", fontWeight: "600" }}>₹233.11</h1>
                                                <p className='ms-1 25px text-primary' style={{ fontWeight: "550", fontSize: "12px" }}>9% off</p>
                                            </div>
                                            <Link   to={'/view_shop/1714731671454'}  className="btn btn-primary btn-rounded mb-2 me-2 w-40">Add</Link>
                                        </div>
                                    </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-md-4 mt-4 wow zoomIn" >
                                <div className="card hover product_card">
                                <Link to={'/view_shop/1714149763839'} className='text-dark' style={{textDecoration: "none"}}>
                                    <img className="card-img-top" src='https://images.apollo247.in/pub/media/catalog/product/p/a/pam0295_1_mar_24_1_.jpg?tr=w-350,q-100,f-webp,c-at_max' width='100%' height='200px' style={{ objectFit: "contain" }} alt="Card image cap" />
                                    <div className="card-block ms-3">
                                        <h1 className="card-title   " style={{ fontSize: "20px", fontWeight: "550", }}>Pampers Premium</h1>
                                        <div className='d-flex mt-3 gap-5 justify-content-between '>
                                            <div className='d-flex'>
                                                <h1 style={{ fontSize: "20px", fontWeight: "600" }}>₹993.30</h1>
                                                <p className='ms-1 25px text-primary' style={{ fontWeight: "550", fontSize: "12px" }}>30% off</p>
                                            </div>
                                            <Link   to={'/view_shop/1714149623860'}  className="btn btn-primary btn-rounded mb-2 me-2 w-40">Add</Link>
                                        </div>
                                    </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-12 text-center mt-4 wow zoomIn">
                                <Link to={'/pharmacy'}  className="btn btn-primary">Shop More</Link>
                            </div>
                        </div>
                    </div>
                </div> {/* .page-section */}

                <div className="page-section">
                    <div className="container">
                        <h1 className="text-center wow fadeInUp">Make an Appointment</h1>
                        <form className="main-form" method='post' onChange={ChnageHandel} onSubmit={SubmitHandel}>
                            <div className="row mt-5 ">
                                <div className="col-12 col-sm-6 py-2 wow fadeInLeft">
                                    <input type="text" className="form-control" placeholder="Full name" name='name' value={formvalue.name} />
                                </div>
                                <div className="col-12 col-sm-6 py-2 wow fadeInRight">
                                    <input type="text" className="form-control" placeholder="Email address.."  name='email' value={formvalue.email}/>
                                </div>
                                <div className="col-12 col-sm-6 py-2 wow fadeInLeft" data-wow-delay="300ms">
                                    <input type="date" className="form-control"  name='date' value={formvalue.date}/>
                                </div>
                                <div className="col-12 col-sm-6 py-2 wow fadeInRight" data-wow-delay="300ms">
                                    <select name="doctor" value={formvalue.doctor} id="departement" className="custom-select">
                                        <option value="general">General Health</option>
                                        <option value="cardiology">Cardiology</option>
                                        <option value="dental">Dental</option>
                                        <option value="neurology">Neurology</option>
                                        <option value="orthopaedics">Orthopaedics</option>
                                    </select>
                                </div>
                                <div className="col-6 py-2 wow fadeInUp" data-wow-delay="300ms">
                                    <input type="text" className="form-control" placeholder="Number.." name='number' value={formvalue.number} />
                                </div>
                                <div className="col-6 py-2 wow fadeInUp" data-wow-delay="300ms">
                                    <input type="number" className="form-control" placeholder="Age.." name='age' value={formvalue.age} />
                                </div>
                               
                            </div>
                            <button type="submit" className="btn btn-primary mt-3 wow zoomIn">Submit Request</button>
                        </form>
                    </div>
                </div> {/* .page-section */}
            </div>
            <Footar />
        </div>
    )
}

export default Home