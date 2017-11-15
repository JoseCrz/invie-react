import React, { Component } from 'react';
import logo from './logo.svg';
import './css/invie.css';
import Portada from './components/Portada.jsx';
import Guitarras from './components/Guitarras.jsx';
import Footer from './components/Footer.jsx'
import logoPortada from './images/invie.png'
import acustica from './images/invie-acustica.png';
import clasica from './images/invie-classic.png';

const data = {
  menu : [
    {
      href: 'index.html',
      title: 'Home',
    },
    {
      href: '#guitarras',
      title: 'Guitarras',
    },
    {
      href: 'precios.html',
      title: 'Precios',
    }
  ],

  logoPortada: logoPortada,

  guitarras: [
    {
      image: acustica,
      alt: 'Guitarra Invie Acustica',
      name: 'Invie Acustica',
      features: [
        'Estilo Vintage',
        'Madera Pura',
        'Incluye estuche invisible de aluminio'
      ]
    },
    {
      image: clasica,
      alt: 'Guitarra Invie Classic',
      name: 'Invie Classic',
      features: [
        'Estilo Vintage',
        'Liviana',
        '~S W A G~'
      ]
    }
  ]

}



class App extends Component {
  render() {
    return (
      <section className="Invie">
      {/* PORTADA */}
      <Portada menu={data.menu} logo={data.logoPortada} />
      {/* GUITARRAS */}
      <Guitarras guitarras={data.guitarras} />

      {/* FOOTER */}
      <Footer />

      </section>
    );
  }
}

export default App;
