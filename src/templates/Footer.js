import facebook from '../statics/icons/face.webp';
import instagram from '../statics/icons/ig.webp';
import twitter from '../statics/icons/twitter.webp';
import linkedin from '../statics/icons/lik.webp';
import github from '../statics/icons/gh.webp';
const Footer = () => {
  const view = ` 
	 <div class="footer_redes">
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

      <div class="footer__nav">
        <div class="container">
          <div class="footer__flex">
            <nav>
              <ul>
                <a id="home-router-footer">Inicio</a>
                <!-- <a>Sobre mi</a> -->
                <a id="portafolio-router-footer">Portafolio</a>
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
