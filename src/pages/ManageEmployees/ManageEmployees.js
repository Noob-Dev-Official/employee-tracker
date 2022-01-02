import React, { useState } from 'react';

import { useSelector } from 'react-redux';

import Layout from '../../components/Utilities/Layout';
import { GeneralButton } from '../../components/Utilities/ExportedStylings';
import EmployeeListTableRows from '../../components/Employee/EmployeeListTableRows';
import AddEmployee from '../../components/Employee/AddEmployee/AddEmployee';

import './ManageEmployees.scss';

const ManageEmployees = () => {
	const employeesData = useSelector((state) => state.employees.employees);

	const [showModalForm, setShowModalForm] = useState(false);

	const onAddEmployeeBtnClick = () => {
		setShowModalForm((prev) => !prev);
	};

	const onEmployeeFormCloseBtnClick = () => {
		setShowModalForm((prev) => !prev);
	};

	return (
		<>
			<Layout>
				<div className='heading'>
					<h3>Manage Employees</h3>
				</div>
				<div className='add-emp-btn' onClick={onAddEmployeeBtnClick}>
					<GeneralButton>Add Employees</GeneralButton>
				</div>
				{showModalForm && (
					<AddEmployee
						onModalCloseBtnClick={onEmployeeFormCloseBtnClick}
						setShowModalForm={setShowModalForm}
					/>
				)}
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
						{employeesData.map((data, index) => {
							return (
								<EmployeeListTableRows
									number={index}
									employeeName={data.name}
								/>
							);
						})}
						{/* <EmployeeListTableRows number={1} employeeName='Hisham' /> */}
					</div>
				</div>
			</Layout>
		</>
	);
};

export default ManageEmployees;
