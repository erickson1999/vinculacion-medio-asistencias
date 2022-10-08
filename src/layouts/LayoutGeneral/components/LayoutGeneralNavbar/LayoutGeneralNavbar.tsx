import { FC } from 'react';
import { LayoutGeneralNavbarI } from './';
import { AiOutlineMenu } from 'react-icons/ai';

export const LayoutGeneralNavbar: FC<LayoutGeneralNavbarI> = ({
	width,
	height,
	isOpenSidebar,
	setIsOpenSidebar,
}) => {
	return (
		<nav className={`${width} ${height} bg-primary shadow-xl bg-opacity-90`}>
			<button
				onClick={() => {
					setIsOpenSidebar(true);
				}}
			>
				<AiOutlineMenu className="text-6xl my-1 ml-1 text-secondary"></AiOutlineMenu>
			</button>
			{/* <figure className='max-w-sm'>
				<img  className='w-full' src="/logo-upeu.svg" alt="logo-upeu" /> */}
			{/* </figure> */}
		</nav>
	);
};
