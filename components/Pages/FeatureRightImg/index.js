import React from 'react'
import CardItem from '../../CardItem'

import featureImg from '../../../assets/imgs/tf-features.png'
import grid from '../../../assets/imgs/icons/tf-icon__black-grid.svg'
import discs from '../../../assets/imgs/icons/tf-icon__black-discs.svg'
import heart from '../../../assets/imgs/icons/tf-icon__black-heart.svg'
import star from '../../../assets/imgs/icons/tf-icon__black-star.svg'
import flash from '../../../assets/imgs/icons/tf-icon__black-flash.svg'
import shield from '../../../assets/imgs/icons/tf-icon__black-shield.svg'

const FeatureRightImg = () => {
  return (
    <section className='tf-feature-right-img section'>
      <div className='container-fluid '>
        <div className='row'>
          <div className='col-lg-7'>
            <div className='row'>
              <div className='col-md-6'>
                <div className='tf-colors__bg__light-bg p-3 rounded-lg mb-3'>
                  <CardItem textColor="black" img={grid} title="Feature" text="Gorgeous, high-quality design system for mobile, tablet and desktop devices a few reasons" />
                </div>
              </div>

              <div className='col-md-6'>
                <div className='tf-colors__bg__light-bg p-3 rounded-lg mb-3'>
                  <CardItem textColor="black" img={discs} title="Feature" text="Gorgeous, high-quality design system for mobile, tablet and desktop devices a few reasons" />
                </div>
              </div>

              <div className='col-md-6'>
                <div className='tf-colors__bg__light-bg p-3 rounded-lg mb-3'>
                  <CardItem textColor="black" img={heart} title="Feature" text="Gorgeous, high-quality design system for mobile, tablet and desktop devices a few reasons" />
                </div>
              </div>

              <div className='col-md-6'>
                <div className='tf-colors__bg__light-bg p-3 rounded-lg mb-3'>
                  <CardItem textColor="black" img={star} title="Feature" text="Gorgeous, high-quality design system for mobile, tablet and desktop devices a few reasons" />
                </div>
              </div>

              <div className='col-md-6'>
                <div className='tf-colors__bg__light-bg p-3 rounded-lg mb-3'>
                  <CardItem textColor="black" img={flash} title="Feature" text="Gorgeous, high-quality design system for mobile, tablet and desktop devices a few reasons" />
                </div>
              </div>

              <div className='col-md-6'>
                <div className='tf-colors__bg__light-bg p-3 rounded-lg mb-3'>
                  <CardItem textColor="black" img={shield} title="Feature" text="Gorgeous, high-quality design system for mobile, tablet and desktop devices a few reasons" />
                </div>
              </div>

            </div>
          </div>

          <div className='col-lg-5'>
            <img className='w-100' src={featureImg} alt="building with night sky" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeatureRightImg
