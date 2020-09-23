const Header = () => {
  const view = `
 <header class="header" id="header">
      <figure class="header__logo">
        <img src="../src/images/Assets/hdjesus.png" alt="hdjesus"/>
      </figure>

      <div class="header__components">
        <nav class="header--nav-mobile">
          <p id="nav-mobile"><i class="fas fa-bars"></i></p>
        </nav>

        <nav class="enlances uno" id="enlances">
          <ul>
            <li>
              <a href="">
                <i class="fa fa-home" aria-hidden="true"></i> | Inicio</a
              >
            </li>
            <li>
              <a href="">
                <i class="fa fa-briefcase" aria-hidden="true" id="portafolio"></i> |
                Portafolio</a
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
                  <a href=""
                    ><img src="../src/images/Assets/face.png" alt=""
                  /></a>
                  <a href=""
                    ><img src="../src/images/Assets/ig.png" alt=""
                  /></a>
                  <a href=""
                    ><img src="../src/images/Assets/twitter.png" alt=""
                  /></a>
                  <a href=""
                    ><img src="../src/images/Assets/lik.png" alt=""
                  /></a>
                  <a href=""><i class="fab fa-github"></i></a>
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
