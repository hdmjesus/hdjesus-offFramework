import Home from '../templates/Home';
import Portafolio from '../templates/Portafolio-p';

const routes = [
  { path: '/', template: `${Home()}` },
  { path: '/index.html', template: `${Home()}` },
  { path: '/portafolio', template: `${Portafolio()}` },
];

export default routes;
