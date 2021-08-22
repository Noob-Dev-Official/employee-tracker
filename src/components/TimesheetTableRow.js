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
		display: flex;
		align-items: center;
		text-align: center;

		.col {
			/* min-width: 123px;
			max-width: 123px; */
			text-align: center;
			white-space: nowrap;
			overflow: hidden;

			p {
				text-overflow: ellipsis;
			}
		}

		.number {
			min-width: 30px;
			max-width: 30px;
		}

		.employee-name {
			margin-left: 234px;
			min-width: 123px;
			max-width: 123px;
		}

		.rate {
			margin-left: 100px;
			min-width: 35px;
			max-width: 35px;
		}

		.total-hours {
			min-width: 88px;
			max-width: 88px;
			margin-left: 100px;
		}

		.total-amount {
			min-width: 102px;
			max-width: 102px;
			margin-left: 100px;
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
				margin-left: 200px;
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
