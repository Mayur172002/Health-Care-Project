import React, { useEffect, useState } from 'react'
import Admin_header from '../Componest/Admin_header'
import { Helmet } from 'react-helmet'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Add_appointment() {

    const redirect = useNavigate()
    useEffect(() => {
        if (!(localStorage.getItem('uid'))) {
            redirect('/login')
        }
    })
    const [value, setvalue] = useState({
        name: "",
        date: "",
        age  :"",
        doctor: "",
        email: "",
        number: '',
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
        } if (value.number == "") {
            toast.error("Please enter your number")
            ans = false
            return false
        }
      

        if (value.doctor == "") {
            toast.error("Please enter your doctor")
            ans = false
            return false
        }
        if (value.date == "") {
            toast.error("Please enter your date")
            ans = false
            return false
        }
        if (value.email == "") {
            toast.error("Please enter your email")
            ans = false
            return false
        }


        if (value.age == "") {
            toast.error("Please enter your age")
            ans = false
            return false
        }


        return ans
    }


    const Submithandel = async (e) => {
        e.preventDefault();
        if (validation()) {
            const result = await axios.post(`http://localhost:3000/Appointment`, value)
            console.log(result); // status = 201 update
            if (result.status == 201) {
                toast.success("Data Add Success!! ")
                setvalue({ ...value, name: "", email: "", number: "",  date: "", doctor: "", age: "", })
                redirect('/appointments')
            }
        }
    }
    return (
        <div>
            <Helmet>
                <script src="/Admin/js/select2.min.js"></script>
                <script src="/Admin/js/moment.min.js"></script>
                <script src="/Admin/js/bootstrap-datetimepicker.min.js"></script>
            </Helmet>
            <Admin_header />
            <div className="page-wrapper">
                <div className="content">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <h4 className="page-title">Add Appointment</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <form method='post' onChange={Changehandel} onSubmit={Submithandel}>
                                <div className="row">

                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Patient Name</label>
                                            <input type='text' className="form-control" name='name' value={value.name}>

                                            </input>
                                        </div>

                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Patient Number</label>
                                            <input type='url' className="form-control" name='number' value={value.number}>

                                            </input>
                                        </div>

                                    </div>

                                </div>
                                <div className="row">
                                  
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Doctor</label>
                                            <input type='text' className="form-control" name='doctor' value={value.doctor}>

                                            </input>
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
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Patient Email</label>
                                            <input className="form-control" type="email" name='email' value={value.email} />
                                        </div>
                                    </div>
                                  
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Age</label>
                                            <div className="time-icon">
                                                <input type="number" className="form-control" id="datetimepicker3" name='age' value={value.age} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                

                                <div className="m-t-20 text-center">
                                    <button className="btn btn-primary submit-btn">Create Appointment</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Add_appointment