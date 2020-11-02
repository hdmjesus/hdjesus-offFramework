import facebook from '../statics/icons/face.webp';
import instagram from '../statics/icons/ig.webp';
import twitter from '../statics/icons/twitter.webp';
import linkedin from '../statics/icons/lik.webp';
import github from '../statics/icons/gh.webp';
const Footer = () => {
  const view = ` 
	   <div class="footer_redes">
        <div class="container">
          <ul class="social-list">
            <li><a href="https://www.facebook.com/hernandez41" target =_blank><img src="${facebook}"  width="35px" height="37px" alt="facebook Jesus"/></a></li> 
            <li><a href="https://www.instagram.com/hdmjesus" target =_blank ><img src="${instagram}"  width="35px" height="37px" alt="instagram Jesus" /></a></li> 
            <li><a href="https://twitter.com/HDMjesus" target =_blank ><img src="${twitter}"  width="35px" height="37px" alt="twitter Jesus" /></a></li> 
            <li><a href="https://www.linkedin.com/in/hdmjesus/" target =_blank><img src="${linkedin}"  width="35px" height="37px" alt="linkedin Jesus" /></a></li> 
            <li><a href="https://github.com/hdmjesus" target =_blank><img src="${github}"  width="35px" height="37px" alt="github Jesus" /></i></a></li> 
          </ul>
        </div>
      </div>

      <div class="footer__nav">
        <div class="container">
          <div class="footer__flex">
            <nav>
              <ul>
                <li><a id="home-router-footer">Inicio</a></li>
                <li><a id="portafolio-router-footer">Portafolio</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      <div class="footer__derechos">
        <div class="container">
          <p>&copy Jesus Hernandez All rights reserved.</p>
          <p>Sitio web realizado con Javascript vanilla</p>
        </div>
      </div>`;

  return view;
};

export default Footer;
