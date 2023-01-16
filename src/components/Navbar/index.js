import React from 'react'
import logoImg from '../../assets/imgs/tf-logo.png'

const Navbar = () => {
  return (
    <nav className="tf-nav fixed-top navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="/">
    <img src={logoImg} alt="Tweakful logo" />
  </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#tf-navbar" aria-controls="tf-navbar" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse justify-content-end" id="tf-navbar">
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
</nav>
  )
}

export default Navbar
