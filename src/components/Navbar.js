import React from 'react';

import styled from 'styled-components';

import MenuDownArrowIcon from '../svg/MenuDownArrowIcon';
import AccountIcon from '../svg/AccountIcon';
import RoundIcon from './RoundIcon';

const NavbarParent = styled.nav`
	display: flex;
	justify-content: space-between;
	margin-top: 80px;

	h1 {
		color: #0f4c75;
		font-size: 1.8rem;
	}
`;

const Navbar = () => {
	return (
		<>
			<NavbarParent>
				<h1>EmpTracker</h1>
				<RoundIcon>
					<MenuDownArrowIcon color='#000' width='35px' height='35px' />
				</RoundIcon>
			</NavbarParent>
		</>
	);
};

export default Navbar;
