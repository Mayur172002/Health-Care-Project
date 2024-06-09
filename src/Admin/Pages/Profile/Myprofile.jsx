import React, { useEffect, useState } from 'react'
import Admin_header from '../../Componest/Admin_header'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

function Myprofile() {
    const redirect = useNavigate();
    useEffect(() => {
        if (!(localStorage.getItem('uid'))) {
            redirect('/dashboard')
        }
        else {
            fetch();
        }
    })

    const [data, setdata] = useState({});
    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/ad_user/${localStorage.getItem('uid')}`)
        console.log(res.data)
        setdata(res.data);
    }
    const [value, setvalue] = useState({
        name: "",
        id: "",
        image: "",
        number: "",
        email: "",
    })
    const editdata = async (id) => {
        const res = await axios.get(`http://localhost:3000/ad_user/${id}`)
        console.log(res.data)
        setvalue(res.data);
    }

    const Changehandel = (e) => {
        setvalue({ ...value, [e.target.name]: e.target.value })
        console.log(value);
    }
 


    const Submithandel = async (e) => {
        e.preventDefault();
            const result = await axios.patch(`http://localhost:3000/ad_user/${value.id}`, value)
            console.log(result); // status = 200 edit
            if (result.status == 200) {
                toast.success("Data Update Success!! ")
                setvalue({ ...value, name: "", email: "", number: "", image: "" ,id:"",})
                redirect('/profiles');
            }
    }
    return (
        <div>
            <div class="main-wrapper">
                <Admin_header />
                <div className="page-wrapper">
                    <div className="content">
                        <div className="row">
                            <div className="col-sm-7 col-6">
                                <h4 className="page-title">My Profile</h4>
                            </div>
                            <div className="col-sm-5 col-6 text-right m-b-30">
                                {/* <Link to="javascript:void(0)" onClick={() => editdata(data.id)} data-bs-toggle="modal" data-bs-target="#myModal" className="btn btn-primary btn-rounded"><i className="fa fa-plus" /> Edit Profile</Link> */}
                                <Link to="javascript:void(0)" onClick={() => redirect('/edit_profile1/' + data.id)}  className="btn btn-primary btn-rounded"><i className="fa fa-plus" /> Edit Profile</Link>
                            </div>
                            <div className="modal" id="myModal">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        {/* Modal Header */}
                                        <div className="modal-header">
                                            <h4 className="modal-title">Edit Profile</h4>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" />
                                        </div>
                                        {/* Modal body */}
                                        <div className="modal-body">
                                            <form onChange={Changehandel} onSubmit={Submithandel}>
                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <div className="form-group">
                                                            <label>First Name <span className="text-danger">*</span></label>
                                                            <input className="form-control" value={value.name} name='name' type="text" />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <div className="form-group">
                                                            <label>id <span className="text-danger">*</span></label>
                                                            <input className="form-control" value={value.id} name='id' type="text" />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-12">
                                                        <div className="row">
                                                            <div className="col-sm-6">
                                                                <div className="form-group">
                                                                    <label>Email</label>
                                                                    <input type="text" name='email' value={value.email} className="form-control " />
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-6">
                                                                <div className="form-group">
                                                                    <label>Number</label>
                                                                    <input type="text" name='number' value={value.number} className="form-control " />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-12">
                                                        <div className="row">
                                                            <div className="col-sm-12">
                                                                <div className="form-group">
                                                                    <label>image</label>
                                                                    <div className="profile-upload">
                                                                        <div className="upload-img">
                                                                            <img alt src="Admin/img/user.jpg" />
                                                                        </div>
                                                                        <div className="upload-input">
                                                                            <input type="url" name='image' value={value.image} className="form-control" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="m-t-20 text-center">
                                                    <button className="btn btn-primary submit-btn"  data-bs-dismiss="modal">Save</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="card-box profile-header">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="profile-view">
                                        <div className="profile-img-wrap">
                                            <div className="profile-img">
                                                <a href="#"><img className="avatar" src={data.image} alt /></a>
                                            </div>
                                        </div>
                                        <div className="profile-basic">
                                            <div className="row">
                                                <div className="col-md-5">
                                                    <div className="profile-info-left">
                                                        <h3 className="user-name m-t-0 mb-0">{data.name}</h3>
                                                        <small className="text-muted">Gynecologist</small>
                                                        <div className="staff-id">Employee ID : {data.id}</div>
                                                        <div className="staff-msg"><a href="chat.html" className="btn btn-primary">Send Message</a></div>
                                                    </div>
                                                </div>
                                                <div className="col-md-7">
                                                    <ul className="personal-info">
                                                        <li>
                                                            <span className="title">Phone:</span>
                                                            <span className="text"><a href="#">{data.number}</a></span>
                                                        </li>
                                                        <li>
                                                            <span className="title">Email:</span>
                                                            <span className="text"><a href="#">{data.email}</a></span>
                                                        </li>
                                                        <li>
                                                            <span className="title">Birthday:</span>
                                                            <span className="text">3rd March</span>
                                                        </li>
                                                        <li>
                                                            <span className="title">Address:</span>
                                                            <span className="text">714 Burwell Heights Road, Bridge City, TX, 77611</span>
                                                        </li>
                                                        <li>
                                                            <span className="title">Gender:</span>
                                                            <span className="text">Male</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="profile-tabs">
                            <ul className="nav nav-tabs nav-tabs-bottom">
                                <li className="nav-item"><a className="nav-link active" href="#about-cont" data-toggle="tab">About</a></li>
                                <li className="nav-item"><a className="nav-link" href="#bottom-tab2" data-toggle="tab">Profile</a></li>
                                <li className="nav-item"><a className="nav-link" href="#bottom-tab3" data-toggle="tab">Messages</a></li>
                            </ul>
                            <div className="tab-content">
                                <div className="tab-pane show active" id="about-cont">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="card-box">
                                                <h3 className="card-title">Education Informations</h3>
                                                <div className="experience-box">
                                                    <ul className="experience-list">
                                                        <li>
                                                            <div className="experience-user">
                                                                <div className="before-circle" />
                                                            </div>
                                                            <div className="experience-content">
                                                                <div className="timeline-content">
                                                                    <a href="#/" className="name">International College of Medical Science (UG)</a>
                                                                    <div>MBBS</div>
                                                                    <span className="time">2001 - 2003</span>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="experience-user">
                                                                <div className="before-circle" />
                                                            </div>
                                                            <div className="experience-content">
                                                                <div className="timeline-content">
                                                                    <a href="#/" className="name">International College of Medical Science (PG)</a>
                                                                    <div>MD - Obstetrics &amp; Gynaecology</div>
                                                                    <span className="time">1997 - 2001</span>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="card-box mb-0">
                                                <h3 className="card-title">Experience</h3>
                                                <div className="experience-box">
                                                    <ul className="experience-list">
                                                        <li>
                                                            <div className="experience-user">
                                                                <div className="before-circle" />
                                                            </div>
                                                            <div className="experience-content">
                                                                <div className="timeline-content">
                                                                    <a href="#/" className="name">Consultant Gynecologist</a>
                                                                    <span className="time">Jan 2014 - Present (4 years 8 months)</span>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="experience-user">
                                                                <div className="before-circle" />
                                                            </div>
                                                            <div className="experience-content">
                                                                <div className="timeline-content">
                                                                    <a href="#/" className="name">Consultant Gynecologist</a>
                                                                    <span className="time">Jan 2009 - Present (6 years 1 month)</span>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="experience-user">
                                                                <div className="before-circle" />
                                                            </div>
                                                            <div className="experience-content">
                                                                <div className="timeline-content">
                                                                    <a href="#/" className="name">Consultant Gynecologist</a>
                                                                    <span className="time">Jan 2004 - Present (5 years 2 months)</span>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane" id="bottom-tab2">
                                    Tab content 2
                                </div>
                                <div className="tab-pane" id="bottom-tab3">
                                    Tab content 3
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Myprofile