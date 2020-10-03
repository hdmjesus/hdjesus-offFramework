import './styles/main.scss';
import skills from './utils/skills';
import Layout from './templates/layout';
import routes from './routes/routes';
import Router from './routes/router';
import Portafolio from './components/Home/Portafolio-p';
import portafolioFull from './components/portafolio/PortafolioFull';
import headerHiden from './utils/headerHiden';

const homeH = document.getElementById('home-router-header');
const portafolioH = document.getElementById('portafolio-router-header');
const homeF = document.getElementById('home-router-footer');
const homedesktop = document.getElementById('home-router-desktop');
const portafoliodesktop = document.getElementById('projects-router-desktop');
const portafolioF = document.getElementById('portafolio-router-footer');
const $enlaces = document.getElementById('enlances');

const router = new Router(routes);

//EL SCRIPT QUE LE DA LOS ESTILOS A LA SECCION DE TECNOLOGIA A PENAS RECARGA LA PAGINA
skills();

//CONSULTA LOS PROYECTOS DE LA API Y LOS RENDERIZA APENAS CARGA LA PAGINA
Portafolio();

//CONFIGURACION DE HIDEN-SCROLL DEL HEADER Y BUTTON-UP
headerHiden();

// Llamado de rutas
homeH &&
  homedesktop.addEventListener('click', (event) => {
    event.preventDefault();
    router._loadRoute('');
    skills();
    Portafolio();
    headerHiden();
    //La clase 'dos' es una clase que abre el menu
    //La clase 'uno' es una clase que remueve el menu
    $enlaces.classList.remove('dos');
    $enlaces.classList.add('uno');
  });
portafolioH &&
  portafoliodesktop.addEventListener('click', (event) => {
    event.preventDefault();
    router._loadRoute('portafolio');
    portafolioFull();
    headerHiden();
    //La clase 'dos' es una clase que abre el menu
    //La clase 'uno' es una clase que r emueve el menu
    $enlaces.classList.remove('dos');
    $enlaces.classList.add('uno');
  });

homeF.addEventListener('click', (event) => {
  event.preventDefault();
  router._loadRoute('');
  skills();
  Portafolio();
  headerHiden();
});
portafolioF.addEventListener('click', (event) => {
  event.preventDefault();
  router._loadRoute('portafolio');
  portafolioFull();
  headerHiden();
});
