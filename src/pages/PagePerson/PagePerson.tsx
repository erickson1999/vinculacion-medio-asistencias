import { SetStateAction, useState } from 'react';
import { Table } from '../../components/Table';
import { UsersI } from '../../components/Table/TableInterface';
import { PagePersonNewModal } from './components';

const usersFake: UsersI[] = [
	{
		dni: 70521769,
		nombreCompleto: 'Erickson Raul Quispe Churata',
		ciclo: '7',
		grupo: 'Único',
		codigo: '201712135',
		correo: 'ericksonraulquispechurata@gmail.com',
	},
	{
		dni: 70521769,
		nombreCompleto: 'Erickson Raul Quispe Churata',
		ciclo: '7',
		grupo: 'Único',
		codigo: '201712135',
		correo: 'ericksonraulquispechurata@gmail.com',
	},
	{
		dni: 70521769,
		nombreCompleto: 'Erickson Raul Quispe Churata',
		ciclo: '7',
		grupo: 'Único',
		codigo: '201712135',
		correo: 'ericksonraulquispechurata@gmail.com',
	},
	{
		dni: 70521769,
		nombreCompleto: 'Erickson Raul Quispe Churata',
		ciclo: '7',
		grupo: 'Único',
		codigo: '201712135',
		correo: 'ericksonraulquispechurata@gmail.com',
	},
	{
		dni: 70521769,
		nombreCompleto: 'Erickson Raul Quispe Churata',
		ciclo: '7',
		grupo: 'Único',
		codigo: '201712135',
		correo: 'ericksonraulquispechurata@gmail.com',
	},
	{
		dni: 70521769,
		nombreCompleto: 'Erickson Raul Quispe Churata',
		ciclo: '7',
		grupo: 'Único',
		codigo: '201712135',
		correo: 'ericksonraulquispechurata@gmail.com',
	},
];

const heads = ['DNI', 'Nombres completo', 'Ciclo', 'Grupo', 'Codigo', 'Correo'];

export const PagePerson = () => {
	const [isOpenModal, setIsOpenModal] = useState(false);

	return (
		<div>
			<PagePersonNewModal
				isOpenModal={isOpenModal}
				setIsOpenModal={setIsOpenModal}
			></PagePersonNewModal>
			<Table
				users={usersFake}
				heads={heads}
				options={{ numeration: true, align: 'center' }}
			></Table>
			<button
				onClick={() => {
					setIsOpenModal(!isOpenModal);
				}}
			>clickeamee</button>
		</div>
	);
};
