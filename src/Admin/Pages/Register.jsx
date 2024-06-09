import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { NavLink,useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'



function Register() {
    const redirect = useNavigate();

    useEffect(()=>{
        if(localStorage.getItem('uid')){
           redirect('/dashboard')
        }
    })
    const [formdata, setformdata] = useState({
        name: "",
        email: "",
        number: "",
        password: '',
        image : "",
        address : "",
    })

    const ChangeHandel = (e) => {
        setformdata({ ...formdata, id: new Date().getTime().toString(), [e.target.name]: e.target.value })
        console.log(formdata);
    }

    function validation() {
        var answer = true

        if (formdata.name == "") {
            toast.error("please enter your name");
            answer = false
            return false
        }

        if (formdata.email == "") {
            toast.error("please enter your email");
            answer = false
            return false
        }
        if (formdata.password == "") {
            toast.error("please enter your password");
            answer = false
            return false
        }
        if (formdata.number == "") {
            toast.error("please enter your number");
            answer = false
            return false
        }
        if (formdata.image == "") {
            toast.error("please enter your image");
            answer = false
            return false
        }
        return answer
    }

    const SubmitHandel = async (e)=>{
        e.preventDefault();
     if(validation()){
        const res = await axios.get(`http://localhost:3000/ad_user?email=${formdata.email}`) 
       if(res.data.length>0){
        toast.error('Email already exist !!')
        setformdata({ ...formdata, name: "", password: "",email:"",number:"",image:""})
       }
        else{
            const res = await axios.post(`http://localhost:3000/ad_user`,formdata)
            console.log(res.data);  
            if (res.status == 201) {
             toast.success('your data add success')
        setformdata({ ...formdata, name: "",status : "Unblock", password: "",email:"",number:"",image:""})
         }
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
            <div className="main-wrapper  account-wrapper">
                <div className="account-page">
                    <div className="account-center">
                        <div className="account-box">
                            <form  className="form-signin" method='post' onChange={ChangeHandel} onSubmit={SubmitHandel}>
                                <div className="account-logo">
                                    <a href="index-2.html"><img src="Admin/img/logo-dark.png" alt /></a>
                                </div>
                                <div className="form-group">
                                    <label>Username</label>
                                    <input type="text" className="form-control" name='name' value={formdata.name} />
                                </div>
                                <div className="form-group">
                                    <label>Email Address</label>
                                    <input type="email" className="form-control" name='email' value={formdata.email} />
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" className="form-control" name='password' value={formdata.password} />
                                </div>
                                <div className="form-group">
                                    <label>Mobile Number</label>
                                    <input type="text" className="form-control" name='number' value={formdata.number} />
                                </div>
                                <div className="form-group">
                                    <label>Image</label>
                                    <input type="url" className="form-control" name='image' value={formdata.image} />
                                </div>
                                <div className="form-group checkbox">
                                    <label>
                                        <input type="checkbox" /> I have read and agree the Terms &amp; Conditions
                                    </label>
                                </div>
                                <div className="form-group text-center">
                                    <button className="btn btn-primary account-btn" type="submit">Signup</button>
                                </div>
                                <div className="text-center login-link">
                                    Already have an account? <NavLink to="/login">Login</NavLink>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Register