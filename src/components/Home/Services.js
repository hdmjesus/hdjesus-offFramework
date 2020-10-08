import resposibeDesing from '../../statics/images/undraw_progressive_app_m9ms.svg';
import codeSemanting from '../../statics/images/undraw_google_analytics_a57d.svg';
import aplicationScaling from '../../statics/images/undraw_clean_up_ucm0.svg';

const Services = () => {
  const view = `
<section class="services">
    <h2 class="title-level2">Podras contar con...</h2>
      <div class="services__container">
        <article class="service">
          <figure>
            <div class="figure-service"></div>

            <div class="service__image">
              <img
                src="${resposibeDesing}"
                alt="Responsibe desing"
              />
            </div>
          </figure>

          <div class="service__description">
            <h4>RESPONSIVE DESING</h4>
            <p>
              El Responsive Design o diseño adaptativo, es la técnica que se usa
              en la actualidad para tener una misma web adaptada a las
              diferentes plataformas que nos brinda la tecnología: ordenador,
              tablet y Smartphone.
            </p>
          </div>
        </article>

        <article class="service">
          <figure>
            <div class="figure-service"></div>

            <div class="service__image">
              <img
                src="${codeSemanting}"
                alt="Responsibe desing"
              />
            </div>
          </figure>

          <div class="service__description">
            <h4>CODIGO SEMANTICO</h4>
            <p>
              Los motores de búsqueda analizan el código para saber qué clase de
              contenido muestran y así, saber cómo mostrarlo.
            </p>
          </div>
        </article>

        <article class="service">
          <figure>
            <div class="figure-service"></div>

            <div class="service__image">
              <img
                src="${aplicationScaling}"
                alt="Responsibe desing"
              />
            </div>
          </figure>

          <div class="service__description">
            <h4>APLICACIONES ESCALABLES</h4>
            <p>
              Se asegura que su aplicacion pueda crecer sin verse comprometido
              el rendimiento de la misma.
            </p>
          </div>
        </article>
      </div>
    </section>
`;
  return view;
};

export default Services;
