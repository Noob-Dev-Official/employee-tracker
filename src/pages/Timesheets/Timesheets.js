import React from 'react';

import { Link } from 'react-router-dom';

import Layout from '../../components/Layout';
import SubTitle from '../../components/SubTitle';
import GeneralButton from '../../components/GeneralButton';
import Card from '../../components/Card';

import './Timesheets.scss';

const Timesheets = () => {
	return (
		<>
			<Layout>
				<div className='heading'>
					<SubTitle>Timesheets for 123 Bryant Ave Project</SubTitle>
				</div>
				<div className='btns'>
					<GeneralButton
						text='Edit Project'
						backgroundColor='#fff'
						color='#000'
						borderColor='#3282b8'
					/>
					<GeneralButton text='Add Timesheet' marginLeft='29px' />
					<GeneralButton
						text='End Project'
						backgroundColor='#e50000'
						color='#fff'
						borderColor='#e50000'
						marginLeft='29px'
					/>
				</div>
				<div className='timesheets-section'>
					<SubTitle>Timesheets</SubTitle>
					<div className='timesheets'>
						<Card isSmallMode={false}>
							<Link to='/timesheet'>
								<h4 className='timesheet-name'>123 Bryan Ave</h4>
								<p className='num-of-employees'>Emp No: 16 employees</p>
								<p className='description'>
									Description: Lorem Ispum Donor
								</p>
							</Link>
						</Card>
						<Card isSmallMode={false}>
							<Link to='/timesheet'>
								<h4 className='timesheet-name'>123 Bryan Ave</h4>
								<p className='num-of-employees'>Emp No: 16 employees</p>
								<p className='description'>
									Description: Lorem Ispum Donor
								</p>
							</Link>
						</Card>
						<Card isSmallMode={false}>
							<Link to='/timesheet'>
								<h4 className='timesheet-name'>123 Bryan Ave</h4>
								<p className='num-of-employees'>Emp No: 16 employees</p>
								<p className='description'>
									Description: Lorem Ispum Donor
								</p>
							</Link>
						</Card>
						<Card isSmallMode={false}>
							<Link to='/timesheet'>
								<h4 className='timesheet-name'>123 Bryan Ave</h4>
								<p className='num-of-employees'>Emp No: 16 employees</p>
								<p className='description'>
									Description: Lorem Ispum Donor
								</p>
							</Link>
						</Card>
					</div>
				</div>
			</Layout>
		</>
	);
};

export default Timesheets;
