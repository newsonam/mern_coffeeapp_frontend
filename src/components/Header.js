import React,{useState} from 'react';
import './style.css';
import { NavLink,useNavigate } from "react-router-dom";
import { AiOutlineShoppingCart } from 'react-icons/ai';
function Header({counter,cartlength}) {
  const navigate=useNavigate();
  const [user,setUser]=useState({
    firstname:'',lastname:'',mobile:'',email:'',password:'',confirmpassword:''
});
const [login,setLogin]=useState({
  email:'',password:''
});

let name,value;
const handleInputs=(e)=>{
    console.log(e);
    name=e.target.name;
    value=e.target.value;
    setUser({...user,[name]:value});

}
const handleLogins=(e)=>{
  console.log(e);
  name=e.target.name;
  value=e.target.value;
  setLogin({...login,[name]:value});

}
  // post api for register
  const postData=async(e)=>{
    e.preventDefault();
    const {firstname,lastname,mobile,email,password,confirmpassword}=user;
    const res=await fetch("/register",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            firstname,lastname,mobile,email,password,confirmpassword
        })
    });
    const data=await res.json();
    if(data.status=== 422 || !data){
        window.alert("invalid register");
        console.log("invalid register");
    }
    else{
    window.alert("valid register");
    console.log("valid register");
    navigate('/contact');
    }
  }
  
  
  const postLogin=async(e)=>{
    e.preventDefault();
    const {email,password}=login;
    const res=await fetch("/login",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            email,password
        })
    });
    const status=await res.status;
    console.log("login data",status);
    if(status=== 401){
        window.alert("invalid credentials");
        console.log("invalid login");
    }
    else{
    window.alert("user signin successfully");
    console.log("valid register");
    navigate('/contact');
    }
  }
  
  
  

    return (
      <>
            <div className=" container-fluid bg-dark d-flex align-items-center justify-content-evenly p-2  mb-0">
    <div className="d-flex align-items-center justify-content-center">
    <img src="https://www.freepnglogos.com/uploads/coffee-logo-png/coffee-logo-symbol-19.png" alt="loading" width="80px" height="60px"/>
    <h3 className="text-primary coffeetitle">Coffee Junction</h3>
  </div>
  <ul className="d-flex justify-content-between gap-3 align-items-center mt-2">
    <li className='nav-item'>
      <NavLink to="/" className={({ isActive }) => (isActive ? "link-active" : "nav-link")} activeStyle={{ backgroundColor: 'pink' }} >Home</NavLink>
    </li>
    <li className='nav-item'>
      <NavLink to="/about" className={({ isActive }) => (isActive ? "link-active" : "nav-link")}>About</NavLink>
    </li>
    <li className='nav-item'>
      <NavLink   to="/menu" className={({ isActive }) => (isActive ? "link-active" : "nav-link")}>CafeMenu</NavLink>
    </li>
    <li className='nav-item'>
      <NavLink to="/contact" className={({ isActive }) => (isActive ? "link-active" : "nav-link")}>Contact</NavLink>
    </li>
    {/* <li className='nav-item>
      <Link  to="/displaycontact">Display</Link>
    </li> */}
   
  </ul>

  {/* <!-- use of modal --> */}
  {/* <!-- REGISTER Button trigger modal --> */}
  
  {/* <!-- Button trigger modal --> */}
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Sign Up
</button>

{/* <!-- Modal --> */}
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <form method='post'>
                                        <div class="mb-3">
                                            <label for="exampleInputFirstName" class="form-label d-flex justify-content-start">First Name</label>
                                            <input type="text" name="firstname" class="form-control" id="exampleInputFirstName" aria-describedby="emailHelp" value={user.firstname} onChange={handleInputs} autoComplete="off"/>
                                        </div>
                                        <div class="mb-3">
                                            <label for="exampleInputLastName" class="form-label d-flex justify-content-start">Last Name</label>
                                            <input type="text" name="lastname" class="form-control" id="exampleInputLastName" aria-describedby="emailHelp" value={user.lastname} onChange={handleInputs} autoComplete="off"/>
                                        </div>
                                        <div class="mb-3">
                                            <label for="exampleInputMobile" class="form-label d-flex justify-content-start">Mobile No.</label>
                                            <input type="text" name="mobile" class="form-control" id="exampleInputMobile" value={user.mobile} onChange={handleInputs} autoComplete="off"/>
                                        </div>
                                        <div class="mb-3">
                                            <label for="exampleInputEmailAddress" class="form-label d-flex justify-content-start">Email address</label>
                                            <input type="email" name="email" class="form-control" id="exampleInputEmailAddress" value={user.email} onChange={handleInputs} autoComplete="off" />
                                        </div>
                                        <div class="mb-3">
                                            <label for="exampleInputNewPassword" class="form-label d-flex justify-content-start">Password</label>
                                            <input type="password" name="password" class="form-control" id="exampleInputNewPassword" value={user.password} onChange={handleInputs} autoComplete="off" />
                                        </div>
                                        <div class="mb-3">
                                            <label for="exampleInputConfirmPassword" class="form-label d-flex justify-content-start">Confirm Password</label>
                                            <input type="password" name="confirmpassword" class="form-control" id="exampleInputConfirmPassword" value={user.confirmpassword} onChange={handleInputs} autoComplete="off"/>
                                        </div>
                                        <div class="d-grid gap-2">
                                            <button type="submit" value="submit" name="submit" class="btn btn-primary" onClick={postData}>Sign Up</button>
                                        </div>
                                    </form>

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        
      </div>
    </div>
  </div>
</div>

 



  {/* <!-- USE OF LOGIN MODAL -->


  <!-- Button trigger modal --> */}
<button type="button" className="btn btn-primary ms-2" data-bs-toggle="modal" data-bs-target="#staticBackdropLogin">
 Login
</button>

{/* <!-- Modal --> */}
<div className="modal fade" id="staticBackdropLogin" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="staticBackdropLoginLabel">Login Form</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body text-left">
        {/* <!-- Form elements --> */}
        <form method="get">
          <div className="mb-3 text-left">
            <label for="exampleInputEmail1" className="form-label d-flex justify-content-start">Email address</label>
            <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={login.email} onChange={handleLogins}/>
          </div>
          <div className="mb-3 text-left">
            <label for="exampleInputPassword1" className="form-label d-flex justify-content-start">Password</label>
            <input type="password" name="password" className="form-control" id="exampleInputPassword1" value={login.password} onChange={handleLogins}/>
          </div>
          <div className="mb-3 form-check text-left">
            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
            <label className="form-check-label d-flex justify-content-start" for="exampleCheck1">Remember Me</label>
          </div>
          <button type="submit" name="submit" value="submit" className="btn btn-primary" onClick={postLogin}>Login</button>
        </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        
      </div>
    </div>
  </div>
</div>
<NavLink to="/cartdetails">
<button><AiOutlineShoppingCart/> <span className="position-absolute top-2 start-25 translate-middle badge rounded-pill bg-danger">
{cartlength}
    <span className="visually-hidden">unread messages</span>
  </span></button></NavLink>
</div>


 </>       
    );
}

export default Header;
