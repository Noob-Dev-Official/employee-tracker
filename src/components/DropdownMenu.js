import React from 'react';

import { Link, useHistory } from 'react-router-dom';

import styled from 'styled-components';
import AccountIcon from '../svg/AccountIcon';
import LogoutIcon from '../svg/LogoutIcon';
import DropdownMenuItem from './DropdownMenuItem';
import { useAuth } from '../contexts/AuthContext';

const DropdownMenuParent = styled.div`
	display: flex;
	flex-direction: column;
	border-radius: 10px;
	background-color: #c4c4c4;
	position: absolute;
	right: 0.5%;
	top: 120%;
	padding: 15px;
	color: #1b262c;

	a {
		color: #1b262c;
		text-decoration: none;
	}
`;

const DropdownMenu = () => {
	const { currentUser, signout } = useAuth();

	const history = useHistory();

	const handleSignout = async (e) => {
		e.preventDefault();

		// setError(false);

		try {
			await signout();
			history.push('/sign-in');
		} catch (err) {
			console.log(err);
			// setErrorMssg('Failed to Logout');
		}
	};

	return (
		<>
			<DropdownMenuParent>
				<DropdownMenuItem>
					<AccountIcon
						color='#000'
						width='25px'
						height='25px'
						marginRight='10px'
					/>
					<Link to='/update-profile'>Update Profile</Link>
				</DropdownMenuItem>
				<DropdownMenuItem onClick={handleSignout}>
					<LogoutIcon
						color='#000'
						width='25px'
						height='25px'
						marginRight='10px'
					/>
					<p>Logout</p>
				</DropdownMenuItem>
			</DropdownMenuParent>
		</>
	);
};

export default DropdownMenu;
