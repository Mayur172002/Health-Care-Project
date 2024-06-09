import React, { useEffect, useState } from 'react'
import Admin_header from '../Componest/Admin_header'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { toast } from 'react-toastify';

function Doctor() {
    const redirect = useNavigate();
    useEffect(() => {
        if (!(localStorage.getItem('uid'))) {
            redirect('/login')
        }
        else {
            fetch();
        }
    }, [])

    const [data, setdata] = useState([]);
    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/doctor`)
        console.log(res.data);
        setdata(res.data)
    }

    const deleteHandel = async (id) => {
        const res = await axios.delete(`http://localhost:3000/doctor/${id}`)
        console.log(res.data);
        toast.error("delete success")
        fetch();
    }
    const [value, setvalue] = useState({
        name: "",
        role: "",
        address: "",
        img: ""
    })
    const editdata = async (id) => {
        const res = await axios.get(`http://localhost:3000/doctor/${id}`)
        console.log(res.data)
        setvalue(res.data);
    }

    const Changehandel = (e) => {
        setvalue({ ...value, [e.target.name]: e.target.value })
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
            const result = await axios.patch(`http://localhost:3000/doctor/${value.id}`, value)
            console.log(result); // status = 201 update
            if (result.status == 200) {
                toast.success("Data Update Success!! ")
                setvalue({ ...value, name: "", role: "", address: "", img: "" })
                redirect('/doctor');
            }
        }
    }
    return (
        <div>
            <div class="main-wrapper">
                <Admin_header />
                <div className="page-wrapper">
                    <div className="content">
                        <div className="row">
                            <div className="col-sm-4 col-3">
                                <h4 className="page-title">Doctors</h4>
                            </div>
                            <div className="col-sm-8 col-9 text-right m-b-20">
                                <NavLink to="/adddoctor" className="btn btn-primary btn-rounded float-right"><i className="fa fa-plus" /> Add Doctor</NavLink>
                            </div>
                        </div>
                        <div className="row doctor-grid">
                            {
                                data && data.map((value) => {
                                    return (
                                        <div className="col-md-4 col-sm-4  col-lg-3">
                                            <div className="profile-widget">
                                                <div className="doctor-img">
                                                    <a className="avatar" href="profile.html"><img alt src={value.img} /></a>
                                                </div>
                                                <div className="dropdown profile-action">
                                                    <a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown"><i className="fa fa-ellipsis-v" /></a>
                                                    <div className="dropdown-menu ">
                                                        <Link className="dropdown-item" to="javascript:void(0);" onClick={() => editdata(value.id)} data-bs-toggle="modal" data-bs-target="#myModal" ><i className="fa fa-pencil m-r-5" /> Edit</Link>
                                                        <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_doctor" onClick={() => deleteHandel(value.id)}><i className="fa fa-trash-o m-r-5" /> Delete</a>
                                                    </div>
                                                </div>
                                                <h4 className="doctor-name text-ellipsis"><a href="profile.html">{value.name}</a></h4>
                                                <div className="doc-prof">{value.role}</div>
                                                <div className="user-country">
                                                    <i className="fa fa-map-marker" /> {value.address}
                                                </div>
                                            </div>

                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="see-all">
                                    <a className="see-all-btn" href="javascript:void(0);">Load More</a>
                                </div>
                            </div>
                        </div>
                        <div className="modal" id="myModal">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    {/* Modal Header */}
                                    <div className="modal-header">
                                        <h4 className="modal-title">Edit Doctors</h4>
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
    {/* <div class="sidebar-overlay" data-reff="#sidebar"></div> */}
        </div>


    )
}

export default Doctor