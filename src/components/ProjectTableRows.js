import React from 'react';

import styled from 'styled-components';

import TableButton from './TableButton';

const ProjectTableRowsParent = styled.div`
	display: flex;
	justify-content: space-between;
	background-color: #fff;
	width: 100%;
	padding: 10px 55px;
	align-items: center;
	margin-top: 8px;

	.texts {
		/* display: flex;
		align-items: center;
		text-align: center; */
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

	.buttons {
		display: flex;
		align-items: center;
		height: 37px;
	}

	@media screen and (max-width: 1615px) {
		.texts {
			grid-template-columns: 30px 200px 200px 150px;
			grid-gap: 1rem;
		}
	}

	@media screen and (max-width: 1782px) {
		.texts {
			grid-template-columns: 30px 250px 250px 200px;
			grid-gap: 1.2rem;
		}
	}
`;

const ProjectTableRows = (props) => {
	const { number, projectName, description, address } = props;

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
				<div className='buttons'>
					<TableButton
						text='Timesheets'
						isDel={false}
						linkTo='/timesheets'
					/>
					<TableButton text='Edit' isDel={false} />
					<TableButton text='Del' isDel={true} />
				</div>
			</ProjectTableRowsParent>
		</>
	);
};

export default ProjectTableRows;
