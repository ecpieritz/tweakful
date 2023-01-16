import React from 'react'

import testimonial01 from '../../../assets/imgs/tf-testimonial__01.png'
import testimonial02 from '../../../assets/imgs/tf-testimonial__02.png'
import testimonial03 from '../../../assets/imgs/tf-testimonial__03.png'
import testimonial04 from '../../../assets/imgs/tf-testimonial__04.png'

import logitech from '../../../assets/imgs/customers/tf-customers__logitech.png'
import philips from '../../../assets/imgs/customers/tf-customers__philips.png'
import google from '../../../assets/imgs/customers/tf-customers__google.png'
import linkedin from '../../../assets/imgs/customers/tf-customers__linkedin.png'

const Testimonials = () => {
  return (
    <section className='tf-testimonials section'>
      <div className='container-fluid'>
        <div id="tf-testimonials-carousel" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#tf-testimonials-carousel" data-slide-to="0" className="active"></li>
            <li data-target="#tf-testimonials-carousel" data-slide-to="1"></li>
            <li data-target="#tf-testimonials-carousel" data-slide-to="2"></li>
            <li data-target="#tf-testimonials-carousel" data-slide-to="3"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className='row'>
                <div className='col-md-7'>
                  <h3 className='tf-testimonials__title'>Success Story</h3>
                  <p className='tf-testimonials__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                  <p className='tf-testimonials__name'>Nichole Lina</p>
                  <img src={logitech} alt="Logitech logo" className='tf-testimonials__work' />
                </div>
                <div className='col-md-5'>
                  <img className='tf-testimonials__person-photo' src={testimonial01} alt="Nichole Lina" />
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className='row'>
                <div className='col-md-7'>
                  <h3 className='tf-testimonials__title'>Happiness Story</h3>
                  <p className='tf-testimonials__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                  <p className='tf-testimonials__name'>Narciso Aura</p>
                  <img src={philips} alt="Philips logo" className='tf-testimonials__work' />
                </div>
                <div className='col-md-5'>
                  <img className='tf-testimonials__person-photo' src={testimonial02} alt="Narciso Aura" />
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className='row'>
                <div className='col-md-7'>
                  <h3 className='tf-testimonials__title'>Impeccable Quality</h3>
                  <p className='tf-testimonials__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                  <p className='tf-testimonials__name'>Luísa Bonita</p>
                  <img src={google} alt="Google logo" className='tf-testimonials__work' />
                </div>
                <div className='col-md-5'>
                  <img className='tf-testimonials__person-photo' src={testimonial03} alt="Luísa Bonita" />
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className='row'>
                <div className='col-md-7'>
                  <h3 className='tf-testimonials__title'>Perfect Delivery</h3>
                  <p className='tf-testimonials__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                  <p className='tf-testimonials__name'>Norman Nettie</p>
                  <img src={linkedin} alt="Linkedin logo" className='tf-testimonials__work' />
                </div>
                <div className='col-md-5'>
                  <img className='tf-testimonials__person-photo' src={testimonial04} alt="Norman Nettie" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
