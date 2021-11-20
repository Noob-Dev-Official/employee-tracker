import React, { useState } from 'react';

// const { datesGenerator } = require('dates-generator');

import Layout from '../../components/Layout';
import SubTitle from '../../components/SubTitle';
import { GeneralButton } from '../../components/global/ExportedStylings';
import TimesheetRow from '../../components/TimesheetRow';

import './Timesheet.scss';

const test = () => {};

test();

const Timesheet = () => {
	/* for employees in TimesheetRow */
	const [employee, setEmployee] = useState();

	const onEmployeeChange = (e) => {
		setEmployee({ employee: e.target.value });
	};

	return (
		<>
			<Layout>
				<div className='heading'>
					<SubTitle>123 Bryant Avenue / April Timesheet</SubTitle>
				</div>
				<div className='btns'>
					<GeneralButton
						backgroundColor='#fff'
						color='#000'
						borderColor='#3282b8'
					>
						Edit Project
					</GeneralButton>
					<GeneralButton
						backgroundColor='#e50000'
						color='#fff'
						borderColor='#e50000'
						marginLeft='29px'
						marginTop='10px'
					>
						End Project
					</GeneralButton>
				</div>
				<div className='timesheet-table'>
					<div className='table-heading'>
						<div className='number-col'>
							<h4>No.</h4>
						</div>
						<div className='employee-name-col'>
							<h4>Employee Name</h4>
						</div>
						<div className='rate-col'>
							<h4>Rate</h4>
						</div>
						<div className='total-hrs-col'>
							<h4>Total Hours</h4>
						</div>
						<div className='total-amount-col'>
							<h4>Total Amount</h4>
						</div>
					</div>
					<div className='table-data'>
						<TimesheetRow
							number={1}
							employeeName='Furkan'
							employeeSelected={employee}
							employeeOnChange={onEmployeeChange}
							rate={10}
							totalHours={100}
							totalAmount={1000}
						/>

						<TimesheetRow
							number={1}
							employeeName='Furkan'
							rate={10}
							totalHours={100}
							totalAmount={1000}
						/>
						{/* <TimesheetRow
							number={1}
							employeeName='Furkan'
							rate={10}
							totalHours={100}
							totalAmount={1000}
						/>
						<TimesheetRow
							number={1}
							employeeName='Furkaaan'
							rate={10}
							totalHours={100}
							totalAmount={100}
						/> */}
					</div>
				</div>
			</Layout>
		</>
	);
};

export default Timesheet;
