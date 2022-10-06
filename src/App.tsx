import { FC } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RouterHome,RouterPerson,RouterProfile } from './routers';
import { RouterAttendances } from './routers/RouterAttendances';
import { RouterLogin } from './routers/RouterLogin';
const router = createBrowserRouter([
	RouterHome,RouterProfile,RouterAttendances,RouterLogin,RouterPerson,
	{ path: '/dashboard', element: <h1>dashboard page</h1> },
	{ path: '/programas', element: <h1>programas page</h1> },
	{ path: '/escuelas', element: <h1>escuelas page</h1> },
	{ path: '/usuarios', element: <h1>usuarios page</h1> },
]);

export const App = () => {
	return <RouterProvider router={router} />;
};
