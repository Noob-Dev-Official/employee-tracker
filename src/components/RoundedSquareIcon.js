import React from 'react';

import styled, { css } from 'styled-components';

const RoundSquareIconDiv = styled.div`
	padding: 7px 10px;
	border-radius: 50%;
	background-color: #bbe1fa;
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

const RoundSquareIcon = (props) => {
	const { children, onClick, onHoverStyle, marginRight } = props;

	return (
		<>
			<RoundSquareIconDiv
				marginRight={marginRight}
				onHoverStyle={onHoverStyle}
				onClick={onClick}
			>
				{children}
			</RoundSquareIconDiv>
		</>
	);
};

export default RoundSquareIcon;
