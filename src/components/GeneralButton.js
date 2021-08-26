import React from 'react';

import styled from 'styled-components';

const GeneralButtonParent = styled.div`
	/* @media (max-width: 900px) {
		width: 80%;
	} */
	@media screen and (max-width: 724px) {
		width: 100%;
	}

	button {
		padding: 15px 30px;
		color: ${({ color }) => (color ? `${color}` : '#fff')};
		background-color: ${({ backgroundColor }) =>
			backgroundColor ? `${backgroundColor}` : '#0f4c75'};
		border: ${({ borderColor }) =>
			borderColor ? `2px solid ${borderColor}` : '2px solid #0f4c75'};
		border-radius: 5px;
		min-width: 160px;
		margin-left: ${({ marginLeft }) => (marginLeft ? `${marginLeft}` : '0')};
		cursor: pointer;
		/* width: 100%; */

		@media screen and (max-width: 724px) {
			width: 100%;
			margin-left: 0;
			margin-top: ${({ marginTop }) => (marginTop ? `${marginTop}` : '0')};
		}
	}
`;

const GeneralButton = (props) => {
	const {
		text,
		onClick,
		color,
		backgroundColor,
		borderColor,
		marginLeft,
		marginTop,
	} = props;

	return (
		<>
			<GeneralButtonParent
				color={color}
				backgroundColor={backgroundColor}
				borderColor={borderColor}
				marginLeft={marginLeft}
				marginTop={marginTop}
			>
				<button onClick={onClick}>{text}</button>
			</GeneralButtonParent>
		</>
	);
};

export default GeneralButton;
