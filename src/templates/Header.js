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
      <a href="/"><img src="${logo}" width="50px" height="50px" alt="Logo personal" /> </a>
    </figure>

    <div class="header__components">
      <nav class="header--nav-mobile" arial-label="menu"  >
        <p id="nav-mobile"><i class="fas fa-bars"></i></p>
    <nav class="enlances uno" id="enlances">
        <ul class="list-nav" id="list-nav-mobile">
          <li>
            <a id="home-router-header">
              <i class="fa fa-home"></i> | Inicio</a>
          </li>
          <li>
            <a id="portafolio-router-header">
              <i class="fa fa-briefcase"  id="portafolio"></i> | Portafolio</a>
          </li>

        </ul>

        <div class="redes">
          <div class="redes-enlace">
            <div class="container">
              <ul class="social-list" >
                <li ><a href="https://www.facebook.com/hernandez41" rel="noopener" rel="noreferrer" target=_blank><img
                      src="${facebook}" width="35px" height="37px" alt="facebook Jesus" /></a></li>
                <li ><a href="https://www.instagram.com/hdmjesus" rel="noopener" rel="noreferrer"  target=_blank><img
                      src="${instagram}"  width="35px" height="37px" alt="instagram Jesus" /></a></li>
                <li ><a href="https://twitter.com/HDMjesus" rel="noopener" rel="noreferrer"  target=_blank><img src="${twitter}"
                      width="35px" height="37px" alt="twitter Jesus" /></a></li>
                <li ><a href="https://www.linkedin.com/in/hdmjesus/" rel="noopener" rel="noreferrer"  target=_blank><img
                      src="${linkedin}"  width="35px" height="37px" alt="linkedin Jesus" /></a></li>
                <li ><a href="https://github.com/hdmjesus" rel="noopener" rel="noreferrer"  target=_blank><img src="${github}"
                      width="35px" height="37px" alt="github Jesus" /></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      </nav>

     

      <nav class="header--nav-desktop">
        <ul >
          <li aria-label="Inicio"> <button id="home-router-desktop"><a tabindex="0" >Inicio</a></button>  </li>
          <li aria-label="Proyectos"> <button id="projects-router-desktop"><a tabindex="0">Portafolio</a></button>  </li>
        </ul>
      </nav>

      <button class="switch" id="switch" aria-label="Dark mode button" tabindex="0">
        <span><i class="fas fa-sun"></i></span>
        <span><i class="fas fa-moon"></i></span>
      </button>
    </div>
  </header>
`;

  return view;
};

export default Header;
