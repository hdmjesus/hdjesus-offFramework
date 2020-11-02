// import cv from '../../statics/docs/cv:jesus.pdf';
import imagensita from '../../statics/images/work-home.svg';
import Jesus from '../../statics/images/yo@2x.png';

const Hero = () => {
  const view = `
 <section class="hero" id="">
    <hr class="line--header" />
    <div class="hero__container">
      <article class="hero__skills" >
        <div class="hero__curriculum" aria-label="Curriculum">
          <a href="" download="cv: Jesus Hernandez">
            <p>Hoja de vida</p>
          </a>
        </div>

        <figure class="hero__work" role="banner">
          <img src="${imagensita}"  alt="Espacio de trabajo" />
        </figure>
      </article>

      <article class="jesusH">
        <figure class="jesusH__image">
          <img src="${Jesus}" alt="Jesus Hernandez" />
        </figure>

        <div class="jesusH__description" tabindex="0">
          <h1>Jesús Hernández</h1>
          <h2>Frontend Developer</h2>
          <h2>Tecnico Ambiental</h2>     <p>
          Soy Frontend Developer y deseo dar soluciones ambientales ♻️ con ayuda de la tecnología💻.
          </p>
        </div>

      </article>
    </div>
  </section>
`;
  return view;
};

export default Hero;
