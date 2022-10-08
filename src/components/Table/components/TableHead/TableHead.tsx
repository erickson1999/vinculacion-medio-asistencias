import { FC } from 'react';
import { TableHeadI } from './';

export const TableHead: FC<TableHeadI> = ({ heads, configs, options }) => {
	return (
		<thead className="bg-primary bg-opacity-40">
			<tr>
				{configs.numeration && <th className="border p-2">#</th>}
				{heads.map((head: string, index: number) => (
					<th className="border p-2" key={index}>
						{head}
					</th>
				))}
				{options && <th className="p-2 border">Opciones</th>}
			</tr>
		</thead>
	);
};
