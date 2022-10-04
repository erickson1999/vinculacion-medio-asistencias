import { FC, ReactNode } from 'react';
import { GeneralLayoutNavbar } from './components/LayoutGeneralNavbar';

interface IGeneralLayoutProps {
	children: ReactNode;
}
export const GeneralLayout: FC<IGeneralLayoutProps> = ({ children }) => {
	return (
		<>
			<GeneralLayoutNavbar></GeneralLayoutNavbar>
			<main>{children}</main>
			<footer>footer General Layout</footer>
		</>
	);
};
