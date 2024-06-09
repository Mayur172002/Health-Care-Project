
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, NavLink, useNavigate } from 'react-router-dom'
import Footar from '../Componest/Footar'
import Header from '../Componest/Header';
import './Web.style.css'
import { toast } from 'react-toastify';

function Web_profile() {

    const redirect = useNavigate();
    useEffect(() => {
        if (!(localStorage.getItem('Wid'))) {
            redirect('/')
        }
        else {
            fetch();
        }
    }, [])

    const [data, setdata] = useState({});
    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/user/${localStorage.getItem('Wid')}`)
        console.log(res.data)
        setdata(res.data);
    }
    const [value, setvalue] = useState({
        name: "",
        id: "",
        img: "",
        mobile: "",
        email: "",
    })
    const editdata = async (id) => {
        const res = await axios.get(`http://localhost:3000/user/${id}`)
        console.log(res.data)
        setvalue(res.data);
    }

    const Changehandel = (e) => {
        setvalue({ ...value, [e.target.name]: e.target.value })
        console.log(value);
    }

    const Submithandel = async (e) => {
        e.preventDefault();
            const result = await axios.patch(`http://localhost:3000/user/${value.id}`, value)
            console.log(result); // status = 200 edit
            if (result.status == 200) {
                toast.success("Data Update Success!! ")
                setvalue({ ...value, name: "", email: "", mobile: "", img: "", id: "", })
                redirect('/web_profile');
            }
    }

    return (
        <div>
            <Header />
            <div className="container profile mb-5 mt-5">
                <div className="main-body">
                    {/* Breadcrumb */}
                    <nav aria-label="breadcrumb" className="main-breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><NavLink to="/">Home</NavLink></li>
                            <li className="breadcrumb-item"><a href="javascript:void(0)">User</a></li>
                            <li className="breadcrumb-item active" aria-current="page">User Profile</li>
                        </ol>
                    </nav>
                    {/* /Breadcrumb */}
                    <div className="row gutters-sm">
                        <div className="col-md-4 mb-3">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex flex-column align-items-center text-center">
                                        <img src={data.img} alt="Admin" className="rounded-circle" width={150} />
                                        <div className="mt-3">
                                            <h4>{data.name}</h4>
                                            <p className="text-dark mb-1">Front-End Developer</p>
                                            <p className="text-muted font-size-sm">ID : {data.id}</p>
                                            <button className="btn btn-primary me-2">Follow</button>
                                            <button className="btn btn-outline-primary">Message</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="card mb-3">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Full Name</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary" >
                                            <span style={{ color: "grey" }}> {data.name}</span>
                                        </div>
                                    </div>
                                    <hr style={{ opacity: "1" }} />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Email</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary text-muted">
                                            <span style={{ color: "grey" }}>{data.email}</span>
                                        </div>
                                    </div>
                                    <hr style={{ opacity: "1" }} />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Phone</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary ">
                                            <span style={{ color: "grey" }}> {data.mobile}</span>
                                        </div>
                                    </div>
                                    <hr style={{ opacity: "1" }} />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Mobile</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            <span style={{ color: "grey" }}>(320) 380-4539</span>

                                        </div>
                                    </div>
                                    <hr style={{ opacity: "1" }} />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Address</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            <span style={{ color: "grey" }}> Bay Area, San Francisco, CA</span>
                                        </div>
                                    </div>
                                    <hr style={{ opacity: "1" }} />
                                    <div className="row">
                                        <div className="col-sm-12">
                                             <Link className="btn btn-info" onClick={() => redirect('/edit_profile/' + data.id)}to="javascript:void(0)">Edit</Link>
                                        </div>
                                        <div className="modal" id="myModal">
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    {/* Modal Header */}
                                                    <div className="modal-header">
                                                        <h4 className="modal-title">Edit Profile</h4>
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal" />
                                                    </div>
                                                    {/* Modal body */}
                                                    <div className="modal-body">
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
                                                                        <label>id <span className="text-danger">*</span></label>
                                                                        <input className="form-control" value={value.id} name='id' type="text" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-sm-12">
                                                                    <div className="row">
                                                                        <div className="col-sm-6">
                                                                            <div className="form-group">
                                                                                <label>Email</label>
                                                                                <input type="text" name='email' value={value.email} className="form-control " />
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-sm-6">
                                                                            <div className="form-group">
                                                                                <label>Number</label>
                                                                                <input type="text" name='mobile' value={value.mobile} className="form-control " />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-sm-12">
                                                                    <div className="row">
                                                                        <div className="col-sm-12">
                                                                            <div className="form-group">
                                                                                <label>image</label>
                                                                                <div className="profile-upload">
                                                                                    <div className="rounded-circle">
                                                                                        <img alt src={value.img} />
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
                                                                <button className="btn btn-primary submit-btn" data-bs-dismiss="modal">Save</button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
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

export default Web_profile