export const routes = [
    { path: '/' ,       action: 'teams'},
    { path: '/projects', action: 'listar'},
];

export const parseLocation = () => location.hash.slice(1).toLowerCase() || '/';

export const findActionByPath = (path, routes) => routes.find(r=> r.path == path || undefined );