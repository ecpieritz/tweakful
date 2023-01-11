import React from 'react'

import rightArrow from '../../assets/imgs/icons/tf-icon__white-right-arrow.svg'
import philips from '../../assets/imgs/customers/tf-customers__philips.png'
import logitech from '../../assets/imgs/customers/tf-customers__logitech.png'
import amazon from '../../assets/imgs/customers/tf-customers__amazon.png'
import facebook from '../../assets/imgs/customers/tf-customers__facebook.png'
import google from '../../assets/imgs/customers/tf-customers__google.png'
import linkedin from '../../assets/imgs/customers/tf-customers__linkedin.png'


const BookAMeeting = () => {
  return (
    <section className='tf-book section'>
      <div className='container-fluid'>
        <div className='tf-book__texts'>
          <h2 className='text-center'>The Is Closing Headline To Make A Impact For Call To Action</h2>
          <h4 className='text-center mt-4 mb-5'>Nowadays, it isn’t uncommon to see lenders rapidly adopting a digital lending strategy to streamline the lending process nowadays, it isn’t uncommon to see lenders rapidly</h4>
        </div>
        <div className='tf-book__btn'>
          <a className='btn btn-bg-blue' href="/contact">Book A Meeting <img src={rightArrow} alt="" /></a>
        </div>

        <hr/>

        <div className='tf-book__customers'>
          <img src={philips} alt="Philips logo" />
          <img src={logitech} alt="Logitech logo" />
          <img src={amazon} alt="Amazon logo" />
          <img src={facebook} alt="Facebook logo" />
          <img src={google} alt="Google logo" />
          <img src={linkedin} alt="Linkedin logo" />
        </div>
      </div>
    </section>
  )
}

export default BookAMeeting
