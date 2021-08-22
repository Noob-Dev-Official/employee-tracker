import React from 'react';

import Layout from '../../components/Layout';
import GeneralButton from '../../components/GeneralButton';
import ProjectTableRows from '../../components/ProjectTableRows';
import SubTitle from '../../components/SubTitle';

import './ManageProjects.scss';

const ManageProjects = () => {
	return (
		<>
			<Layout>
				<div className='heading'>
					<SubTitle>Manage Projects</SubTitle>
				</div>
				<div className='add-project-btn'>
					<GeneralButton text='Add Projects' />
				</div>
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
							projectName='123 Bryant Avess'
							description='lorem ispum donor'
							address='123 Bryant Ave'
						/>
						<ProjectTableRows
							number={100}
							projectName='21 Ilford Avess'
							description='lorem ispum donor'
							address='123 Bryant Ave'
						/>
					</div>
				</div>
			</Layout>
		</>
	);
};

export default ManageProjects;