import React from 'react'

import bannerImg from '../../assets/imgs/tf-home__banner.png'
import rightArrow from '../../assets/imgs/icons/tf-icon__white-right-arrow.svg'
import logitech from '../../assets/imgs/customers/tf-customers__logitech.png'
import google from '../../assets/imgs/customers/tf-customers__google.png'
import amazon from '../../assets/imgs/customers/tf-customers__amazon.png'

const HomeHeader = () => {
  return (
    <header className='tf-header'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-7'>
            <h1>This headline is the Gist of the your <span className='tf-colors__text__blue'>whole Website</span> </h1>
            <p>And the description of hero section is follow up message after the punch of a great headline. So, make it short, simple, descriptive and to the point.</p>

            <a className='btn btn-bg-blue' href="/contact">Book A Meeting <img src={rightArrow} alt="white right arrow" /></a>

            <div className='tf-header__customers-logo'>
              <img src={logitech} alt="Logitech logo" />
              <img src={google} alt="Google logo" />
              <img src={amazon} alt="Amazon logo" />
            </div>
          </div>
          <div className='col-md-5'>
            <img src={bannerImg} alt="Woman smiling and holding a mug" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default HomeHeader
