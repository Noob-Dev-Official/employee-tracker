import React, { useState } from 'react';

import { useSelector } from 'react-redux';

import Layout from '../../components/Utilities/Layout';
import { GeneralButton } from '../../components/Utilities/ExportedStylings';
import ProjectTableRows from '../../components/Project/ProjectTableRows';
import SubTitle from '../../components/Utilities/SubTitle';
import AddProject from '../../components/Project/AddProject/AddProject';

import './ManageProjects.scss';

const ManageProjects = () => {
	const projectsData = useSelector((state) => state.projects.projects);

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
						onModalCloseBtnClick={onProjectFormCloseBtnClick}
						setShowModalForm={setShowModalForm}
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
						{projectsData.map((data, index) => {
							console.log(data.id);
							return (
								<ProjectTableRows
									projectID={data.id}
									number={index}
									projectName={data.name}
									description={data.description}
									address={data.address}
								/>
							);
						})}
						{/* {projectsData.length === 0 && <p>No projects</p>} */}
						<ProjectTableRows
							key={123}
							number={'12312'}
							projectName={'data.name'}
							description={'data.description'}
							address={'data.address'}
						/>
					</div>
				</div>
			</Layout>
		</>
	);
};

export default ManageProjects;
