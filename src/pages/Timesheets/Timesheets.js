import React from 'react';

import Layout from '../../components/Layout';
import SubTitle from '../../components/SubTitle';
import GeneralButton from '../../components/GeneralButton';

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
			</Layout>
		</>
	);
};

export default Timesheets;
