import React from 'react'

const Header = ({ title, description }) => {
  return (
    <header className='tf-header pages'>
      <div className='container-fluid'>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </header>
  )
}

export default Header
