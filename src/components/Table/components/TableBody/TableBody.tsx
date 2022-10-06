import { FC } from 'react';
import { TableBodyI } from './';

export const TableBody: FC<TableBodyI> = ({ data, options }) => {
	return (
		<tbody>
			{data.map((obj, index) => {
				return (
					<tr className="hover:bg-slate-100" key={index}>
						{options.numeration && <td className="p-2 border">{index + 1}</td>}
						{Object.values(obj).map((val, index) => {
							return (
								<td className="border p-1" key={index}>
									{val}
								</td>
							);
						})}
					</tr>
				);
			})}
		</tbody>
	);
};
