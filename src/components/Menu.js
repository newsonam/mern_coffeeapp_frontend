import React from 'react';
import './style.css';
import { NavLink } from "react-router-dom";
function Menu({userdata}) {
    console.log("data in menu is",userdata);
    return (
        <div className='bg-color mb-0 row'>
            <h1 className="text-center text-danger p-3">COFFEE MENU</h1>
            
       
{userdata.map((item,_id)=>{
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
})}
            {/* <div className="card" style={{maxWidth: '350px',height:'178px'}}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYSmcPrPTTnzQUUQePmb6BUUTG32lCFSLNQg&usqp=CAU"
                            className="img-fluid rounded-start" alt="..." height="100px"/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">CAFE MOCHA</h5>
                            <p className="card-text">Warm your heart with an espresso layered with chocolate sauce </p>
                            <div className="d-flex justify-content-between align-items-center">
                                <p className="card-text"><small className="text-muted">Rs.220</small></p>
                                <button type="button" className="btn btn-primary">Add Item</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card " style={{maxWidth: '350px',height:'178px'}}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="https://www.aimeemars.com/wp-content/uploads/2020/03/IMG_9717.jpg" className="img-fluid rounded-start" alt="loading"/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">CAPPUCCINO</h5>
                            <p className="card-text pb-4">Get things done with a dark espresso in thick milk foam</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <p className="card-text"><small className="text-muted">Rs.230</small></p>
                                <button type="button" className="btn btn-primary">Add Item</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container d-flex gap-3 mx-auto mb-5">
            <div className="card" style={{maxWidth: '350px',height:'178px'}}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK8fiORFbexuNSdZOLy6i80PbyrqZaeWlXvQ&usqp=CAU"
                            className="img-fluid rounded-start" alt="..." height="200px"/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">CAFE LATTE</h5>
                            <p className="card-text">Brewing happy moments with rich espresso and steamed milk </p>
                            <div className="d-flex justify-content-between align-items-center">
                                <p className="card-text"><small className="text-muted">Rs.240</small></p>
                                <button type="button" className="btn btn-primary">Add Item</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card" style={{maxWidth: '350px',height:'178px'}}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="https://m.media-amazon.com/images/I/819PIaNAZcL.jpg" className="img-fluid rounded-start" alt="..." height="250px"/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">ESPRESSO</h5>
                            <p className="card-text">Power up  your day with our all-time favourite black coffee </p>
                            <div className="d-flex justify-content-between align-items-center">
                                <p className="card-text"><small className="text-muted">Rs.260</small></p>
                                <button type="button" className="btn btn-primary">Add Item</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card" style={{maxWidth: '350px',height:'178px'}}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ_6pW8jf5TJEXWhoTZIucs1TGmK5i7KbHsA&usqp=CAU"
                            className="img-fluid rounded-start" alt="..." height="300px"/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">VANILLA LATTE</h5>
                            <p className="card-text">The usual latte goes unusual with a touch of rich vanilla flavour </p>
                            <div className="d-flex justify-content-between align-items-center">
                                <p className="card-text"><small className="text-muted">Rs.250</small></p>
                                <button type="button" className="btn btn-primary">Add Item</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
        
        <h1 className="text-center text-danger p-3">FOOD FOR MOOD</h1>
        <div className="container d-flex gap-3 mx-auto mb-5">
            <div className="card" style={{maxWidth: '350px',height:'178px'}}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="https://marshasbakingaddiction.com/wp-content/uploads/2016/01/nutella-stuffed-double-chocolate-muffins-7-735x1103.jpg"
                            className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">CHOCOLATE MUFFIN</h5>
                            <p className="card-text">The best choice when you want food but chocolate is the mood</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <p className="card-text"><small className="text-muted">Rs.100</small></p>
                                <button type="button" className="btn btn-primary">Add Item</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="card" style={{maxWidth: '350px',height:'178px'}}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjYLEpIW_mE2KUCY1vMO4qIWOvBs6UGRVYhg&usqp=CAU"
                            className="img-fluid rounded-start" alt="..." height="100px"/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">CLASSIC GARLIC BREAD</h5>
                            <p className="card-text">A dish so classic ,its a perfect for every drink  </p>
                            <div className="d-flex justify-content-between align-items-center">
                                <p className="card-text"><small className="text-muted">Rs.120</small></p>
                                <button type="button" className="btn btn-primary">Add Item</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card " style={{maxWidth: '350px',height:'178px'}}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="https://i1.wp.com/polkapuffs.in/wp-content/uploads/2018/06/chilly-cheese-grill-1-.jpeg.jpg" className="img-fluid rounded-start" alt="loading" height="400px"/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">CHILLI CHEESE TOAST</h5>
                            <p className="card-text ">The toast to raise when your hunger's ablaze</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <p className="card-text"><small className="text-muted">Rs.130</small></p>
                                <button type="button" className="btn btn-primary">Add Item</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container d-flex gap-3 mx-auto mb-5">
            <div className="card" style={{maxWidth: '350px',height:'178px'}}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDa5Yw34UrrFWnoCoStUA08o4vyVHKAbiPNA&usqp=CAU"
                            className="img-fluid rounded-start" alt="..." height="200px"/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">CORN'N'CHEESE SANDWICH</h5>
                            <p className="card-text">DElightful duo of corn n cheese sandwiched </p>
                            <div className="d-flex justify-content-between align-items-center">
                                <p className="card-text"><small className="text-muted">Rs.140</small></p>
                                <button type="button" className="btn btn-primary">Add Item</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card" style={{maxWidth: '350px',height:'178px'}}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="https://images.slurrp.com/prod/recipe_images/better-butter/jumbo-tandoori-paneer-sago-patty-burger_DVB88RY8FSMDU2OREJ5O.webp" className="img-fluid rounded-start" alt="..." height="250px"/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">TANDOORI PANEER BUN</h5>
                            <p className="card-text">Spice it up with masala paneer in an soft bun</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <p className="card-text"><small className="text-muted">Rs.120</small></p>
                                <button type="button" className="btn btn-primary">Add Item</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card" style={{maxWidth: '350px',height:'178px'}}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="https://i.pinimg.com/736x/10/08/d8/1008d80534a5da07058cc2f545466b10.jpg"
                            className="img-fluid rounded-start" alt="..." height="300px"/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">CHEESE TOMATO CROISSANT </h5>
                            <p className="card-text">Bright mornings,tomato N cheese stuffed in croissant </p>
                            <div className="d-flex justify-content-between align-items-center">
                                <p className="card-text"><small className="text-muted">Rs.150</small></p>
                                <button type="button" className="btn btn-primary">Add Item</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
 */}

        </div>
 
       
    );
}

export default Menu;