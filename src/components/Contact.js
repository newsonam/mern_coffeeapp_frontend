
import React,{useState,useEffect} from 'react';
import './style.css';
function Contact(props) {
    const [userData,setUserData]=useState({
        firstname:"",
        email:"",
        mobile:"",
        circle:"",
        city:"",
        state:"",
        message:""
    });
    const userContact=async()=>{
        try{
            const res=await fetch('/getdata',{
                method:"GET",
                headers:{
                    "Content-Type":"application/json"
                },
            });
            const data=await res.json();
            console.log(data);
            setUserData({...userData,firstname:data.firstname,
            email:data.email,mobile:data.mobile,circle:data.circle,
            city:data.city,state:data.state,message:data.message
            });
            if(!res.status===200)
            {
                const error=new Error(res.error);
                throw error;
            }
        }catch(err){
            console.log(err);
        }
    }
    useEffect(()=>{
        userContact();
    },[]);


const handleInputs=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    setUserData({...userData,[name]:value});
}

const contactForm=async(e)=>{
    e.preventDeafult();
    const {firstname,email,mobile,circle,city,state,message}=userData;
    const res=await fetch('/contact',{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            firstname,email,mobile,circle,city,state,message
        })
    });
    const data=await res.json();
    if(!data){
        console.log("message send");
    }
    else{
        alert("message send");
        setUserData({...userData,message:""});
    }
}

    return (
        <div className="contact-wrapper">
             <h2 class=" text-center text-danger text-bold mb-4 mt-0">Contact us</h2>
        <div class="container w-50 my-0 mx-auto">
            <form  method="POST">


                <div class="row mt-3">
                    <div class="col-md-6">
                        <label for="exampleFormControlName" class="form-label d-flex justify-content-start">Name*</label>
                        <input type="text" class="form-control" name="firstname" value={userData.firstname} id="exampleFormControlName" onChange={handleInputs} required />
                    </div>
                    <div class="col-md-6">
                        <label for="exampleFormControlName" class="form-label d-flex justify-content-start">Circle*</label>
                        <select class="form-select" aria-label="Default select example" name="circle" value={userData.circle} onChange={handleInputs}  required>
                            <option selected>Select Subject</option>
                            <option value="Order Information">Order Information</option>
                            <option value="Feedback on Products">Feedback on Products</option>
                            <option value="Careers">Careers</option>
                            <option value="Others">Others</option>
                        </select>
                    </div>
                </div>


                <div class="row mt-3">
                    <div class="col-md-6">
                        <label for="exampleFormControlName" class="form-label d-flex justify-content-start">Email*</label>
                        <input type="email" name="email" class="form-control" id="exampleFormControlName" value={userData.email} onChange={handleInputs} required />
                    </div>
                    <div class="col-md-6">
                        <label for="exampleFormControlName" class="form-label d-flex justify-content-start">City*</label>
                        <input type="text" name="city" class="form-control" id="exampleFormControlName" value={userData.city} onChange={handleInputs} required />

                    </div>
                </div>

                <div class="row mt-3">
                    <div class="mb-3 col-md-6">
                        <label for="exampleFormControlName" class="form-label d-flex justify-content-start">Mobile*</label>
                        <input type="text" name="mobile" class="form-control" id="exampleFormControlName" value={userData.mobile} onChange={handleInputs} required />
                    </div>
                    <div class="mb-3 col-md-6">
                        <label for="exampleFormControlName" class="form-label d-flex justify-content-start">State*</label>
                        <input type="text" name="state" class="form-control" id="exampleFormControlName" value={userData.state} onChange={handleInputs} required />

                    </div>
                </div>

                <div class="form-floating ">
                    <textarea class="form-control" name="message" placeholder="Leave a comment here" value={userData.message} onChange={handleInputs} id="floatingTextarea2"
                        style={{height: 100}}></textarea>
                    <label for="floatingTextarea2">Message</label>
                </div>

                <div class="container text-center mt-4">
                    <button type="submit" name="submit"   value="submit" class="btn btn-danger rounded-pill px-4 text-bold" onClick={contactForm} >SUBMIT</button>
                </div>

                <div class="mt-4 mb-0">
                    <h6 class=" text-center">Alternatively, you can reach out to us at:</h6>
                    <h6 class="text-danger text-center">customercare@bestshopcart.com</h6>
                    <h6 class="text-muted text-center">1800 102 5093 (9 AM to 11 PM | Monday - Sunday)</h6>
                </div>
        
        </form>
        </div>
        </div>

    );
}

export default Contact;