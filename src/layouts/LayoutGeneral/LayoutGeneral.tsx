import { FC } from 'react';
import { LayoutGeneralI } from '.';
import { LayoutGeneralFooter } from './components/LayoutGeneralFooter';
import { LayoutGeneralNavbar } from './components/LayoutGeneralNavbar';

export const LayoutGeneral: FC<LayoutGeneralI> = ({
	children,
	footerHeight = '',
	footerWidth = '',
	navbarHeight = '',
	navbarWidth = '',
	mainHeight = '',
	mainWidth = '',

}) => {
	return (
		<main className={`${mainHeight} ${mainWidth}`}>
			<LayoutGeneralNavbar
				height={navbarHeight}
				width={navbarWidth}
			></LayoutGeneralNavbar>
			{children}
			<LayoutGeneralFooter
				height={footerHeight}
				width={footerWidth}
			></LayoutGeneralFooter>
		</main>
	);
};
