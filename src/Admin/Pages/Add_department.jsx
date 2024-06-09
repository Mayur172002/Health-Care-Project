import React, { useEffect, useState } from 'react'
import Admin_header from '../Componest/Admin_header'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom';

function Add_department() {
    const redirect = useNavigate();
    useEffect(() => {
        if (!(localStorage.getItem('uid'))) {
            redirect('/login')
        }
    })
    const [formdata, setformdata] = useState({
        name: "",
        disc: "",
        status: ""
    })
    const Changehandel = (e) => {
        setformdata({ ...formdata, id: new Date().getTime().toString(), [e.target.name]: e.target.value })
        console.log(formdata);
    }

    function validation() {
        var ans = true
        if (formdata.name == "") {
            toast.error("Please enter your name")
            ans = false;
            return false
        }
        if (formdata.disc == "") {
            toast.error("Please enter your message")
            ans = false
            return false
        }

        return ans
    }

    const Submithandel = async (e) => {
        e.preventDefault();
        if (validation()) {
            const result = await axios.post(`http://localhost:3000/Department`, formdata)
            console.log(result.data);
            if (result.status == 201) {
                toast.success("Data Add Success!! ")
                setformdata({ ...formdata, name: "", disc: "", status: "" })
                redirect('/departments')
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
                            <h4 className="page-title">Add Department</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
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
                                    <button className="btn btn-primary submit-btn">Create Department</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Add_department