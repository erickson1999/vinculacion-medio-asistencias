import { FC } from 'react';
import { LayoutGeneralFooterI } from './';

export const LayoutGeneralFooter: FC<LayoutGeneralFooterI> = ({
	height,
	width,
}) => {
	return (
		<footer
			className={`${width} ${height} flex justify-center items-center bg-secondary`}
		>
			<p>Todos los derechos reservados</p>
		</footer>
	);
};
