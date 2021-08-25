import React from 'react';

import Layout from '../../components/Layout';
import GeneralButton from '../../components/GeneralButton';
import EmployeeListTableRows from '../../components/EmployeeListTableRows';

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
						<div className='number-col'>
							<h4>No.</h4>
						</div>
						<div className='employee-name-col'>
							<h4>Employee Name</h4>
						</div>
					</div>
					<div className='table-data'>
						<EmployeeListTableRows number={1} employeeName='Hisham' />
						<EmployeeListTableRows number={2} employeeName='Max' />
						<EmployeeListTableRows number={3} employeeName='John' />
						<EmployeeListTableRows number={4} employeeName='Ahmed' />
						<EmployeeListTableRows number={4} employeeName='Ahmed' />
					</div>
				</div>
			</Layout>
		</>
	);
};

export default ManageEmployees;
