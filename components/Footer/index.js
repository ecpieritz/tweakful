import React from 'react'

import logo from '../../assets/imgs/tf-white-logo.png'

const Footer = () => {
  return (
    <footer className='tf-footer'>
      <div className='row'>
        <div className='col-lg-4'>
          <img className='mb-4' src={logo} alt="Tweakful logo" />

          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
        <div className='col-lg-4'>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className='col-lg-4'>
          <h4 className='text-right mb-4'>Address</h4>
          <p className='text-right'>São Paulo Street, 1234<br/>Blumenau/SC - Brazil</p>
          <p className='text-right'>info@yourdomain.com</p>
          <p className='text-right'>+55 (00) 00000-0000</p>
        </div>
      </div>

      <hr />

      <div className='tf-footer__made-by'>
        <h5 className='text-right'>© 2023 Made with 💙 by Emilyn C. Pieritz</h5>
      </div>
    </footer>
  )
}

export default Footer
