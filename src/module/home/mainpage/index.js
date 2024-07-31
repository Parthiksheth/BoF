import React from 'react'
import './mainpage.css'
import HeroImage from '../../../assests/image/home.avif';
import ArrowImage from '../../../assests/image/home-arrow.png';
import HomeImage1 from '../../../assests/image/home-1.avif';
import HomeImage2 from '../../../assests/image/home-2.avif';

export default function Mainpage() {
    return (
        <div className='home-section'>
            <div className='container'>
                <div className='home-grid'>

                    <div className='home-item-1'>

                        {/* ----------    home image/text  ----------- */}

                        <div className='home-text'>
                            <p>Hermès Takes on Rolex, Chanel With Sports Watch Aimed at Women</p>
                        </div>
                        <div className='home-image'>
                            <img src={HeroImage} alt='HeroImage'></img>
                        </div>


                        {/* ----------    home card details    ----------- */}

                        <div className='home-item-details'>
                            <div className='home-item-flex'>
                                <span>TODAY'S MUST READ  </span>
                                <img src={ArrowImage} alt='Arrow'></img>
                            </div>
                            <div className='home-item-text'>
                                <p>Watch revenues at the French leather goods powerhouse have surged since the launch of its
                                    H08 sports range in 2021. Now Hermès is hoping to keep up the momentum with a mechanical
                                    sports watch aimed at women called Cut.
                                </p>
                            </div>
                        </div>

                        {/* ----------    home card    ----------- */}

                        <div className='home-card-grid'>
                            <div className='home-card'>
                                <div className='home-card-rev-flex'>
                                    <img src={HomeImage1} alt='HomeImage1'></img>
                                    <h2>Puig Aims to Raise €2.5 Billion in IPO</h2>
                                </div>
                                <p>The family-owned premium beauty conglomerate has confirmed it will float shares
                                    on the Spanish stock exchange while retaining majority control, following
                                    months of speculation.
                                </p>
                            </div>

                            <div className='home-card'>
                                <div className='home-card-rev-flex'>
                                    <img src={HomeImage2} alt='HomeImage2'></img>
                                    <h2>The Shared Future of Marie Claire in 1920</h2>
                                </div>
                                <p>Now under the ownership of British publisher Future, both Marie Claire and
                                    WhoWhatWear are contending with how grow their new parentts US
                                    operations of landscape.
                                </p>
                            </div>
                        </div>

                        <div className='home-add-1'>
                            <p>ADVERTISEMENT</p>
                        </div>
                    </div>


                    <div className='home-item-2'>
                        <div className='home-card-2'>
                            <div className='home-card-title'>
                                <span>The News in Brief</span>
                            </div>
                            <div className='home-card-details'>
                                <span>Neutrogena Is Closing Its Los Angeles Office and Laying Off Staff</span>
                                <p> Closing the office is part of parent company Kenvue inc's effort to boost growth and improve collaboration.</p>
                                <h5>09 April 2024</h5>
                            </div>

                            <div className='home-card-details'>
                                <span>Korean Fashion E-tailer Musinsa Posts $733 Million in Annual Revenue</span>
                                <p> The KKR-backed company has reported a 40.2 percent growth in annual revenue to 993.1 billion won.</p>
                                <h5>09 April 2024</h5>
                            </div>

                            <div className='home-card-details'>
                                <span>Blackstone Nears Buyout of Skincare Company L’Occitane</span>
                                <p> Reinold Geiger eyeing take private of global cosmetics brand. Blackstone may provide debt financing.</p>
                                <h5>09 April 2024</h5>
                            </div>

                            <div className='home-card-details'>
                                <span>Allbirds Receives Six Month’s Notice to Raise Its Stock Price</span>
                                <p> Allbirds’ share price has plummeted more than 90 percent since its IPO in November 2021.</p>
                                <h5>09 April 2024</h5>
                            </div>

                            <div className='home-card-details'>
                                <span>Chanel Eyes NYC Fifth Avenue Tower That LVMH Is Also Targeting</span>
                                <p> The company is in discussions to buy 745 Fifth Ave, joining the competition among the world’s top retailers to snap up spots on New York.</p>
                                <h5>09 April 2024</h5>
                            </div>

                            <div className='home-card-details'>
                                <span>Rolex CEO Says Comparing Watches to Stocks Is Dangerous</span>
                                <p> Led by brands including Rolex, Patek Philippe and Audemars Piguet, prices for pre-owned watches soared to unprecedented levels in 2021.</p>
                                <h5>09 April 2024</h5>
                            </div>

                            <div className='home-card-details'>
                                <span>Spain’s Puig Is Said to Prepare IPO Filing as Soon as Monday</span>
                                <p> The Barcelona-based, family-owned firm plans to file the so-called Intention to Float document as soon as April 8.</p>
                                <h5>09 April 2024</h5>
                            </div>

                            <div className='home-card-details'>
                                <span>Schumer Says US Senate Can Make Progress on TikTok Bill</span>
                                <p> The fate of TikTok has become a major issue in Washington where lawmakers have been flooded with calls from users who oppose the legislation.</p>
                                <h5>09 April 2024</h5>
                            </div>

                            <div className='home-view'>
                                <span>View more</span>
                                <img src={ArrowImage} alt='Arrow'></img>
                            </div>

                            <div className='home-add-2'>
                                <p>ADVERTISEMENT</p>
                            </div>

                        </div>


                    </div>
                </div>

            </div>
        </div>



    )
}


