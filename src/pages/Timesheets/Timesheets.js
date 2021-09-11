import React from 'react';

import { Link } from 'react-router-dom';

import Layout from '../../components/Layout';
import SubTitle from '../../components/SubTitle';
import { GeneralButton } from '../../components/global/ExportedStylings';
import Card from '../../components/Card';

import './Timesheets.scss';
// import {
// 	TextContainer,
// 	TextWrapper,
// } from '../../components/global/ExportedStylings';

const Timesheets = () => {
	return (
		<>
			<Layout>
				<div className='heading'>
					<SubTitle>Timesheets for 123 Bryant Ave Project</SubTitle>
				</div>
				<div className='btns'>
					<GeneralButton
						backgroundColor='#fff'
						color='#000'
						borderColor='#3282b8'
					>
						Edit Project
					</GeneralButton>
					<GeneralButton marginLeft='20px' marginTop='10px'>
						Add Timesheet
					</GeneralButton>
					<GeneralButton
						backgroundColor='#e50000'
						color='#fff'
						borderColor='#e50000'
						marginLeft='20px'
						marginTop='10px'
					>
						End Project
					</GeneralButton>
				</div>
				<div className='timesheets-section'>
					<SubTitle>Timesheets</SubTitle>
					<div className='timesheets'>
						<Card>
							<Link to='/timesheet'>
								<h4 className='timesheet-name'>123 Bryan Ave</h4>
								<p className='num-of-employees'>Emp No: 16 employees</p>
								<p>Date: April 2021</p>
							</Link>
						</Card>
						<Card>
							<Link to='/timesheet'>
								<h4 className='timesheet-name'>123 Bryan Ave</h4>
								<p className='num-of-employees'>Emp No: 16 employees</p>
								<p>Date: April 2021</p>
							</Link>
						</Card>
						<Card>
							<Link to='/timesheet'>
								<h4 className='timesheet-name'>123 Bryan Ave</h4>
								<p className='num-of-employees'>Emp No: 16 employees</p>
								<p>Date: April 2021</p>
							</Link>
						</Card>
						<Card>
							<Link to='/timesheet'>
								<h4 className='timesheet-name'>123 Bryan Ave</h4>
								<p className='num-of-employees'>Emp No: 16 employees</p>
								<p>Date: April 2021</p>
							</Link>
						</Card>
					</div>
				</div>
			</Layout>
		</>
	);
};

export default Timesheets;
