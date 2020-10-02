import Banner from '../components/portafolio/Banner';
import whatsapps from '../utils/whatapps';
import facebook from '../utils/facebook';
import ButtonUp from '../utils/ButtonUp';
function Projects() {
  return `${Banner()} ${ButtonUp()} ${whatsapps()} ${facebook()}`;
}

export default Projects;
