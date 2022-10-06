import { FC } from 'react';
import { TableHeadI } from './';

export const TableHead: FC<TableHeadI> = ({ heads, options }) => {
	return (
		<thead>
			<tr>
				{options.numeration && <th className="border p-2">#</th>}
				{heads.map((head: string, index: number) => (
					<th className="border p-2" key={index}>{head}</th>
				))}
			</tr>
		</thead>
	);
};
