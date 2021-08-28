import React from 'react';

import styled from 'styled-components';

import Navbar from './Navbar';

const LayoutDiv = styled.div`
	margin: 0px 150px;

	@media screen and (max-width: 1100px) {
		margin: 0 100px;
	}

	//tablet
	@media screen and (max-width: 995px) {
		margin: 0 50px;
	}

	//mobile
	@media screen and (max-width: 724px) {
		margin: 0 10px;
	}
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
