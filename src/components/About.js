import React from 'react';
import './style.css';
function About(props) {
    return (
        <div>
            <img src="/images/Aboutus.jpg" alt="loading" width="100%" height="350px"/>
                <div className="container ">
                    <h1 className="text-center about-text text-danger text-decoration-underline">About Us</h1>
                    <p>
                        Coffee Junction, a part of Coffee Day Global Limited, is India’s favourite hangout for coffee and conversations. Popularly known as CJ, we strive to provide the best experience to our guests. Our coffees are sourced from thousands of small coffee planters, who made us who we are today and we're glad to be a part of their lives. We opened our first cafe in 2009 at Brigade Road in Mumbai – the youth and the young at heart immediately took to the cafe, and it continues to be one of the most happening places in the city. CJ to the youth is a “hangout” spot where they meet people, make conversations, and have a whole lot of fun over steaming cups of great coffee.It's been an exciting journey since then to becoming the largest organised retail cafe chain in the country.
                    </p>
                </div>
        </div>
    );
}

export default About;