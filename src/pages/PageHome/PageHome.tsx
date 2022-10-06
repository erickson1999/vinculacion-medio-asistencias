import { useState } from 'react';
import { Button, Modal } from '../../components';
import { LayoutGeneral } from '../../layouts';

const menuLink = [
	{
		menuText: 'menu1',
	},
	{
		menuText: 'menu2',
	},
	{
		menuText: 'menu3',
	},
	{
		menuText: 'menu4',
	},
];

export const Home = () => {
	const [isOpenModal, setIsOpenModal] = useState(true);

	return (
		<LayoutGeneral
			navbarHeight="h-1/12"
			footerHeight="h-1/12"
			mainHeight="h-screen"
		>
			{/* <Modal
				isOpen={isOpenModal}
				setIsOpen={setIsOpenModal}
				bgColor={'bg-secondary'}
				opacity={"bg-opacity-10"}
				bgModalColor={'bg-white'}
				btnCloseStyle={
					'bg-primary py-1 px-3 rounded-full text-xl text-secondary font-bold'
				}
			>
				"hello"
			</Modal> */}
			{/* <button
				onClick={() => {
					setIsOpenModal(true);
				}}
			>
				open modal
			</button> */}
			{/* <h1 className="">Hello Home</h1>
			<Button
				className="ml-1 font-bold"
				background="bg-primary"
				text="INGRESAR"
				colorText="text-white"
				padding="px-6 py-1"
				rounded="rounded-full"
			></Button> */}

			<div className="flex h-10/12">
				<div className="w-1/6 bg-slate-400 flex flex-col">
					{menuLink.map((item) => {
						return <a href="">{item.menuText}</a>;
					})}
				</div>
				<div className="w-full bg-red-400">menu</div>
			</div>
		</LayoutGeneral>
	);
};
