import React from 'react';

import Layout from '../../components/Layout';
import SubTitle from '../../components/SubTitle';
import GeneralButton from '../../components/GeneralButton';
import TimesheetTableRow from '../../components/TimesheetTableRow';

import './Timesheet.scss';

const Timesheet = () => {
	return (
		<>
			<Layout>
				<div className='heading'>
					<SubTitle>123 Bryant Avenue / April Timesheet</SubTitle>
				</div>
				<div className='btns'>
					<GeneralButton
						text='Edit Project'
						backgroundColor='#fff'
						color='#000'
						borderColor='#3282b8'
					/>
					<GeneralButton
						text='End Project'
						backgroundColor='#e50000'
						color='#fff'
						borderColor='#e50000'
						marginLeft='29px'
					/>
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
						<TimesheetTableRow
							number={1}
							employeeName='Furkan'
							rate={10}
							totalHours={100}
							totalAmount={1000}
						/>
					</div>
				</div>
			</Layout>
		</>
	);
};

export default Timesheet;
