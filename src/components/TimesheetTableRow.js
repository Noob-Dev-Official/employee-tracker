import React from 'react';

import styled from 'styled-components';

import DownArrowIcon from '../svg/DownArrowIcon';
import RoundSquareIcon from './RoundedSquareIcon';

const TimesheetTableRowParent = styled.div`
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
		margin-right: 130px;
	}

	@media screen and (max-width: 1615px) {
		.texts {
			display: flex;
			align-items: center;
			text-align: center;

			.employee-name {
				margin-left: 150px;
			}
		}

		.buttons {
			margin-right: 50px;
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
				<div className='buttons'>
					<RoundSquareIcon onHoverStyle={true}>
						<DownArrowIcon width='30px' height='30px' color='#000' />
					</RoundSquareIcon>
				</div>
			</TimesheetTableRowParent>
		</>
	);
};

export default TimesheetTableRow;
