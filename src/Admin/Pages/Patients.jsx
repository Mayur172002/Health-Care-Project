import React, { useEffect, useState } from 'react'
import Admin_header from '../Componest/Admin_header'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet';


function Patients() {
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
        const res = await axios.get(`http://localhost:3000/patients`)
        console.log(res.data)
        setdata(res.data);
    }
    const deleteHandel = async (id) => {
        const res = await axios.delete(`http://localhost:3000/patients/${id}`)
        console.log(res.data)
        fetch();
        toast.error("delete success")
    }
    const [formvalue, setformvalue] = useState({
        name: "",
        id: "",
        img: "",
        age: "",
        address: "",
        phone: "",
        email: ""
    })
    const editdata = async (id) => {
        const res = await axios.get(`http://localhost:3000/patients/${id}`)
        console.log(res.data)
        setformvalue(res.data);
    }

    const onChangehandel = (e) => {
        setformvalue({ ...formvalue,[e.target.name]: e.target.value })
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
        return ans
    }

    const onSubmithandel = async (a) => {
        a.preventDefault();
        if (validation()) {
            const result = await axios.patch(`http://localhost:3000/patients/${formvalue.id}`, formvalue)
            console.log(result);
            if (result.status == 200) {
                toast.success("data Update success")
                setformvalue({ ...formvalue, id: "", name: "", age: "", email: "", address: "", phone: "", img: "" })
                redirect('/patients');
            }
        }

    }
    return (
        <div class="main-wrapper">
            
            <Admin_header />
            <div className="page-wrapper">
                <div className="content">
                    <div className="row">
                        <div className="col-sm-4 col-3">
                            <h4 className="page-title">Patients</h4>
                        </div>
                        <div className="col-sm-8 col-9 text-right m-b-20">
                            <NavLink to="/addpatients" className="btn btn btn-primary btn-rounded float-right"><i className="fa fa-plus" /> Add Patient</NavLink>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="table-responsive">
                                <table className="table table-border table-striped custom-table datatable mb-0">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Name</th>
                                            <th>Age</th>
                                            <th>Address</th>
                                            <th>Phone</th>
                                            <th>Email</th>
                                            <th className="text-right">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            data && data.map((value, index) => {
                                                return (
                                                    <tr key={index}>
                                                        <td>{value.id}</td>
                                                        <td><img width={28} height={28} src={value.img} className="rounded-circle m-r-5" alt />{value.name}</td>
                                                        <td>{value.age}</td>
                                                        <td>{value.address}</td>
                                                        <td>{value.phone}</td>
                                                        <td>{value.email}</td>
                                                        {/* <td>
                                                                <button onClick={() => deleteHandel(value.id)} >Delete</button>
                                                            </td> */}
                                                        <td className="text-right">
                                                            <div className="dropdown dropdown-action">
                                                                <a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v" /></a>
                                                                <div className="dropdown-menu dropdown-menu-right">
                                                                    <Link className="dropdown-item" to="javascript:void(0)" onClick={() => editdata(value.id)} data-bs-toggle="modal" data-bs-target="#myModal"><i className="fa fa-pencil m-r-5" /> Edit</Link>
                                                                    <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_patient" onClick={() => deleteHandel(value.id)}><i className="fa fa-trash-o m-r-5" /> Delete</a>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                                <div className="modal" id="myModal">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            {/* Modal Header */}
                                            <div className="modal-header">
                                                <h4 className="modal-title">Edit Patients</h4>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" />
                                            </div>
                                            {/* Modal body */}
                                            <div className="modal-body">
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
                                                        <button className="btn btn-primary submit-btn"data-bs-dismiss="modal">Save </button>
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

    )
}

export default Patients