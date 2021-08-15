import React from 'react';

import styled from 'styled-components';

const HomeButtonParent = styled.div`
	display: flex;
	flex-direction: ${({ isSmallMode }) => (isSmallMode ? 'row' : 'column')};
	/* justify-content: ${({ isSmallMode }) =>
		isSmallMode ? 'center' : 'flex-start'}; */
	/* align-items: ${({ isSmallMode }) =>
		isSmallMode ? 'center' : 'flex-start'}; */
	background-color: #bbe1fa;
	min-width: 200px;
	max-width: 300px;
	border-radius: 10px;
	margin-right: 15px;

	a {
		display: flex;
		flex-direction: ${({ isSmallMode }) => (isSmallMode ? 'row' : 'column')};
		align-items: ${({ isSmallMode }) =>
			isSmallMode ? 'center' : 'flex-start'};
		/* justify-content: ${({ isSmallMode }) =>
			isSmallMode ? 'center' : 'flex-start'}; */
		padding: 30px 20px;
	}

	&:hover {
		cursor: pointer;
	}
`;

const HomeButton = (props) => {
	const { isSmallMode, children } = props;

	return (
		<>
			<HomeButtonParent isSmallMode={isSmallMode}>
				{isSmallMode ? children : <h2>hello</h2>}
			</HomeButtonParent>
		</>
	);
};

export default HomeButton;
