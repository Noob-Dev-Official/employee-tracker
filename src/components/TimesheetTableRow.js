import React, { useState, useEffect } from 'react';

import { TableBodyRow, Input } from './Utils';

const TimesheetTableRow = (props) => {
	const { day } = props;

	const [total, setTotal] = useState({ total: 0 });
	const [hour, setHour] = useState({ hour: 0 });
	const [rate, setRate] = useState({ rate: 0 });

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
			<TableBodyRow
				borderBottom='1px solid #3282b8'
				borderRight='1px solid #3282b8'
				textAlign='center'
			>
				<td>{day}</td>
				<td>
					<Input
						type='number'
						name='hour'
						backgroundColor='#bbe1fa'
						border='0'
						maxWidth='100%'
						padding='30px 0'
						textAlign='center'
						value={hour.hour}
						onChange={onHourChange}
					/>
				</td>
				<td>
					<Input
						type='number'
						name='rate'
						backgroundColor='#bbe1fa'
						border='0'
						maxWidth='100%'
						padding='30px 0'
						textAlign='center'
						value={rate.rate}
						onChange={onRateChange}
					/>
				</td>
				<td className='total-value'>
					<Input
						type='number'
						name='total'
						backgroundColor='#bbe1fa'
						border='0'
						maxWidth='100%'
						padding='30px 0'
						textAlign='center'
						value={total.total}
						className='total-value'
						readOnly
					/>
				</td>
			</TableBodyRow>
		</>
	);
};

export default TimesheetTableRow;
