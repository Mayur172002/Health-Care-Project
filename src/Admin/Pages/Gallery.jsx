import React from 'react'
import Admin_header from '../Componest/Admin_header'
import { Helmet } from 'react-helmet'

function Gallery() {
    return (
        <div>
            <Helmet>
                <link rel="stylesheet" type="text/css" href="Admin/css/bootstrap.min.css" />
                <link rel="stylesheet" type="text/css" href="Admin/css/font-awesome.min.css" />
                <link rel="stylesheet" type="text/css" href="Admin/plugins/light-gallery/css/lightgallery.min.css" />
                <link rel="stylesheet" type="text/css" href="Admin/css/style.css" />
                
                <script src="Admin/plugins/light-gallery/js/lightgallery-all.min.js"></script>
                <script src="Admin/js/jquery-3.2.1.min.js"></script>
                <script src="Admin/js/popper.min.js"></script>
                <script src="Admin/js/bootstrap.min.js"></script>
                <script src="Admin/js/jquery.slimscroll.js"></script>
                <script src="Admin/js/app.js"></script>
            </Helmet>
            <Admin_header />
            <div className="page-wrapper">
                <div className="content">
                    <div className="row">
                        <div className="col-sm-12">
                            <h4 className="page-title">Gallery</h4>
                        </div>
                    </div>
                    <div id="lightgallery" className="row">
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 m-b-20">
                            <a href="https://images.unsplash.com/photo-1618498082410-b4aa22193b38?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
                                <img className="img-thumbnail" src="https://images.unsplash.com/photo-1618498082410-b4aa22193b38?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt />
                            </a>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 m-b-20">
                            <a href="https://images.unsplash.com/photo-1578496479763-c21c718af028?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ">
                                <img className="img-thumbnail" src="https://images.unsplash.com/photo-1578496479763-c21c718af028?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D  " alt />
                            </a>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 m-b-20">
                            <a href="https://images.unsplash.com/photo-1624004015322-a94d3a4eff39?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
                                <img className="img-thumbnail" src="https://images.unsplash.com/photo-1624004015322-a94d3a4eff39?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt />
                            </a>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 m-b-20">
                            <a href="https://images.unsplash.com/photo-1588543385566-413e13a51a24?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
                                <img className="img-thumbnail" src="https://images.unsplash.com/photo-1588543385566-413e13a51a24?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt />
                            </a>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 m-b-20">
                            <a href="https://plus.unsplash.com/premium_photo-1682096894520-d7f7794c3981?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
                                <img className="img-thumbnail" src="https://plus.unsplash.com/premium_photo-1682096894520-d7f7794c3981?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt />
                            </a>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 m-b-20">
                            <a href="https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ">
                                <img className="img-thumbnail" src="https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D  " alt />
                            </a>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 m-b-20">
                            <a href="https://images.unsplash.com/photo-1551190822-a9333d879b1f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
                                <img className="img-thumbnail" src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt />
                            </a>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 m-b-20">
                            <a href="https://images.unsplash.com/photo-1511174511562-5f7f18b874f8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
                                <img className="img-thumbnail" src="https://images.unsplash.com/photo-1511174511562-5f7f18b874f8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt />
                            </a>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 m-b-20">
                            <a href="https://images.unsplash.com/photo-1609831647099-baaadf7dd44d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
                                <img className="img-thumbnail" src="https://images.unsplash.com/photo-1609831647099-baaadf7dd44d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt />
                            </a>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 m-b-20">
                            <a href="https://images.unsplash.com/photo-1587351021766-957e6e0efb66?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
                                <img className="img-thumbnail" src="https://images.unsplash.com/photo-1587351021766-957e6e0efb66?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt />
                            </a>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 m-b-20">
                            <a href="https://images.unsplash.com/photo-1607398027609-fbd1a06fb5d4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
                                <img className="img-thumbnail" src="https://images.unsplash.com/photo-1607398027609-fbd1a06fb5d4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt />
                            </a>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 m-b-20">
                            <a href="https://images.unsplash.com/photo-1542868727-6ebd18386391?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
                                <img className="img-thumbnail" src="https://images.unsplash.com/photo-1542868727-6ebd18386391?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Gallery