import React from 'react';

import styled from 'styled-components';

import DownArrowIcon from '../svg/DownArrowIcon';
import RoundSquareIcon from './RoundedSquareIcon';

const TimesheetTableRowParent = styled.div`
	display: flex;
	justify-content: space-between;
	background-color: #fff;
	width: 100%;
	padding: 10px 55px;
	align-items: center;
	margin-top: 8px;

	.texts {
		display: flex;
		align-items: center;
		text-align: center;

		.employee-name {
			margin-left: 290px;
		}

		.rate {
			margin-left: 143px;
		}

		.total-hours {
			margin-left: 132px;
		}

		.total-amount {
			margin-left: 170px;
		}
	}
`;

const TimesheetTableRow = (props) => {
	const { number, employeeName, rate, totalHours, totalAmount } = props;

	return (
		<>
			<TimesheetTableRowParent>
				<div className='texts'>
					<div className='number'>
						<p>{number}</p>
					</div>
					<div className='col employee-name'>
						<p>{employeeName}</p>
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
				<div className='buttons'></div>
			</TimesheetTableRowParent>
		</>
	);
};

export default TimesheetTableRow;
