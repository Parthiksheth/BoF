import React from 'react'
import './footer.css'
import FooterImage from '../../../assests/image/footer.avif';
import F1 from '../../../assests/image/facebook.png';
import F2 from '../../../assests/image/instagram.png';
import F3 from '../../../assests/image/message.png';
import F4 from '../../../assests/image/x.png';
import F5 from '../../../assests/image/youtube.png';


export default function Footer() {
    return (
        <div className='footer-section'>
            <div className='container'>
                <div className='footer-main'>
                    <div className='footer-title'>
                        <h3>The Business of Fashion</h3>
                        <p>Agenda-setting intelligence, analysis and advice for the global fashion community.</p>
                    </div>

                    <div className='footer-card-grid'>
                        <div className='footer-card'>
                            <div className='footer-card-title'>
                                <h4>about us</h4>
                            </div>
                            <div className='footer-card-details' id='footer-card-details'>
                                <p>About Us</p>
                                <p>What We Do</p>
                                <p>Our Journalism</p>
                                <p>Who We Are</p>
                                <p>Work With Us</p>
                                <p>Imran Amed</p>
                            </div>

                            <div className='footer-contactus'>
                                <div className='footer-card-title'>
                                    <h4>contact us</h4>
                                </div>
                                <div className='footer-card-details'>
                                    <p>Contact us</p>
                                </div>
                            </div>

                            <div className='footer-connect'>
                                <div className='footer-card-title'>
                                    <h4>connect with us on</h4>
                                </div>
                                <div className='footer-image-grid'>
                                    <div className='footer-image-flex'>
                                        <img src={F1} alt='F1'></img>
                                        <img src={F2} alt='F2'></img>
                                        <img src={F3} alt='F3'></img>
                                        <img src={F4} alt='F4'></img>
                                        <img src={F5} alt='F5'></img>
                                    </div>
                                    <div className='footer-image-grid'>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='footer-card'>
                            <div className='footer-card-title'>
                                <h4>our products</h4>
                            </div>
                            <div className='footer-card-details'>
                                <p>NewSletters</p>
                                <p>BoF Professional</p>
                                <p>Bof Careers</p>
                                <p>BoF Insights</p>
                                <p>BoF Events</p>

                            </div>
                        </div>
                        <div className='footer-block'>
                            <div className='footer-text-1'>
                                <div className='footer-border'></div>
                                <p>© 2024  The Business of Fashion. All rights reserved. For more information read our <span>Terms & Conditions</span>,<span>Privacy Policy</span>,<span>Cookie Policy</span> and <span>Accessibility Statement</span></p>
                            </div>
                        </div>
                        <div className='footer-card-1'>
                            <div className='footer-image'>
                                <img src={FooterImage} alt='FooterImage'></img>
                            </div>
                        </div>

                    </div>
                    <div className='footer-text-2'>
                        <div className='footer-border'></div>
                        <p>© 2024  The Business of Fashion. All rights reserved. For more information read our <span>Terms & Conditions</span>,<span>Privacy Policy</span>,<span>Cookie Policy</span> and <span>Accessibility Statement</span></p>
                    </div>
                </div>
            </div>
        </div >
    )
}
