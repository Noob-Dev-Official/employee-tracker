import React, { useState } from 'react';

import styled from 'styled-components';
// import Select from 'react-select';

import DownArrowIcon from '../../../svg/DownArrowIcon';
import { IconButton } from '../../Utilities/ExportedStylings';
// import TimesheetTable from './TimesheetTable';
import DemoTimesheetTable from '../TimesheetTable/DemoTimesheetTable';
// import { ReactSelect } from './Utils';

const TimesheetRowParent = styled.div`
	display: flex;
	justify-content: space-between;
	background-color: #fff;
	width: 100%;
	padding: 5px 55px;
	align-items: center;
	margin-top: 8px;

	.texts {
		display: grid;
		background-color: #fff;
		grid-template-columns: 50px 300px 100px 200px 200px;
		grid-gap: 1.5rem;
		text-align: center;

		.col {
			text-align: center;
			white-space: nowrap;
			overflow: hidden;

			p {
				text-overflow: ellipsis;
			}
		}

		.number {
			text-align: left;
		}
	}

	.buttons {
		margin-right: 10px;
	}

	@media screen and (max-width: 1450px) {
		.texts {
			grid-template-columns: 50px 250px 80px 150px 150px;
			grid-gap: 1.2rem;
		}

		.buttons {
			margin-right: 15px;
		}
	}

	@media screen and (max-width: 1245px) {
		.texts {
			grid-template-columns: 50px 200px 50px 100px 120px;
			grid-gap: 1rem;
		}

		.buttons {
			margin-right: 0px;
		}
	}
`;

const TimesheetRow = (props) => {
	const {
		number,
		// employeeSelected,
		// employeeOnChange,
		employeeName,
		rate,
		totalHours,
		totalAmount,
	} = props;

	const [isTimesheetTableOpen, setIsTimesheetTableOpen] = useState(false);

	/* for employee dropdown */
	// const employees = [
	// 	{
	// 		label: 'Furkan',
	// 		value: 'Furkan',
	// 	},
	// 	{
	// 		label: 'Haroon',
	// 		value: 'Furkan',
	// 	},
	// 	{
	// 		label: 'Adam',
	// 		value: 'Adam',
	// 	},
	// 	{
	// 		label: 'Hisham',
	// 		value: 'Hisham',
	// 	},
	// ];

	const onArrowButtonClick = (e) => {
		setIsTimesheetTableOpen((prev) => !prev);
	};

	return (
		<>
			<TimesheetRowParent>
				<div className='texts'>
					<div className='number'>
						<p>{number}</p>
					</div>
					<div className='col employee-name'>
						<p>{employeeName}</p>
						{/* <ReactSelect
							name='employee'
							id='employee-select'
							options={employees}
							value={employee}
							onChange={employeeOnChange}
							// styles={styles}
							// padding='2px 5px'
							// optionPadding='2px 5px'
							// value={daySelected}
							// onChange={onDayChange}
						/> */}
						{/* <select name='employee' value={employeeSelected}>
							{employees.map((employee) => (
								<option value={employee.value}>{employee.label}</option>
							))}
						</select> */}
					</div>
					<div className='col rate'>
						<p>{rate}</p>
					</div>
					<div className='col total-hours'>
						<p>{totalHours}</p>
					</div>
					<div className='col total-amount'>
						<p>{totalAmount}</p>
					</div>
				</div>
				<div className='buttons'>
					<IconButton square onClick={onArrowButtonClick}>
						<DownArrowIcon
							width='30px'
							height='30px'
							color='#000'
							isRotate={isTimesheetTableOpen}
						/>
					</IconButton>
				</div>
			</TimesheetRowParent>
			{/* {isTimesheetTableOpen && <TimesheetTable />} */}
			{isTimesheetTableOpen && <DemoTimesheetTable />}
		</>
	);
};

export default TimesheetRow;
