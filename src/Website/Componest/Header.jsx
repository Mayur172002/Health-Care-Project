import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { GlobalStateContext } from '../Pages/GlobalStateProvider';

function Header() {
    const {search,setSearch} = useContext(GlobalStateContext)
  console.log(search);
    const redirect = useNavigate();

    const userlogout = () => {
        localStorage.removeItem("Wid");
        localStorage.removeItem("Wname");
        toast.success("Logout Success");
        redirect('/');
    }

    return (
        <div>
            <header>
                <div className="topbar">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-8 text-sm">
                                <div className="site-info">
                                    <a href="#"><span className="mai-call text-primary" /> +00 123 4455 6666</a>
                                    <span className="divider">|</span>
                                    <a href="#"><span className="mai-mail text-primary" /> mail@example.com</a>
                                </div>
                            </div>
                            <div className="col-sm-4 text-right text-sm">
                                <div className="social-mini-button">
                                    <a href="#"><span className="mai-logo-facebook-f" /></a>
                                    <a href="#"><span className="mai-logo-twitter" /></a>
                                    <a href="#"><span className="mai-logo-dribbble" /></a>
                                    <a href="#"><span className="mai-logo-instagram" /></a>
                                </div>
                            </div>
                        </div> {/* .row */}
                    </div> {/* .container */}
                </div> {/* .topbar */}
                <nav className="navbar navbar-expand-lg navbar-light shadow-sm">
                    <div className="container">
                        <NavLink className="navbar-brand" to="/"><span className="text-primary">One</span>-Health</NavLink>
                        <form action="#">
                            <div className="input-group input-navbar">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="icon-addon1"><span className="mai-search" /></span>
                                </div>
                                <input type="text" className="form-control" placeholder="Enter keyword.." aria-label="Username" aria-describedby="icon-addon1"  value={search} onChange={(e) => setSearch(e.target.value)} />
                            </div>
                        </form>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupport" aria-controls="navbarSupport" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupport">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/">Home</NavLink>
                                </li>
                                {/* <li className="nav-item">
                                    <NavLink className="nav-link" to="/about">About Us</NavLink>
                                </li> */}
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/web_patients">Patients</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/doctors">Doctors</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/pharmacy">Pharmacy</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/news">News</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/contact">Contact</NavLink>
                                </li>
                                {(() => {
                                    if (localStorage.getItem('Wid')) {
                                        return (
                                            <>
                                                {/* <li className="nav-item " >
                                                <span  className="nav-link">
                                                <i class="fa-solid fa-user me-2"></i>{localStorage.getItem('Wname')}
                                                </span>
                                            </li>
                                             <li className="nav-item">
                                             <a href="javascript:void(0)" onClick={userlogout}>
                                                    <i class="fa-solid fa-right-from-bracket ms-0"></i>
                                            </a>
                                         </li> */}
                                                <li className="nav-item dropdown has-arrow">
                                                    <a href="#" className="dropdown-toggle nav-link user-link" data-bs-toggle="dropdown">
                                                        <span className="user-img">
                                                            <img className="rounded-circle" src='' width={24} alt="" />
                                                            <span className="status online" />
                                                        </span>
                                                        <span className='ms-2'><i class="fa-solid fa-user me-2"/>{localStorage.getItem('Wname')}</span>
                                                    </a>
                                                    <div className="dropdown-menu">
                                                        <NavLink className="dropdown-item" to="/web_profile">My Profile</NavLink>
                                                        <NavLink className="dropdown-item" to="/edit_profile/1713616579606">Edit Profile</NavLink>
                                                        <NavLink className="dropdown-item" to="/Wsetting">Settings</NavLink>
                                                        <a className="dropdown-item " href="javascript:void(0)" onClick={userlogout}>Logout</a>
                                                    </div>
                                                </li>
                                            </>
                                        )

                                    }
                                    else {
                                        return (
                                            <li className="nav-item">
                                                <NavLink className="btn btn-primary ml-lg-3" to="/websignup">Sign Up</NavLink>
                                            </li>
                                        )
                                    }

                                })()}

                            </ul>
                        </div> {/* .navbar-collapse */}
                    </div> {/* .container */}
                </nav>
            </header>
        </div>

    )
}

export default Header