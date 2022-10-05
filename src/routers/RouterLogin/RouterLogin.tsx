import { RouteObject } from 'react-router-dom';
import { PageLogin } from '../../pages/PageLogin';

export const RouterLogin: RouteObject = {
	path: '/login',
	element: <PageLogin />,
};
