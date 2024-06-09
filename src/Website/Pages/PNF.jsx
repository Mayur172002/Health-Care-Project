import React from 'react'
import Header from '../Componest/Header'
import Footar from '../Componest/Footar'
import { NavLink } from 'react-router-dom'

function PNF() {
    return (
        <div>
            <Header />
            <div className="container mt-5 mb-5">
                <div className="row ">
                    <div className="col-md-12 py-5 wow zoomIn">
                           <h1 className='text-center'>Page not a found</h1>
                           <h2 className='text-center'>404</h2>
                           <div className='d-flex justify-content-center mt-3'>
                           <NavLink className='btn btn-primary' to="/" > Back</NavLink>
                           </div>
                    </div>
                </div>
            </div>
            <Footar />
        </div>
    )
}

export default PNF