import React from 'react';

import styled from 'styled-components';

const CardParent = styled.div`
	display: flex;
	flex-direction: ${({ isSmallMode }) => (isSmallMode ? 'row' : 'column')};
	background-color: #bbe1fa;
	min-width: 200px;
	max-width: 300px;
	border-radius: 10px;
	margin-right: 15px;
	margin-top: ${({ isSmallMode }) => (isSmallMode ? '0' : '15px')};

	a {
		display: flex;
		flex-direction: ${({ isSmallMode }) => (isSmallMode ? 'row' : 'column')};
		align-items: ${({ isSmallMode }) =>
			isSmallMode ? 'center' : 'flex-start'};
		padding: 30px 20px;
	}

	&:hover {
		cursor: pointer;
	}
`;

const Card = (props) => {
	const { isSmallMode, children } = props;

	return (
		<>
			<CardParent isSmallMode={isSmallMode}>{children}</CardParent>
		</>
	);
};

export default Card;
