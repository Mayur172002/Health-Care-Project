import React, { useEffect, useState } from 'react'
import Admin_header from '../Componest/Admin_header'
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


function Manage_user() {
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
        const res = await axios.get(`http://localhost:3000/user`)
        console.log(res.data)
        setdata(res.data);
    }
    const deleteHandel = async (id) => {
        const res = await axios.delete(`http://localhost:3000/user/${id}`)
        console.log(res.data)
        toast.error("your data deleted")
        fetch();

    }
    const StatusHandel = async (id) => {
        const result = await axios.get(`http://localhost:3000/user/${id}`)
        if (result.data.status == "Block") {
            const result1 = await axios.patch(`http://localhost:3000/user/${id}`, { status: "Unblock" })
            if (result1.status == 200) {
                console.log(result.data);
                toast.success('Unblock Success')
                fetch();
            }
        }
        else {
            const result1 = await axios.patch(`http://localhost:3000/user/${id}`, { status: "Block" })
            if (result1.status == 200) {
                localStorage.removeItem('Wid')
                localStorage.removeItem('Wname')
                console.log(result1.data);
                toast.success('Block Success')
                fetch();
            }
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
                                <h4 className="page-title">Manage User</h4>
                            </div>

                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="table-responsive">
                                    <table className="table table-border table-striped custom-table datatable mb-0">
                                        <thead>
                                            <tr>
                                                <th>Image</th>
                                                <th>Name</th>
                                                <th>Phone</th>
                                                <th>Email</th>
                                                <th className="text-right">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                data && data.map((value, index) => {
                                                    return (
                                                        <tr key={index} >
                                                            <td><img width={28} height={28} src={value.img} className="rounded-circle m-r-5" alt /></td>
                                                            <td>{value.name}</td>
                                                            <td>{value.mobile}</td>
                                                            <td>{value.email}</td>
                                                            <td className="text-right">
                                                                <div className="dropdown dropdown-action">
                                                                    <a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v" /></a>
                                                                    <div className="dropdown-menu dropdown-menu-right">
                                                                        {/* <a className="dropdown-item" href="edit-patient.html"><i className="fa fa-pencil m-r-5" /> Edit</a> */}
                                                                        <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_patient" onClick={() => deleteHandel(value.id)}><i className="fa fa-trash-o m-r-5" /> Delete</a>
                                                                        <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_patient" onClick={() => StatusHandel(value.id)}><i className="fa fa-trash-o m-r-5" />{value.status}</a>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                            }

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Manage_user
