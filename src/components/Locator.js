import React from 'react';
import './style.css';
function Locator(props) {
    return (
        <div>
            <div className="row">
            <div className="col-md-6">
                <img src="https://st.depositphotos.com/1194063/3933/i/600/depositphotos_39334373-stock-photo-cup-of-hot-coffee.jpg"
                    className="img-wrapper" alt="loading"/>
            </div>
            <div className="col-md-6 text-center p-5 locator-wrapper text-white">
                <h1 className="m-4">STORE LOCATOR</h1>
                <h6>Coffee Junction has 900+ outlets around India</h6>
                <button type="button" className="btn btn-light rounded-pill m-4">FIND A CAFE NEAR YOU</button>
                <h6 className="mb-4">Location Required*</h6>
                <hr/>
                <div className="container w-50 mx-auto ">
                <input type="text" className="form-control  rounded-pill mt-5" placeholder="Enter area or pincode here"/>
            </div>
            </div>

        </div>
        </div>
    );
}

export default Locator;