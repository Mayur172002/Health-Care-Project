import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Website/Pages/Home";


// import Contact from "./Website/Pages/Contact";
// import Doctors from "./Website/Pages/Doctors";
import News from "./Website/Pages/News";
import PNF from "./Website/Pages/PNF";
import Login from "./Admin/Pages/Login";
import Register from "./Admin/Pages/Register";
import Basic_form from "./Admin/Pages/Basic_form";
import Calendar from "./Admin/Pages/Calendar";
import Settings from "./Admin/Pages/Profile/Settings";
import Gallery from "./Admin/Pages/Gallery";
import Table from "./Admin/Pages/Table";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Payment from "./Website/Pages/Payment";
import Checkout from "./Website/Pages/Checkout";
import { Suspense, lazy } from "react";
import { GlobalStateProvider } from "./Website/Pages/GlobalStateProvider";
// import Web_login from "./Website/Pages/Web_login";
// import Web_signup from "./Website/Pages/Web_signup";
// import Web_patients from "./Website/Pages/Web_patients";
// import Pharmacy from "./Website/Pages/Pharmacy";
// import Web_profile from "./Website/Pages/Web_profile";
// import Edit_profile1 from "./Website/Pages/Edit_profile1";
// import View_shop from "./Website/Pages/View_shop";
// import Single_product from "./Website/Pages/Single_product";

const Contact = lazy(()=>import("./Website/Pages/Contact"))
const Doctors = lazy(()=>import("./Website/Pages/Doctors"))
const Web_login = lazy(()=>import("./Website/Pages/Web_login"))
const Web_signup = lazy(()=>import("./Website/Pages/Web_signup"))
const Web_patients = lazy(()=>import("./Website/Pages/Web_patients"))
const Pharmacy = lazy(()=>import("./Website/Pages/Pharmacy"))
const Edit_profile1 = lazy(()=>import("./Website/Pages/Edit_profile1"))
const Web_profile = lazy(()=>import("./Website/Pages/Web_profile"))
const View_shop = lazy(()=>import("./Website/Pages/View_shop"))
const Single_product = lazy(()=>import("./Website/Pages/Single_product"))

const Doctor = lazy(()=>import("./Admin/Pages/Doctor"))
const Dashboard = lazy(()=>import("./Admin/Pages/Dashboard"))
const Patients = lazy(()=>import("./Admin/Pages/Patients"))
const Add_doctor = lazy(()=>import("./Admin/Pages/Add_doctor"))
const Add_Patients = lazy(()=>import("./Admin/Pages/Add_Patients"))
const Appointments = lazy(()=>import("./Admin/Pages/Appointments"))
const Add_appointment = lazy(()=>import("./Admin/Pages/Add_appointment"))
const Ad_contact = lazy(()=>import("./Admin/Pages/Ad_contact"))
const Departments = lazy(()=>import("./Admin/Pages/Departments"))
const Add_department = lazy(()=>import("./Admin/Pages/Add_department"))
const Employees = lazy(()=>import("./Admin/Pages/Employees"))
const Add_employees = lazy(()=>import("./Admin/Pages/Add_employees"))
const Blog = lazy(()=>import("./Admin/Pages/Blog"))
const Categories = lazy(()=>import("./Admin/Pages/Categories"))
const Add_blog = lazy(()=>import("./Admin/Pages/Add_blog"))
const Add_categories = lazy(()=>import("./Admin/Pages/Add_categories"))
const Products = lazy(()=>import("./Admin/Pages/Products"))
const Add_products = lazy(()=>import("./Admin/Pages/Add_products"))
const Manage_user = lazy(()=>import("./Admin/Pages/Manage_user"))
const Myprofile = lazy(()=>import("./Admin/Pages/Profile/Myprofile"))
const Edit_profile = lazy(()=>import("./Admin/Pages/Profile/Edit_profile"))

function App() {
  return (
    <div >
    <BrowserRouter>
    <Suspense fallback={<div className='d-flex justify-content-center' style={{marginTop : "50vh" }}><div className="spinner-border ">
            </div></div>}>
    <ToastContainer/>
    <GlobalStateProvider>
    <Routes>
      <Route path="/" element={<Home/>}/>
      {/* <Route path="/about" element={<About/>}/> */}
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/doctors" element={<Doctors/>}/>
      <Route path="/news" element={<News/>}/>
      <Route path="/weblogin" element={<Web_login/>}/>
      <Route path="/websignup" element={<Web_signup/>}/>
      <Route path="/web_patients" element = {<Web_patients/>}/>
      <Route path="/web_profile" element={<Web_profile/>}/>
      <Route path="/edit_profile/:id" element={<Edit_profile1/>}/>
      <Route path="/pharmacy" element= {<Pharmacy/>}/>
      <Route path="/view_shop/:prod_id" element={<View_shop/>}/>
      <Route path="/single_product/:new_id" element={<Single_product/>}/>
      <Route path="/payment" element={<Payment/>}/>
      <Route path="/checkout" element={<Checkout/>}/>
      <Route path="*" element={<PNF/>}/>
      
      {/* ADMIN PANEL */}
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/adddoctor" element={<Add_doctor/>}/>
      <Route path="/doctor" element={<Doctor/>}/>
      <Route path="/patients" element={<Patients/>}/>
      <Route path="/addpatients" element={<Add_Patients/>}/>
      <Route path="/appointments" element={<Appointments/>}/>
      <Route path="/addappointment" element={<Add_appointment/>}/>
      <Route path="/departments" element={<Departments/>}/>
      <Route path="/adContact" element={<Ad_contact/>}/>
      <Route path="/adddapartment" element={<Add_department/>}/>
      <Route path="/employees" element={<Employees/>}/>
      <Route path="/addemployees" element={<Add_employees/>}/>
      <Route path="/blog" element={<Blog/>}/>
      <Route path="/addblog" element={<Add_blog/>}/>
      <Route path="/categories" element={<Categories/>}/> 
      <Route path="/addcategories" element={<Add_categories/>}/> 
      <Route path="/products" element={<Products/>}/>
      <Route path="/add_products" element={<Add_products/>}/>

      {/* Profile */}
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path='/edit_profile1/:id' element={<Edit_profile/>}/>
      <Route path="/Manage_user" element={<Manage_user/>}/>
      <Route path="/profiles" element={<Myprofile/>}/>


      <Route path="/basic form" element={<Basic_form/>}/>
      <Route path="/calendar" element={<Calendar/>}/>
      <Route path="/setting" element={<Settings/>}/>
      <Route path="/gallery" element={<Gallery/>}/>
      <Route path="/table" element={<Table/>}/>

    
    </Routes>
    </GlobalStateProvider>
    </Suspense>
    </BrowserRouter>
    </div>
  );
}

export default App;



