import React from 'react';

import styled from 'styled-components';

const GeneralButtonParent = styled.div`
	button {
		padding: 15px 22px;
		color: #fff;
		background-color: #0f4c75;
		border: 0px;
		border-radius: 5px;

		&:hover {
			cursor: pointer;
			background-color: #0c3c5d;
			transition: background 0.5s;
		}
	}
`;

const GeneralButton = (props) => {
	const { text, onClick } = props;

	return (
		<>
			<GeneralButtonParent>
				<button onClick={onClick}>{text}</button>
			</GeneralButtonParent>
		</>
	);
};

export default GeneralButton;
