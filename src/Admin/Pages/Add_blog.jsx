import React, { useEffect, useState } from 'react'
import Admin_header from '../Componest/Admin_header'
import { Helmet } from 'react-helmet'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

function Add_blog() {
    const redirect = useNavigate();
    useEffect(() => {
        if (!(localStorage.getItem('uid'))) {
            redirect('/login')
        }
    })
    const [formdata, setdata] = useState({
        blog_name: "",
        blog_img: "",
        blog_desc: ""
    })

    const onChangehandel = (e) => {
        setdata({ ...formdata, id: new Date().getTime().toString(), [e.target.name]: e.target.value })
        console.log(formdata);
    }
    function validation() {
        var ans = true
        if (formdata.blog_name == "") {
            toast.error("Please enter your name")
            ans = false;
            return false
        }
        if (formdata.blog_img == "") {
            toast.error("Please enter your image")
            ans = false
            return false
        }

        // if (formdata.blog_desc == "") {
        //     toast.error("Please enter your message")
        //     ans = false
        //     return false
        // }

        return ans
    }

    const onSubmithandel = async (e) => {
        e.preventDefault();
        if (validation()) {

            const result = await axios.post(`http://localhost:3000/Blog`, formdata)
            console.log(result);
            if (result.status == 201) {
                toast.success("data add success")
                setdata({ ...formdata, id: "", blog_name: "", blog_img: "", blog_desc: "" })
                redirect('/blog')
            }
        }
    }
    return (
        <div>
            <Helmet>
                <link rel="stylesheet" type="text/css" href="/Admin/css/tagsinput.css" />

                <script src="/Admin/js/jquery-3.2.1.min.js"></script>
                <script src="/Admin/js/popper.min.js"></script>
                <script src="/Admin/js/bootstrap.min.js"></script>
                <script src="/Admin/js/jquery.slimscroll.js"></script>
                <script src="/Admin/js/select2.min.js"></script>
                <script src="/Admin/js/tagsinput.js"></script>
                <script src="/Admin/js/app.js"></script>

            </Helmet>
            <Admin_header />
            <div className="page-wrapper">
                <div className="content">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <h4 className="page-title">Add Blog</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <form onChange={onChangehandel} onSubmit={onSubmithandel} method='post'>
                                <div className="form-group">
                                    <label>Blog Name</label>
                                    <input className="form-control" value={formdata.blog_name} name='blog_name' type="text" />
                                </div>
                                <div className="form-group">
                                    <label>Blog Images</label>
                                    <div>
                                        <input className="form-control" type="url" value={formdata.blog_img} name='blog_img' />
                                        <small className="form-text text-muted">Max. file size: 50 MB. Allowed images: jpg, gif, png. Maximum 10 images only.</small>
                                    </div>

                                </div>

                                <div className="form-group">
                                    <label>Blog Description</label>
                                    <textarea cols={30} rows={6} className="form-control" value={formdata.blog_desc} name='blog_desc' />
                                </div>
                                <div className="m-t-20 text-center">
                                    <button className="btn btn-primary submit-btn" >Publish Blog</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Add_blog