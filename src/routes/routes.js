import Home from '../templates/Home';
import Portafolio from '../templates/projects';

const routes = [
  { path: '/', template: `${Home()}` },
  { path: '/portafolio', template: `${Portafolio()}` },
];

export default routes;
