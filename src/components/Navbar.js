import React, { useState } from 'react';

import styled from 'styled-components';

import MenuDownArrowIcon from '../svg/MenuDownArrowIcon';
import RoundIcon from './RoundIcon';
import DropdownMenu from './DropdownMenu';

const NavbarParent = styled.nav`
	display: flex;
	justify-content: space-between;
	margin-top: 80px;
	user-select: none; /* supported by Chrome and Opera */
	-webkit-user-select: none; /* Safari */
	-khtml-user-select: none; /* Konqueror HTML */
	-moz-user-select: none; /* Firefox */
	-ms-user-select: none; /* Internet Explorer/Edge */
	position: relative;

	h1 {
		color: #0f4c75;
		font-size: 1.8rem;
	}
`;

const Navbar = () => {
	const [dropdownOpen, setDropdownOpen] = useState(false);

	const onDropdownMenuClick = () => {
		setDropdownOpen((open) => !open);
	};

	return (
		<>
			<NavbarParent>
				<h1>EmpTracker</h1>
				<RoundIcon onClick={onDropdownMenuClick} onHoverStyle={true}>
					<MenuDownArrowIcon color='#000' width='35px' height='35px' />
				</RoundIcon>
				{dropdownOpen && <DropdownMenu />}
			</NavbarParent>
		</>
	);
};

export default Navbar;
