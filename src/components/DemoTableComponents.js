import styled from 'styled-components';

export const Table = styled.table`
	background-color: #fff;
	width: ${({ width }) => (width ? width : 'auto')};
`;

export const TableHead = styled.thead`
	tr {
		th {
			padding: ${({ padding }) => (padding ? padding : '0')};
		}
	}
`;

export const TableBody = styled.tbody``;

export const TableBodyRow = styled.tr`
	td {
		text-align: ${({ textAlign }) => (textAlign ? textAlign : 'none')};
	}
`;

export const Input = styled.input`
	background-color: ${({ backgroundColor }) =>
		backgroundColor ? backgroundColor : '#fff'};
	border: ${({ border }) => (border ? border : '0')};
	max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : 'auto')};
	padding: ${({ padding }) => (padding ? padding : '0')};
	text-align: ${({ textAlign }) => (textAlign ? textAlign : 'none')};
	font-size: 1rem;
`;
