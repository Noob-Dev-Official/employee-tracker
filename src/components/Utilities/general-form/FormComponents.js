import styled from 'styled-components';

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: 20px;
`;

export const FormInputDiv = styled.div`
	display: flex;
	flex-direction: column;
`;

export const FormLabel = styled.label``;

export const FormInput = styled.input`
	padding: 5px 10px;
	margin-top: 5px;
`;

export const FormSubmitDiv = styled.div``;

export const FormSubmitInput = styled.input`
	margin-top: 10px;
	padding: 10px 20px;
	border: 2px solid #0f4c75;
	color: #fff;
	background: #0f4c75;
	border-radius: 5px;

	&:hover {
		cursor: pointer;
	}
`;
