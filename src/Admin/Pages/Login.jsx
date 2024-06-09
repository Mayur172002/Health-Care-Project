import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'



function Login() {

    const redirect = useNavigate();

    useEffect(()=>{
        if(localStorage.getItem('uid')){
           redirect('/dashboard')
        }
    })
    const [formdata, setformdata] = useState({
        email: "",
        password: "",
    })

    const ChangeHandl = (e) => {
        setformdata({ ...formdata, [e.target.name]: e.target.value })
        console.log(formdata);
    }

    function validation() {
        var ans = true
        if (formdata.email == "") {
            toast.error("please enter your email");
            ans = false
            return false
        }
        if (formdata.password == "") {
            toast.error("please enter your password");
            ans = false
            return false
        }
        return ans
    }

    const SubmitHandel = async (e) => {
        e.preventDefault();
        if (validation()) {
            const res = await axios.get(`http://localhost:3000/ad_user?email=${formdata.email}`)
            //  console.log(res.data);
            if (res.data.length > 0) {

                if (res.data[0].password == formdata.password) {

                    if (res.data[0].status == "Unblock") {
                        localStorage.setItem("uid", res.data[0].id)
                        localStorage.setItem("uname", res.data[0].name)
                        toast.success("Login Success !!")
                        redirect('/dashboard')
                    }
                    else {
                        toast.error("Your Account Blocked Contact Health Care !!")
                        setformdata({ email: "", password: "" })
                        return false
                    }
                }
                else {
                    toast.error("password does not match !!")
                    setformdata({ ...formdata, email: "", password: "" })
                    return false
                }
            }
            else {
                toast.error("Email does not Exist !!")
                setformdata({ ...formdata, email: "", password: "" })
                return false
            }
        }

    }
    return (
        <div>
            <Helmet>
                <link rel="stylesheet" type="text/css" href="Admin/css/style.css" />
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
                <link rel="stylesheet" type="text/css" href="Admin/css/bootstrap.min.css" />
                <link rel="stylesheet" type="text/css" href="Admin/css/font-awesome.min.css" />
            </Helmet>
            <div className="main-wrapper account-wrapper">
                <div className="account-page">
                    <div className="account-center">
                        <div className="account-box">
                            <form className="form-signin" method='post' onChange={ChangeHandl} onSubmit={SubmitHandel}>
                                <div className="account-logo">
                                    <a href="index-2.html"><img src="Admin/img/logo-dark.png" alt /></a>
                                </div>
                                <div className="form-group">
                                    <label>Username or Email</label>
                                    <input type="text" autofocus className="form-control" name='email' value={formdata.email} />
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" className="form-control" name='password' value={formdata.password} />
                                </div>
                                <div className="form-group text-right">
                                    <a href="forgot-password.html">Forgot your password?</a>
                                </div>
                                <div className="form-group text-center">
                                    <button type="submit" className="btn btn-primary account-btn">Login</button>
                                </div>
                                <div className="text-center register-link">
                                    Don’t have an account? <NavLink to="/register">Register Now</NavLink>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Login