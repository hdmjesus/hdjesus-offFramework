import cabezera from './Header';
import piePagina from './Footer';
import darkMode from '../utils/darkMode';
import NavResponsibe from '../utils/navResponsibe';

const header = document.getElementById('root-h');
const footer = document.getElementById('footer');

header.innerHTML = cabezera();
darkMode();
NavResponsibe();
footer.innerHTML = piePagina();
