// import cv from '../../statics/docs/cv:jesus.pdf';
import imagensita from '../../statics/images/work-home.svg';
import Jesus from '../../statics/images/yo@2x.png';

const Hero = () => {
  const view = `
<section class="hero" id="">
      <hr class="line--header" />
      <div class="hero__container">
        <div class="hero__skills">
          <div class="hero__curriculum">
            <a href="" download="cv: Jesus Hernandez">
              <h6>Hoja de vida</h6>
            </a>
          </div>

          <figure class="hero__work">
            <img src="${imagensita}" alt="Espacio de trabajo" />
          </figure>
        </div>

        <div class="jesusH">
          <figure class="jesusH__image">
            <img src="${Jesus}" alt="Jesus Hernandez" />
          </figure>

          <div class="jesusH__description">
            <h1>Jesús Hernández</h1>
            <h3>Frontend Developer</h3>
            <h3>Tecnico Ambiental</h3>

            <p>
              Hola, me llamo Jesus Hernandez y soy Desarrollador Front-End, mi
              reto es resolver problemas ambientales con tegnologia.
            </p>

            <!-- <div class="button-service" >

                        <a href="./form.html" id="services">Hagamos tu proyecto</a>
                    </div> -->
          </div>
        </div>
      </div>
    </section>
`;
  return view;
};

export default Hero;
