import React from 'react';
import { useParams } from 'react-router-dom';


function ProductDetails({ userdata}) {
    let { _id } = useParams();

    const handleAdd = async() => {
        const res = await fetch(`/cartdata/${_id}`,{method:"POST"});
        const status = await res.status;
        if (status === 201) {
            window.alert("cart data saved");
        }
        else {
            window.alert("data not saved");
        }

    }
    return (
        <div className='bg-color'>
            {userdata.map((item) => {
                if (_id === item._id) {
                    return (

                        <div className=" card-container card-shadow col-sm-4 mb-5 mt-5">
                            <div className="card mx-auto" style={{ maxWidth: '750px', height: '330px' }}>
                                <div className="row g-0">
                                    <div className="col-md-6">
                                        <img src={item.imageurl} className="pimage rounded-start" alt="loading" width="300px" height="200px" />

                                    </div>
                                    <div className="col-md-6">
                                        <div className="card-body text-justify">
                                            <h3 className="card-title">{item.productname}</h3>
                                            <p className="card-text">{item.description}</p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <p className="card-text"><small className="text-dark mx-auto text-bold">Price: {item.price}</small></p>
                                            </div>
                                            <div className="quantity">
                                                <div className="d-flex align-items-center">
                                                    <h6 className='p-2'>Quantity:-</h6>
                                                    <button >+</button>
                                                    <span className='border border-dark p-2 '>1</span>
                                                    <button >-</button></div>
                                            </div>
                                            <button type="submit" className="btn btn-primary mt-3" onClick={handleAdd}>ADD TO CART</button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                }
                return null;
            })}
        </div>
    );
}

export default ProductDetails;
