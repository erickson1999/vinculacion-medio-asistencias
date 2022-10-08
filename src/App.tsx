import { FC } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ContextUIProvider } from './context/ContextUI/ContextUIProvider';
import { RouterHome, RouterPerson, RouterProfile, RouterRol } from './routers';
import { RouterAttendances } from './routers/RouterAttendances';
import { RouterLogin } from './routers/RouterLogin';
import {} from './routers/RouterRol';
const router = createBrowserRouter([
	RouterHome,
	RouterProfile,
	RouterAttendances,
	RouterLogin,
	RouterPerson,
	RouterRol,
	{ path: '/dashboard', element: <h1>dashboard page</h1> },
	{ path: '/programas', element: <h1>programas page</h1> },
	{ path: '/escuelas', element: <h1>escuelas page</h1> },
	{ path: '/usuarios', element: <h1>usuarios page</h1> },
]);

export const App = () => {
	return (
		<ContextUIProvider>
			<RouterProvider router={router} />
		</ContextUIProvider>
	);
};
