import React, { useContext, useEffect, useState } from 'react'
import Admin_header from '../Componest/Admin_header'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { toast } from 'react-toastify';

function Categories() {
    const redirect = useNavigate();
    useEffect(() => {
        if (!(localStorage.getItem('uid'))) {
            redirect('/login')
        }
        else {
            fetch();
        }
    }, [])

    const [search, setSearch] = useState('')
    const [data, setdata] = useState([]);
    const fetch = async () => {
        const result = await axios.get(`http://localhost:3000/Categories`);
        console.log(result.data);
        setdata(result.data)
    }

    const deleteHandel = async (id) => {
        const result = await axios.delete(`http://localhost:3000/Categories/${id}`);
        console.log(result.data);
        toast.error("your data deleted !!")
        fetch();

    }
    const [value, setvalue] = useState({
        id: "",
        name: "",
        image: "",
        products: "",
        disc :  ""
    })

    const editdata = async (id) => {
        const result = await axios.get(`http://localhost:3000/Categories/${id}`)
        console.log(result.data);
        setvalue(result.data)
    }

    const Changehandel = (e) => {
        setvalue({ ...value,[e.target.name]: e.target.value })
        console.log(value);
    }
    function vali() {
        var ans = true
        if (value.name == "") {
            toast.error("Please enter your name")
            ans = false;
            return false
        } if (value.image == "") {
            toast.error("Please enter your image")
            ans = false
            return false
        }
        if (value.products == "") {
            toast.error("Please enter your products")
            ans = false
            return false
        }
        return ans
    }
    const Submithandel = async (e) => {
        e.preventDefault();
        if (vali()) {
            const result = await axios.patch(`http://localhost:3000/Categories/${value.id}`, value)
            console.log(result.data);
            if (result.status == 200) {
                toast.success("Data Update Success!! ")
                setvalue({ ...value, name: "", image: "", products: "",disc : "" })
                redirect('/categories');
            }
        }

    }


    return (
        <div class="main-wrapper">
            <Admin_header />
            <div>
                <div className="page-wrapper">
                    <div className="content">
                        <div className="row">
                            <div className="col-sm-4 col-3">
                                <h4 className="page-title">Categories</h4>
                            </div>
                            <div className="col-sm-4 col-3">
                            <input type="text" className="form-control" placeholder="Enter keyword.." aria-label="Username" aria-describedby="icon-addon1"value={search} onChange={(e) => setSearch(e.target.value)}   />
                            </div>
                            <div className="col-sm-4 col-6 text-right m-b-20">
                                <NavLink to="/addcategories" className="btn btn btn-primary btn-rounded float-right"><i className="fa fa-plus" /> Add Categories</NavLink>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="table-responsive">
                                    <table className="table table-border table-striped custom-table mb-0">
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Categories Image</th>
                                                <th>Categories Name</th>
                                                <th> Products</th>
                                                <th className="text-right">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                data.filter((value) => {
                                                    return search === '' ? value : (value.name && value.name.
                                                      toLowerCase().includes(search.toLowerCase()));
                                                  }).map((value) => {
                                                    return (
                                                        <tr key={value.id}>
                                                            <td>{value.id}</td>
                                                            <td><img width={48} height={48} src={value.image} className="rounded-circle m-r-5" alt /></td>
                                                            <td> {value.name}</td>
                                                            <td>{value.products}</td>
                                                            <td className="text-right">
                                                                <div className="dropdown dropdown-action">
                                                                    <a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v" /></a>
                                                                    <div className="dropdown-menu dropdown-menu-right">
                                                                        <Link className="dropdown-item" to="javascript:void(0)" onClick={() => editdata(value.id)} data-bs-toggle="modal" data-bs-target="#myModal"><i className="fa fa-pencil m-r-5" /> Edit</Link>
                                                                        <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_schedule" onClick={() => deleteHandel(value.id)}><i className="fa fa-trash-o m-r-5" /> Delete</a>
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
                                                    <h4 className="modal-title">Edit Categories</h4>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" />
                                                </div>
                                                {/* Modal body */}
                                                <div className="modal-body">
                                                    <form method='post' onChange={Changehandel} onSubmit={Submithandel}>
                                                        <div className="row">
                                                            <div className='row'>
                                                                <div className='form-group'>
                                                                    <select value={value.id} name='id' className='form-control'>
                                                                        <option value="">Select Categories</option>
                                                                        {
                                                                            data && data.map((val) => {
                                                                                return (
                                                                                    <option value={val.id}>{val.name}</option>
                                                                                )
                                                                            })
                                                                        }
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="form-group">
                                                                    <label> Name</label>
                                                                    <input type='text' className="form-control" name='name' value={value.name}>
                                                                    </input>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="form-group">
                                                                    <label> Image</label>
                                                                    <input type='url' className="form-control" name='image' value={value.image}>
                                                                    </input>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <div className="form-group">
                                                                    <label>Products</label>
                                                                    <input type='text' className="form-control" name='products' value={value.products}>
                                                                    </input>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="form-group">
                                                                    <label>Disc</label>
                                                                    <input type='text' className="form-control" name='disc' value={value.disc}>
                                                                    </input>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="m-t-20 text-center">
                                                            <button className="btn btn-primary submit-btn"data-bs-dismiss="modal">Save</button>
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

            </div>

        </div>
    )
}

export default Categories