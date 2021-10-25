import React, { useState } from 'react';

import { TableBodyRow, Input, Select } from './DemoTableComponents';

const DemoTimesheetTableRow = (props) => {
	const { days, months } = props;

	const [daySelected, setDaySelected] = useState();
	const [monthSelected, setMonthSelected] = useState();
	const [rate, setRate] = useState({ rate: '' });
	const [hour, setHour] = useState({ hour: '' });
	const [total, setTotal] = useState({ total: '' });

	const onDayChange = (e) => {
		setDaySelected(e.target.value);
	};

	const onHourChange = (e) => {
		setHour(() => ({
			[e.target.name]: e.target.value,
		}));
	};

	const onRateChange = (e) => {
		setRate(() => ({
			[e.target.name]: e.target.value,
		}));
	};

	return (
		<>
			<TableBodyRow textAlign='center'>
				<td>
					<Select
						name='day'
						id='day-select'
						padding='2px 5px'
						optionPadding='2px 5px'
						value={daySelected}
						onChange={onDayChange}
					>
						{/* <option value='01'>01</option>
						<option value='02'>02</option> */}
						{days.map((day) => (
							<option value={day}>{day}</option>
						))}
					</Select>
				</td>
				<td>
					<Select
						name='month'
						id='month-select'
						padding='2px 5px'
						optionPadding='2px 5px'
					>
						{/* <option value='01'>01</option>
						<option value='02'>02</option> */}
						{months.map((month) => (
							<option value={month}>{month}</option>
						))}
					</Select>
				</td>
				<td>
					<Input
						type='number'
						name='rate'
						id='rate'
						padding='2px 5px'
						value={rate.rate}
						onChange={onRateChange}
					/>
				</td>
				<td>
					<Input
						type='number'
						name='hour'
						id='hour'
						padding='2px 5px'
						value={hour.hour}
						onChange={onHourChange}
					/>
				</td>
				<td>
					<Input
						type='number'
						name='total'
						id='total'
						padding='2px 5px'
						value={total.total}
						readOnly
					/>
				</td>
			</TableBodyRow>
		</>
	);
};

export default DemoTimesheetTableRow;
