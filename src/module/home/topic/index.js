import React from 'react'
import './topic.css'
import Arrow from '../../../assests/image/arrow.svg';
import Topic1 from '../../../assests/image/topic-1.avif';
import Topic2 from '../../../assests/image/topic-2.avif';
import Topic3 from '../../../assests/image/topic-3.avif';
import Topic4 from '../../../assests/image/topic-4.avif';
import Topic5 from '../../../assests/image/topic-5.avif';
import Topic6 from '../../../assests/image/topic-6.avif';
import Topic7 from '../../../assests/image/topic-7.avif';
import Topic8 from '../../../assests/image/topic-8.avif';
import Topic9 from '../../../assests/image/topic-9.avif';
import Topic10 from '../../../assests/image/topic-10.avif';

export default function Topic() {
    return (
        <div className='topic-section'>
            <div className='container'>
                <div className='topic-main'>
                    <div className='topic-heading'>
                        <h2>Latest by Topic</h2>
                    </div>

                    <div className='topic-card-grid'>
                        {/* <  ----  card - 1  ----   > */}
                        <div className='topic-card-item'>
                            <div className='topic-card-all'>
                                <img src={Topic1} alt='Topic1'></img>
                                <h3>Retail</h3>
                            </div>

                            <span>Analysis and advice from the front lines of the retail transformation.</span>
                            <div className='topic-card-flex'>
                                <img src={Arrow} alt='Arrow'></img>
                                <p>Adidas Prepares for Samba Slump</p>
                            </div>

                            <div className='topic-card-flex'>
                                <img src={Arrow} alt='Arrow'></img>
                                <p>Op-Ed | The Rise of the Unwasteful Brand</p>
                            </div>

                            <div className='topic-card-flex'>
                                <img src={Arrow} alt='Arrow'></img>
                                <p>Fashion’s Stalled Self-Checkout Revolution </p>
                            </div>

                            <div className='topic-view'>
                                <span>view more</span>
                            </div>
                        </div>

                        {/* <  ----  card - 2  ----   > */}

                        <div className='topic-card-item'>
                            <div className='topic-card-all'>
                                <img src={Topic2} alt='Topic2'></img>
                                <h3>Luxury</h3>
                            </div>
                            <span>How rapid change is reshaping the tradition-soaked luxury sector in Europe and beyond.</span>
                            <div className='topic-card-flex'>
                                <img src={Arrow} alt='Arrow'></img>
                                <p>This Week, Tapestry Takes on the FTC; Politics Threaten to Intrude on the Met Gala</p>
                            </div>

                            <div className='topic-card-flex'>
                                <img src={Arrow} alt='Arrow'></img>
                                <p>The BoF Podcast | Stan Herman on a Lifetime in Fashion</p>
                            </div>

                            <div className='topic-card-flex'>
                                <img src={Arrow} alt='Arrow'></img>
                                <p>Reality Check: Luxury’s Price Hikes Are Unsustainable</p>
                            </div>

                            <div className='topic-view'>
                                <span>view more</span>
                            </div>
                        </div>

                        {/* <  ----  card - 3  ----   > */}

                        <div className='topic-card-item'>
                            <div className='topic-card-all'>
                                <img src={Topic3} alt='Topic3'></img>
                                <h3>Technology</h3>
                            </div>
                            <span>Analysis and advice on how technology is disrupting fashion and creating new opportunities.</span>
                            <div className='topic-card-flex'>
                                <img src={Arrow} alt='Arrow'></img>
                                <p>Is Generative AI the New Fashion-Tech Bubble?</p>
                            </div>

                            <div className='topic-card-flex'>
                                <img src={Arrow} alt='Arrow'></img>
                                <p>Op-Ed | Who Could Buy TikTok?</p>
                            </div>

                            <div className='topic-card-flex'>
                                <img src={Arrow} alt='Arrow'></img>
                                <p>The Met Gala’s TikTok Headache</p>
                            </div>

                            <div className='topic-view'>
                                <span>view more</span>
                            </div>
                        </div>

                        {/* <  ----  card - 4  ----   > */}

                        <div className='topic-card-item'>
                            <div className='topic-card-all'>
                                <img src={Topic4} alt='Topic4'></img>
                                <h3>Sustainability</h3>
                            </div>
                            <span>How fashion can do better for people and the planet.</span>
                            <div className='topic-card-flex'>
                                <img src={Arrow} alt='Arrow'></img>
                                <p>Why Fashion Should Have a Plastic Tax</p>
                            </div>

                            <div className='topic-card-flex'>
                                <img src={Arrow} alt='Arrow'></img>
                                <p>Patagonia Aims to Make Endlessly Recyclable Wetsuits</p>
                            </div>

                            <div className='topic-card-flex'>
                                <img src={Arrow} alt='Arrow'></img>
                                <p>Why Luxury Brands Can’t Shake the Controversy Around Exotic Skins</p>
                            </div>

                            <div className='topic-view'>
                                <span>view more</span>
                            </div>
                        </div>

                        {/* <  ----  card - 5  ----   > */}

                        <div className='topic-card-item'>
                            <div className='topic-card-all'>
                                <img src={Topic5} alt='Topic5'></img>
                                <h3>Marketing</h3>
                            </div>
                            <span>How new technologies and cultural shifts are rewiring fashion communications.</span>
                            <div className='topic-card-flex'>
                                <img src={Arrow} alt='Arrow'></img>
                                <p>KidSuper’s Big Ambitions for His Funny Business</p>
                            </div>

                            <div className='topic-card-flex'>
                                <img src={Arrow} alt='Arrow'></img>
                                <p>Why the Public Is So Fascinated With Publicists</p>
                            </div>

                            <div className='topic-card-flex'>
                                <img src={Arrow} alt='Arrow'></img>
                                <p>Masterclass | How to Create Cultural Moments on Any Budget</p>
                            </div>

                            <div className='topic-view'>
                                <span>view more</span>
                            </div>
                        </div>

                        {/* <  ----  card - 6  ----   > */}

                        <div className='topic-card-item'>
                            <div className='topic-card-all'>
                                <img src={Topic6} alt='Topic6'></img>
                                <h3>Beauty</h3>
                            </div>
                            <span>Analysis and advice on the fast-evolving beauty business.</span>
                            <div className='topic-card-flex'>
                                <img src={Arrow} alt='Arrow'></img>
                                <p>What Beauty Professionals Need to Know Today</p>
                            </div>

                            <div className='topic-card-flex'>
                                <img src={Arrow} alt='Arrow'></img>
                                <p>The Business of Beauty Haul of Fame: $30,000 for an Erewhon Smoothie?</p>
                            </div>

                            <div className='topic-card-flex'>
                                <img src={Arrow} alt='Arrow'></img>
                                <p>Your Guide to a Very Busy Week in Beauty</p>
                            </div>

                            <div className='topic-view'>
                                <span>view more</span>
                            </div>
                        </div>

                        {/* <  ----  card - 7  ----   > */}

                        <div className='topic-card-item'>
                            <div className='topic-card-all'>
                                <img src={Topic7} alt='Topic7'></img>
                                <h3>Direct-to-Consumer</h3>
                            </div>
                            <span>How direct-to-consumer brands and retail concepts are reshaping the industry, online and off.</span>
                            <div className='topic-card-flex'>
                                <img src={Arrow} alt='Arrow'></img>
                                <p>What It Takes to Win at DTC in 2024 </p>
                            </div>

                            <div className='topic-card-flex'>
                                <img src={Arrow} alt='Arrow'></img>
                                <p>How Emerging Brands Can Build DTC Businesses </p>
                            </div>

                            <div className='topic-card-flex'>
                                <img src={Arrow} alt='Arrow'></img>
                                <p>How the Perfect T-Shirt Became the Perfect Moneymaker for DTC Brands</p>
                            </div>

                            <div className='topic-view'>
                                <span>view more</span>
                            </div>
                        </div>

                        {/* <  ----  card - 8  ----   > */}

                        <div className='topic-card-item'>
                            <div className='topic-card-all'>
                                <img src={Topic8} alt='Topic8'></img>
                                <h3>Global Markets</h3>
                            </div>
                            <span>A guide to unlocking opportunity in emerging and frontier fashion markets.</span>
                            <div className='topic-card-flex'>
                                <img src={Arrow} alt='Arrow'></img>
                                <p>Brazil Succumbs to the Retail Apocalypse It Staved Off for Years</p>
                            </div>

                            <div className='topic-card-flex'>
                                <img src={Arrow} alt='Arrow'></img>
                                <p>Worldview: Istanbul Modest Fashion Week Goes Global</p>
                            </div>

                            <div className='topic-card-flex'>
                                <img src={Arrow} alt='Arrow'></img>
                                <p>Japan’s Next Emerging Designer Wave</p>
                            </div>

                            <div className='topic-view'>
                                <span>view more</span>
                            </div>
                        </div>

                        {/* <  ----  card - 9  ----   > */}

                        <div className='topic-card-item'>
                            <div className='topic-card-all'>
                                <img src={Topic9} alt='Topic9'></img>
                                <h3>Fashion Week</h3>
                            </div>
                            <span>Independent show reviews from fashion’s top critics.</span>
                            <div className='topic-card-flex'>
                                <img src={Arrow} alt='Arrow'></img>
                                <p>What I Learned From Fashion Month</p>
                            </div>

                            <div className='topic-card-flex'>
                                <img src={Arrow} alt='Arrow'></img>
                                <p>The BoF Podcast | Tim Blanks and Imran Amed Reflect on Autumn/Winter 2024</p>
                            </div>

                            <div className='topic-card-flex'>
                                <img src={Arrow} alt='Arrow'></img>
                                <p>Saint Laurent’s ‘Secret’ Send-Off to Paris Fashion Week</p>
                            </div>

                            <div className='topic-view'>
                                <span>view more</span>
                            </div>
                        </div>

                        {/* <  ----  card - 10  ----   > */}

                        <div className='topic-card-item'>
                            <div className='topic-card-all'>
                                <img src={Topic10} alt='Topic10'></img>
                                <h3>Workplace & Talent</h3>
                            </div>
                            <span>Analysis and advice on the future of work, careers and management.</span>
                            <div className='topic-card-flex'>
                                <img src={Arrow} alt='Arrow'></img>
                                <p>The Best Jobs on BoF Careers</p>
                            </div>

                            <div className='topic-card-flex'>
                                <img src={Arrow} alt='Arrow'></img>
                                <p>Enabling the UK Fashion Industry to Lead on DEI</p>
                            </div>

                            <div className='topic-card-flex'>
                                <img src={Arrow} alt='Arrow'></img>
                                <p>The Rise and Fall of Noncompete Clauses, Explained</p>
                            </div>

                            <div className='topic-view'>
                                <span>view more</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}