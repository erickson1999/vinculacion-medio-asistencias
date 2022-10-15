import { FC, SetStateAction, useState } from 'react';
import { Modal, Table } from '../../components';
import { LayoutGeneral } from '../../layouts';

const rolFake = [{ name: 'Admin' }];
export const PageRoles: FC = () => {
	const [isOpenModal, setIsOpenModal] = useState(false);
	const [contentModal, setContentModal] = useState(<h1>Modal</h1>);

	return (
		<LayoutGeneral
			mainHeight="h-screen"
			footerHeight="h-1/12"
			navbarHeight="h-1/12"
		>
			<Modal
				isOpen={isOpenModal}
				setIsOpen={function (value: SetStateAction<boolean>): void {
					throw new Error('Function not implemented.');
				}}
			>
				{contentModal}
			</Modal>

			<div className="h-10/12 flex justify-center items-center">
				{/* <Table
					data={rolFake}
					heads={['Nombre Rol']}
					options={true}
					configs={{ numeration: true, align: 'text-center' }}
				></Table> */}
			</div>
		</LayoutGeneral>
	);
};
