import React from 'react'

function Footar() {
    return (
        <div>
               <div className="page-section banner-home bg-image" style={{ backgroundImage: 'url(../Website/img/banner-pattern.svg)' }}>
                    <div className="container py-5 py-lg-0">
                        <div className="row align-items-center">
                            <div className="col-lg-4 wow zoomIn">
                                <div className="img-banner d-none d-lg-block">
                                    <img src="../Website/img/mobile_app.png" alt />
                                </div>
                            </div>
                            <div className="col-lg-8 wow fadeInRight">
                                <h1 className="font-weight-normal mb-3">Get easy access of all features using One Health Application</h1>
                                <a href="#"><img src="../Website/img/google_play.svg" alt /></a>
                                <a href="#" className="ml-2"><img src="../Website/img/app_store.svg" alt /></a>
                            </div>
                        </div> {/* .row */}
                    </div> {/* .container */}
                </div> {/* .banner-home */}
            <footer className="page-footer">
                <div className="container">
                    <div className="row px-md-3">
                        <div className="col-sm-6 col-lg-3 py-3">
                            <h5>Company</h5>
                            <ul className="footer-menu">
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Career</a></li>
                                <li><a href="#">Editorial Team</a></li>
                                <li><a href="#">Protection</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-6 col-lg-3 py-3">
                            <h5>More</h5>
                            <ul className="footer-menu">
                                <li><a href="#">Terms &amp; Condition</a></li>
                                <li><a href="#">Privacy</a></li>
                                <li><a href="#">Advertise</a></li>
                                <li><a href="#">Join as Doctors</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-6 col-lg-3 py-3">
                            <h5>Our partner</h5>
                            <ul className="footer-menu">
                                <li><a href="#">One-Fitness</a></li>
                                <li><a href="#">One-Drugs</a></li>
                                <li><a href="#">One-Live</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-6 col-lg-3 py-3">
                            <h5>Contact</h5>
                            <p className="footer-link mt-2">351 Willow Street Franklin, MA 02038</p>
                            <a href="#" className="footer-link">701-573-7582</a>
                            <a href="#" className="footer-link">healthcare@temporary.net</a>
                            <h5 className="mt-3">Social Media</h5>
                            <div className="footer-sosmed mt-3">
                                <a href="#" target="_blank"><span className="mai-logo-facebook-f" /></a>
                                <a href="#" target="_blank"><span className="mai-logo-twitter" /></a>
                                <a href="#" target="_blank"><span className="mai-logo-google-plus-g" /></a>
                                <a href="#" target="_blank"><span className="mai-logo-instagram" /></a>
                                <a href="#" target="_blank"><span className="mai-logo-linkedin" /></a>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <p id="copyright">Copyright © 2020 <a href="https://macodeid.com/" target="_blank">MACode ID</a>. All right reserved</p>
                </div>
            </footer>
        </div>

    )
}

export default Footar