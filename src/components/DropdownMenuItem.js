import React from 'react';

import styled from 'styled-components';

const DropdownMenuItemParent = styled.div`
	display: flex;
	margin: 5px 0;
	align-items: center;
	justify-content: flex-start;

	a {
		display: flex;
		align-items: center;
		justify-content: flex-start;
	}

	&:hover {
		cursor: pointer;
		text-decoration: underline;
	}
`;

const DropdownMenuItem = (props) => {
	const { children, onClick } = props;

	return (
		<>
			<DropdownMenuItemParent onClick={onClick}>
				{children}
			</DropdownMenuItemParent>
		</>
	);
};

export default DropdownMenuItem;
