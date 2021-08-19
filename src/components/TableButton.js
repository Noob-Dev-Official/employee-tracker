import React from 'react';

import { Link } from 'react-router-dom';

import styled from 'styled-components';

const TableButtonParent = styled.div`
	button {
		color: ${({ isDel }) => (isDel ? '#fff' : '#000')};
		padding: 8px 25px;
		background-color: ${({ isDel }) => (isDel ? '#E50000' : '#fff')};
		border: 2px solid #e50000;
		border-radius: 5px;
		margin-left: 19px;
		font-size: 1rem;
		max-height: 37px;

		&:hover {
			cursor: pointer;
		}
	}

	a {
		padding: 8px 25px;
		border: 2px solid #3282b8;
		border-radius: 5px;
		margin-left: 19px;
		text-decoration: none;
		font-size: 1rem;
		color: #000;

		&:hover {
			cursor: pointer;
		}
	}
`;

const TableButton = (props) => {
	const { text, isDel, onClick, linkTo } = props;

	return (
		<>
			<TableButtonParent isDel={isDel}>
				{isDel && <button onClick={onClick}>{text}</button>}
				{!isDel && (
					<Link onClick={onClick} to={linkTo}>
						{text}
					</Link>
				)}
			</TableButtonParent>
		</>
	);
};

export default TableButton;
