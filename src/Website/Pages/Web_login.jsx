
import React, { useEffect, useState } from 'react'
import Header from '../Componest/Header'
import Footar from '../Componest/Footar'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

function Web_login() {
    const redirect = useNavigate();
    useEffect(()=>{
        if(localStorage.getItem('Wid')){
          redirect('/') 
        }
    })

    const [mydata, setdata] = useState({
        email: "",
        pass: '',
       
    })
    const ChangeHandel = (e) => {
        setdata({ ...mydata, [e.target.name]: e.target.value })
        console.log(mydata);
    }

    function vali() {
        var ans = true
        if (mydata.email == "") {
            toast.error('please enter your email')
            ans = false
            return false
        }
        if (mydata.pass == "") {
            toast.error('please enter your password')
            ans = false
            return false
        }
        return ans;

    }
    const SubmitHandel = async (e) => {
        e.preventDefault();
        if (vali()) {
            const res_arr = await axios.get(`http://localhost:3000/user?email=${mydata.email}`)
            console.log(res_arr); //index = 0 
            if (res_arr.data.length > 0) 
            {

                if (res_arr.data[0].pass == mydata.pass)
                {

                  if(res_arr.data[0].status == "Unblock")
                  {
                   localStorage.setItem('Wid',res_arr.data[0].id);
                   localStorage.setItem('Wname',res_arr.data[0].name)
                   toast.success("Login Success !!")
                   return redirect('/');
                  } 
                  else
                  {
                    toast.error("Your Account Blocked Contact Health Care !!")
                    setdata({  email: "", pass: "" })
                    return false
                  }

                   
                }
                else {
                    toast.error("Password does not match !!")
                    setdata({ ...mydata, email: "", pass: "" })
                    return false
                }
            }
            else {
                toast.error("Email does not Exist !!")
                setdata({ ...mydata, email: "", pass: "" })
                return false
            }
        }
    }
    return (
        <div>
            <Header />
            <div className="page-section">
                <div className="container">
                    <h1 className="text-center wow fadeInUp">One-Health Login</h1>
                    <form className="contact-form mt-5" onChange={ChangeHandel} onSubmit={SubmitHandel} method='post'>
                        <div className="row mb-3 mx-auto" style={{ width: "450px" }}>
                            <div className="col-sm-12 py-2 wow fadeInLeft">
                                <label htmlFor="fullName">Username or Email</label>
                                <input type="text" id="fullName" name='email' value={mydata.email} className="form-control" placeholder="Enter your Username or Email.." />
                            </div>
                            <div className="col-sm-12 py-2 wow fadeInRight">
                                <label htmlFor="emailAddress">Password</label>
                                <input type="password" id="emailAddress" name='pass' value={mydata.pass} className="form-control" placeholder="Enter your Password.." />
                            </div>
                            <div className='d-flex justify-content-center mt-4' >
                                <button type="submit" className=" col-sm-12 btn btn-primary wow zoomIn" >Log in</button>
                            </div>
                            <div className="text-center mt-5">
                                Don’t have an account? <Link to="/websignup" style={{ textDecoration: "none" }} >Register Now</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <Footar />
        </div>
    )
}

export default Web_login