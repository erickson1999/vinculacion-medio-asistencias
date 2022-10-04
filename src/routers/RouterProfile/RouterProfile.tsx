import { RouteObject, Outlet } from 'react-router-dom';
import { GeneralLayout } from '../../layouts';

export const RouterProfile: RouteObject = {
	path: '/profile',
	element: (
		<GeneralLayout>
			<h1>profile page</h1> <Outlet></Outlet>
		</GeneralLayout>
	)
};
