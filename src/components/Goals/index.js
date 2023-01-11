import React from 'react'

import goal1 from '../../assets/imgs/icons/tf-icon__home__goals__01.svg'
import goal2 from '../../assets/imgs/icons/tf-icon__home__goals__02.svg'
import goal3 from '../../assets/imgs/icons/tf-icon__home__goals__03.svg'
import goal4 from '../../assets/imgs/icons/tf-icon__home__goals__04.svg'

const Goals = () => {
  return (
    <section className='tf-steps section'>
      <div className='container-fluid'>
        <h3>Our approach to reach your business goals</h3>

        <div className='row'>
          <div className='col-lg-3 mt-5'>
            <img src={goal1} alt="" className='mb-3' />
            <h4>Ideate</h4>
            <p>Turn your idea from concept to MVP</p>
          </div>
          
          <div className='col-lg-3 mt-5'>
            <img src={goal2} alt="" className='mb-3' />
            <h4>Design</h4>
            <p>Sketch out the product to align the user needs</p>
          </div>
          
          <div className='col-lg-3 mt-5'>
            <img src={goal3} alt="" className='mb-3' />
            <h4>Develop</h4>
            <p>Convert the designs into a live application</p>
          </div>
          
          <div className='col-lg-3 mt-5'>
            <img src={goal4} alt="" className='mb-3' />
            <h4>Deploy</h4>
            <p>Launching the application to the market</p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Goals
