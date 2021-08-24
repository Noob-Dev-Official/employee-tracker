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
		display: grid;
		grid-template-columns: 50px 300px;
		grid-gap: 15rem;
		text-align: center;

		/* .number {
			text-align: left;
		} */
	}

	.buttons {
		display: flex;
		align-items: center;
	}

	@media screen and (max-width: 1250px) {
		.texts {
			grid-template-columns: 50px 300px;
			grid-gap: 3rem;
		}
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
