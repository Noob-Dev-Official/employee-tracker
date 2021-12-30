import React from 'react';

import { Modal, ModalContent, ModalClose } from './Modal';
import CrossIcon from '../../../svg/CrossIcon';

const ModalContainer = (props) => {
	const { children, onModalCloseBtnClick } = props;

	return (
		<>
			<Modal onClick={onModalCloseBtnClick}>
				<ModalContent onClick={(e) => e.stopPropagation()}>
					<ModalClose onClick={onModalCloseBtnClick}>
						<CrossIcon />
					</ModalClose>
					{children}
				</ModalContent>
			</Modal>
		</>
	);
};

export default ModalContainer;
