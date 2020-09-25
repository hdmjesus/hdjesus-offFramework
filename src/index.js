import './styles/main.scss';
import skills from './utils/skills';
import Layout from './templates/layout';
import routes from './routes/routes';
import Router from './routes/router';
import Portafolio from './components/Home/Portafolio-p';
import portafolioFull from './components/portafolio/PortafolioFull';

const homeH = document.getElementById('home-router-header');
const portafolioH = document.getElementById('portafolio-router-header');

const homeF = document.getElementById('home-router-footer');
const portafolioF = document.getElementById('portafolio-router-footer');

const router = new Router(routes);
skills();
Portafolio();

// Llamado de rutas
homeH.addEventListener('click', (event) => {
  event.preventDefault();
  router._loadRoute('');
  skills();
  Portafolio();
});
portafolioH.addEventListener('click', (event) => {
  event.preventDefault();
  router._loadRoute('portafolio');
  portafolioFull();
});

homeF.addEventListener('click', (event) => {
  event.preventDefault();
  router._loadRoute('');
  skills();
  Portafolio();
});
portafolioF.addEventListener('click', (event) => {
  event.preventDefault();
  router._loadRoute('portafolio');
  portafolioFull();
});
