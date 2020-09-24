import Hero from '../components/Home/Hero';
import Projects from '../components/Home/Projects';
import Services from '../components/Home/Services';
import Tecnologies from '../components/Home/Tecnologies';

import skills from '../utils/skills';

function Home() {
  return `${Hero()} ${Services()} ${Tecnologies()} ${Projects()} `;
}

export default Home;
