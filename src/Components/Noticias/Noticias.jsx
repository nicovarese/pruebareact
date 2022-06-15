import React from 'react'
import "./Noticias.css"
import suarez from '../../Assets/imagenes/suarez.jpg'
import iconoCalendario from '../../Assets/imagenes/icono-calendario.png'
import iconoReloj from '../../Assets/imagenes/icono-reloj.png'
import iconoFlecha from '../../Assets/imagenes/icono-flecha.png'
import valverde from '../../Assets/imagenes/valverde.jpg'
import darwinNunez from '../../Assets/imagenes/darwinnunez.jpg'
import canario from '../../Assets/imagenes/canario.jpg'



function Noticias() {
  return (
    <div class="noticias">
        <div class="tit-not">
          <h2 class="titulo-noticias">Noticias</h2>
          <h6>ver todas</h6>
        </div>
        <div class="cuadros-noticias">
          <div class="cuad-not-1">
            <div class="cuad-img-not">
              <img class="imagen-noticia" src={suarez} alt="" />
            </div>
            <div class="text-not">
              <div class="ico-not">
                <img
                  class="calendario"
                  src={iconoCalendario}
                  alt=""
                />
                <p class="fecha-not">10/06/2022</p>
                <img class="reloj" src={iconoReloj} alt="" />
                <p class="tiempo-not">3 min</p>
              </div>
              <div class="art-noticia">
                <h3>River Plate va por el "milagro" de Suárez.</h3>
                <p class="parrafo-art">
                  El plan de River es claro. Consta en ofrecerle a Suárez un
                  contrato acorde a su trayectoria y con fecha hasta el 31 de
                  diciembre de este año, para que, una vez finalizado el mismo,
                  continúe su carrera en Estados Unidos.
                </p>
                <div class="ver-mas">
                  <img
                    height="20px"
                    width="20px"
                    class="flecha"
                    src={iconoFlecha}
                    alt=""
                  />
                  <p class="mas-info">ver más</p>
                </div>
              </div>
            </div>
          </div>
          <div class="cuad-not-2">
            <div class="cuad-img-not">
              <img
                class="imagen-noticia"
                src={valverde}
                alt=""
              />
            </div>
            <div class="text-not">
              <div class="ico-not">
                <img
                  class="calendario"
                  src={iconoCalendario}
                  alt=""
                />
                <p class="fecha-not">10/06/2022</p>
                <img class="reloj" src={iconoReloj} alt="" />
                <p class="tiempo-not">3 min</p>
              </div>
              <div class="art-noticia">
                <h3>Valverde ganó su primera Champions League</h3>
                <p class="parrafo-art">
                  Federico Valverde conquistó su primer título de UEFA Champions
                  League. Lo hizo con la camiseta del Real Madrid, jugando como
                  titular y siendo clave en el desarrollo del partido.
                </p>
                <div class="ver-mas">
                  <img
                    height="20px"
                    width="20px"
                    class="flecha"
                    src={iconoFlecha}
                    alt=""
                  />
                  <p class="mas-info">ver más</p>
                </div>
              </div>
            </div>
          </div>
          <div class="cuad-not-3">
            <div class="cuad-img-not">
              <img
                class="imagen-noticia"
                src={darwinNunez}
                alt=""
              />
            </div>
            <div class="text-not">
              <div class="ico-not">
                <img
                  class="calendario"
                  src={iconoCalendario}
                  alt=""
                />
                <p class="fecha-not">10/06/2022</p>
                <img class="reloj" src={iconoReloj} alt="" />
                <p class="tiempo-not">3 min</p>
              </div>
              <div class="art-noticia">
                <h3>Liverpool a la carga por Darwin Núñez</h3>
                <p class="parrafo-art">
                  En Portugal afirman que los Reds están convencidos de hacer el
                  negocio y que más allá de que existe una oferta más alta de
                  otro equipo, el delantero quiere jugar en el equipo de Klopp.
                </p>
                <div class="ver-mas">
                  <img
                    height="20px"
                    width="20px"
                    class="flecha"
                    src={iconoFlecha}
                    alt=""
                  />
                  <p class="mas-info">ver más</p>
                </div>
              </div>
            </div>
          </div>
          <div class="cuad-not-4">
            <div class="cuad-img-not">
              <img class="imagen-noticia" src={canario} alt="" />
            </div>
            <div class="text-not">
              <div class="ico-not">
                <img
                  class="calendario"
                  src={iconoCalendario}
                  alt=""
                />
                <p class="fecha-not">10/06/2022</p>
                <img class="reloj" src={iconoReloj} alt="" />
                <p class="tiempo-not">3 min</p>
              </div>
              <div class="art-noticia">
                <h3>El Canario Alvarez Martínez se va de Peñarol.</h3>
                <p class="parrafo-art">
                  Los aurinegros contestarán a la brevedad lo ofertado por el
                  club italiano, pero todo indica que el delantero se irá al
                  calcio. Pero esa oferta presentó algunas diferencias respecto
                  a lo que se había conversado inicialmente, aunque según
                  contaron a Ovación fuentes aurinegras, es un detalle que se va
                  a solucionar y que en las próximas horas todo quedará
                  resuelto.
                </p>
                <div class="ver-mas">
                  <img
                    height="20px"
                    width="20px"
                    class="flecha"
                    src={iconoFlecha}
                    alt=""
                  />
                  <p class="mas-info">ver más</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Noticias
