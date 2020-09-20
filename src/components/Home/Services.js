const Services = () => {
  const view = `
<section class="services">
      <div class="container">
        <h2 class="title-level2">Podras contar con...</h2>
        <article class="service">
          <figure>
            <div class="figure-service"></div>

            <div class="service__image">
              <img
                src="../src/images/undraw_progressive_app_m9ms.svg"
                alt="Responsibe desing"
              />
            </div>
          </figure>

          <div class="service__description">
            <h4>RESPONSIBE DESING</h4>
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
                src="../src/images/undraw_google_analytics_a57d.svg"
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
                src="../src/images/undraw_clean_up_ucm0.svg"
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
  return views;
};

export default Services;
