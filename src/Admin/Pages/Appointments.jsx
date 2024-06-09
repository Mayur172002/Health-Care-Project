import React, { useEffect, useState } from 'react'
import Admin_header from '../Componest/Admin_header'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { toast } from 'react-toastify';

function Appointments() {
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
        const result = await axios.get(`http://localhost:3000/Appointment`)
        console.log(result.data)
        setdata(result.data)
    }

    const deleteHandel = async (id) => {
        const result = await axios.delete(`http://localhost:3000/Appointment/${id}`)
        console.log(result.data);
        toast.error("your data deleted")
        fetch();

    }

    const [value, setvalue] = useState({
        name: "",
        date: "",
        email: "",
        doctor: "",
        age: '',
        number :""
    })
    const editdata = async (id) => {
        const res = await axios.get(`http://localhost:3000/Appointment/${id}`)
        console.log(res);
        setvalue(res.data)
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
        } if (value.img == "") {
            toast.error("Please enter your image")
            ans = false
            return false
        }
        if (value.Department == "") {
            toast.error("Please enter your Department")
            ans = false
            return false
        }

        if (value.doctor == "") {
            toast.error("Please enter your doctor")
            ans = false
            return false
        }
        if (value.email == "") {
            toast.error("Please enter your email")
            ans = false
            return false
        }


        if (value.time == "") {
            toast.error("Please enter your time")
            ans = false
            return false
        }


        return ans
    }


    const Submithandel = async (e) => {
        e.preventDefault();
        if (validation()) {
            const result = await axios.patch(`http://localhost:3000/Appointment/${value.id}`, value)
            console.log(result); 
            if (result.status == 200) {
                toast.success("Data Update Success!! ")
                setvalue({ ...value, name: "", email: "", Department: "", img: "", time: "", date: "", doctor: "", age: "", })
                redirect('/appointments')
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
                            <h4 className="page-title">Appointments</h4>
                        </div>
                        <div className="col-sm-8 col-9 text-right m-b-20">
                            <NavLink to="/addappointment" className="btn btn btn-primary btn-rounded float-right"><i className="fa fa-plus" /> Add Appointment</NavLink>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="table-responsive">
                                <table className="table table-striped custom-table">
                                    <thead>
                                        <tr>
                                            <th>Patient Name</th>
                                            <th>Age</th>
                                            <th>Doctor Name</th>
                                            <th>Email</th>
                                            <th>Date</th>
                                            <th>Number</th>
                                            <th className="text-right">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            data && data.map((val) => {
                                                return (

                                                    <tr>
                                                        <td>{val.name}</td>
                                                        <td>{val.age}</td>
                                                        <td>{val.doctor}</td>
                                                        <td>{val.email}</td>
                                                        <td>{val.date}</td>
                                                        <td>{val.number}</td>
                                                        <td className="text-right">
                                                            <div className="dropdown dropdown-action">
                                                                <a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v" /></a>
                                                                <div className="dropdown-menu dropdown-menu-right">
                                                                    <Link className="dropdown-item" to="javascript:void(0)" onClick={() => editdata(val.id)} data-bs-toggle="modal" data-bs-target="#myModal"><i className="fa fa-pencil m-r-5" /> Edit</Link>
                                                                    <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_appointment" onClick={() => deleteHandel(val.id)}  ><i className="fa fa-trash-o m-r-5" /> Delete</a>
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
                                                <h4 className="modal-title">Edit Appointments</h4>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" />
                                            </div>
                                            {/* Modal body */}
                                            <div className="modal-body">
                                                <form method='post' onChange={Changehandel} onSubmit={Submithandel}>
                                                    <div className="row">

                                                        <div className="col-md-12">
                                                            <div className="form-group">
                                                                <label>Patient Name</label>
                                                                <input type='text' className="form-control" name='name' value={value.name}>

                                                                </input>
                                                            </div>

                                                        </div>
                                                        {/* <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label>Patient img</label>
                                                                <input type='url' className="form-control" name='img' value={value.img}>

                                                                </input>
                                                            </div>

                                                        </div> */}

                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label>Number</label>
                                                                <input type='text' className="form-control" name='number' value={value.number}>
                                                                </input>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label>Doctor</label>
                                                                <input type='text' className="form-control" name='doctor' value={value.doctor}>

                                                                </input>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label>Patient Email</label>
                                                                <input className="form-control" type="email" name='email' value={value.email} />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label>Date</label>
                                                                <div className="cal-icon">
                                                                    <input type="text" className="form-control datetimepicker" name='date' value={value.date} />
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div className="row">
                                                        {/* <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label>Time</label>
                                                                <div className="time-icon">
                                                                    <input type="text" className="form-control" id="datetimepicker3" name='time' value={value.time} />
                                                                </div>
                                                            </div>
                                                        </div> */}
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label>Age</label>
                                                                <div className="">
                                                                    <input type="number" className="form-control" id="datetimepicker3" name='age' value={value.age} />
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

    )
}

export default Appointments