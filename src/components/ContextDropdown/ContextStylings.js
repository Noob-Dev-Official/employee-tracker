import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ContextParentContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	position: relative; //Todo: This might break stuff
	width: ${({ parentWidth }) => parentWidth};
`;

export const ContextPortalContainer = styled.div`
	/* position: fixed; */
	position: absolute;
	top: 45px;
	top: calc(${({ yPos }) => yPos}px + 10px);
	display: flex;
	justify-content: flex-end;
	z-index: 10;
`;

export const ContextDropdownContainer = styled.div`
	top: 80px;
	display: flex;
	flex-direction: column;
	padding: ${({ padding }) => padding || '10px'};
	border-radius: 8px;
	background-color: #c4c4c4;
	cursor: pointer;
	z-index: 10;
	box-shadow: 0 3px 9px 0px #404040;
`;

export const ContextItemWrapperLink = styled(Link)`
	display: flex;
	align-items: center;
	padding: ${({ padding }) => padding || '10px'};
	width: ${({ width }) => width || '200px'};
	border-radius: 8px;
	text-decoration: none;
	color: black;

	&:hover {
		background-color: #d1d1d1;
	}
`;

export const ContextItemWrapper = styled.div`
	display: flex;
	align-items: center;
	padding: ${({ padding }) => padding || '10px'};
	width: ${({ width }) => width || '200px'};
	border-radius: 8px;

	&:hover {
		background-color: #d1d1d1;
	}
`;
