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
		display: flex;
		align-items: center;
		text-align: center;

		.col {
			min-width: 130px;
			max-width: 130px;
			text-align: center;
			white-space: nowrap;
			overflow: hidden;

			p {
				text-overflow: ellipsis;
			}
		}

		.number {
			min-width: 15px;
			max-width: 15px;
		}

		.project-name {
			margin-left: 89px;
		}

		.description {
			margin-left: 179px;
		}

		.address {
			margin-left: 147px;
		}
	}

	.buttons {
		display: flex;
		align-items: center;
		height: 37px;
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
