import React from 'react'
import "./Nav.css"
import logo from '../../Assets/imagenes/logo.png'

function Nav() {
  return (
    <nav>
        <div className="img-logo">
          <img className="logo" src={logo} alt="logo-nexos" />
        </div>
        <ul className="header-list">
          <li>Nosotros</li>
          <li>Noticias</li>
          <li>Ayuda</li>
        </ul>
        <button id="myBtn" className="header-button">
          INGRESAR
        </button>
    </nav>
  )
}

export default Nav
