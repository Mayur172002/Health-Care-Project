import React, { useEffect, useState } from 'react'
import Admin_header from '../Componest/Admin_header'
import axios from 'axios';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';


function Ad_contact() {
    const redirect = useNavigate();
    useEffect(() => {
        if (!(localStorage.getItem('uid'))) {
            redirect('/login')
        }
        else {
            fetch();
        }
    }, [])
    const [data, setdata] = useState([]);
    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/contacts`)
        console.log(res.data)
        setdata(res.data);
    }
    const deleteHandel = async (id) => {
        const res = await axios.delete(`http://localhost:3000/contacts/${id}`)
        console.log(res.data)
        toast.error("your data deleted")
        fetch();

    }
    const [formvalue, setformvalue] = useState({
        name: "",
        email: "",
        number: "",
        message: "",
        img: "",
    })
    const editdata = async (id) => {
        const result = await axios.get(`http://localhost:3000/contacts/${id}`)
        console.log(result.data);
        setformvalue(result.data)
    }


    const ChnageHandel = (e) => {
        setformvalue({ ...formvalue,[e.target.name]: e.target.value })
        console.log(formvalue);
    }


    const SubmitHandel = async (e) => {
        e.preventDefault();
            const result = await axios.patch(`http://localhost:3000/contacts/${formvalue.id}`, formvalue)
            console.log(result);
            if (result.status == 200) {
                toast.success("Data Update Success!! ")
                setformvalue({ ...formvalue, name: "", number: "", email: "", message: "", img: "" })
            }
    }
    return (
        <div class="main-wrapper">
            <Admin_header />
            <div className="main-wrapper">
                <div className="page-wrapper">
                    <div className="content">
                        <div className="row">
                            <div className="col-sm-4 col-3">
                                <h4 className="page-title">Contact</h4>
                            </div>

                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="table-responsive">
                                    <table className="table table-border table-striped custom-table datatable mb-0">
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>message</th>
                                                <th>Phone</th>
                                                <th>Email</th>
                                                <th className="text-right">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                data && data.map((value, index) => {
                                                    return (
                                                        <tr key={index}>
                                                            <td><img width={28} height={28} src={value.img} className="rounded-circle m-r-5" alt />{value.name}</td>
                                                            <td>{value.message}</td>
                                                            <td>{value.number}</td>
                                                            <td>{value.email}</td>

                                                            <td className="text-right">
                                                                <div className="dropdown dropdown-action">
                                                                    <a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v" /></a>
                                                                    <div className="dropdown-menu dropdown-menu-right">
                                                                        <Link className="dropdown-item" to="javascript:void(0)" onClick={() => editdata(value.id)} data-bs-toggle="modal" data-bs-target="#myModal"><i className="fa fa-pencil m-r-5" /> Edit</Link>
                                                                        <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_patient" onClick={() => deleteHandel(value.id)}><i className="fa fa-trash-o m-r-5" /> Delete</a>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                            }




                                        </tbody>
                                    </table>
                                    <div className="modal" id="myModal">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                {/* Modal Header */}
                                                <div className="modal-header">
                                                    <h4 className="modal-title">Edit Contact</h4>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" />
                                                </div>
                                                {/* Modal body */}
                                                <div className="modal-body">
                                                    <form className="contact-form mt-0" method='post' onChange={ChnageHandel} onSubmit={SubmitHandel}>
                                                        <div className="row mb-3">
                                                            <div className="col-sm-6 py-2 ">
                                                                <label htmlFor="fullName">Name</label>
                                                                <input type="text" id="fullName" name='name' value={formvalue.name} className="form-control" placeholder="Full name.." />
                                                            </div>
                                                            <div className="col-sm-6 py-2 ">
                                                                <label htmlFor="emailAddress">Email</label>
                                                                <input type="text" id="emailAddress" name='email' value={formvalue.email} className="form-control" placeholder="Email address.." />
                                                            </div>
                                                            <div className="col-12 py-2 ">
                                                                <label htmlFor="subject">Number</label>
                                                                <input type="number" id="subject" name='number' value={formvalue.number} className="form-control" placeholder="Enter Number.." />
                                                            </div>
                                                            <div className="col-12 py-2 ">
                                                                <label htmlFor="message">Message</label>
                                                                <textarea id="message" className="form-control" name='message' value={formvalue.message} rows={8} placeholder="Enter Message.." defaultValue={""} />
                                                            </div>
                                                            <div className="col-12 py-2 ">
                                                                <label htmlFor="subject">Image</label>
                                                                <input type="url" id="subject" name='img' value={formvalue.img} className="form-control" placeholder="" />
                                                            </div>
                                                        </div>
                                                        <button type="submit" className="btn btn-primary "data-bs-dismiss="modal">Save</button>
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

            </div>
        </div>

    )
}

export default Ad_contact