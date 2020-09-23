class Router {
  constructor(routes) {
    this.routes = routes;
    this._loadInitialRoute();
  }
  _loadRoute(...urlSegs) {
    const matchedRoute = this._matchUrlToRoute(urlSegs);

    const url = `/${urlSegs.join('/')}`;
    history.pushState({}, 'Works', url);

    const routeOutElm = document.getElementById('main');
    routeOutElm.innerHTML = matchedRoute.template;
  }
  _loadInitialRoute() {
    console.log('_loadInitialRoute');
    // Se crea un array con el path sin incluir el /
    const pathNameSplit = window.location.pathname.split('/');

    // Colocamos una condicion , si el array anterior es mayor que uno se devuelve un array
    // nuevo con el valor de la posicion 2 del array si no devuelve un string vacio.
    const pathSegs = pathNameSplit.length > 1 ? pathNameSplit.slice(1) : '';

    // A la funcion loadRoute le pasamos un iterable en este caso ese Array, coloando los ...
    // permite que esa funcion itere sobre ese array
    this._loadRoute(...pathSegs);
  }

  _matchUrlToRoute(urlSegs) {
    // Hace un recorrido sobre todas las rutas que ya tenemos
    const matchedRoute = this.routes.find((route) => {
      // Sobre la propiedad path de cada elemento iterable se crea un array y se separa del /
      // luego se escoge la posicion 1, que corresponde al path sin el /
      // En esta constante se crea un nuevo arrray con el el valor de la propiedad path

      const routePathSegs = route.path.split('/').slice(1);
      console.log(routePathSegs);

      //Se comprueba si la ruta obtenida(routePathSegs) es igual a la ruta que nos queremos mover
      if (routePathSegs.length !== urlSegs.length) {
        return false;
      }
      //Se vuelve a hacer una validacion para verificar si la ruta tienen los mismos caracteres
      // Array.every valida si cada elemento del array cumple con la condicion,de ser asi devuelve true
      return routePathSegs.every(
        (routePathSeg, i) => routePathSeg === urlSegs[i]
      );
    });

    return matchedRoute;
  }
}

export default Router;
