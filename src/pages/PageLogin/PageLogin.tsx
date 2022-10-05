import { Field, Form, Formik, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';
import { Button } from '../../components';
import { LayoutGeneral } from '../../layouts';

interface FormLoginI {
	email: string;
	password: string;
}
const initialValues: FormLoginI = { email: '', password: '' };
const validate = (values: FormLoginI) => {
	const errors: any = {};
	if (!values.email) {
		errors.email = '*El campo email es requerido';
	}

	if (!values.password) {
		errors.password = '*El campo contraseña es requerido';
	}
	return errors;
};
const onSubmit = (values: FormLoginI) => {
	console.log('send form');
};
export const PageLogin = () => {
	return (
		<LayoutGeneral
			mainHeight="h-screen"
			footerHeight="h-1/6"
			navbarHeight="h-1/6"
		>
			<div className="h-4/6 flex justify-center items-center">
				<div className="p-10 rounded-xl shadow-xl max-w-sm flex flex-col items-center gap-y-6">
					<h1 className="font-black text-3xl italic">INICIAR SESIÓN</h1>
					<Formik
						initialValues={initialValues}
						validate={validate}
						onSubmit={onSubmit}
					>
						{() => (
							<Form className="flex flex-col gap-y-4 w-full items-center ">
								<Field
									name={'email'}
									placeholder={'Usuario'}
									type={'email'}
									className={'bg-gray-100 w-full rounded-full px-4 py-2'}
								></Field>
								<ErrorMessage
									name={'email'}
									component="div"
									className={'text-red-500 w-full'}
								></ErrorMessage>
								<Field
									name={'password'}
									placeholder={'Contraseña'}
									type={'password'}
									className={'bg-gray-100 w-full rounded-full px-4 py-2'}
								></Field>
								<ErrorMessage
									name={'password'}
									className={'text-red-500 w-full'}
									component="div"
								></ErrorMessage>
								<Button
									type="submit"
									background={'bg-primary'}
									text={'INGRESAR'}
									padding={'px-6 py-2'}
									rounded={'rounded-full'}
									colorText={'text-white'}
									className={'font-bold w-1/2'}
								></Button>
							</Form>
						)}
					</Formik>
					<Link to={'/recovery-account'}>
						<p className="underline text-primary text-md">
							¿Olvidaste tu contraseña?
						</p>
					</Link>
				</div>
			</div>
		</LayoutGeneral>
	);
};
