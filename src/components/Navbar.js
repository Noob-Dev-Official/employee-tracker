import React from 'react';

import styled from 'styled-components';

import MenuDownArrowIcon from '../svg/MenuDownArrowIcon';
import AccountIcon from '../svg/AccountIcon';

const NavbarParent = styled.nav`
	display: flex;
	justify-content: space-between;
	margin-top: 80px;

	h1 {
		color: #0f4c75;
	}
`;

const Navbar = () => {
	return (
		<>
			<NavbarParent>
				<h1>EmpTracker</h1>
			</NavbarParent>
		</>
	);
};

export default Navbar;
