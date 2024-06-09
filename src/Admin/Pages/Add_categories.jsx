import React, { useEffect, useState } from 'react'
import Admin_header from '../Componest/Admin_header'
import { Helmet } from 'react-helmet'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

function Add_categories() {

    const redirect = useNavigate() 
    useEffect(() => {
        if (!(localStorage.getItem('uid'))) {
            redirect('/login')
        }
        else{
            fetch()
        }
    })
    const [data ,setdata] = useState([])
    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/Categories`)
        console.log(res.data);
        setdata(res.data)
    }
    const [value, setvalue] = useState({
        id: "",
        name: "",
        image: "",
        products: "",
    })
    const Changehandel = (e) => {
        setvalue({ ...value, id: new Date().getTime().toString(), [e.target.name]: e.target.value })
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
            const result = await axios.post(`http://localhost:3000/Categories`, value)
            console.log(result.data);
            if (result.status == 201) {
                toast.success("Data Add Success!! ")
                setvalue({ ...value, name: "", image: "", products: "", })
                redirect('/categories');
            }
        }

    }
    return (
        <div>
            <Helmet>
                <script src="/Admin/js/select2.min.js"></script>
                <script src="/Admin/js/moment.min.js"></script>
                {/* <script src="/Admin/js/bootstrap-datetimepicker.min.js"></script> */}
            </Helmet>
            <Admin_header />
            <div className="page-wrapper">
                <div className="content">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <h4 className="page-title">Add Categories</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
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
                                    <button className="btn btn-primary submit-btn">Create Categories</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Add_categories