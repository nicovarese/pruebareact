import React from 'react'
import "./Main.css"
import oficina from '../../Assets/imagenes/oficina.png'
import voluntariado from '../../Assets/imagenes/voluntariado.jpg'
import iconoMano from '../../Assets/imagenes/icono-mano.png'
import iconoMas from '../../Assets/imagenes/icono-mas.png'
import iconoManoCorazon from '../../Assets/imagenes/icono-mano-corazon.png'
import iconoReciclar from '../../Assets/imagenes/icono-reciclar.png'
import iconoMaletin from '../../Assets/imagenes/icono-maletin.png'


function Main() {
  return (
    <main>
        <div class="soluciones">
          <div class="parte-arriba">
            <div class="img-soluciones-emp">
              <img
                class="img-sol-emp"
                src={oficina}
                alt="imagenempresas"
              />
            </div>
            <div class="texto-part-arriba">
              <div class="texto-emp">
                <h2>Soluciones para empresas</h2>
                <p>Generamos un medio para que las empresas se involucren en</p>
                <p class="p-header">actividades de responsabilidad social.</p>
                <p class="p-header">
                  ¡Creá un grupo de voluntarios en tu organización y se parte
                  del
                </p>
                <p class="p-header">cambio!.</p>
              </div>
            </div>
          </div>
          <div class="parte-abajo">
            <div class="texto-org">
              <h2>Soluciones para organizaciones</h2>
              <p>
                Apoyamos a las organizaciones sociales para que alcancen sus
              </p>
              <p class="p-header">
                objetivos. Ponemos a su disposición una comunidad de voluntarios
              </p>
              <p class="p-header">dispuestos a apoyarlas en sus necesidades.</p>
              <p class="p-header">
                Equipos de voluntarios por empresas dispuestos a potenciar tu
              </p>
              <p class="p-header">impacto en la sociedad</p>
            </div>
            <div class="img-soluciones-org">
              <img
                class="img-sol-org"
                src={voluntariado}
                alt="imagenorganizaciones"
              />
            </div>
          </div>
        </div>
        <div class="oportunidades">
          <div class="texto-oportunidades">
            <h2>Encuentra las mejores oportunidades</h2>
            <p>
              La plataforma cuenta con gran variedad de proyectos locales
              (sociales, educativos y medioambientales), donde
            </p>
            <p class="p-header">
              encontraras el que mejor se adapte a la experiencia que estás
              buscando.
            </p>
            <p class="p-header">
              Te ayudamos en la coordinación con la organización de forma simple
              y rápida.
            </p>
          </div>
          <div class="cuatro-cuadros">
            <div class="cuadritos-vol">
              <div class="logos-cuadrados">
                <div class="logo-cuadrado">
                  <img src={iconoMano} alt="mano" />
                </div>
                <div class="logo-mas">
                  <img src={iconoMas} alt="más" />
                </div>
              </div>
              <div class="texto-cuadraditos">
                <p class="p-cuadrado">Ser voluntario</p>
              </div>
            </div>
            <div class="cuadritos-don">
              <div class="logos-cuadrados">
                <div class="logo-cuadrado">
                  <img
                    src={iconoManoCorazon}
                    alt="manocorazon"
                  />
                </div>
                <div class="logo-mas">
                  <img src={iconoMas} alt="más" />
                </div>
              </div>
              <div class="texto-cuadraditos">
                <p class="p-cuadrado">Donar</p>
              </div>
            </div>
            <div class="cuadritos-rec">
              <div class="logos-cuadrados">
                <div class="logo-cuadrado">
                  <img src={iconoReciclar} alt="reciclar" />
                </div>
                <div class="logo-mas">
                  <img src={iconoMas} alt="más" />
                </div>
              </div>
              <div class="texto-cuadraditos">
                <p class="p-cuadrado">Reciclar</p>
              </div>
            </div>
            <div class="cuadritos-llam">
              <div class="logos-cuadrados">
                <div class="logo-cuadrado">
                  <img src={iconoMaletin} alt="maletin" />
                </div>
                <div class="logo-mas">
                  <img src={iconoMas} alt="más" />
                </div>
              </div>
              <div class="texto-cuadraditos">
                <p class="p-cuadrado">Llamados</p>
                <p class="p-cuadrado-abajo">laborales</p>
              </div>
            </div>
          </div>
        </div>
      </main>
  )
}

export default Main
