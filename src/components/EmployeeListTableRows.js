import React from 'react';

import styled from 'styled-components';
import ContextDropdown from './ContextDropdown/ContextDropdown';

import TableButton from './TableButton';

import VerticalDots from '../svg/VerticalDots';
import ContextEmployeeTableRows from './ContextDropdown/CustomContextDropdowns/ContextEmployeeTableRows';

const EmployeeListTableRowsParent = styled.div`
	display: flex;
	justify-content: space-between;
	background-color: #fff;
	width: 100%;
	/* max-width: 1171px; */
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

		@media (max-width: 1000px) {
			display: none;
		}
	}

	.muahhahaha {
		@media (min-width: 1001px) {
			display: none;
		}
	}

	@media screen and (max-width: 1250px) {
		.texts {
			grid-template-columns: 50px 300px;
			grid-gap: 3rem;
		}
	}

	@media (max-width: 520px) {
		padding: 10px 0;
		.texts {
			grid-template-columns: 50px 150px;
		}
	}
`;

const EmployeeListTableRows = (props) => {
	const { number, employeeName } = props;

	function handleOnEdit() {}

	function handleOnDelete() {}

	return (
		<>
			<EmployeeListTableRowsParent>
				<div className='texts'>
					<p className='number'>{number}</p>
					<p className='name'>{employeeName}</p>
				</div>
				<div className='buttons'>
					<TableButton text='Edit' />
					<TableButton text='Del' isDel />
				</div>
				<div className='muahhahaha'>
					<ContextDropdown
						icon={<VerticalDots />}
						transparent
						padding='7px'
					>
						<ContextEmployeeTableRows
							handleOnEdit={handleOnEdit}
							handleOnDelete={handleOnDelete}
						/>
					</ContextDropdown>
				</div>
			</EmployeeListTableRowsParent>
		</>
	);
};

export default EmployeeListTableRows;
