import React from 'react';

import styled from 'styled-components';

const TableButtonParent = styled.div`
	button {
		color: ${({ isDel }) => (isDel ? '#fff' : '#000')};
		padding: 8px 25px;
		background-color: ${({ isDel }) => (isDel ? '#E50000' : '#fff')};
		border: ${({ isDel }) =>
			isDel ? '2px solid #E50000' : '2px solid #3282B8'};
		border-radius: 5px;
		margin-left: 19px;

		&:hover {
			cursor: pointer;
		}
	}
`;

const TableButton = (props) => {
	const { text, isDel, onClick } = props;

	return (
		<>
			<TableButtonParent isDel={isDel}>
				<button onClick={onClick}>{text}</button>
			</TableButtonParent>
		</>
	);
};

export default TableButton;
