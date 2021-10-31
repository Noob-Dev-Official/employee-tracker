import React from 'react';

import styled from 'styled-components';
import Select from 'react-select';

export const Table = styled.table`
	border-left: ${({ borderLeft }) => (borderLeft ? borderLeft : '0')};
	border-right: ${({ borderRight }) => (borderRight ? borderRight : '0')};
	border-top: ${({ borderTop }) => (borderTop ? borderTop : '0')};
	border-bottom: ${({ borderBottom }) => (borderBottom ? borderBottom : '0')};
	width: ${({ width }) => (width ? width : 'auto')};
	background-color: ${({ backgroundColor }) =>
		backgroundColor ? backgroundColor : '#fff'};
`;

export const TableHead = styled.thead`
	tr {
		th {
			border-bottom: ${({ borderBottom }) =>
				borderBottom ? borderBottom : '0'};
			border-right: ${({ borderRight }) =>
				borderRight ? borderRight : '0'};
			padding: ${({ padding }) => (padding ? padding : '0')};
		}
	}

	tr .no-right-border {
		border-right: 0px;
	}
`;

export const TableBody = styled.tbody`
	tr .no-right-border {
		border-right: 0px;
	}
`;

export const TableBodyRow = styled.tr`
	td {
		border-bottom: ${({ borderBottom }) =>
			borderBottom ? borderBottom : '0'};
		border-right: ${({ borderRight }) => (borderRight ? borderRight : '0')};
		text-align: ${({ textAlign }) => (textAlign ? textAlign : 'none')};
	}

	.no-right-border {
		border-right: 0px;
	}
`;

export const TableBodyDiv = styled.td`
	border-bottom: ${({ borderBottom }) => (borderBottom ? borderBottom : '0')};
	border-right: ${({ borderRight }) => (borderRight ? borderRight : '0')};
	text-align: ${({ textAlign }) => (textAlign ? textAlign : 'none')};
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

export const ReactSelect = (props) => {
	const { name, options, onChange, required, value } = props;

	const styles = {
		control: (base) => ({
			...base,
			fontFamily: 'sans-serif',
			// minWidth: '50px',
			padding: '0 10px',
		}),
		menu: (base) => ({
			...base,
			fontFamily: 'sans-serif',
		}),
	};

	return (
		<Select
			name={name}
			styles={styles}
			options={options}
			onChange={onChange}
			required={required}
			value={value}
		/>
	);
};
