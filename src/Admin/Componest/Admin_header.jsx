import { Helmet } from 'react-helmet'
import { toast } from 'react-toastify'
import { NavLink, useNavigate } from 'react-router-dom'

function Admin_header() {
  const redirect = useNavigate();

  const userlogout = () => {
    localStorage.removeItem('uid')
    localStorage.removeItem('uname')
    toast.success("Logout Success");
    redirect('/dashboard')
    return false
  }

 
  return (
    <>
      <Helmet>

        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        <link rel="stylesheet" type="text/css" href="/Admin/css/bootstrap.min.css" />
        <link rel="stylesheet" type="text/css" href="/Admin/css/bootstrap-datetimepicker.min.css" />
        <link rel="stylesheet" type="text/css" href="/Admin/css/style.css" />
        <link rel="stylesheet" type="text/css" href="/Admin/css/select2.min.css" />
        <link rel="stylesheet" type="text/css" href="/Admin/css/font-awesome.min.css" />

        <script src="/Admin/js/jquery.slimscroll.js"></script>
        {/* <script src="/Admin/js/app.js" ></script> */}
        <script src="/Admin/js/popper.min.js"></script>
        <script src="/Admin/js/jquery-3.2.1.min.js"></script>
        <script src="/Admin/js/bootstrap.min.js"></script>

      </Helmet>


      <div class="main-wrapper">

        <div className="header">
          <div className="header-left">
            <a href="index-2.html" className="logo">
              <img src="/Admin/img/logo.png" width={35} height={35} alt /> <span>Preclinic</span>
            </a>
          </div>
          <a id="toggle_btn" href="javascript:void(0);"><i className="fa fa-bars" /></a>
          <a id="mobile_btn" className="mobile_btn float-left" href="#sidebar"><i className="fa fa-bars" /></a>
          <ul className="nav user-menu float-right">

            {/* {(()=>{
              if(a){
                return(a)
              }
              else{
                return(a)
              }
            })()} */}
            {(() => {
              if (localStorage.getItem('uid')) {
                return (
                  <li className="nav-item dropdown has-arrow">
                    <a href="#" className="dropdown-toggle nav-link user-link" data-bs-toggle="dropdown">
                      <span className="user-img">
                        <img className="rounded-circle" src='' width={24} alt="" />
                        <span className="status online" />
                      </span>
                      <span className='ms-2'>{localStorage.getItem('uname')}</span>
                    </a>
                    <div className="dropdown-menu">
                      <NavLink className="dropdown-item" to="/profiles">My Profile</NavLink>
                      <NavLink className="dropdown-item"  to="/edit_profile1/1712467095385">Edit Profile</NavLink>
                      <NavLink className="dropdown-item" to="/setting">Settings</NavLink>
                      <a className="dropdown-item " href="javascript:void(0)" onClick={userlogout}>Logout</a>
                    </div>
                  </li>
                )
              }
              else {
                return (
                  <li className="nav-item">
                    <NavLink className="btn btn-success ml-lg-3" to="/login">Login</NavLink>
                  </li>
                )
              }
            })()}
          </ul>
          <div className="dropdown mobile-user-menu float-right">
            <a href="#" className="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v" /></a>
            <div className="dropdown-menu dropdown-menu-right">
              <NavLink className="dropdown-item" to="/profiles">My Profile</NavLink>
              <NavLink className="dropdown-item" to="/edit_profile1/1712467095385">Edit Profile</NavLink>
              <NavLink className="dropdown-item" to="/setting">Settings</NavLink>
              <a className="dropdown-item " href="javascript:void(0)" onClick={userlogout}>Logout</a>
            </div>
          </div>
        </div>
        <div className="sidebar" id="sidebar">
          <div className="sidebar-inner slimscroll">
            <div id="sidebar-menu" className="sidebar-menu">
              <ul>
                <li className="menu-title">Main</li>
                <li className="active">
                  <NavLink to="/dashboard"><i className="fa fa-dashboard" /> <span>Dashboard</span></NavLink>
                </li>
                <li>
                  <NavLink to="/doctor"><i className="fa fa-user-md" /> <span>Doctors</span></NavLink>
                </li>
                <li>
                  <NavLink to="/patients"><i className="fa fa-wheelchair" /> <span>Patients</span></NavLink>
                </li>
                <li>
                  <NavLink to="/appointments"><i className="fa fa-calendar" /> <span>Appointments</span></NavLink>
                </li>
                <li>
                  <NavLink to="/categories"><i class="fa-solid fa-layer-group"></i> <span>Categories</span></NavLink>
                </li>
                <li>
                  <NavLink to="/products"><i class="fa-brands fa-shopify"></i> <span>Products</span></NavLink>
                </li>
                
                <li>
                  <NavLink to="/departments"><i className="fa fa-hospital-o" /> <span>Departments</span></NavLink>
                </li>
                <li className="submenu">
                  <NavLink to="/employees"><i className="fa fa-user" /> <span> Employees </span> <span className="menu-arrow" /></NavLink>
                  <ul style={{ display: 'none' }}>
                    <li><NavLink to="/employees">Employees List</NavLink></li>
                    <li><a href="leaves.html">Leaves</a></li>
                    <li><a href="holidays.html">Holidays</a></li>
                    <li><a href="attendance.html">Attendance</a></li>
                  </ul>
                </li>
                <li className="submenu">
                  <NavLink to="/blog"><i class="fa-solid fa-blog"></i> <span> Blog</span> <span className="menu-arrow" /></NavLink>
                  <ul style={{ display: 'none' }}>
                    <li><NavLink to="/blog">Blog</NavLink></li>
                    <li><a href="blog-details.html">Blog View</a></li>
                    <li><a href="add-blog.html">Add Blog</a></li>
                    <li><a href="edit-blog.html">Edit Blog</a></li>
                  </ul>
                </li>
                <li>
                  <NavLink to="/adContact"><i className="fa fa-commenting-o" /><span>Contact</span></NavLink>
                </li>
                <li>
                  <NavLink to="/Manage_user"><i class="fa-solid fa-circle-user"></i> <span>Users</span></NavLink>
                </li>
              
                {/* <li className="menu-title">UI Elements</li> */}

                {/* <li className="submenu">
                  <NavLink to="/basic form"><i className="fa fa-edit" /> <span> Forms</span> <span className="menu-arrow" /></NavLink>
                  <ul style={{ display: 'none' }}>
                    <li><NavLink to="/basic form">Basic Inputs</NavLink></li>
                    <li><a href="form-input-groups.html">Input Groups</a></li>
                    <li><a href="form-horizontal.html">Horizontal Form</a></li>
                    <li><a href="form-vertical.html">Vertical Form</a></li>
                  </ul>
                </li> */}
                {/* <li className="submenu">
                  <NavLink to="/table"><i className="fa fa-table" /> <span> Tables</span> <span className="menu-arrow" /></NavLink>
                  <ul style={{ display: 'none' }}>
                    <li><NavLink to="/table">Basic Tables</NavLink></li>
                    <li><a href="tables-datatables.html">Data Table</a></li>
                  </ul>
                </li> */}
                {/* <li>
                  <NavLink to="/calendar"><i className="fa fa-calendar" /> <span>Calendar</span></NavLink>
                </li> */}

                <li className="menu-title">Extras</li>
                <li className="submenu">
                  <a href="#"><i className="fa fa-columns" /> <span>Pages</span> <span className="menu-arrow" /></a>
                  <ul style={{ display: 'none' }}>
                    <li><NavLink to="/login"> Login </NavLink></li>
                    <li><NavLink to="/register"> Register </NavLink></li>
                    <li><a href="forgot-password.html"> Forgot Password </a></li>
                    <li><a href="change-password2.html"> Change Password </a></li>
                    <li><NavLink to="/profiles"> Profile </NavLink></li>
                    <li><NavLink to="/gallery"> Gallery </NavLink></li>
                    <li>
                      <NavLink to="/setting"><span>Settings</span></NavLink>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Admin_header