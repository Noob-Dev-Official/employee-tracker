import React, { useState } from 'react';

import Layout from '../../components/Utilities/Layout';
import { GeneralButton } from '../../components/Utilities/ExportedStylings';
import ProjectTableRows from '../../components/Project/ProjectTableRows';
import SubTitle from '../../components/Utilities/SubTitle';
import AddProject from '../../components/Project/AddProject/AddProject';

import './ManageProjects.scss';

const ManageProjects = () => {
	const [showModalForm, setShowModalForm] = useState(false);

	const onAddProjectBtnClick = () => {
		setShowModalForm((prev) => !prev);
	};

	const onProjectFormCloseBtnClick = () => {
		setShowModalForm((prev) => !prev);
	};

	return (
		<>
			<Layout>
				<div className='heading'>
					<SubTitle>Manage Projects</SubTitle>
				</div>
				<div className='add-project-btn' onClick={onAddProjectBtnClick}>
					<GeneralButton>Add Project</GeneralButton>
				</div>
				{showModalForm && (
					<AddProject
						onProjectFormCloseBtnClick={onProjectFormCloseBtnClick}
					/>
				)}
				<div className='project-table'>
					<div className='table-heading'>
						<div className='number-col'>
							<h4>No.</h4>
						</div>
						<div className='project-name-col'>
							<h4>Project Name</h4>
						</div>
						<div className='description-col'>
							<h4>Description</h4>
						</div>
						<div className='address-col'>
							<h4>Address</h4>
						</div>
					</div>
					<div className='table-data'>
						<ProjectTableRows
							number={1}
							projectName='123 Bryant Avessssssssasdfasdf'
							description='lorem ispum donor'
							address='123 Bryant Ave'
						/>
						<ProjectTableRows
							number={100}
							projectName='21 Ilford Avess'
							description='lorem ispum donor donor dorner'
							address='123 Bryant Ave'
						/>
					</div>
				</div>
			</Layout>
		</>
	);
};

export default ManageProjects;
