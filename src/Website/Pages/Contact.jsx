import React, { useState } from 'react'
import Header from '../Componest/Header'
import Footar from '../Componest/Footar'
import axios from 'axios'
import { toast } from 'react-toastify'

function Contact() {
    const [formvalue, setformvalue] = useState({
        name: "",
        email: "",
        number: "",
        message: "",
        img: "",
    })

    const ChnageHandel = (e) => {
        setformvalue({ ...formvalue, id: new Date().getTime().toString(), [e.target.name]: e.target.value })
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
        if (formvalue.message == "") {
            toast.error("Please enter your message")
            ans = false
            return false
        }
        if (formvalue.img == "") {
            toast.error("Please enter your image")
            ans = false
            return false
        }
        return true    
    }

    const SubmitHandel = async (e) => {
        e.preventDefault();
        if (validation()) {
            const result = await axios.post(`http://localhost:3000/contacts`, formvalue)
            console.log(result);
            if (result.status == 201) {
                toast.success("Data Add Success!! ")
                setformvalue({ ...formvalue, name: "", number: "", email: "", message: "", img: "" })
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
                                    <li className="breadcrumb-item active" aria-current="page">Contact</li>
                                </ol>
                            </nav>
                            <h1 className="font-weight-normal">Contact</h1>
                        </div> {/* .container */}
                    </div> {/* .banner-section */}
                </div> {/* .page-banner */}
                <div className="page-section">
                    <div className="container">
                        <h1 className="text-center wow fadeInUp">Get in Touch</h1>
                        <form className="contact-form mt-5" method='post' onChange={ChnageHandel} onSubmit={SubmitHandel}>
                            <div className="row mb-3">
                                <div className="col-sm-6 py-2 wow fadeInLeft">
                                    <label htmlFor="fullName">Name</label>
                                    <input type="text" id="fullName" name='name' value={formvalue.name} className="form-control" placeholder="Full name.." />
                                </div>
                                <div className="col-sm-6 py-2 wow fadeInRight">
                                    <label htmlFor="emailAddress">Email</label>
                                    <input type="text" id="emailAddress" name='email' value={formvalue.email} className="form-control" placeholder="Email address.." />
                                </div>
                                <div className="col-12 py-2 wow fadeInUp">
                                    <label htmlFor="subject">Number</label>
                                    <input type="number" id="subject" name='number' value={formvalue.number} className="form-control" placeholder="Enter Number.." />
                                </div>
                                <div className="col-12 py-2 wow fadeInUp">
                                    <label htmlFor="message">Message</label>
                                    <textarea id="message" className="form-control" name='message' value={formvalue.message} rows={8} placeholder="Enter Message.." defaultValue={""} />
                                </div>
                                <div className="col-12 py-2 wow fadeInUp">
                                    <label htmlFor="subject">Image</label>
                                    <input type="url" id="subject" name='img' value={formvalue.img} className="form-control" placeholder="" />
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary wow zoomIn">Send Message</button>
                        </form>
                    </div>
                </div>
                <div classname="container-fuild wow fadeInUp">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d35788.56086061275!2d-105.05047882221197!3d39.65041664003138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c8081479edec9%3A0xa488c6f516a7d75b!2sSwedish%20Medical%20Center!5e0!3m2!1sen!2sin!4v1711096518881!5m2!1sen!2sin" width={1470} height={400} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                </div>
            </div>

            <Footar />
        </div>
    )
}

export default Contact