import React from 'react';

import { Modal, ModalContent } from './Modal';

const ModalContainer = (props) => {
	const { children, onModalCloseBtnClick } = props;

	return (
		<>
			<Modal onClick={onModalCloseBtnClick}>
				<ModalContent>{children}</ModalContent>
			</Modal>
		</>
	);
};

export default ModalContainer;
