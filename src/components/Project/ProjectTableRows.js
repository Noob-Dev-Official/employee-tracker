import React from 'react';

import styled from 'styled-components';

// import TableButton from './TableButton';
import ContextDropdown from '../ContextDropdown/ContextDropdown';
import ContextProjectTableRows from '../ContextDropdown/CustomContextDropdowns/ContextProjectTableRows';
import VerticalDots from '../../svg/VerticalDots';

const ProjectTableRowsParent = styled.div`
	display: flex;
	justify-content: space-between;
	background-color: #fff;
	width: 100%;
	padding: 10px 55px;
	align-items: center;
	margin-top: 8px;

	.texts {
		display: grid;
		background-color: #fff;
		grid-template-columns: 50px 250px 350px 300px;
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

	@media screen and (max-width: 1500px) {
		.texts {
			grid-gap: 1.3rem;
			grid-template-columns: 30px 200px 300px 250px;
		}
	}

	@media screen and (max-width: 1300px) {
		.texts {
			grid-template-columns: 30px 150px 250px 200px;
			grid-gap: 1rem;
		}
	}

	@media screen and (max-width: 900px) {
		padding: 10px 0 10px 0px;

		.texts {
			width: 100%;
			grid-template-columns: 1fr 1fr;
			text-align-last: center;
			padding: 10px 0px 10px 10px;
		}
	}
`;

const ProjectTableRows = (props) => {
	const { number, projectName, description, address } = props;
	function handleOnEdit() {}

	function handleOnDelete() {}
	return (
		<>
			<ProjectTableRowsParent>
				<div className='texts'>
					<div className='number'>
						<p>{number}</p>
					</div>
					<div className='col project-name'>
						<p>{projectName}</p>
					</div>
					<div className='col description'>
						<p>{description}</p>
					</div>
					<div className='col address'>
						<p>{address}</p>
					</div>
				</div>
				{/* Useless due to width */}
				{/* <div className='buttons'>
                    <TableButton text='Timesheets' linkTo='/timesheets' />
                    <TableButton text='Edit' />
                    <TableButton text='Del' isDel />
                </div> */}
				<div className='dropdown-buttons'>
					<ContextDropdown
						icon={<VerticalDots />}
						transparent
						padding='7px'
					>
						<ContextProjectTableRows
							handleOnEdit={handleOnEdit}
							handleOnDelete={handleOnDelete}
						/>
					</ContextDropdown>
				</div>
			</ProjectTableRowsParent>
		</>
	);
};

export default ProjectTableRows;
