import React from 'react';

import styled from 'styled-components';

import Navbar from './Navbar';

const LayoutDiv = styled.div`
	margin: 0px 150px;
`;

const Layout = ({ children }) => {
	return (
		<LayoutDiv>
			<Navbar />
			{children}
		</LayoutDiv>
	);
};

export default Layout;
