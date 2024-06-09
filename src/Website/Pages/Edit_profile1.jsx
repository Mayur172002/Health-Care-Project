import React, { useEffect, useState } from 'react'
import Header from '../Componest/Header'
import Footar from '../Componest/Footar'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

import { toast } from 'react-toastify'

function Edit_profile1() {

    const redirect = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('uid')) {
            editdata();
        }
        else {
            redirect('/');
        }
    }, []);

    const [formvalue, setFormvalue] = useState({
        id: "",
        name: "",
        email: "",
        mobile: "",
        img: "",
    });

    const { id } = useParams();
    const editdata = async () => {
        const res = await axios.get(`http://localhost:3000/user/${id}`);
        console.log(res.data);
        setFormvalue(res.data);
    }


    const ChangeHandel = (e) => {
        setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
        console.log(formvalue);
    }

    function validation() {
        var ans = true;
        if (formvalue.name == "") {
            toast.error('Name Field is required');
            ans = false;
            return false;
        }
        if (formvalue.email == "") {
            toast.error('email Field is required');
            ans = false;
            return false;
        }

        if (formvalue.mobile == "") {
            toast.error('mobile Field is required');
            ans = false;
            return false;
        }
        if (formvalue.img == "") {
            toast.error('img Field is required');
            ans = false;
            return false;
        }
        return ans;
    }

    const SubmitHandel = async (e) => {
        e.preventDefault();
        if (validation()) {
            const res = await axios.patch(`http://localhost:3000/user/${id}`, formvalue);
            console.log(res);
            if (res.status == 200) {
                setFormvalue({ ...formvalue, id: "", name: "", email: "", mobile: "", img: "" });
                toast.success('Data Update Success');
                redirect('/web_profile');
            }
        }
    }


    return (
        <div>
            <Header />
            <div className="container profile mb-5 mt-5">
                <div className="main-body">
                    <form className="" onChange={ChangeHandel} onSubmit={SubmitHandel}>
                        <div className="row gutters-sm">
                            <div className="col-md-4 mb-3">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="profile-img-wrap">
                                            <img className="inline-block" src={formvalue.img} name='img' alt="user" />
                                            <input className="form-control" type="text" name='img' value={formvalue.img} />
                                           
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="card mb-3">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-sm-3 mt-3">
                                                <h6 className="mb-0">Full Name</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary" >
                                                <input type="text" name='name' value={formvalue.name} id="fullName" className="form-control" />
                                            </div>
                                        </div>
                                        <hr style={{ opacity: "1" }} />
                                        <div className="row">
                                            <div className="col-sm-3 mt-3">
                                                <h6 className="mb-0"> ID</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary" >
                                                <input type="text" name='id' value={formvalue.id} id="fullName" className="form-control" />
                                            </div>
                                        </div>
                                        <hr style={{ opacity: "1" }} />
                                        <div className="row">
                                            <div className="col-sm-3  mt-3">
                                                <h6 className="mb-0">Email</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary text-muted">
                                                <input type="text" name='email' value={formvalue.email} id="emailAddress" className="form-control" />
                                            </div>
                                        </div>
                                        <hr style={{ opacity: "1" }} />
                                        <div className="row">
                                            <div className="col-sm-3 mt-3">
                                                <h6 className="mb-0">Phone</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary ">
                                                <input type="text" name='mobile' value={formvalue.mobile} id="emailAddress" className="form-control" />
                                            </div>
                                        </div>
                                        <hr style={{ opacity: "1" }} />

                                        <div className="row">
                                            <div className="col-sm-12">
                                                <button className="btn btn-info" >Save</button>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <Footar />
        </div>
    )
}

export default Edit_profile1