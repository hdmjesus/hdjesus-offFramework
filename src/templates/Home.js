import Hero from '../components/Home/Hero';
import Portafolio from '../components/Home/Projects';
import Services from '../components/Home/Services';
import Tecnologies from '../components/Home/Tecnologies';
import whatsapps from '../utils/whatapps';
import facebook from '../utils/facebook';
import ButtonUp from '../utils/ButtonUp';

function Home() {
  return `${Hero()} ${Services()} ${Tecnologies()} ${Portafolio()} ${ButtonUp()} ${whatsapps()} ${facebook()} `;
}

export default Home;
