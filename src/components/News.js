import React from 'react';

function News(props) {
    return (
        <div>
             <img src="/images/news.jpeg" alt="loading" className="img-news"/>
        <h1 className="text-center text-danger mt-3">NEWS AND EVENTS</h1>

        <div className="accordion accordion-flush container mb-3" id="accordionFlushExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingOne">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        SAREGAMAPA OVER A CUP OF COFFEE
                    </button>
                </h2>
                <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">Ahmedabad, November 5, 2009 : Always tuned to its customer's needs,
                        Coffee Junction, India's premier and largest chain of coffee cafes, had its discerning customers
                        meet the next generation play back singers, Parthiv Gohil & Deepali Somaiyya of Hero Honda Sa Re
                        Ga Ma Pa Mega Challenge fame over a cup of coffee at the Hari Om Cafe in Ahmedabad today. In
                        tune with the pulse of the younger generation, Zee TV's decade old show Hero Honda Sa Re Ga Ma
                        Pa Mega Challenge along with Coffee Junction will run a joint contest for a period of one month.
                        The contest will be spread across 160 cafes in the country, wherein one lucky CJ customer will
                        get a special invite to be on the show.</div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                        STIMULATING BEVERAGES TO KEEP YOU WARM DURING THE WINTER
                    </button>
                </h2>
                <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo"
                    data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">Mumbai, November 06, 2009 : The mercury around town has started dipping
                        and the winter has started to set in. Warm up with Coffee Junction 'Layers' - A new range of
                        signature coffee's that will help you keep a check on the chill during the winter. CJ, the chain
                        that offers refreshing moments to millions across the country now introduces a range of four
                        special new offerings that are designed to beat the chill out of the winter!</div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                        FRIENDSHIP DAY RELEASE JULY 09
                    </button>
                </h2>
                <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree"
                    data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">Mumbai, 27 July, 2009 : Coffee Junction, the chain that serves
                        refreshing moments to millions across the country celebrates 'Friendship Day' by launching 'The
                        Greatest Friends on Earth' campaign - a collection of true friendship brews. Inspired by the
                        classNameis friendships of our time; the coffees are teamed up with their most complimenting eats.
                    </div>
                </div>
            </div>

            <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingFour">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                        THE LOUNGE JOURNALS
                    </button>
                </h2>
                <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour"
                    data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body"> Coffee Junction is no longer the place for just some coffee, cookie and
                        music. City youth learnt about the intricacies of classNameical dance and the journey of a noted
                        dancer at the CJ Lounge, here on Thursday.</div>
                </div>
            </div>

            <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingFive">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                        COMBO CARNIVAL AT CDS APRIL 09
                    </button>
                </h2>
                <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingFive"
                    data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">Bangalore, April 29, 2009 : With prices soaring all around and disposal
                        income getting sparse, Coffee Junction, the largest chain of coffee cafes that offer refreshing
                        moments to millions across the country launches a whole new menu that offers a value-for-money
                        proposition.</div>
                </div>
            </div>
        </div>
       
        </div>
    );
}

export default News;