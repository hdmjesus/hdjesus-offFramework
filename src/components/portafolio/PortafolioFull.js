const portafolioFull = () => {
  function templateProjetcsFull({
    title,
    img,
    id,
    description,
    github,
    online,
  }) {
    return `
    <article class="proyecto">
        <div class="proyecto__description">
            <h3 class="proyecto__title">${title}</h3>
            <p>${description}</p>
        <div class="proyecto__buttons">
            <a target="_blank" href="${online}" class="button-primary">Ver Online</a>
            <a target="_blank" href="${github}" class="button-second"> Ver codigo</a>
         </div>
        </div>
        

         <figure class="proyecto__image">
             <img src="${img}" alt="${title}">
         </figure>
     </article>
`;
  }
  function getData() {
    const URL = 'https://my-json-server.typicode.com/hdmjesus/-Projects/db';
    const projectFull = document.getElementById('projectsFull');
    fetch(URL)
      .then((data) => {
        return data.json();
      })
      .then(({ hdjesus: { proyectos } }) => {
        proyectos.forEach((project) => {
          const projectFull = document.getElementById('projectsFull');
          const element = project;
          const html = templateProjetcsFull(element);
          projectFull.innerHTML += html;
        });
      });
  }
  getData();
};
export default portafolioFull;
