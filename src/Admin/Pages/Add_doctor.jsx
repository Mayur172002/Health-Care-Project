import React, { useEffect, useState } from 'react'
import Admin_header from '../Componest/Admin_header'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'


function Add_doctor() {

    const redirect = useNavigate();
    useEffect(() => {
        if (!(localStorage.getItem('uid'))) {
            redirect('/login')
        }
    })
    const [value, setvalue] = useState({
        name: "",
        role: "",
        address: "",
        img: ""
    })

    const Changehandel = (e) => {
        setvalue({ ...value, id: new Date().getTime().toString(), [e.target.name]: e.target.value })
        console.log(value);
    }
    function validation() {
        var ans = true
        if (value.name == "") {
            toast.error("Please enter your name")
            ans = false;
            return false
        }
        if (value.role == "") {
            toast.error("Please enter your role")
            ans = false
            return false
        }
        if (value.address == "") {
            toast.error("Please enter your address")
            ans = false
            return false
        }

        if (value.img == "") {
            toast.error("Please enter your image")
            ans = false
            return false
        }
        return ans
    }


    const Submithandel = async (e) => {
        e.preventDefault();
        if (validation()) {
            const result = await axios.post(`http://localhost:3000/doctor`, value)
            console.log(result); // status = 201 update
            if (result.status == 201) {
                toast.success("Data Add Success!! ")
                setvalue({ ...value, name: "", role: "", address: "", img: "" })
            }
        }
    }

    return (
        <div class="main-wrapper">
            <Admin_header />
            <div className="page-wrapper">
                <div className="content">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <h4 className="page-title">Add Doctor</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <form onChange={Changehandel} onSubmit={Submithandel}>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label>First Name <span className="text-danger">*</span></label>
                                            <input className="form-control" value={value.name} name='name' type="text" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label>Role <span className="text-danger">*</span></label>
                                            <input className="form-control" value={value.role} name='role' type="text" />
                                        </div>
                                    </div>
                                    <div className="col-sm-12">
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <div className="form-group">
                                                    <label>Address</label>
                                                    <input type="text" name='address' value={value.address} className="form-control " />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            
                                    <div className="col-sm-12">
                                        <div className="row">
                                         
                                            <div className="col-sm-12">
                                                <div className="form-group">
                                                    <label>Avatar</label>
                                                    <div className="profile-upload">
                                                        <div className="upload-img">
                                                            <img alt src="Admin/img/user.jpg" />
                                                        </div>
                                                        <div className="upload-input">
                                                            <input type="url" name='img' value={value.img} className="form-control" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </div>

                                <div className="m-t-20 text-center">
                                    <button className="btn btn-primary submit-btn">Create Doctor</button>
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

export default Add_doctor