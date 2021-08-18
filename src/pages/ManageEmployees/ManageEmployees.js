import React from 'react';

import Layout from '../../components/Layout';
import GeneralButton from '../../components/GeneralButton';
import './ManageEmployees.scss';

const ManageEmployees = () => {
	return (
		<>
			<Layout>
				<div className='heading'>
					<h3>Manage Employees</h3>
				</div>
				<div className='add-emp-btn'>
					<GeneralButton text='Add Employees' />
				</div>
				<div className='employee-table'>
					<div className='table-heading'>
						<h4 className='number-col'>No.</h4>
						<h4 className='employee-name-col'>Employee Name</h4>
					</div>
				</div>
			</Layout>
		</>
	);
};

export default ManageEmployees;
