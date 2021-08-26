import React from 'react';

import styled from 'styled-components';

const CardParent = styled.div`
	display: flex;
	flex-direction: ${({ isSmallMode }) => (isSmallMode ? 'row' : 'column')};
	background-color: #bbe1fa;
	min-width: 200px;
	border-radius: 10px;
	cursor: pointer;

	a {
		display: flex;
		flex-direction: ${({ isSmallMode }) => (isSmallMode ? 'row' : 'column')};
		align-items: ${({ isSmallMode }) =>
			isSmallMode ? 'center' : 'flex-start'};
		padding: 30px 20px 30px 20px;
	}

	@media (max-width: 900px) {
		max-width: 100%;
		min-width: 100%;
		margin: 0;
	}
`;

const CardChildContainer = styled.div`
	width: 100%;
	height: 100%;
`;

const Card = (props) => {
	const { isSmallMode, children } = props;

	return (
		<>
			<CardParent isSmallMode={isSmallMode}>
				<CardChildContainer>{children}</CardChildContainer>
			</CardParent>
		</>
	);
};

export default Card;
