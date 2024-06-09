import React, { useEffect, useState } from 'react'
import Header from '../Componest/Header'
import Footar from '../Componest/Footar'
import axios from 'axios';

function Web_patients() {
    useEffect(() => {
        fetch();
    }, [])

    const [data, setdata] = useState([]);
    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/patients`)
        console.log(res.data)
        setdata(res.data);
    }
    return (
        <div>
            <Header />
            <div>
                <div className="page-banner overlay-dark bg-image" style={{ backgroundImage: 'url(../Website/img/bg_image_1.jpg)' }}>
                    <div className="banner-section">
                        <div className="container text-center wow fadeInUp">
                            <nav aria-label="Breadcrumb">
                                <ol className="breadcrumb breadcrumb-dark bg-transparent justify-content-center py-0 mb-2">
                                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Patients</li>
                                </ol>
                            </nav>
                            <h1 className="font-weight-normal">Our Patients</h1>
                        </div> {/* .container */}
                    </div> {/* .banner-section */}
                </div> {/* .page-banner */}
                <div className="page-section bg-light">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-10">
                                <div className="row">
                                    {
                                        data && data.map((value)=>{
                                            return(
                                                <div className="col-md-6 col-lg-4 py-3 wow zoomIn">
                                                <div className="card-doctor">
                                                    <div className="header">
                                                        <img src={value.img} width="100%" alt />
                                                        <div className="meta">
                                                            <a href="#"><span className="mai-call" /></a>
                                                            <a href="#"><span className="mai-logo-whatsapp" /></a>
                                                        </div>
                                                    </div>
                                                    <div className="body">
                                                        <p className="text-xl mb-0">{value.name}</p>
                                                        <span className="text-sm text-grey">{value.address}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            )
                                        })
                                    }
                                  

                                </div>
                            </div>
                        </div>
                    </div> {/* .container */}
                </div> {/* .page-section */}
            </div>

            <Footar />
        </div>
    )
}

export default Web_patients