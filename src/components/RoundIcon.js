import React from 'react';

import styled from 'styled-components';

const RoundIconDiv = styled.div`
	padding: 5px;
	border-radius: 50%;
	background-color: #c4c4c4;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const RoundIcon = (props) => {
	const { children } = props;

	return (
		<>
			<RoundIconDiv>{children}</RoundIconDiv>
		</>
	);
};

export default RoundIcon;
