import MainController from './controllers/MainController.js';
import MainModel from './models/MainModel.js.js';
import MainView from './views/MainView.js';
import { ErrorComponent } from './components/Error.js';
import {parseLocation, findActionByPath, routes } from './routes/router.js';

// Starting point de un SPA

const app = new MainController(new MainModel(), new MainView());

const router = () => {
    const path = parseLocation();

    const {action = 'error' } = findActionByPath(path, routes) || {};

    // Antes de cambiar de route, limpio la vista
    app.cleanView();

    switch (action) {
        case "teams":
            app.loadMainView("#app") // 
            break;
        case "listar":
            app.listar("#app") // falta definir metodo list
            break;
        default:
            ErrorComponent("#app");
            break;
    }
}

$( window ).on( 'load', () => {
    router();
});

$( window ).on('hashchange', () =>{
    router();
})