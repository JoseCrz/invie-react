import React, { Component } from 'react';
import acustica from '../images/invie-acustica.png';
import clasica from '../images/invie-classic.png';

class Guitarras extends Component {
  render () {
    return (
      <section id="guitarras" class="guitarras contenedor">
      <h2>Nuestras Guitarras</h2>
      <article className="guitarra">
        <img className="derecha" src={acustica} alt="Invie Acustica" width="350"/>
        <div className="contenedor-guitarra-a">
          <h3 className="title-b">Invie acustica</h3>
          <ol>
            <li>Estilo vintage</li>
            <li>Madera pura</li>
            <li>Incluye estuche invisible de aluminio</li>
          </ol>
        </div>
      </article>
      <article className="guitarra b">
        <img className="izquierda" src={clasica} alt="Invie Classic" width="350" />
        <div className="contenedor-guitarra-b">
          <h3 className="title-b">Invie Clasica</h3>
          <ol>
            <li>Estilo futurista</li>
            <li>Liviana</li>
            <li>Incluye ~SWAG~</li>
          </ol>
        </div>
      </article>
    </section>
    )
  }
}

export default Guitarras;