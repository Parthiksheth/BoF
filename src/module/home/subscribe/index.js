import React from 'react'
import './subscribe.css'
import Arrow from '../../../assests/image/arrow.svg';

export default function Subscribe() {
    return (
        <div className='subscribe-section'>
            <div className='container'>
                <div className='subscribe-main'>
                    <div className='subscribe-heading'>
                        <h3>Subscribe to the BoF Daily Digest</h3>
                        <p>The essential daily round-up of fashion news, analysis, and breaking news alerts.</p>
                    </div>

                    <div className='subscribe-grid'>
                        <div className='subscribe-input'>
                            <input type='email' name='email' placeholder='Enter your email address' />
                        </div>
                        <div className='subscribe-btn'>
                            <button>Subscribe</button>
                            <img src={Arrow} alt='Arrow' className='Arrow-img'></img>
                        </div>
                    </div>

                    <div className='subscribe-flex'>
                        <input type="checkbox" name="checkbox" id="checkbox" className='checkbox1' />
                        <span>Receive news, offers and invites from BoF</span>
                    </div>
                    <div className='subscribe-text'>
                        <p>Our newsletters may include 3rd-party advertising, by subscribing you agree to the</p>
                    </div>


                </div>
            </div>
        </div>
    )
}
