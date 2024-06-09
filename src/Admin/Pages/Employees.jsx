import React, { useEffect, useState } from 'react'
import Admin_header from '../Componest/Admin_header'
import { Helmet } from 'react-helmet'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

function Employees() {
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
        const res = await axios.get(`http://localhost:3000/Employee`)
        console.log(res.data);
        setdata(res.data)
    }
    const deleteHandel = async (id) => {
        const res = await axios.delete(`http://localhost:3000/Employee/${id}`)
        console.log(res.data)
        toast.error("delete success")
        fetch();
    }
    const [empdata, setempdata] = useState({
        name: "",
        email: "",
        img: "",
        date: "",
        phone: "",
        role: ""
    })
    const editdata = async (id) => {
        const result = await axios.get(`http://localhost:3000/Employee/${id}`)
        console.log(result.data);
        setempdata(result.data)
    }


    const ChangeHandel = (e) => {
        setempdata({ ...empdata, [e.target.name]: e.target.value })
        console.log(empdata);
    }
  
    const SubmitHandel = async (e) => {
        e.preventDefault();

            const result = await axios.patch(`http://localhost:3000/Employee/${empdata.id}`, empdata);
            console.log(result);
            if (result.status == 200) {
                toast.success("data Update success")
                setempdata({ ...empdata, id: "", name: "", img: "", email: "", date: "", phone: "", role: "" })
            }
    }
    return (
        <div>
            <Helmet>

                <link rel="stylesheet" type="text/css" href="Admin/css/dataTables.bootstrap4.min.css" />


                {/* <script src="Admin/js/jquery.dataTables.min.js"></script>
    <script src="Admin/js/dataTables.bootstrap4.min.js"></script> */}
                <script src="./Admin/js/select2.min.js"></script>
                <script src="./Admin/js/moment.min.js"></script>
                <script src="./Admin/js/bootstrap-datetimepicker.min.js"></script>

            </Helmet>
            <div class="main-wrapper">
                <Admin_header />
                <div>
                    <div className="page-wrapper">
                        <div className="content">
                            <div className="row">
                                <div className="col-sm-4 col-3">
                                    <h4 className="page-title">Employee</h4>
                                </div>
                                <div className="col-sm-8 col-9 text-right m-b-20">
                                    <NavLink to="/addemployees" className="btn btn-primary float-right btn-rounded"><i className="fa fa-plus" /> Add Employee</NavLink>
                                </div>
                            </div>
                            <div className="row filter-row">
                                <div className="col-sm-6 col-md-3">
                                    <div className="form-group form-focus">
                                        <label className="focus-label">Employee ID</label>
                                        <input type="text" className="form-control floating" />
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-3">
                                    <div className="form-group form-focus">
                                        <label className="focus-label">Employee Name</label>
                                        <input type="text" className="form-control floating" />
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-3">
                                    <div className="form-group form-focus select-focus">
                                        <label className="focus-label">Role</label>
                                        <select className="select floating">
                                            <option>Select Role</option>
                                            <option>Nurse</option>
                                            <option>Pharmacist</option>
                                            <option>Laboratorist</option>
                                            <option>Accountant</option>
                                            <option>Receptionist</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-3">
                                    <a href="#" className="btn btn-success btn-block"> Search </a>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="table-responsive">
                                        <table className="table table-striped custom-table">
                                            <thead>
                                                <tr>
                                                    <th style={{ minWidth: 200 }}>Name</th>
                                                    <th>Employee ID</th>
                                                    <th>Email</th>
                                                    <th>Mobile</th>
                                                    <th style={{ minWidth: 110 }}>Join Date</th>
                                                    <th>Role</th>
                                                    <th className="text-right">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    data && data.map((value) => {
                                                        return (

                                                            <tr>
                                                                <td>
                                                                    <img width={28} height={28} src={value.img} className="rounded-circle" alt /> <h2>{value.name}</h2>
                                                                </td>
                                                                <td>{value.id}</td>
                                                                <td>{value.email}</td>
                                                                <td>{value.phone}</td>
                                                                <td>{value.date}</td>
                                                                <td>
                                                                    <span className="custom-badge status-green">{value.role}</span>
                                                                </td>
                                                                <td className="text-right">
                                                                    <div className="dropdown dropdown-action">
                                                                        <a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v" /></a>
                                                                        <div className="dropdown-menu dropdown-menu-right">
                                                                            <Link className="dropdown-item" to="javascript:void(0)" onClick={() => editdata(value.id)} data-bs-toggle="modal" data-bs-target="#myModal"><i className="fa fa-pencil m-r-5" /> Edit</Link>
                                                                            <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_employee" onClick={() => deleteHandel(value.id)}><i className="fa fa-trash-o m-r-5" /> Delete</a>
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
                                                                <h4 className="modal-title">Edit Employees</h4>
                                                                <button type="button" className="btn-close" data-bs-dismiss="modal" />
                                                            </div>
                                                            {/* Modal body */}
                                                            <div className="modal-body">
                                                                <form onChange={ChangeHandel} onSubmit={SubmitHandel}>
                                                                    <div className="row">
                                                                        <div className="col-sm-12">
                                                                            <div className="form-group">
                                                                                <label>First Name <span className="text-danger">*</span></label>
                                                                                <input className="form-control" value={empdata.name} name='name' type="text" />
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-sm-12">
                                                                            <div className="form-group">
                                                                                <label>Email <span className="text-danger">*</span></label>
                                                                                <input className="form-control" value={empdata.email} name='email' type="email" />
                                                                            </div>
                                                                        </div>

                                                                        <div className="col-sm-6">
                                                                            <div className="form-group">
                                                                                <label>Image <span className="text-danger">*</span></label>
                                                                                <input type="url" value={empdata.img} name='img' className="form-control" />
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-sm-6">
                                                                            <div className="form-group">
                                                                                <label>Joining Date <span className="text-danger">*</span></label>
                                                                                <div className="cal-icon">
                                                                                    <input className="form-control datetimepicker" value={empdata.date} name='date' type="text" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-sm-6">
                                                                            <div className="form-group">
                                                                                <label>Phone </label>
                                                                                <input className="form-control" value={empdata.phone} name='phone' type="text" />
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-sm-6">
                                                                            <div className="form-group">
                                                                                <label >Role</label>
                                                                                <input className="form-control" value={empdata.role} name='phone' type="text" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="m-t-20 text-center">
                                                                        <button className="btn btn-primary submit-btn" data-bs-dismiss="modal" >Save</button>
                                                                    </div>
                                                                </form>

                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                                <tr>
                                                    <td>
                                                        <img width={28} height={28} src="Admin/img/user.jpg" className="rounded-circle" alt /> <h2>Albina Simonis</h2>
                                                    </td>
                                                    <td>NS-0001</td>
                                                    <td>albinasimonis@example.com</td>
                                                    <td>828-634-2744</td>
                                                    <td>7 May 2015</td>
                                                    <td>
                                                        <span className="custom-badge status-green">Nurse</span>
                                                    </td>
                                                    <td className="text-right">
                                                        <div className="dropdown dropdown-action">
                                                            <a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v" /></a>
                                                            <div className="dropdown-menu dropdown-menu-right">
                                                                <a className="dropdown-item" href="edit-employee.html"><i className="fa fa-pencil m-r-5" /> Edit</a>
                                                                <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_employee"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img width={28} height={28} src="Admin/img/user.jpg" className="rounded-circle" alt /> <h2>Cristina Groves</h2>
                                                    </td>
                                                    <td>DR-0001</td>
                                                    <td>cristinagroves@example.com</td>
                                                    <td>928-344-5176</td>
                                                    <td>1 Jan 2013</td>
                                                    <td>
                                                        <span className="custom-badge status-blue">Doctor</span>
                                                    </td>
                                                    <td className="text-right">
                                                        <div className="dropdown dropdown-action">
                                                            <a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v" /></a>
                                                            <div className="dropdown-menu dropdown-menu-right">
                                                                <a className="dropdown-item" href="edit-employee.html"><i className="fa fa-pencil m-r-5" /> Edit</a>
                                                                <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_employee"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img width={28} height={28} src="Admin/img/user.jpg" className="rounded-circle" alt /> <h2>Mary Mericle</h2>
                                                    </td>
                                                    <td>SF-0003</td>
                                                    <td>marymericle@example.com</td>
                                                    <td>603-831-4983</td>
                                                    <td>27 Dec 2017</td>
                                                    <td>
                                                        <span className="custom-badge status-grey">Accountant</span>
                                                    </td>
                                                    <td className="text-right">
                                                        <div className="dropdown dropdown-action">
                                                            <a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v" /></a>
                                                            <div className="dropdown-menu dropdown-menu-right">
                                                                <a className="dropdown-item" href="edit-employee.html"><i className="fa fa-pencil m-r-5" /> Edit</a>
                                                                <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_employee"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img width={28} height={28} src="Admin/img/user.jpg" className="rounded-circle" alt /> <h2>Haylie Feeney</h2>
                                                    </td>
                                                    <td>SF-0002</td>
                                                    <td>hayliefeeney@example.com</td>
                                                    <td>616-774-4962</td>
                                                    <td>21 Apr 2017</td>
                                                    <td>
                                                        <span className="custom-badge status-grey">Laboratorist</span>
                                                    </td>
                                                    <td className="text-right">
                                                        <div className="dropdown dropdown-action">
                                                            <a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v" /></a>
                                                            <div className="dropdown-menu dropdown-menu-right">
                                                                <a className="dropdown-item" href="edit-employee.html"><i className="fa fa-pencil m-r-5" /> Edit</a>
                                                                <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_employee"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img width={28} height={28} src="Admin/img/user.jpg" className="rounded-circle" alt /> <h2>Zoe Butler</h2>
                                                    </td>
                                                    <td>SF-0001</td>
                                                    <td>zoebutler@example.com</td>
                                                    <td>444-555-9999</td>
                                                    <td>19 May 2012</td>
                                                    <td>
                                                        <span className="custom-badge status-grey">Pharmacist</span>
                                                    </td>
                                                    <td className="text-right">
                                                        <div className="dropdown dropdown-action">
                                                            <a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v" /></a>
                                                            <div className="dropdown-menu dropdown-menu-right">
                                                                <a className="dropdown-item" href="edit-employee.html"><i className="fa fa-pencil m-r-5" /> Edit</a>
                                                                <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_employee"><i className="fa fa-trash-o m-r-5" /> Delete</a>
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
            </div>
        </div>
    )
}

export default Employees