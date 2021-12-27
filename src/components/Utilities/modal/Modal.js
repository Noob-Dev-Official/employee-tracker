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
`;

export const ModalContent = styled.div`
	width: 500px;
	background-color: #fff;
`;

export const ModalTitle = styled.div`
	margin: 0;
`;

export const ModalBody = styled.div``;
