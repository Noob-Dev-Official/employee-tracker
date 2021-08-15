import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
// eslint-disable-next-line
import Alert from '../../components/Alert';
import { useAuth } from '../../contexts/AuthContext';
import Layout from '../../components/Layout';
import HomeButton from '../../components/HomeButton';
import ToolsIcon from '../../svg/ToolsIcon';
import SettingsIcon from '../../svg/SettingsIcon';

import './Home.scss';

const Home = () => {
	// eslint-disable-next-line
	const [error, setError] = useState(false);
	// eslint-disable-next-line
	const [errorMssg, setErrorMssg] = useState('');
	// eslint-disable-next-line
	const history = useHistory();
	// eslint-disable-next-line
	const { currentUser, signout } = useAuth();

	return (
		<>
			<Layout>
				<section className='tools-section'>
					<h3>Tools</h3>
					<div className='buttons'>
						<HomeButton isSmallMode={true}>
							<Link to='/manage-projects'>
								<ToolsIcon
									width='40px'
									height='40px'
									color='#000'
									marginRight='10px'
								/>
								<p>Projects</p>
							</Link>
						</HomeButton>
						<HomeButton isSmallMode={true}>
							<Link to='/manage-employees'>
								<ToolsIcon
									width='40px'
									height='40px'
									color='#000'
									marginRight='10px'
								/>
								<p>Employees</p>
							</Link>
						</HomeButton>
						<HomeButton isSmallMode={true}>
							<Link to='/settings'>
								<SettingsIcon
									width='40px'
									height='40px'
									color='#000'
									marginRight='10px'
								/>
								<p>Settings</p>
							</Link>
						</HomeButton>
					</div>
				</section>
				<section className='projects-section'>
					<h3>Projects</h3>
				</section>
			</Layout>
		</>
	);
};

export default Home;
