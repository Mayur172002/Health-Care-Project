import React, { useContext, useEffect, useState } from 'react'
import Header from '../Componest/Header'
import Footar from '../Componest/Footar'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { GlobalStateContext } from './GlobalStateProvider';

function Doctors() {
    useEffect(() => {
        fetch();
    }, [])
    const {search} = useContext(GlobalStateContext);
    const [data, setdata] = useState([]);
    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/doctor`)
        console.log(res.data);
        setdata(res.data)
    }
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
        setformvalue({ ...formvalue, id:user_id, [e.target.name]: e.target.value })
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
                <div className="page-banner overlay-dark bg-image" style={{ backgroundImage: 'url(../Website/img/bg_image_1.jpg)' }}>
                    <div className="banner-section">
                        <div className="container text-center wow fadeInUp">
                            <nav aria-label="Breadcrumb">
                                <ol className="breadcrumb breadcrumb-dark bg-transparent justify-content-center py-0 mb-2">
                                    <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Doctors</li>
                                </ol>
                            </nav>
                            <h1 className="font-weight-normal">Our Doctors</h1>
                        </div> {/* .container */}
                    </div> {/* .banner-section */}
                </div> {/* .page-banner */}
                <div className="page-section bg-light">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-10">
                                <div className="row">
                                    {
                                         data.filter((value) => {
                                            return search === '' ? value : (value.name && value.name.
                                              toLowerCase().includes(search.toLowerCase()));
                                          }).map((val) => {
                                            return (
                                                <div className="col-md-6 col-lg-4 py-3 wow zoomIn">
                                                    <div className="card-doctor">
                                                        <div className="header">
                                                            <img src={val.img} alt />
                                                            <div className="meta">
                                                                <a href="#"><span className="mai-call" /></a>
                                                                <a href="#"><span className="mai-logo-whatsapp" /></a>
                                                            </div>
                                                        </div>
                                                        <div className="body">
                                                            <p className="text-xl mb-0">{val.name}</p>
                                                            <span className="text-sm text-grey">{val.role}</span>
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
                    </div> {/* .container */}
                </div> {/* .page-section */}
            </div>

            <Footar />
        </div>
    )
}

export default Doctors