import React, { useEffect, useState } from 'react'
import Admin_header from '../Componest/Admin_header'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { toast } from 'react-toastify'

function Departments() {
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
        const res = await axios.get(`http://localhost:3000/Department`)
        console.log(res.data)
        setdata(res.data);
    }
    const deleteHandel = async (id) => {
        const res = await axios.delete(`http://localhost:3000/Department/${id}`)
        console.log(res.data)
        toast.success('Delete data Success')    
    }
    const [formdata, setformdata] = useState({
        name: "",
        disc: "",
        status: ""
    })
    const editdata = async (id) => {
        const result = await axios.get(`http://localhost:3000/Department/${id}`)
        console.log(result.data);
        setformdata(result.data)
    }

    const Changehandel = (e) => {
        setformdata({ ...formdata,[e.target.name]: e.target.value })
        console.log(formdata);
    }

    const Submithandel = async (e) => {
        e.preventDefault();
            const result = await axios.patch(`http://localhost:3000/Department/${formdata.id}`, formdata)
            console.log(result.data);
            if (result.status == 200) {
                toast.success("Data Update Success!! ")
                setformdata({ ...formdata, name: "", disc: "", status: "" })
            }
    }
    return (
        <div class="main-wrapper">
            <Admin_header />
            <div className="page-wrapper">
                <div className="content">
                    <div className="row">
                        <div className="col-sm-5 col-5">
                            <h4 className="page-title">Departments</h4>
                        </div>
                        <div className="col-sm-7 col-7 text-right m-b-30">
                            <NavLink to="/adddapartment" className="btn btn-primary btn-rounded"><i className="fa fa-plus" /> Add Department</NavLink>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="table-responsive">
                                <table className="table table-striped custom-table mb-0 datatable">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Department Name</th>
                                            <th>Status</th>
                                            <th className="text-right">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            data && data.map((value, index) => {
                                                return (
                                                    <tr>
                                                        <td>{value.id}</td>
                                                        <td>{value.name}</td>
                                                        <td><span className="custom-badge status-green">{value.status}</span></td>
                                                        <td className="text-right">
                                                            <div className="dropdown dropdown-action">
                                                                <a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v" /></a>
                                                                <div className="dropdown-menu dropdown-menu-right">
                                                                    <Link className="dropdown-item" to="javascript:void(0)" onClick={() => editdata(value.id)} data-bs-toggle="modal" data-bs-target="#myModal"><i className="fa fa-pencil m-r-5" /> Edit</Link>
                                                                    <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_department" onClick={() => deleteHandel(value.id)}><i className="fa fa-trash-o m-r-5" /> Delete</a>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }

                                        <div className="modal" id="myModal">
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    {/* Modal Header */}
                                                    <div className="modal-header">
                                                        <h4 className="modal-title">Edit Department</h4>
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal" />
                                                    </div>
                                                    {/* Modal body */}
                                                    <div className="modal-body">
                                                        <form method='post' onChange={Changehandel} onSubmit={Submithandel}>
                                                            <div className="form-group">
                                                                <label>Department Name</label>
                                                                <input className="form-control" name='name' value={formdata.name} type="text" />
                                                            </div>
                                                            <div className="form-group">
                                                                <label>Description</label>
                                                                <textarea cols={30} rows={4} className="form-control" name='disc' value={formdata.disc} defaultValue={""} />
                                                            </div>
                                                            <div className="form-group">
                                                                <label className="display-block">Department Status</label>
                                                                <div className="form-check form-check-inline">
                                                                    <input className="form-check-input" type="radio" name="status" value={formdata.status} id="product_active" defaultValue="option1" defaultChecked />
                                                                    <label className="form-check-label" htmlFor="product_active">
                                                                        Active
                                                                    </label>
                                                                </div>
                                                                <div className="form-check form-check-inline">
                                                                    <input className="form-check-input" type="radio" name="status" value={formdata.status} id="product_inactive" defaultValue="option2" />
                                                                    <label className="form-check-label" htmlFor="product_inactive">
                                                                        Inactive
                                                                    </label>
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
                                        <tr>
                                            <td>2</td>
                                            <td>Neurology</td>
                                            <td><span className="custom-badge status-red">Inactive</span></td>
                                            <td className="text-right">
                                                <div className="dropdown dropdown-action">
                                                    <a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v" /></a>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a className="dropdown-item" href="edit-department.html"><i className="fa fa-pencil m-r-5" /> Edit</a>
                                                        <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_department"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Opthalmology</td>
                                            <td><span className="custom-badge status-green">Active</span></td>
                                            <td className="text-right">
                                                <div className="dropdown dropdown-action">
                                                    <a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v" /></a>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a className="dropdown-item" href="edit-department.html"><i className="fa fa-pencil m-r-5" /> Edit</a>
                                                        <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_department"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>Orthopedics</td>
                                            <td><span className="custom-badge status-red">Inactive</span></td>
                                            <td className="text-right">
                                                <div className="dropdown dropdown-action">
                                                    <a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v" /></a>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a className="dropdown-item" href="edit-department.html"><i className="fa fa-pencil m-r-5" /> Edit</a>
                                                        <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_department"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                     

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    )
}

export default Departments