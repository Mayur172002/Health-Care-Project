import React from 'react'
import Header from '../Componest/Header'
import Footar from '../Componest/Footar'

function About() {
    return (
        <div>
            <Header />
            <div>
                <div className="page-banner overlay-dark bg-image" style={{ backgroundImage: 'url(../Website/img/bg_image_1.jpg)' }}>
                    <div className="banner-section">
                        <div className="container text-center wow fadeInUp">
                            <nav aria-label="Breadcrumb">
                                <ol className="breadcrumb breadcrumb-dark bg-transparent justify-content-center py-0 mb-2">
                                    <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">About</li>
                                </ol>
                            </nav>
                            <h1 className="font-weight-normal">About Us</h1>
                        </div> {/* .container */}
                    </div> {/* .banner-section */}
                </div> {/* .page-banner */}
                <div className="page-section bg-light">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 py-3 wow zoomIn">
                                <div className="card-service">
                                    <div className="circle-shape bg-secondary text-white">
                                        <span className="mai-chatbubbles-outline" />
                                    </div>
                                    <p><span>Chat</span> with a doctors</p>
                                </div>
                            </div>
                            <div className="col-md-4 py-3 wow zoomIn">
                                <div className="card-service">
                                    <div className="circle-shape bg-primary text-white">
                                        <span className="mai-shield-checkmark" />
                                    </div>
                                    <p><span>One</span>-Health Protection</p>
                                </div>
                            </div>
                            <div className="col-md-4 py-3 wow zoomIn">
                                <div className="card-service">
                                    <div className="circle-shape bg-accent text-white">
                                        <span className="mai-basket" />
                                    </div>
                                    <p><span>One</span>-Health Pharmacy</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="page-section">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8 wow fadeInUp">
                                <h1 className="text-center mb-3">Welcome to Your Health Center</h1>
                                <div className="text-lg">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt neque sit, explicabo vero nulla animi nemo quae cumque, eaque pariatur eum ut maxime! Tenetur aperiam maxime iure explicabo aut consequuntur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt neque sit, explicabo vero nulla animi nemo quae cumque, eaque pariatur eum ut maxime! Tenetur aperiam maxime iure explicabo aut consequuntur.</p>
                                    <p>Expedita iusto sunt beatae esse id nihil voluptates magni, excepturi distinctio impedit illo, incidunt iure facilis atque, inventore reprehenderit quidem aliquid recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quod ad sequi atque accusamus deleniti placeat dignissimos illum nulla voluptatibus vel optio, molestiae dolore velit iste maxime, nobis odio molestias!</p>
                                </div>
                            </div>
                            <div className="col-lg-10 mt-5">
                                <h1 className="text-center mb-5 wow fadeInUp">Our Doctors</h1>
                                <div className="row justify-content-center">
                                    <div className="col-md-6 col-lg-4 wow zoomIn">
                                        <div className="card-doctor">
                                            <div className="header">
                                                <img src="https://i.pinimg.com/564x/ee/86/2e/ee862ea2fa726912168da82c547f016a.jpg" alt />
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
                                    <div className="col-md-6 col-lg-4 wow zoomIn">
                                        <div className="card-doctor">
                                            <div className="header">
                                                <img src="https://i.pinimg.com/564x/9d/85/ef/9d85ef63db3691882dee8b0d2dd08a4c.jpg" alt />
                                                <div className="meta">
                                                    <a href="#"><span className="mai-call" /></a>
                                                    <a href="#"><span className="mai-logo-whatsapp" /></a>
                                                </div>
                                            </div>
                                            <div className="body">
                                                <p className="text-xl mb-0">Dr. Alexa Melvin</p>
                                                <span className="text-sm text-grey">Dental</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-4 wow zoomIn">
                                        <div className="card-doctor">
                                            <div className="header">
                                                <img src="https://i.pinimg.com/564x/e8/f9/64/e8f964f2a79487c2bc9515b193be19e3.jpg" alt />
                                                <div className="meta">
                                                    <a href="#"><span className="mai-call" /></a>
                                                    <a href="#"><span className="mai-logo-whatsapp" /></a>
                                                </div>
                                            </div>
                                            <div className="body">
                                                <p className="text-xl mb-0">Dr. Rebecca Steffany</p>
                                                <span className="text-sm text-grey">General Health</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footar />
        </div>
    )
}

export default About