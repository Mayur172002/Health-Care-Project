import React, { useEffect, useState } from 'react'
import Header from '../Componest/Header'
import Footar from '../Componest/Footar'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

function Web_signup() {

    const redirect = useNavigate();

    useEffect(()=>{
        if(localStorage.getItem('Wid')){
          redirect('/weblogin') 
        }
    },[])
    const [formdata, setdata] = useState({
        name: "", 
        mobile : '',
        pass: '',
        email :"",
        img :"",
        chk : "",
        status : "Unblock"

    })
    const ChangeHandel = (e) => {
        setdata({ ...formdata, id: new Date().getTime().toString(), [e.target.name]: e.target.value })
        console.log(formdata);
    }

    function vali() {
        var ans = true
        if (formdata.name == "") {
            toast.error('please enter your name')
            ans = false
            return false
        }
        
        if (formdata.pass == "") {
            toast.error('please enter your password')
            ans = false
            return false
        }
          
        if (formdata.mobile == "") {
            toast.error('please enter your mobile')
            ans = false
            return false
        }
          
        if (formdata.email == "") {
            toast.error('please enter your email')
            ans = false
            return false
        }
          
        if (formdata.img == "") {
            toast.error('please enter your Image')
            ans = false
            return false
        }
        return ans             
    }
    const SubmitHandel = async (e) => {
        e.preventDefault();
        if (vali()) {
            const res_arr = await axios.get(`http://localhost:3000/user?email=${formdata.email}`)
            console.log(res_arr); //index = 0 
            if (res_arr.data.length > 0) 
            {
                toast.error('Email id already exist !!')
                setdata({ ...formdata, name: "", pass: "",email:"",mobile:"",img:"",chk:""})
                // return redirect('/')
            }
            else{
                const result = await axios.post(`http://localhost:3000/user`,formdata)
                console.log(result.data);
                if (result.status == 201) {
                    toast.success('your data add success')
                    setdata({ ...formdata, name: "", pass: "",email:"",mobile:"",img:"",chk:""})
                    return redirect('/')
                }
            }
        }
    }
  return (
    <div>
      <Header/>
         <div className="page-section">
                    <div className="container">
                        <h1 className="text-center wow fadeInUp">Welcome to One-Health</h1>
                        <form className="contact-form mt-5" onChange={ChangeHandel} onSubmit={SubmitHandel}>
                            <div className="row mb-3 mx-auto" style={{width : "450px"}}>
                                <div className="col-sm-12 py-2 wow fadeInLeft">
                                    <label htmlFor="fullName">Name</label>
                                    <input type="text" name='name' value={formdata.name} id="fullName" className="form-control" placeholder="Enter your Name .."/>
                                </div>
                                <div className="col-sm-12 py-2 wow fadeInRight">
                                    <label htmlFor="emailAddress">Mobile</label>
                                    <input type="text" name='mobile' value={formdata.mobile} id="emailAddress" className="form-control" placeholder="Enter your Number.." />
                                </div> 
                                <div className="col-sm-12 py-2 wow fadeInLeft">
                                    <label htmlFor="emailAddress">Email</label>
                                    <input type="text" name='email' value={formdata.email} id="emailAddress" className="form-control" placeholder="Enter your Email.." />
                                </div> 
                                <div className="col-sm-12 py-2 wow fadeInRight">
                                    <label htmlFor="emailAddress">Password</label>
                                    <input type="password" id="emailAddress" value={formdata.pass} name='pass' className="form-control" placeholder="Enter your Password.." />
                                </div> 
                                <div className="col-sm-12 py-2 wow fadeInRight">
                                    <label htmlFor="emailAddress">Image</label>
                                    <input type="url" id="emailAddress" value={formdata.img} name='img' className="form-control" placeholder="" />
                                </div> 
                                <div className='d-flex py-2'>
                                  <input type="checkbox" />
                                  <span name ="chk" value={formdata.chk}>  I have read and agree the Terms & Conditions</span>
                                </div>
                                <div className='d-flex justify-content-center mt-4' >
                                <button type="submit" className=" col-sm-12 btn btn-primary wow zoomIn">Sign Up</button>
                                </div>
                                <div className="text-center mt-5">
                                Already have an account?  <Link to="/weblogin"style={{textDecoration:"none"}} >Login</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <Footar/>
    </div>
  )
}

export default Web_signup