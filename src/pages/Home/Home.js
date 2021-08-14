import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import styled from 'styled-components';

import Alert from '../../components/Alert';
import { useAuth } from '../../contexts/AuthContext';
import Layout from '../../components/Layout';

import './Home.scss';

const Home = () => {
	const [error, setError] = useState(false);
	const [errorMssg, setErrorMssg] = useState('');
	const history = useHistory();

	const { currentUser, signout } = useAuth();

	const handleSignout = async (e) => {
		e.preventDefault();

		setError(false);

		try {
			await signout();
			history.push('/sign-in');
		} catch (err) {
			console.log(err);
			setErrorMssg('Failed to Logout');
		}
	};

	return (
		<>
			<Layout>
				<div className='home'></div>
			</Layout>
		</>
	);
};

export default Home;
