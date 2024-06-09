import React, { useEffect, useState } from 'react'
import Admin_header from '../Componest/Admin_header'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { toast } from 'react-toastify';

function Products() {
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
        const result = await axios.get(`http://localhost:3000/Products`);
        console.log(result.data);
        setdata(result.data)
    }

    const deleteHandel = async (id) => {
        const result = await axios.delete(`http://localhost:3000/Products/${id}`);
        console.log(result.data);
        toast.error("your data deleted !!")
        fetch();

    }
    const [value, setvalue] = useState({
        id: "",
        name: "",
        prod_id: "",
        image: "",
        price: "",
        disc: "",
    })
    const editdata = async (id) => {
        const result = await axios.get(`http://localhost:3000/Products/${id}`)
        console.log(result.data);
        setvalue(result.data)
    }
    const Changehandel = (e) => {
        setvalue({ ...value, [e.target.name]: e.target.value })
        console.log(value);
    }

    const Submithandel = async (e) => {
        e.preventDefault();
        const result = await axios.patch(`http://localhost:3000/Products/${value.id}`, value)
        console.log(result.data);
        if (result.status == 200) {
            toast.success("Data Update Success!! ")
            setvalue({ ...value, id: "", name: "", image: "", price: "", disc: "" })
        }
    }

    const productvalue = async (id) => {
        const result = await axios.get(`http://localhost:3000/Products/${id}`)
        if (result.data.productvalue == "False") {
            const result1 = await axios.patch(`http://localhost:3000/Products/${id}`, { productvalue: "True" })
            if (result1.status == 200) {
                toast.success('Data True Success')
                fetch();
            }
        }
        else {
            const result1 = await axios.patch(`http://localhost:3000/Products/${id}`, { productvalue: "False" })
            if (result1.status == 200) {
                toast.success('Data False Success')
                fetch();
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
                                <h4 className="page-title">Products</h4>
                            </div>
                            <div className="col-sm-8 col-9 text-right m-b-20">
                                <NavLink to="/add_products" className="btn btn btn-primary btn-rounded float-right"><i className="fa fa-plus" /> Add Products</NavLink>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="table-responsive">
                                    <table className="table table-border table-striped custom-table mb-0">
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Product ID</th>
                                                <th>Product Image</th>
                                                <th>Product Name</th>
                                                <th>Price</th>
                                                <th className="text-right">Product Value</th>
                                                <th className="text-right">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                data && data.map((value) => {
                                                    return (
                                                        <tr>
                                                            <td>{value.id}</td>
                                                            <td>{value.prod_id}</td>
                                                            <td><img width={48} height={48} src={value.image} className="rounded-circle m-r-5" style={{objectFit : "contain"}} alt /></td>
                                                            <td> {value.name}</td>
                                                            <td>{value.price}</td>
                                                            <td className="text-right">
                                                                <div className="dropdown dropdown-action">
                                                                    <a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v" /></a>
                                                                    <div className="dropdown-menu dropdown-menu-right">
                                                                        <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_schedule" onClick={() => productvalue(value.id)}><i className="fa fa-trash-o m-r-5" />{value.productvalue}</a>
                                                                    </div>
                                                                </div>
                                                            </td>
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
                                                    <h4 className="modal-title">Edit Products</h4>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" />
                                                </div>
                                                {/* Modal body */}
                                                <div className="modal-body">
                                                    <form method='post' onChange={Changehandel} onSubmit={Submithandel}>
                                                        <div className="row">

                                                            <div className="col-md-12">
                                                                <div className="form-group">
                                                                    <label> Name</label>
                                                                    <input type='text' className="form-control" name='name' value={value.name}>
                                                                    </input>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-12">
                                                                <div className="form-group">
                                                                    <label> Image</label>
                                                                    <input type='url' className="form-control" name='image' value={value.image}>
                                                                    </input>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-12">
                                                                <div className="form-group">
                                                                    <label>Price</label>
                                                                    <input type='text' className="form-control" name='price' value={value.price}>
                                                                    </input>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-12">
                                                                <div className="form-group">
                                                                    <label>Discount</label>
                                                                    <input type='text' className="form-control" name='disc' value={value.disc}>
                                                                    </input>
                                                                </div>

                                                            </div>
                                                        </div>
                                                        <div className="m-t-20 text-center">
                                                            <button className="btn btn-primary submit-btn" data-bs-dismiss="modal">Save</button>
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

export default Products