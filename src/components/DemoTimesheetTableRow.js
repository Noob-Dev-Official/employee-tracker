import React, { useState, useEffect } from 'react';

import { TableBodyRow, Input, Select } from './DemoTableComponents';

const days = [
	{ label: 1, value: 1 },
	{ label: 2, value: 2 },
];

const months = [
	{ label: 'Jan', value: 1 },
	{ label: 'Feb', value: 2 },
];

const DemoTimesheetTableRow = (props) => {
	// const { days, months } = props;

	const [daySelected, setDaySelected] = useState();
	const [monthSelected, setMonthSelected] = useState();
	const [rate, setRate] = useState({ rate: '' });
	const [hour, setHour] = useState({ hour: '' });
	const [total, setTotal] = useState({ total: 0 });

	const onDayChange = (e) => {
		setDaySelected(e.target.value);
	};

	const onMonthChange = (e) => {
		setMonthSelected(e.target.value);
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

	useEffect(() => {
		const calcTotalDaySalary = () => {
			setTotal(() => ({
				total: hour.hour * rate.rate,
			}));
		};

		calcTotalDaySalary();
	}, [rate, hour]);

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
							<option value={day.value}>{day.label}</option>
						))}
					</Select>
				</td>
				<td>
					<Select
						name='month'
						id='month-select'
						padding='2px 5px'
						optionPadding='2px 5px'
						value={monthSelected}
						onChange={onMonthChange}
					>
						{/* <option value='01'>01</option>
						<option value='02'>02</option> */}
						{months.map((month) => (
							<option value={month.value}>{month.label}</option>
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
						placeholder={0}
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
						placeholder={0}
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
