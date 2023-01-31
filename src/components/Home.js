import React from 'react';
import './style.css';
function Home(props) {
  return (
    <div>
      <div id="carouselExampleIndicators" className="carousel slide w-auto m-auto" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>

        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_33/2203981/171026-better-coffee-boost-se-329p.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://media.istockphoto.com/photos/tasty-cups-of-coffee-picture-id1423116740?b=1&k=20&m=1423116740&s=170667a&w=0&h=ofHfW0PTBFwRCvZmY0VCNGbnV90RjqLRqJO8RYtfoT8=" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-626920549-1638559348.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://images.wallpaperscraft.com/image/single/coffee_book_glasses_140830_300x168.jpg" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <section className="mt-0">
        <div className="row w-100">
          <div className="col-md-6 readmenu">
            <img src="/images/cafemenu.jpeg" alt="loading" className="img-menu" />
            <a href="/menu" className="text-black menu-link">CAFE MENU</a>
          </div>
          <div className="col-md-6  cafenear">
            <img src="/images/cafenear.jpg" alt="loading" className="img-cafe" />
            <a href="/locator" className="text-black cafe-link">CAFE NEAR</a>
          </div>
        </div>

        <div className="readstory ">
          <img src="/images/readstory.jpeg" alt="loading" />

          <a href="/about" className="text-black read-link">READ OUR STORY</a>

        </div>
      </section>

      {/* <!-- cards --> */}
      <h1 className="mt-5 p-2">Latest Offerings</h1>
      <div className="card-group p-2">
        <div className="card p-3">
          <img src="https://delightfulemade.com/wp-content/uploads/2013/10/Nutella-Hazelnut-Coffee-by-Delightful-E-Made.png" className="card-img-top" alt="..." width="20px" height="200px" />
          <div className="card-body">
            <h5 className="card-title">Nutella Hazelnut Latte</h5>
            <p className="card-text">Signature espresso and milk with flavours of nutella and hazelnut and light cream cheeze...</p>
            <div className="d-flex justify-content-between">
              <p className="card-text"><small className="text-muted">Rs.404.25</small></p>
              <button type="button" className="btn btn-primary" onclick="myFunction()">Add Item</button>
            </div>
          </div>
        </div>
        <div className="card p-3">
          <img src="https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Rich-Hazelnut-Coffee_exps50400_SD19999445A08_23_6bC_RMS.jpg" className="card-img-top" alt="..." width="20px" height="200px" />
          <div className="card-body">
            <h5 className="card-title">Cheesecake frapuccino</h5>
            <p className="card-text">Signature espresso and milk with flavours of nutella and hazelnut and light cream cheeze...</p>
            <div className="d-flex justify-content-between">
              <p className="card-text"><small className="text-muted">Rs.300.25</small></p>
              <button type="button" className="btn btn-primary" onclick="myFunction()">Add Item</button>
            </div>
          </div>
        </div>
        <div className="card p-3">
          <img src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F39%2F2019%2F09%2F20230713%2Fp_RU264663.jpg&q=60" className="card-img-top" alt="..." width="20px" height="200px" />
          <div className="card-body">
            <h5 className="card-title"> Hazelnut Mocha</h5>
            <p className="card-text">Signature espresso and milk with flavours of nutella and hazelnut and light cream cheeze...</p>
            <div className="d-flex justify-content-between">
              <p className="card-text"><small className="text-muted">Rs.350.25</small></p>
              <button type="button" className="btn btn-primary" onclick="myFunction()">Add Item</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;