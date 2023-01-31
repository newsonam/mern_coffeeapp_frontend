import React, { useState, useEffect } from 'react';
import './style.css';
function CartDetails({cartBadge}) {
    const [cartdata, setCartData] = useState([]);
    useEffect(() => {
        const fetchCartData = async () => {
            let cartlength;
            try {
                const res = await fetch('/displaycartdata');
                const data = await res.json();
                console.log("coming data", data);
                setCartData(data.data);
                cartlength=cartdata.length;
                cartBadge(cartlength);
            }
            catch (error) {
                console.log("API Error is", error);
            }

        }
        fetchCartData();
    }, [cartdata]);
    const handleDelete = async(id) => {
        const res = await fetch(`/deletedata/${id}`,{method:"POST"});
        const status = await res.status;
        if (status === 201) {
            window.alert("cart data deleted");
        }
        else {
            window.alert("data not saved");
        }

    }
    return (
        <div>
            <h2 className='text-primary mt-2'>Product Details In Cart</h2>
            <table class="container table table-striped">
                <thead>
                    <tr>
                        <th scope="col" className='column-width'>Serial No. </th>
                        <th scope="col" className='column-width'>Product Image</th>
                        <th scope="col" className='column-width'>Product Name</th>
                        <th scope="col" className='column-width'>Category </th>
                        <th scope="col" className='column-width'>Price</th>
                        <th scope="col" className='column-width'>Action</th>
                    </tr>
                </thead>
                <tbody>
                {cartdata.map((cartitem,index)=>{
                    return(
                    <tr key={cartitem._id}>
                        <td>{index+1}</td>
                        <td><img src={cartitem.imageurl} alt="loading" className='cartimage' /></td>
                        <td>{cartitem.productname}</td>
                        <td>{cartitem.category}</td>
                        <td>{cartitem.price}</td>
                        <td><button type="submit" className='btn btn-danger' onClick={()=>handleDelete(cartitem._id)}>Delete</button></td>

                    </tr>
                    );
                })}

                </tbody>
            </table>
        </div>
    );
}

export default CartDetails;