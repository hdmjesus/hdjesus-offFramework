import bannerPortafolio from '../../statics/images/portafolio.webp';

const Banner = () => {
  const view = `
   <section class="banner">
        <figure class="banner__image">
          <img src="${bannerPortafolio}" alt="banner Potafolio" />
        </figure>
      </section>`;
  return view;
};

export default Banner;
