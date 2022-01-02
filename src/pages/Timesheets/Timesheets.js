import React from 'react';

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Layout from '../../components/Utilities/Layout';
import SubTitle from '../../components/Utilities/SubTitle';
import { GeneralButton } from '../../components/Utilities/ExportedStylings';
import Card from '../../components/Utilities/Card';

import './Timesheets.scss';

const Timesheets = () => {
	const timesheetsData = useSelector((state) => state.timesheets.timesheets);

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
						{timesheetsData.map((data) => {
							return (
								<Card key={data.id}>
									<Link to='/timesheet'>
										<h4 className='timesheet-name'>{data.name}</h4>
										<p className='general-p'>
											Date From: {data.date_from}
										</p>
										<p>Date To: {data.date_to}</p>
									</Link>
								</Card>
							);
						})}
						<Card>
							<Link to='/timesheet'>
								<h4 className='timesheet-name'>April Timesheet</h4>
								<p className='general-p'>Date From: 07 April 2021</p>
								<p>Date To: 27 April 2021</p>
							</Link>
						</Card>
					</div>
				</div>
			</Layout>
		</>
	);
};

export default Timesheets;
