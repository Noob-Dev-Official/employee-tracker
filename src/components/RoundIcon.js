import React from 'react';

import styled, { css } from 'styled-components';

const RoundIconDiv = styled.div`
	padding: 7px 10px;
	border-radius: 50%;
	background-color: #c4c4c4;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: ${({ marginRight }) =>
		`${marginRight}` ? `${marginRight}` : 0};

	${({ onHoverStyle }) =>
		onHoverStyle &&
		css`
			&:hover {
				cursor: pointer;
			}
		`}
`;

const RoundIcon = (props) => {
	const { children, onClick, onHoverStyle, marginRight } = props;

	return (
		<>
			<RoundIconDiv
				marginRight={marginRight}
				onHoverStyle={onHoverStyle}
				onClick={onClick}
			>
				{children}
			</RoundIconDiv>
		</>
	);
};

export default RoundIcon;
