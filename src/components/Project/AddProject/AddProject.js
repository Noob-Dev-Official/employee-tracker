import React from 'react';

import {
	Modal,
	ModalTitle,
	ModalBody,
	ModalContent,
	ModalClose,
} from '../../Utilities/modal/Modal';
import CrossIcon from '../../../svg/CrossIcon';

const AddProject = (props) => {
	const { onProjectFormCloseBtnClick } = props;

	return (
		<>
			<Modal onClick={onProjectFormCloseBtnClick}>
				<ModalContent onClick={(e) => e.stopPropagation()}>
					<ModalClose onClick={onProjectFormCloseBtnClick}>
						<CrossIcon />
					</ModalClose>
					<ModalTitle>
						<h2>Add Project</h2>
					</ModalTitle>
					<ModalBody>
						<p>bye</p>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
};

export default AddProject;
