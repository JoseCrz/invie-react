import React, { Component } from 'react';
import logoWhite from '../images/invie-white.png';

class Footer extends Component {
  render () {
    return (
      <footer className="footer">
      <div className="contenedor">
        <div className="contacto">
          <img src={logoWhite} alt="logotipo blanco" />
          <a href="tel:+522288888888"><strong>Teléfono</strong><span>2288888888</span></a>
          <a href="mailto:contacto@invie.com"><strong>Contacto</strong><span>contacto@invie.com</span></a>
        </div>
        <form className="formulario">
          <div className="col1">
            <label htmlFor="nombre" name="nombre">Nombre:</label>
            <input type="text" required="true" id="nombre" />
            <label htmlFor="email" name="email">E-mail:</label>
            <input type="email" required id="email" />
            <div className="sexo">
              <label htmlFor="mujer">
                <input type="radio" id="mujer" name="sexo" value="mujer" defaultChecked /> Mujer
              </label>
              <label htmlFor="hombre">
                <input type="radio" id="hombre" name="sexo" value="hombre" /> Hombre
              </label>
            </div>
            <div className="intereses">
              <label htmlFor="cotizacion">
                <input type="checkbox" id="cotizacion" name="intereses" value="cotizacion" defaultChecked /> Cotización
              </label>
              <label htmlFor="reclamos">
                <input type="checkbox" id="reclamos" name="intereses" value="reclamos" /> Reclamos
              </label>
              <label htmlFor="comentarios">
                <input type="checkbox" id="comentarios" name="intereses" value="comentarios" /> Comentarios
              </label>
              <label htmlFor="otros">
                <input type="checkbox" id="otros" name="intereses" value="otros" /> Otros
              </label>
            </div>
          </div>
          <div className="col2">
            <label htmlFor="comentarios"> Asunto
              <textarea id="comentarios" name="comentarios" rows="7" cols="35"></textarea>
              <input type="submit" className="button" value="Enviar" />
            </label>
          </div>
        </form>
      </div>
    </footer>

    )
  }
}

export default Footer;