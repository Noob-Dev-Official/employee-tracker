import React from 'react';

import styled, { css } from 'styled-components';

const RoundIconDiv = styled.div`
	padding: 5px;
	border-radius: 50%;
	background-color: #c4c4c4;
	display: flex;
	align-items: center;
	justify-content: center;

	${({ onHoverStyle }) =>
		onHoverStyle &&
		css`
			&:hover {
				cursor: pointer;
			}
		`}
`;

const RoundIcon = (props) => {
	const { children, onClick, onHoverStyle } = props;

	return (
		<>
			<RoundIconDiv onHoverStyle={onHoverStyle} onClick={onClick}>
				{children}
			</RoundIconDiv>
		</>
	);
};

export default RoundIcon;
