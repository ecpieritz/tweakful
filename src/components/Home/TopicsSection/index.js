import React from 'react'

import star from '../../../assets/imgs/icons/tf-icon__white-star.svg'
import flash from '../../../assets/imgs/icons/tf-icon__white-flash.svg'
import tag from '../../../assets/imgs/icons/tf-icon__white-tag.png'
import grid from '../../../assets/imgs/icons/tf-icon__white-grid.svg'
import heart from '../../../assets/imgs/icons/tf-icon__white-heart.png'
import shield from '../../../assets/imgs/icons/tf-icon__white-shield.svg'
import CardItem from '../../CardItem'

const Topics = () => {
  return (
    <section className='tf-topics section'>
      <div className='container-fluid'>
        <h2>Headline of Modern and Digital Platform</h2>

        <div className='row'>
          <div className='col-md-4'>
            <CardItem img={star} title="Feature" text="Gorgeous, high-quality design system for mobile, tablet and desktop devices a few reasons" />
          </div>
          <div className='col-md-4'>
            <CardItem img={flash} title="Feature" text="Gorgeous, high-quality design system for mobile, tablet and desktop devices a few reasons" />
          </div>
          <div className='col-md-4'>
            <CardItem img={tag} title="Feature" text="Gorgeous, high-quality design system for mobile, tablet and desktop devices a few reasons" />
          </div>
          <div className='col-md-4'>
            <CardItem img={grid} title="Feature" text="Gorgeous, high-quality design system for mobile, tablet and desktop devices a few reasons" />
          </div>
          <div className='col-md-4'>
            <CardItem img={heart} title="Feature" text="Gorgeous, high-quality design system for mobile, tablet and desktop devices a few reasons" />
          </div>
          <div className='col-md-4'>
            <CardItem img={shield} title="Feature" text="Gorgeous, high-quality design system for mobile, tablet and desktop devices a few reasons" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Topics
