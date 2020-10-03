function Portafolio() {
  function templateProjetcs({ title, img, id, description, github, online }) {
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
    const cotainerProjects = document.getElementById('proyectosHome');
    fetch(URL)
      .then((data) => {
        return data.json();
      })
      .then(({ hdjesus: { proyectos } }) => {
        for (let index = 0; index <= 1; index++) {
          const element = proyectos[index];
          const html = templateProjetcs(element);
          cotainerProjects.innerHTML += html;
        }
      });
  }
  getData();
}

export default Portafolio;
