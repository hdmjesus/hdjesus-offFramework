const Portafolio = () => {
  const view = `
    <article class="proyecto">
      <div class="proyecto__description">
          <h3 class="proyecto__title">${project.title}</h3>
          <p>${project.description}</p>

      </div>
      <div class="proyecto__buttons">
          <a href="" class="button-primary">Ver Online</a>
          <a href="" class="button-second"> Ver codigo</a>
      </div>
      <figure class="proyecto__image">
          <img src="${project.img}" alt="${project.title}">
      </figure>
  </article>`;
  return view;
};
export default Portafolio;
