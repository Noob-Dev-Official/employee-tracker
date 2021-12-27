import React from 'react';

import styled from 'styled-components';

import MenuDownArrowIcon from '../../svg/MenuDownArrowIcon';
import HomeIcon from '../../svg/HomeIcon';
// import RoundIcon from './RoundIcon';
import { IconButton } from '../Utilities/ExportedStylings';
// import DropdownMenu from './DropdownMenu';
import { Link } from 'react-router-dom';
import ContextDropdown from '../ContextDropdown/ContextDropdown';
import ContextNavbar from '../ContextDropdown/CustomContextDropdowns/ContextNavbar';

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

	.nav-icons {
		display: flex;
	}

	@media screen and (max-width: 900px) {
		margin-top: 40px;
	}
`;

const Navbar = () => {
	// const [dropdownOpen, setDropdownOpen] = useState(false);

	// const onDropdownMenuClick = () => {
	//     setDropdownOpen((open) => !open);
	// };

	return (
		<>
			<NavbarParent>
				<h1>EmpTracker</h1>
				<div className='nav-icons'>
					<IconButton marginRight='10px'>
						<Link to='/'>
							<HomeIcon width='35px' height='35px' color='#000' />
						</Link>
					</IconButton>
					<ContextDropdown
						icon={
							<MenuDownArrowIcon
								color='#000'
								width='35px'
								height='35px'
							/>
						}
					>
						<ContextNavbar />
					</ContextDropdown>
				</div>
			</NavbarParent>
		</>
	);
};

export default Navbar;
