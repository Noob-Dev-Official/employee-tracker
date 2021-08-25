import React from 'react';

import styled from 'styled-components';

const GeneralButtonParent = styled.div`
	@media (max-width: 900px) {
		width: 80%;
	}
	@media (max-width: 400px) {
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

		&:hover {
			/* background-color: #0c3c5d;
			transition: background 0.5s; */
		}
	}
`;

const GeneralButton = (props) => {
	const { text, onClick, color, backgroundColor, borderColor, marginLeft } =
		props;

	return (
		<>
			<GeneralButtonParent
				color={color}
				backgroundColor={backgroundColor}
				borderColor={borderColor}
				marginLeft={marginLeft}
			>
				<button onClick={onClick}>{text}</button>
			</GeneralButtonParent>
		</>
	);
};

export default GeneralButton;
