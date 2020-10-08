import Hero from '../components/Home/Hero';
import Portafolio from '../components/Home/Projects';
import Services from '../components/Home/Services';
import Tecnologies from '../components/Home/Tecnologies';
import whatsapps from '../utils/whatapps';

import ButtonUp from '../utils/ButtonUp';

function Home() {
  return `${Hero()} ${Services()} ${Tecnologies()} ${Portafolio()} ${ButtonUp()} ${whatsapps()}`;
}

export default Home;
