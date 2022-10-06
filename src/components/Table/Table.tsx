import { FC } from 'react';
import { TablePersonsI } from '.';
import { TableBody, TableHead } from './';

export const Table: FC<TablePersonsI> = ({
	users,
	heads,
	options = { numeration: false, align: 'left' },
}) => {
	return (
		<div className='scroll-x-auto'>
			<table className={`${'text-'.concat(options.align!)} border-2`}>
				<TableHead heads={heads} options={options}></TableHead>
				<TableBody data={users} options={options}></TableBody>
			</table>
		</div>
	);
};
