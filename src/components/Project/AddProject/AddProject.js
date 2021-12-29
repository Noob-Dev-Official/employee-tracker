import React from 'react';

import { ModalTitle, ModalBody, ModalClose } from '../../Utilities/modal/Modal';
import ModalContainer from '../../Utilities/modal/ModalContainer';
import CrossIcon from '../../../svg/CrossIcon';

const AddProject = (props) => {
	const { onModalCloseBtnClick } = props;

	return (
		<>
			<ModalContainer onModalCloseBtnClick={onModalCloseBtnClick}>
				<ModalClose onClick={onModalCloseBtnClick}>
					<CrossIcon />
				</ModalClose>
				<ModalTitle>
					<h2>Add Project</h2>
				</ModalTitle>
				<ModalBody>
					<p>bye</p>
				</ModalBody>
			</ModalContainer>
		</>
	);
};

export default AddProject;
