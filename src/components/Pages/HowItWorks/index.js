import React from 'react'

import img01 from '../../../assets/imgs/tf-how-it-works__01.png'
import img02 from '../../../assets/imgs/tf-how-it-works__02.png'
import img03 from '../../../assets/imgs/tf-how-it-works__03.png'

const HowItWorks = () => {
  return (
    <section className='tf-howItWorks section'>
      <div className='container-fluid'>
        <h3 className='text-center'>How It Works</h3>

        <div className='row'>
          <div className='col-lg-4 d-flex flex-column justify-content-center'>
            <img src={img01} alt="" />
            <p className='text-center font-weight-bold'>Create your site</p>
            <p className='text-center'>Create an account to get started.</p>
          </div>
          <div className='col-lg-4 d-flex flex-column justify-content-center'>
            <img src={img02} alt="" />
            <p className='text-center font-weight-bold'>Add Contents</p>
            <p className='text-center'>Add contents and pages to your site.</p>
          </div>
          <div className='col-lg-4 d-flex flex-column justify-content-center'>
            <img src={img03} alt="" />
            <p className='text-center font-weight-bold'>Publish</p>
            <p className='text-center'>Now publish to make your site live!</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
