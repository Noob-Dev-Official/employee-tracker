import React from 'react';

import styled from 'styled-components';

const DropdownMenuItemParent = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	margin: 5px 0;

	&:hover {
		cursor: pointer;
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
