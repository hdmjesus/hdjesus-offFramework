import './styles/main.scss';
import skills from './utils/skills';
import Layout from './templates/layout';
import routes from './routes/routes';
import Router from './routes/router';
// const $home = document.getElementById('portafolio');
// const $contact = document.getElementById('contact');
// const $about = document.getElementById('about');
const router = new Router(routes);
skills();
// $home.addEventListener('click', () => {
//   router._loadRoute('');
// });

// $contact.addEventListener('click', () => {
//   router._loadRoute('contact');
// });

// $about.addEventListener('click', () => {
//   router._loadRoute('about');
// });
