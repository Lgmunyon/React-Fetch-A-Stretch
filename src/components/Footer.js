import React from 'react'
import { Button } from './Button'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer-container'>
      {/* <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
            Join the Adventure newsletter to receive our best vacation deals
        </p>
        <p className='footer-subscription-text'>
            You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
            <form>
                <input 
                className='footer-input' 
                type='email'
                name='email'
                placeholder='Your email' 
                />
                <Button buttonStyle='btn--outline'>Subscribe</Button>
            </form>
        </div>
      </section> */}
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
            <div className='footer-link-items'>
                <h2>About Me</h2>
                {/* <Link to='/sign-up'>How it works</Link>
                <Link to='/'>Testimonials</Link>
                <Link to='/'>Investors</Link> */}
                <Link to='/'>Terms of Service</Link>
            </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
            <div className='footer-logo'>
                <Link to='/' className='social-logo'>
                    Fetch A Stretch <i className='fab fa-typo3'> </i>
                </Link>
            </div>
            <small className='website-rights'>Fetch A Stretch 2023</small>
            <div className='social-icons'>
                <Link className='social-icon-link facebook'
                    to='/'
                    target='_blank'
                    aria-label='Facebook'
                >
                    <i className='fab fa-facebook-f'></i>
                </Link>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Footer
