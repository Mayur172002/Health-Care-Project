import React, { useEffect, useState } from 'react'
import Admin_header from '../Componest/Admin_header'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { toast } from 'react-toastify';

function Blog() {
    const redirect = useNavigate();
    useEffect(() => {
        if (!(localStorage.getItem('uid'))) {
            redirect('/login')
        }
        else {
            fetch();
        }
    }, [])
    const [data, setmydata] = useState([]);
    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/Blog`)
        console.log(res.data);
        setmydata(res.data)
    }
    const deleteHandel = async (id) => {
        const result = await axios.delete(`http://localhost:3000/Blog/${id}`);
        console.log(result.data);
        toast.error("your data deleted !!")
        fetch();

    }
    const [formdata, setdata] = useState({
        blog_name: "",
        blog_img: "",
        blog_desc: ""
    })
    const editdata = async (id) => {
        const result = await axios.get(`http://localhost:3000/Blog/${id}`)
        console.log(result.data);
        setdata(result.data)
    }
    const onChangehandel = (e) => {
        setdata({ ...formdata,[e.target.name]: e.target.value })
        console.log(formdata);
    }
    const onSubmithandel = async (e) => {
        e.preventDefault();
            const result = await axios.patch(`http://localhost:3000/Blog/${formdata.id}`, formdata)
            console.log(result);
            if (result.status == 200) {
                toast.success("data Update success")
                setdata({ ...formdata, id: "", blog_name: "", blog_img: "", blog_desc: "" })
                redirect('/blog')
            }
    }

    return (
        <div>
            <div class="main-wrapper">
                <Admin_header />
                <div className="page-wrapper">
                    <div className="content">
                        <div className="row">
                            <div className="col-sm-8 col-4">
                                <h4 className="page-title">Blog</h4>
                            </div>
                            <div className="col-sm-4 col-8 text-right m-b-30">
                                <NavLink className="btn btn-primary btn-rounded float-right" to="/addblog"><i className="fa fa-plus" /> Add Blog</NavLink>
                            </div>
                        </div>
                        <div className="row">
                            {
                                data && data.map((value) => {
                                    return (
                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                            <div className="blog grid-blog">
                                                <div className="blog-image">
                                                    <a href="blog-details.html"><img src={value.blog_img} alt="" /></a>
                                                </div>
                                                <div className="blog-content">
                                                    <h3 className="blog-title"><a href="blog-details.html">{value.blog_name}</a></h3>
                                                    <p>{value.blog_desc}</p>
                                                    <a href="blog-details.html" className="read-more"><i className="fa fa-long-arrow-right" /> Read More</a>
                                                    <div className="blog-info clearfix">
                                                        <div className="post-left">
                                                            <ul>
                                                                <li><a href="#."><i className="fa fa-calendar" /> <span>December 6, 2017</span></a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="post-right">
                                                            <Link className="btn btn-primary text-light" to="javascript:void(0)" onClick={() => editdata(value.id)} data-bs-toggle="modal" data-bs-target="#myModal">Edit</Link>
                                                            <button className='btn btn-primary' onClick={() => deleteHandel(value.id)}>Delete</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            <div className="modal" id="myModal">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        {/* Modal Header */}
                                        <div className="modal-header">
                                            <h4 className="modal-title">Edit Blog</h4>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" />
                                        </div>
                                        {/* Modal body */}
                                        <div className="modal-body">
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

                                             
                                                <div className="m-t-20 text-center">
                                                    <button className="btn btn-primary submit-btn" data-bs-dismiss="modal" >Save</button>
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
    )
}

export default Blog