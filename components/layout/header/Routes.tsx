// import { useRoutes, RouteObject } from "react-router-dom";

export type RouteDescription = {
    label: string;
    path: string;
}

const createRouteDescription = (label: string, urlSegment: string): RouteDescription => ({
    label: label,
    path: urlSegment
});

export const mainRoute = createRouteDescription('Les Délices de Marie Lou', '/');

export const routeDescriptions: RouteDescription[] = [
    mainRoute,
    createRouteDescription('Notre Cuisine', '/cuisine'),
    createRouteDescription('Traiteur', '/traiteur'),
    createRouteDescription('Marché', '/marche'),
    createRouteDescription('Contact', '/contact'),
];

export default routeDescriptions;