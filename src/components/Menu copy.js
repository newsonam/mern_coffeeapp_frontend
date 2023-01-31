import React from 'react';

function Menu(props) {
    return (
        <div className='bg-color mb-4'>
            <h1 class="text-center text-danger p-3">COFFEE MENU</h1>
        <div class="container d-flex gap-3 mx-auto mb-5">
            <div class="card" style={{maxWidth: '350px',height:'178px'}}>
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="data:image/jpeg;base64,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"
                            class="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">RED VELVET COFFEE</h5>
                            <p class="card-text">The trendy and delicious dalgona coffee in a hot new avatar</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <p class="card-text"><small class="text-muted">Rs.200</small></p>
                                <button type="button" class="btn btn-primary">Add Item</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div class="card" style={{maxWidth: '350px',height:'178px'}}>
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYSmcPrPTTnzQUUQePmb6BUUTG32lCFSLNQg&usqp=CAU"
                            class="img-fluid rounded-start" alt="..." height="100px"/>
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">CAFE MOCHA</h5>
                            <p class="card-text">Warm your heart with an espresso layered with chocolate sauce </p>
                            <div class="d-flex justify-content-between align-items-center">
                                <p class="card-text"><small class="text-muted">Rs.220</small></p>
                                <button type="button" class="btn btn-primary">Add Item</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card " style={{maxWidth: '350px',height:'178px'}}>
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="https://www.aimeemars.com/wp-content/uploads/2020/03/IMG_9717.jpg" class="img-fluid rounded-start" alt="loading"/>
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">CAPPUCCINO</h5>
                            <p class="card-text pb-4">Get things done with a dark espresso in thick milk foam</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <p class="card-text"><small class="text-muted">Rs.230</small></p>
                                <button type="button" class="btn btn-primary">Add Item</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container d-flex gap-3 mx-auto mb-5">
            <div class="card" style={{maxWidth: '350px',height:'178px'}}>
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK8fiORFbexuNSdZOLy6i80PbyrqZaeWlXvQ&usqp=CAU"
                            class="img-fluid rounded-start" alt="..." height="200px"/>
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">CAFE LATTE</h5>
                            <p class="card-text">Brewing happy moments with rich espresso and steamed milk </p>
                            <div class="d-flex justify-content-between align-items-center">
                                <p class="card-text"><small class="text-muted">Rs.240</small></p>
                                <button type="button" class="btn btn-primary">Add Item</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card" style={{maxWidth: '350px',height:'178px'}}>
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="https://m.media-amazon.com/images/I/819PIaNAZcL.jpg" class="img-fluid rounded-start" alt="..." height="250px"/>
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">ESPRESSO</h5>
                            <p class="card-text">Power up  your day with our all-time favourite black coffee </p>
                            <div class="d-flex justify-content-between align-items-center">
                                <p class="card-text"><small class="text-muted">Rs.260</small></p>
                                <button type="button" class="btn btn-primary">Add Item</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card" style={{maxWidth: '350px',height:'178px'}}>
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ_6pW8jf5TJEXWhoTZIucs1TGmK5i7KbHsA&usqp=CAU"
                            class="img-fluid rounded-start" alt="..." height="300px"/>
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">VANILLA LATTE</h5>
                            <p class="card-text">The usual latte goes unusual with a touch of rich vanilla flavour </p>
                            <div class="d-flex justify-content-between align-items-center">
                                <p class="card-text"><small class="text-muted">Rs.250</small></p>
                                <button type="button" class="btn btn-primary">Add Item</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
        
        <h1 class="text-center text-danger p-3">FOOD FOR MOOD</h1>
        <div class="container d-flex gap-3 mx-auto mb-5">
            <div class="card" style={{maxWidth: '350px',height:'178px'}}>
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="https://marshasbakingaddiction.com/wp-content/uploads/2016/01/nutella-stuffed-double-chocolate-muffins-7-735x1103.jpg"
                            class="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">CHOCOLATE MUFFIN</h5>
                            <p class="card-text">The best choice when you want food but chocolate is the mood</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <p class="card-text"><small class="text-muted">Rs.100</small></p>
                                <button type="button" class="btn btn-primary">Add Item</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div class="card" style={{maxWidth: '350px',height:'178px'}}>
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjYLEpIW_mE2KUCY1vMO4qIWOvBs6UGRVYhg&usqp=CAU"
                            class="img-fluid rounded-start" alt="..." height="100px"/>
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">CLASSIC GARLIC BREAD</h5>
                            <p class="card-text">A dish so classic ,its a perfect for every drink  </p>
                            <div class="d-flex justify-content-between align-items-center">
                                <p class="card-text"><small class="text-muted">Rs.120</small></p>
                                <button type="button" class="btn btn-primary">Add Item</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card " style={{maxWidth: '350px',height:'178px'}}>
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="https://i1.wp.com/polkapuffs.in/wp-content/uploads/2018/06/chilly-cheese-grill-1-.jpeg.jpg" class="img-fluid rounded-start" alt="loading" height="400px"/>
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">CHILLI CHEESE TOAST</h5>
                            <p class="card-text ">The toast to raise when your hunger's ablaze</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <p class="card-text"><small class="text-muted">Rs.130</small></p>
                                <button type="button" class="btn btn-primary">Add Item</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container d-flex gap-3 mx-auto mb-5">
            <div class="card" style={{maxWidth: '350px',height:'178px'}}>
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDa5Yw34UrrFWnoCoStUA08o4vyVHKAbiPNA&usqp=CAU"
                            class="img-fluid rounded-start" alt="..." height="200px"/>
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">CORN'N'CHEESE SANDWICH</h5>
                            <p class="card-text">DElightful duo of corn n cheese sandwiched </p>
                            <div class="d-flex justify-content-between align-items-center">
                                <p class="card-text"><small class="text-muted">Rs.140</small></p>
                                <button type="button" class="btn btn-primary">Add Item</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card" style={{maxWidth: '350px',height:'178px'}}>
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="https://images.slurrp.com/prod/recipe_images/better-butter/jumbo-tandoori-paneer-sago-patty-burger_DVB88RY8FSMDU2OREJ5O.webp" class="img-fluid rounded-start" alt="..." height="250px"/>
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">TANDOORI PANEER BUN</h5>
                            <p class="card-text">Spice it up with masala paneer in an soft bun</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <p class="card-text"><small class="text-muted">Rs.120</small></p>
                                <button type="button" class="btn btn-primary">Add Item</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card" style={{maxWidth: '350px',height:'178px'}}>
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="https://i.pinimg.com/736x/10/08/d8/1008d80534a5da07058cc2f545466b10.jpg"
                            class="img-fluid rounded-start" alt="..." height="300px"/>
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">CHEESE TOMATO CROISSANT </h5>
                            <p class="card-text">Bright mornings,tomato N cheese stuffed in croissant </p>
                            <div class="d-flex justify-content-between align-items-center">
                                <p class="card-text"><small class="text-muted">Rs.150</small></p>
                                <button type="button" class="btn btn-primary">Add Item</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
 
        </div>
    );
}

export default Menu;