import React from 'react';
import './style.css';
import { NavLink } from "react-router-dom";
function CoffeeMenu({userdata}) {
    return (
        <div className='bg-color mb-0 row'>
            <h1 className="text-center text-danger p-3">COFFEE MENU</h1>
            
       
{userdata.map((item,_id)=>{
    if(item.category==='coffee'){
    return(
        <div className=" card-container col-sm-4 mb-5">
            <div className="card mx-auto" style={{maxWidth: '350px',height:'178px'}}>
                <div className="row g-0">
                    <div className="col-md-4">
                    <img src={item.imageurl} className="rounded-start productimg" alt="loading" height="100px"/>
   
                     </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{item.productname}</h5>
                            <p className="card-text">{item.description}</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <p className="card-text"><small className="text-dark text-bold">Price: {item.price}</small></p>
                                <NavLink to={`/productdetails/${item._id}`} >
              <button type="button" className="btn btn-primary">Show Details</button></NavLink>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            </div>
    );
    }
})}
</div>
    );
}

export default CoffeeMenu;