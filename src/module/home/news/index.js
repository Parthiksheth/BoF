import React from 'react'
import './news.css';
import NewsImage1 from '../../../assests/image/new-1.avif';
import NewsImage2 from '../../../assests/image/new-2.avif';
import NewsImage3 from '../../../assests/image/new-3.avif';
import NewsImage4 from '../../../assests/image/new-4.avif';
import NewsImage5 from '../../../assests/image/new-5.avif';
import NewsImage6 from '../../../assests/image/new-6.avif';
import NewsImage7 from '../../../assests/image/new-7.avif';
import NewsImage8 from '../../../assests/image/new-8.avif';
import NewsImage9 from '../../../assests/image/new-9.avif';
import NewsImage10 from '../../../assests/image/new-10.avif';
import NewsImage11 from '../../../assests/image/new-11.avif';
import NewsImage12 from '../../../assests/image/new-12.avif';
import Arrow from '../../../assests/image/arrow.svg';

export default function News() {
    return (
        <div className='news-section'>
            <div className='container'>
                <div className='news-grid'>
                    <div className='news-item-1'>
                        <div className='news-title'>
                            <h2>Latest News & Analysis</h2>
                        </div>

                        {/* < --- new cards 1 --- >  */}
                        <div className='news-card-grid'>
                            <div className='news-card'>         {/* < ---- first card ---- > */}
                                <div className='news-card-details'>
                                    <div className='news-card-1'>
                                        <a>Global Markets</a>
                                        <h3>When Will India’s Streetwear Scene Become Big Business?</h3>
                                        <img src={NewsImage1} alt='NewsImage1' className='block-image'></img>
                                    </div>
                                    <p>Local streetwear brands, festivals and stores selling major global labels remain relatively small but the country’s community of hypebeasts and sneakerheads is growing fast.
                                    </p>
                                    <span>10 April 2024</span>
                                </div>
                                <div className='news-card-image'>
                                    <img src={NewsImage1} alt='NewsImage1'></img>
                                </div>
                            </div>

                            <div className='news-card'>         {/* < ---- second card ---- > */}
                                <div className='news-card-details'>
                                    <div className='news-card-1'>
                                        <a>Global Markets</a>
                                        <h3>Worldview: China’s May Holiday Sees Domestic Travel Spending Recover</h3>
                                        <img src={NewsImage2} alt='NewsImage2' className='block-image'></img>
                                    </div>
                                    <p>This week’s round-up of global markets fashion business news also features Senegalese investors, an Indian menswear giant and workers’ rights in Myanmar.
                                    </p>
                                    <span>10 April 2024</span>
                                </div>
                                <div className='news-card-image'>
                                    <img src={NewsImage2} alt='NewsImage2'></img>
                                </div>
                            </div>

                            <div className='news-card'>         {/* < ---- third card ---- > */}
                                <div className='news-card-details'>
                                    <div className='news-card-1'>
                                        <a>Luxury</a>
                                        <h3>The BoF Podcast | Stan Herman on a Lifetime in Fashion</h3>
                                        <img src={NewsImage3} alt='NewsImage3' className='block-image'></img>
                                    </div>
                                    <p>Brands selling synthetic stones should make their provenance clear in marketing,
                                        according to the UK’s Advertising Standards Authority.
                                    </p>
                                    <span>10 April 2024</span>
                                </div>
                                <div className='news-card-image'>
                                    <img src={NewsImage3} alt='NewsImage3'></img>
                                </div>
                            </div>

                            <div className='news-card'>         {/* < ---- fourth card ---- > */}
                                <div className='news-card-details'>
                                    <div className='news-card-1'>
                                        <a>Global Markets</a>
                                        <h3>Brazil Succumbs to the Retail Apocalypse It Staved Off for fun</h3>
                                        <img src={NewsImage4} alt='NewsImage4' className='block-image'></img>
                                    </div>
                                    <p>Brands selling synthetic stones should make their provenance clear in marketing,
                                        according to the UK’s Advertising Standards Authority.
                                    </p>
                                    <span>10 April 2024</span>
                                </div>
                                <div className='news-card-image'>
                                    <img src={NewsImage4} alt='NewsImage4'></img>
                                </div>
                            </div>
                        </div>

                        <div className='news-add'>
                            <p>ADVERTISEMENT</p>
                        </div>


                        {/* < --- new cards 2 --- >  */}

                        <div className='news-card-grid'>
                            <div className='news-card'>         {/* < ---- first card ---- > */}
                                <div className='news-card-details'>
                                    <div className='news-card-1'>
                                        <a>Beauty</a>
                                        <h3>The Business of Beauty Haul of Fame: $30,000 for an Erewhon?.</h3>
                                        <img src={NewsImage5} alt='NewsImage5' className='block-image'></img>
                                    </div>
                                    <p>Brands selling synthetic stones should make their provenance clear in marketing,
                                        according to the UK’s Advertising Standards Authority.
                                    </p>
                                    <span>10 April 2024</span>
                                </div>
                                <div className='news-card-image'>
                                    <img src={NewsImage5} alt='NewsImage5'></img>
                                </div>
                            </div>

                            <div className='news-card'>         {/* < ---- second card ---- > */}
                                <div className='news-card-details'>
                                    <div className='news-card-1'>
                                        <a>Beauty</a>
                                        <h3>Your Guide to a Very Busy Week in Beauty with Brains in this era.</h3>
                                        <img src={NewsImage6} alt='NewsImage6' className='block-image'></img>
                                    </div>
                                    <p>Brands selling synthetic stones should make their provenance clear in marketing,
                                        according to the UK’s Advertising Standards Authority.
                                    </p>
                                    <span>10 April 2024</span>
                                </div>
                                <div className='news-card-image'>
                                    <img src={NewsImage6} alt='NewsImage6'></img>
                                </div>
                            </div>

                            <div className='news-card'>         {/* < ---- third card ---- > */}
                                <div className='news-card-details'>
                                    <div className='news-card-1'>
                                        <a>Marketing</a>
                                        <h3>Adidas Prepares for Samba Slump with good Foot Pair in modern.</h3>
                                        <img src={NewsImage7} alt='NewsImage7' className='block-image'></img>
                                    </div>
                                    <p>Brands selling synthetic stones should make their provenance clear in marketing,
                                        according to the UK’s Advertising Standards Authority.
                                    </p>
                                    <span>10 April 2024</span>
                                </div>
                                <div className='news-card-image'>
                                    <img src={NewsImage7} alt='NewsImage7'></img>
                                </div>
                            </div>

                            <div className='news-card'>         {/* < ---- four card ---- > */}
                                <div className='news-card-details'>
                                    <div className='news-card-1'>
                                        <a>Marketing</a>
                                        <h3>Should Lab-Grown Diamonds Be Labelled? Regulators (Again) Say.</h3>
                                        <img src={NewsImage8} alt='NewsImage8' className='block-image'></img>
                                    </div>
                                    <p>Brands selling synthetic stones should make their provenance clear in marketing,
                                        according to the UK’s Advertising Standards Authority.
                                    </p>
                                    <span>10 April 2024</span>
                                </div>
                                <div className='news-card-image'>
                                    <img src={NewsImage8} alt='NewsImage8'></img>
                                </div>
                            </div>
                        </div>

                        <div className='news-add'>
                            <p>ADVERTISEMENT</p>
                        </div>



                        {/* < --- new cards 3 --- >  */}

                        <div className='news-card-grid'>
                            <div className='news-card'>         {/* < ---- first card ---- > */}
                                <div className='news-card-details'>
                                    <div className='news-card-1'>
                                        <a>Sustainability</a>
                                        <h3>Why Fashion Should Have a Plastic Tax with Extra document.</h3>
                                        <img src={NewsImage9} alt='NewsImage9' className='block-image'></img>
                                    </div>
                                    <p>Brands selling synthetic stones should make their provenance clear in marketing,
                                        according to the UK’s Advertising Standards Authority.
                                    </p>
                                    <span>10 April 2024</span>
                                </div>
                                <div className='news-card-image'>
                                    <img src={NewsImage9} alt='NewsImage9'></img>
                                </div>
                            </div>

                            <div className='news-card'>         {/* < ---- second card ---- > */}
                                <div className='news-card-details'>
                                    <div className='news-card-1'>
                                        <a>Marketing</a>
                                        <h3>Should Lab-Grown Diamonds Be Labelled? Regulators (Again) Say.</h3>
                                        <img src={NewsImage10} alt='NewsImage10' className='block-image'></img>
                                    </div>
                                    <p>Brands selling synthetic stones should make their provenance clear in marketing,
                                        according to the UK’s Advertising Standards Authority.
                                    </p>
                                    <span>10 April 2024</span>
                                </div>
                                <div className='news-card-image'>
                                    <img src={NewsImage10} alt='NewsImage10'></img>
                                </div>
                            </div>

                            <div className='news-card'>         {/* < ---- third card ---- > */}
                                <div className='news-card-details'>
                                    <div className='news-card-1'>
                                        <a>Marketing</a>
                                        <h3>Should Lab-Grown Diamonds Be Labelled? Regulators (Again) Say.</h3>
                                        <img src={NewsImage11} alt='NewsImage11' className='block-image'></img>
                                    </div>
                                    <p>Brands selling synthetic stones should make their provenance clear in marketing,
                                        according to the UK’s Advertising Standards Authority.
                                    </p>
                                    <span>10 April 2024</span>
                                </div>
                                <div className='news-card-image'>
                                    <img src={NewsImage11} alt='NewsImage11'></img>
                                </div>
                            </div>

                            <div className='news-card'>         {/* < ---- four card ---- > */}
                                <div className='news-card-details'>
                                    <div className='news-card-1'>
                                        <a>Marketing</a>
                                        <h3>Should Lab-Grown Diamonds Be Labelled? Regulators (Again) Say.</h3>
                                        <img src={NewsImage12} alt='NewsImage12' className='block-image'></img>
                                    </div>
                                    <p>Brands selling synthetic stones should make their provenance clear in marketing,
                                        according to the UK’s Advertising Standards Authority.
                                    </p>
                                    <span>10 April 2024</span>
                                </div>
                                <div className='news-card-image'>
                                    <img src={NewsImage12} alt='NewsImage12'></img>
                                </div>
                            </div>
                        </div>


                        <div className='news-btn'>
                            <button>Load more</button>
                        </div>

                    </div>
                    <div className='news-item-2'>
                        <div className='news-title-2'>
                            <h3>MOST POPULAR</h3>
                        </div>

                        <div className='news-cards-flex'>
                            <div className='news-number'>
                                <p>1</p>
                            </div>
                            <div className='news-details'>
                                <h4>Is Chanel’s ‘Absolute Luxury’ Push Working? </h4>
                            </div>
                        </div>

                        <div className='news-cards-flex'>
                            <div className='news-number'>
                                <p>2</p>
                            </div>
                            <div className='news-details'>
                                <h4>How Matches’ Collapse Could Impact Independent Fashion </h4>
                            </div>
                        </div>

                        <div className='news-cards-flex'>
                            <div className='news-number'>
                                <p>3</p>
                            </div>
                            <div className='news-details'>
                                <h4>Western Wear Was Already Big. Then Beyoncé Released Cowboy Carter. </h4>
                            </div>
                        </div>

                        <div className='news-cards-flex'>
                            <div className='news-number'>
                                <p>4</p>
                            </div>
                            <div className='news-details'>
                                <h4>Why Aimee Song Is Taking a Different Approach to the Influencer </h4>
                            </div>
                        </div>

                        <div className='news-cards-flex'>
                            <div className='news-number'>
                                <p>5</p>
                            </div>
                            <div className='news-details'>
                                <h4>How the Paris Olympics Will (Really) Impact Fashion Week </h4>
                            </div>
                        </div>

                        <div className='news-cards-flex'>
                            <div className='news-number'>
                                <p>6</p>
                            </div>
                            <div className='news-details'>
                                <h4>Luxury’s New Ramadan Playbook for the Middle East </h4>
                            </div>
                        </div>

                        <div className='news-cards-flex'>
                            <div className='news-number'>
                                <p>7</p>
                            </div>
                            <div className='news-details'>
                                <h4>It’s Time for Beauty and Fashion to Get Serious About Female Athletes  </h4>
                            </div>
                        </div>

                        <div className='news-cards-flex'>
                            <div className='news-number'>
                                <p>8</p>
                            </div>
                            <div className='news-details'>
                                <h4>What’s Behind DTC’s Sudden Obsession With Indie Fashion  </h4>
                            </div>
                        </div>

                        <div className='news-cards-flex'>
                            <div className='news-number'>
                                <p>9</p>
                            </div>
                            <div className='news-details'>
                                <h4>Why Calvin Klein Needs More Than Jeremy Allen White to Grow  </h4>
                            </div>
                        </div>

                        <div className='news-cards-flex'>
                            <div className='news-number'>
                                <p>10</p>
                            </div>
                            <div className='news-details' id='news-details-10'>
                                <h4>The Substack-ification of Beauty  </h4>
                            </div>
                        </div>

                        {/* <  ---   news - down    ---  > */}

                        <div className='news-down-flex'>
                            <div className='news-down-head'>
                                <h5>Latest Jobs</h5>
                            </div>
                            <div className='news-down-btn'>
                                <button>BoF CAREERS</button>
                            </div>
                        </div>


                        <div className='news-info'>
                            <h6>Operations Manager</h6>
                            <p>Issue Twelve</p>
                            <div className='news-span'>
                                <span>London (West), London (Greater)</span>
                                <img src={Arrow} alt='Arrow'></img>
                            </div>
                        </div>

                        <div className='news-info'>
                            <h6>Fashion Director - Mens</h6>
                            <p>Bloomingdale's</p>
                            <div className='news-span'>
                                <span>Long Island City, New York</span>
                                <img src={Arrow} alt='Arrow'></img>
                            </div>
                        </div>

                        <div className='news-info'>
                            <h6>GUCCI Client Adivsor - Milano Galleria</h6>
                            <p>Gucci</p>
                            <div className='news-span'>
                                <span>Milano</span>
                                <img src={Arrow} alt='Arrow'></img>
                            </div>
                        </div>

                        <div className='news-info'>
                            <h6>GUCCI Associate Store Director, Greater Boston Area - Future Opportunity</h6>
                            <p>Gucci</p>
                            <div className='news-span'>
                                <span>BOSTON</span>
                                <img src={Arrow} alt='Arrow'></img>
                            </div>
                        </div>

                        <div className='news-info'>
                            <h6>GUCCI Welcomist - Milano Montenapoleone</h6>
                            <p>Gucci</p>
                            <div className='news-span'>
                                <span>Milano</span>
                                <img src={Arrow} alt='Arrow'></img>
                            </div>
                        </div>

                        <div className='news-view'>
                            <span>View more</span>
                            <img src={Arrow} alt='Arrow'></img>
                        </div>



                    </div>
                </div>
            </div>
        </div>
    )
}

