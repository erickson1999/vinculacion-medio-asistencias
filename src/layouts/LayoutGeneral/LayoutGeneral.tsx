import { FC, SetStateAction, useState } from 'react';
import { LayoutGeneralI } from '.';
import { Sidebar, SidebarItemI } from '../../components';
import { LayoutGeneralFooter } from './components/LayoutGeneralFooter';
import { LayoutGeneralNavbar } from './components/LayoutGeneralNavbar';

//data example
const itemsFake: SidebarItemI[] = [
	{
		name: 'Rol',
		url: '/rol',
	},
	{
		name: 'Usuario',
		url: '/user',
	},
	{
		name: 'Periodo',
		url: '/period',
	},
	{
		name: 'Personas',
		url: '/person',
	},
	{
		name: 'Eventos',
		url: '/events',
	},
];

export const LayoutGeneral: FC<LayoutGeneralI> = ({
	children,
	footerHeight = '',
	footerWidth = '',
	navbarHeight = '',
	navbarWidth = '',
	mainHeight = '',
	mainWidth = '',
}) => {
	const [isOpenSidebar, setIsOpenSidebar] = useState(true);
	return (
		<main className={`${mainHeight} ${mainWidth}`}>
			<Sidebar
				isOpenSidebar={isOpenSidebar}
				setIsOpenSidebar={setIsOpenSidebar}
				items={itemsFake}
			></Sidebar>
			<LayoutGeneralNavbar
				height={navbarHeight}
				width={navbarWidth}
				isOpenSidebar={isOpenSidebar}
				setIsOpenSidebar={setIsOpenSidebar}
			></LayoutGeneralNavbar>
			{children}
			<LayoutGeneralFooter
				height={footerHeight}
				width={footerWidth}
			></LayoutGeneralFooter>
		</main>
	);
};
