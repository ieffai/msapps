import {Gallery, Img} from '../screens';
import {HOME_ROUTE, HOME_TITLE, IMG_ROUTE, IMG_TITLE} from './constants';

export const publicRoutes = [
  {
    name: HOME_ROUTE,
    Component: Gallery,
    title: HOME_TITLE,
  },
  {
    name: IMG_ROUTE,
    Component: Img,
    title: IMG_TITLE,
  },
];
