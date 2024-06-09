import React, { useEffect, useState } from 'react'
import Admin_header from '../Componest/Admin_header'
import { Helmet } from 'react-helmet'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

function Add_employees() {
    const redirect = useNavigate();
    useEffect(() => {
        if (!(localStorage.getItem('uid'))) {
            redirect('/login')
        }
        else{
            fetch();
        }
    })

    const [data, setdata] = useState([]);
    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/Employee`)
        console.log(res.data);
        setdata(res.data)
    }

    const [empdata, setempdata] = useState({
        name: "",
        email: "",
        img: "",
        date: "",
        phone: "",
        role: ""
    })

    const ChangeHandel = (e) => {
        setempdata({ ...empdata, id: new Date().getTime().toString(), [e.target.name]: e.target.value })
        console.log(empdata);
    }
    function validation() {
        var ans = true
        if (empdata.name == "") {
            toast.error("Please enter your name")
            ans = false;
            return false
        }
        if (empdata.email == "") {
            toast.error("Please enter your email")
            ans = false
            return false
        }

        if (empdata.img == "") {
            toast.error("Please enter your image")
            ans = false
            return false
        }
        if (empdata.date == "") {
            toast.error("Please enter your date")
            ans = false
            return false
        }

        if (empdata.phone == "") {
            toast.error("Please enter your phone")
            ans = false
            return false
        }
        if (empdata.role == "") {
            toast.error("Please enter your role")
            ans = false
            return false
        }
        return true
    }
    const SubmitHandel = async (e) => {
        e.preventDefault();
        if (validation()) {

            const result = await axios.post(`http://localhost:3000/Employee`, empdata);
            console.log(result);
            if (result.status == 201) {
                toast.success("data add success")
                setempdata({ ...empdata, id: "", name: "", img: "", email: "", date: "", phone: "", role: "" })
            }
        }
    }
    return (
        <div>
            <Helmet>
                <script src="Admin/js/moment.min.js"></script>
                <script src="Admin/js/select2.min.js"></script>
                <script src="Admin/js/bootstrap-datetimepicker.min.js"></script>
            </Helmet>
            <Admin_header />
            <div className="page-wrapper">
                <div className="content">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <h4 className="page-title">Add Employee</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
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
                                            <select className="select" value={empdata.role} name="role">
                                                <option value="">Seletct the Role</option>
                                                <option value="Doctor">Doctor</option>
                                                <option value="Nurse">Nurse</option>
                                                <option value="Laboratorist">Laboratorist</option>
                                                <option value="Pharmacist">Pharmacist</option>
                                                <option value="Accountant">Accountant</option>
                                                <option value="Receptionist">Receptionist</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="m-t-20 text-center">
                                    <button className="btn btn-primary submit-btn">Create Employee</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Add_employees