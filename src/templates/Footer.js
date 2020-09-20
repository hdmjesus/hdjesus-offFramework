const Footer = () => {
  const view = ` 
	 <div class="footer_redes">
        <div class="container">
          <div class="social-list">
            <a href="https://chatwith.io/s/5f1a3e1ceeb8d"
              ><img src="../src/images/Assets/face.png" alt=""
            /></a>
            <a href=""><img src="../src/images/Assets/ig.png" alt="" /></a>
            <a href=""><img src="../src/images/Assets/twitter.png" alt="" /></a>
            <a href=""><img src="../src/images/Assets/lik.png" alt="" /></a>
            <a href=""><i class="fab fa-github"></i></a>
          </div>
        </div>
      </div>

      <div class="footer__nav">
        <div class="container">
          <div class="footer__flex">
            <nav>
              <ul>
                <a>Inicio</a>
                <!-- <a>Sobre mi</a> -->
                <a>Portafolio</a>
                <!--  <a>Blog</a> -->
              </ul>
            </nav>
          </div>
        </div>
      </div>

      <div class="footer__derechos">
        <div class="container">
          <p>&copy Jesus Hernandez All rights reserved.</p>
        </div>
      </div>`;

  return view;
};

export default Footer;
