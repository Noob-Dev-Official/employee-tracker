import styled from 'styled-components';

export const Modal = styled.div`
	position: fixed;
	left: 0;
	top: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0.5);
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 10;
	flex-direction: column;
`;

export const ModalContent = styled.div`
	width: 500px;
	background-color: #fff;
	display: flex;
	flex-direction: column;
	border-radius: 15px;
	padding: 30px 20px;
	margin: 10px 20px;
`;

export const ModalClose = styled.div`
	margin: 10px 10px;
	align-self: flex-end;

	&:hover {
		cursor: pointer;
	}
`;

export const ModalTitle = styled.div`
	margin: 10px 20px;
	color: #0f4c75;
`;

export const ModalBody = styled.div`
	margin: 10px 20px;
`;
