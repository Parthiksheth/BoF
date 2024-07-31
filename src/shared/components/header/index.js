import React from 'react'
import './header.css'
import LogoImage from '../../../assests/image/BofLogo.svg';
import MenuImage from '../../../assests/image/menu.png';
import RightImage1 from '../../../assests/image/right1.png';
import RightImage2 from '../../../assests/image/right2.png';
import Arrow from '../../../assests/image/arrow.svg';

export default function Header() {
    return (
        <div className='header-section'>
            <div className='header-nav'>
                <div className='header-1'>
                    <div className='container'>
                        <div className='header-flex'>
                            <div className='header-item-1'>
                                <p>Join</p>
                                <span>BoF Professional</span>
                            </div>
                            <div className='header-item-menu-flex'>
                                <a>Newsletters</a>
                                <a>News & analysis</a>
                                <a>data & advisory</a>
                                <a>case studies</a>
                                <a>Jobs</a>
                                <a>Events</a>
                                <a>People</a>
                                <a>Companies</a>
                            </div>

                            <div className='header-item-2'>
                                <p>Visit</p>
                                <span>BoF Careers</span>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='container'>
                    <div className='header-logo'>
                        <p>The Business of Fashion</p>
                        <img src={LogoImage} alt='LogoImage1'></img>
                    </div>
                </div>
                {/* -------      header - down     --------- */}

                <div className='header-2'>
                    <div className='header-down'>
                        <div className='container'>
                            <div className='header-down-main'>
                                <div className='header-down-1'>
                                    <img src={MenuImage} alt='MenuImage'></img>
                                    <img src={LogoImage} alt='LogoImage1' className='block-img'></img>
                                    <img src={RightImage2} alt='RightImage2' className='block-img-1'></img>
                                </div>

                                <div className='header-down-flex'>
                                    <div className='header-down-item'><a>retail</a></div>
                                    <div className='header-down-item'><a>luxury</a></div>
                                    <div className='header-down-item'><a>technology</a></div>
                                    <div className='header-down-item'><a>sustainability</a></div>
                                    <div className='header-down-item'><a>marketing</a></div>
                                    <div className='header-down-item'><a>beauty</a></div>
                                    <div className='header-down-item'><a>dtc</a></div>
                                    <div className='header-down-item'><a>global markets</a></div>
                                    <div className='header-down-item'><a>fashion week</a></div>

                                </div>

                                <div className='header-down-2'>
                                    <img src={RightImage1} alt='RightImage1' height="25px"></img>
                                    <img src={RightImage2} alt='RightImage2'></img>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='header-down-text'>
                        <div className='container'>
                            <div className='header-down-text-grid'>
                                <div className='header-text'>
                                    <p>Join BoF Professional today <span>for agenda-setting analysis and advice.</span> Start your 30-day trial for just ₹100.</p>
                                </div>

                                <div className='header-btn'>
                                    <button>Start trial</button>
                                </div>

                                <div className='header-tab-btn'>
                                    <img src={Arrow} alt='Arrow'></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            </div>







        </div >
    )
}
