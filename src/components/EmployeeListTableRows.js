import React from 'react';

import styled from 'styled-components';

const EmployeeListTableRowsParent = styled.div`
	display: flex;
	background-color: #fff;
	width: 100%;
	max-width: 1171px;
	padding: 18px 55px;
	align-items: center;
	margin-top: 8px;

	.texts {
		display: flex;
		align-items: center;
		text-align: center;

		.name {
			margin-left: 470px;
			text-align: center;
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
				<div className='buttons'></div>
			</EmployeeListTableRowsParent>
		</>
	);
};

export default EmployeeListTableRows;
