import logo from '../statics/icons/hdjesus.png';
import facebook from '../statics/icons/face.webp';
import instagram from '../statics/icons/ig.webp';
import twitter from '../statics/icons/twitter.webp';
import linkedin from '../statics/icons/lik.webp';
import github from '../statics/icons/gh.webp';

const Header = () => {
  const view = `
 <header class="header" id="header">
      <figure class="header__logo">
       <a href="#/"><img src="${logo}" alt="hdjesus"/> </a> 
      </figure>

      <div class="header__components">
        <nav class="header--nav-mobile">
          <p id="nav-mobile"><i class="fas fa-bars"></i></p>
        </nav>

        <nav class="enlances uno" id="enlances">
          <ul>
            <li>
              <a  id="home-router-header">
                <i class="fa fa-home" aria-hidden="true"></i> | Inicio</a
              >
            </li>
            <li>
              <a id="portafolio-router-header">
                <i class="fa fa-briefcase" aria-hidden="true" id="portafolio"></i> |  Portafolio</a
              >
            </li>
            <!-- <li>
              <a href="">
                <i class="fa fa-rss" aria-hidden="true"></i> | Blog</a
              >
            </li> -->
          </ul>

          <div class="redes">
            <div class="redes-enlace">
              <div class="container">
                <div class="social-list">
                 <a href="https://chatwith.io/s/5f1a3e1ceeb8d"><img src="${facebook}" alt="facebook"/></a>
                 <a href=""><img src="${instagram}" alt="instagram" /></a>
                 <a href=""><img src="${twitter}" alt="twitter" /></a>
                 <a href=""><img src="${linkedin}" alt="linkedin" /></a>
                 <a href=""><img src="${github}" alt="github" /></i></a>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <nav class="header--nav-desktop">
          <ul>
            <li><a href="">Inicio</a></li>
            <!-- <li><a href="">Sobre mi</a></li> -->
            <li><a href="">Portafolio</a></li>
            <!-- <li><a href="">Blog</a></li> -->
          </ul>
        </nav>

        <button class="switch" id="switch">
          <span><i class="fas fa-sun"></i></span>
          <span><i class="fas fa-moon"></i></span>
        </button>
      </div>
    </header>
`;

  return view;
};

export default Header;
