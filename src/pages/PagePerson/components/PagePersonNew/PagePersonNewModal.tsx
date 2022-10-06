import { Field, Form, Formik, ErrorMessage } from 'formik';
import React, { FC } from 'react';
import { Button, Modal } from '../../../../components';

const initialValues: any = {};

const validate = (values: any) => {
	const errors = {};
	//validations

	return errors;
};

const onSubmit = () => {};

interface PagePersonNewModalI {
	isOpenModal: boolean;
	setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const PagePersonNewModal: FC<PagePersonNewModalI> = ({
	isOpenModal,
	setIsOpenModal,
}) => {
	return (
		<Modal isOpen={isOpenModal} setIsOpen={setIsOpenModal}>
			<Formik
				initialValues={initialValues}
				validate={validate}
				onSubmit={onSubmit}
			>
				{() => {
					return (
						<Form className='flex flex-col gap-y-2 p-2 max-w-xl'>
							<Field
								name="dni"
								type="number"
								placeholder="DNI"
								className={'bg-gray-100 w-full rounded-full px-4 py-2'}
							></Field>
							<ErrorMessage name={'dni'}></ErrorMessage>

							<Field
								name="codigo"
								placeholder="Codigo"
								className={'bg-gray-100 w-full rounded-full px-4 py-2'}
							></Field>
							<ErrorMessage name={'codigo'}></ErrorMessage>

							<Field
								name="nombrecompleto"
								placeholder="Nombre Completo"
								className={'bg-gray-100 w-full rounded-full px-4 py-2'}
							></Field>
							<ErrorMessage name={'nombrecompleto'}></ErrorMessage>

							<Field
								name="ciclo"
								placeholder="Ciclo"
								className={'bg-gray-100 w-full rounded-full px-4 py-2'}
							></Field>
							<ErrorMessage name={'ciclo'}></ErrorMessage>

							<Field
								name="grupo"
								placeholder="Grupo"
								className={'bg-gray-100 w-full rounded-full px-4 py-2'}
							></Field>
							<ErrorMessage name={'grupo'}></ErrorMessage>

							<Field
								name="correo"
								placeholder="Correo"
								className={'bg-gray-100 w-full rounded-full px-4 py-2'}
							></Field>
							<ErrorMessage name={'correo'}></ErrorMessage>
							<Button
								background={'bg-primary'}
								text={'Guardar cambios'}
								padding={'p-2'}
								rounded={'rounded-full'}
								colorText={'text-white'}
							></Button>
						</Form>
					);
				}}
			</Formik>
		</Modal>
	);
};
