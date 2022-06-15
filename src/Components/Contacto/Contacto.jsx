import React from 'react'
import "./Contacto.css"
import laptop from '../../Assets/imagenes/laptop-escritorio.jpg'
import logoBlanco from '../../Assets/imagenes/logo-blanco.png'




function Contacto() {
  return (
    <div class="contacto-footer">
        <div class="contacto">
          <div class="parte-izq-con">
            <div class="imagen-laptop">
              <img
                class="img-contacto"
                src={laptop}
                alt="laptop-escritorio"
              />
            </div>
          </div>
          <div class="datos-contacto">
            <h2 class="titulo-contacto">Contacto</h2>
            <div class="inputs">
              <div class="texto-dato">
                <p class="p-texto-dato">Texto dato</p>
                <input
                  class="input-chico"
                  placeholder="Dato a completar"
                  type="text"
                />
                <p class="p-texto-dato">Texto dato</p>
                <input
                  class="input-chico"
                  placeholder="Dato a completar"
                  type="text"
                />
              </div>
              <div class="textarea">
                <p class="p-texto-dato">Mensaje</p>
                <textarea placeholder="Escribe tu mensaje aquí"></textarea>
              </div>
            </div>
            <button class="boton-enviar">ENVIAR</button>
          </div>
        </div>
        <footer>
          <div class="para-bordes">
            <div class="logo-blanco">
              <img
                class="img-logo-foot"
                src={logoBlanco}
                alt=""
              />
            </div>
            <ul class="footer-list">
              <li>Nosotros</li>
              <li>Noticias</li>
              <li>Contacto</li>
              <li>Términos y condiciones</li>
            </ul>
            <div class="redes-sociales">
              <p class="redes">Seguínos!</p>
            </div>
          </div>
        </footer>
      </div>
  )
}

export default Contacto
