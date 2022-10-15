import { RouteObject } from 'react-router-dom';
import { PagePersons } from '../../pages/PagePersons';

export const RouterPersons: RouteObject = {
	path: '/persons',
	element: <PagePersons />,
};
