import { FC } from 'react';
import { LayoutGeneralFooterI } from './';

export const LayoutGeneralFooter: FC<LayoutGeneralFooterI> = ({
	height,
	width,
}) => {
	return (
		<footer className={`${width} ${height} flex justify-center items-center`}>
			GeneralLayoutFooter
		</footer>
	);
};
