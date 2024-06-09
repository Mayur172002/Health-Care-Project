import React, { useEffect, useState } from 'react'
import Admin_header from '../Componest/Admin_header'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

function Add_Patients() {
    const redirect = useNavigate();

    useEffect(() => {
        if (!(localStorage.getItem('uid'))) {
            redirect('/login')
        }
    })

    const [formvalue, setformvalue] = useState({
        name: "",
        id: "",
        img: "",
        age: "",
        address: "",
        phone: "",
        email: ""
    })

    const onChangehandel = (e) => {
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
        if (formvalue.address == "") {
            toast.error("Please enter your gender")
            ans = false
            return false
        }
        if (formvalue.phone == "") {
            toast.error("Please enter your phone")
            ans = false
            return false
        }
        if (formvalue.age == "") {
            toast.error("Please enter your age")
            ans = false
            return false
        }
        if (formvalue.img == "") {
            toast.error("Please enter your image")
            ans = false
            return false
        }



        if (formvalue.id == "") {
            toast.error("Please enter your id")
            ans = false
            return false
        }
        return true
    }

    const onSubmithandel = async (a) => {
        a.preventDefault();
        if (validation()) {
            const result = await axios.post(`http://localhost:3000/patients`, formvalue)
            console.log(result);
            if (result.status == 201) {
                toast.success("data add success")
                setformvalue({ ...formvalue, id: "", name: "", age: "", email: "", address: "", phone: "", img: "" })
            }
        }

    }
    return (
        <div>
            <Admin_header />
            <div className="page-wrapper">
                <div className="content">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <h4 className="page-title">Add Patient</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <form onSubmit={onSubmithandel}>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label>First Name <span className="text-danger">*</span></label>
                                            <input className="form-control" onChange={onChangehandel} value={formvalue.name} name='name' type="text" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label>Email <span className="text-danger">*</span></label>
                                            <input className="form-control" onChange={onChangehandel} value={formvalue.email} name='email' type="email" />
                                        </div>
                                    </div>
                                    <div className="col-sm-12">
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <div className="form-group">
                                                    <label>Address</label>
                                                    <input type="text" name='address' onChange={onChangehandel} value={formvalue.address} className="form-control " />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12">
                                        <div className="form-group">
                                            <label>Phone </label>
                                            <input className="form-control" value={formvalue.phone} onChange={onChangehandel} name='phone' type="text" />
                                        </div>
                                    </div>
                                    <div className="col-sm-12">
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label>Age </label>
                                                    <input className="form-control" onChange={onChangehandel} value={formvalue.age} name='age' type="number" />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label>Avatar</label>
                                                    <div className="profile-upload">
                                                        <div className="upload-img">
                                                            <img alt src="Admin/img/user.jpg" />
                                                        </div>
                                                        <div className="upload-input">
                                                            <input type="url" onChange={onChangehandel} value={formvalue.img} name='img' className="form-control" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </div>

                                <div className="m-t-20 text-center">
                                    <button className="btn btn-primary submit-btn">Create Patient</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div class="sidebar-overlay" data-reff=""></div>
        </div>
    )
}

export default Add_Patients