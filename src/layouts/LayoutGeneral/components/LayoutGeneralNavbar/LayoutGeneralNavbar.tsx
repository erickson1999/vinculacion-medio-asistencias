import { FC } from 'react';
import { LayoutGeneralNavbarI } from './';

export const LayoutGeneralNavbar: FC<LayoutGeneralNavbarI> = ({
	width,
	height,
}) => {
	return <nav className={`${width} ${height} bg-primary shadow-xl`}>Navbar</nav>;
};
