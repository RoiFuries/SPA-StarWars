import Header from '../template/Header'
import Home from '../pages/Home'
import Character from '../pages/Character'
import Error404 from '../pages/Error404'
import GetHash from '../utils/GetHash'
import ResolveRoutes from '../utils/ResolveRoutes'

const routes = {
    '/': Home,
    '/:id': Character,
    'contact': 'Contact'
}

const router = async () => { // Esto es nuestro manejador y  se va aencargar de  mostrar los elementos según la lógica que establecimos 
    const header = null || document.getElementById('header');
    const content = null || document.getElementById('content');

    header.innerHTML = await Header(); // aqui con el innetHTML se va a introducir el header
    // Header con mayuscula es el templete y se esta importando aquí. 
    // header con minuscula es la constante que va a agarrar el elemento con el getElementById ('header') ((este es el id del html de public))
    // y con header.innerHTML lo insertas

    let hash = GetHash();
    let route = await ResolveRoutes(hash);
    let render = routes [route] ? routes [route] : Error404
    content.innerHTML = await render();

}

export default router

 
