import React from 'react';

import { TableBodyRow, Input } from './DemoTableComponents';

const TimesheetTableRow = (props) => {
	const { days, months, rate, hour, total } = props;

	return (
		<>
			<TableBodyRow>
				<td>
					<select name='day' id='day-select'>
						<option value='01'>01</option>
						<option value='02'>02</option>
					</select>
				</td>
				<td>
					<select name='month' id='month-select'>
						<option value='01'>01</option>
						<option value='02'>02</option>
					</select>
				</td>
				<td>
					<Input type='number' name='rate' id='rate' />
				</td>
				<td>
					<Input type='number' name='hour' id='hour' />
				</td>
				<td>
					<Input type='number' name='total' id='total' />
				</td>
			</TableBodyRow>
		</>
	);
};

export default TimesheetTableRow;
