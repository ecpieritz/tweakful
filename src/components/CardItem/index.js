import React from 'react'

const CardItem = ({img, title, text, textColor}) => {
  return (
    <div className='tf-card-item'>
      <img src={img} alt="" />
      <p className={`font-weight-bold tf-colors__text__${textColor}`}>{title}</p>
      <p className={`tf-colors__text__${textColor}`}>{text}</p>
    </div>
  )
}

export default CardItem
