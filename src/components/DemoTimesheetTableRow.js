import React from 'react';

import { TableBodyRow, Input, Select } from './DemoTableComponents';

const DemoTimesheetTableRow = (props) => {
	// const { days, months, rate, hour, total } = props;

	return (
		<>
			<TableBodyRow textAlign='center'>
				<td>
					<Select
						name='day'
						id='day-select'
						padding='2px 5px'
						optionPadding='2px 5px'
					>
						<option value='01'>01</option>
						<option value='02'>02</option>
					</Select>
				</td>
				<td>
					<Select
						name='month'
						id='month-select'
						padding='2px 5px'
						optionPadding='2px 5px'
					>
						<option value='01'>01</option>
						<option value='02'>02</option>
					</Select>
				</td>
				<td>
					<Input type='number' name='rate' id='rate' padding='2px 5px' />
				</td>
				<td>
					<Input type='number' name='hour' id='hour' padding='2px 5px' />
				</td>
				<td>
					<Input
						type='number'
						name='total'
						id='total'
						padding='2px 5px'
						readOnly
					/>
				</td>
			</TableBodyRow>
		</>
	);
};

export default DemoTimesheetTableRow;
