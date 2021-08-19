import React from 'react';

import styled from 'styled-components';

import TableButton from './TableButton';

const EmployeeListTableRowsParent = styled.div`
	display: flex;
	justify-content: space-between;
	background-color: #fff;
	width: 100%;
	max-width: 1171px;
	padding: 10px 55px;
	align-items: center;
	margin-top: 8px;

	.texts {
		display: flex;
		align-items: center;
		text-align: center;

		.number {
			min-width: 12px;
		}

		.name {
			margin-left: 470px;
			text-align: center;
		}
	}

	.buttons {
		display: flex;
		align-items: center;
	}
`;

const EmployeeListTableRows = (props) => {
	const { number, employeeName } = props;

	return (
		<>
			<EmployeeListTableRowsParent>
				<div className='texts'>
					<p className='number'>{number}</p>
					<p className='name'>{employeeName}</p>
				</div>
				<div className='buttons'>
					<TableButton text='Edit' isDel={false} />
					<TableButton text='Del' isDel={true} />
				</div>
			</EmployeeListTableRowsParent>
		</>
	);
};

export default EmployeeListTableRows;
