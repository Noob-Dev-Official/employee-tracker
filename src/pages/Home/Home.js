import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
// eslint-disable-next-line
import Alert from '../../components/Utilities/Alert';
import { useAuth } from '../../contexts/AuthContext';
import Layout from '../../components/Utilities/Layout';
import Card from '../../components/Utilities/Card';
import ToolsIcon from '../../svg/ToolsIcon';
import SettingsIcon from '../../svg/SettingsIcon';

import './Home.scss';
import { IconButton } from '../../components/Utilities/ExportedStylings';

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
						<Card isSmallMode>
							<Link to='/manage-projects'>
								<IconButton transparent margin='0 10px 0 0'>
									<ToolsIcon />
								</IconButton>

								<p>Projects</p>
							</Link>
						</Card>
						<Card isSmallMode>
							<Link to='/manage-employees'>
								<IconButton transparent margin='0 10px 0 0'>
									<ToolsIcon />
								</IconButton>
								<p>Employees</p>
							</Link>
						</Card>
						<Card isSmallMode>
							<Link to='/settings'>
								<IconButton transparent margin='0 10px 0 0'>
									<SettingsIcon />
								</IconButton>
								<p>Settings</p>
							</Link>
						</Card>
					</div>
				</section>
				<section className='projects-section'>
					<h3 className='title'>Projects</h3>
					<div className='projects'>
						<Card>
							<Link to='/'>
								<h4 className='project-name'>123 Bryan Ave</h4>
								<p className='num-of-employees'>Emp No: 16 employees</p>
								<p className='description'>
									Description: Lorem Ispum Donor
								</p>
							</Link>
						</Card>
						<Card>
							<Link to='/'>
								<h4 className='project-name'>123 Bryan Ave</h4>
								<p className='num-of-employees'>Emp No: 16 employees</p>
								<p className='description'>
									Description: Lorem Ispum Donor
								</p>
							</Link>
						</Card>
						<Card>
							<Link to='/'>
								<h4 className='project-name'>123 Bryan Ave</h4>
								<p className='num-of-employees'>Emp No: 16 employees</p>
								<p className='description'>
									Description: Lorem Ispum Donor
								</p>
							</Link>
						</Card>
						<Card>
							<Link to='/'>
								<h4 className='project-name'>123 Bryan Ave</h4>
								<p className='num-of-employees'>Emp No: 16 employees</p>
								<p className='description'>
									Description: Lorem Ispum Donor
								</p>
							</Link>
						</Card>
						<Card>
							<Link to='/'>
								<h4 className='project-name'>123 Bryan Ave</h4>
								<p className='num-of-employees'>Emp No: 16 employees</p>
								<p className='description'>
									Description: Lorem Ispum Donor
								</p>
							</Link>
						</Card>
						<Card>
							<Link to='/'>
								<h4 className='project-name'>123 Bryan Ave</h4>
								<p className='num-of-employees'>Emp No: 16 employees</p>
								<p className='description'>
									Description: Lorem Ispum Donor
								</p>
							</Link>
						</Card>
						<Card>
							<Link to='/'>
								<h4 className='project-name'>123 Bryan Ave</h4>
								<p className='num-of-employees'>Emp No: 16 employees</p>
								<p className='description'>
									Description: Lorem Ispum Donor
								</p>
							</Link>
						</Card>
						<Card>
							<Link to='/'>
								<h4 className='project-name'>123 Bryan Ave</h4>
								<p className='num-of-employees'>Emp No: 16 employees</p>
								<p className='description'>
									Description: Lorem Ispum Donor
								</p>
							</Link>
						</Card>
					</div>
				</section>
			</Layout>
		</>
	);
};

export default Home;
