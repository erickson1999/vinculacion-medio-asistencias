import { useState } from 'react';
import { Button, Modal } from '../../components';
import { LayoutGeneral } from '../../layouts';

export const Home = () => {
	const [isOpenModal, setIsOpenModal] = useState(true);

	return (
		<LayoutGeneral>
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
			<h1 className="">Hello Home</h1>
			<Button
				className="ml-1 font-bold"
				background="bg-primary"
				text="INGRESAR"
				colorText="text-white"
				padding="px-6 py-1"
				rounded="rounded-full"
			></Button>
		</LayoutGeneral>
	);
};
