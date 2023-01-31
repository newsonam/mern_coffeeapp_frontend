import React from 'react';

function Awards(props) {
    return (
        <div>
            <img src="/images/awards.jpg" width="100%" height="350px" alt="loading" />
            <h1 className="container text-danger text-left mt-4">Awards and Certifications</h1>
            <div className="container text-left mx-auto">
                <h4>2012</h4>
                <p>Coffee Junction won the Times Food Award under the category of “Best Coffee Bar” from Times of India.</p>
                <h4>2013</h4>
                <p>Coffee Junction was ranked as 26th Most Trusted Service Brand in India under a survey done by Brand Equity (Economic Times).</p>
                <h4>2014</h4>
                <p>Coffee Junction Global was awarded ‘Retailer of the Year’ for brand excellence by ABP News.</p>
                <h4>2018</h4>
                <p>Coffee Junction was awarded “Retailer of the Year” (Organisation Food and Grocery) for retail excellence by ABP News.</p>
                <h4>2021</h4>
                <p>Coffee Junction Global was awarded as the Best Retailer under the category of “Best Customer Service in Café Restaurant” by Star Retailer Awards.</p>



            </div>
        </div>
    );
}

export default Awards;