import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Invie from './Invie';
import registerServiceWorker from './registerServiceWorker';
import logoPortada from './images/invie.png'
import acustica from './images/invie-acustica.png';
import clasica from './images/invie-classic.png';
import cheet from 'cheet.js';
import { Provider } from 'react-redux';
import { createStore } from 'redux';


const initialState = {
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

function reducer (state, action) {
  switch (action.type) {
    case 'UPDATE_PROPS': {
      const newProps = action.payload.props;
      return { ...state, ...newProps};
    }
    default: return state;
  }
}

const store = createStore(reducer, initialState);

const easter = {
  menu : [
    {
      href: 'index.html',
      title: 'Home',
    },
  ],
}

cheet('m i m i', () => {
  store.dispatch({
    type: 'UPDATE_PROPS',
    payload: {
      props: easter,
    }
  })
})

cheet('b e b e', () => {
  store.dispatch({
    type: 'UPDATE_PROPS',
    payload: {
      props: initialState,
    }
  })
})

ReactDOM.render(
  <Provider store={store}>
    <Invie />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
