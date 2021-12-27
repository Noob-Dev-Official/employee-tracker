import React from 'react';

import {
	Modal,
	ModalTitle,
	ModalBody,
	ModalContent,
} from '../../Utilities/modal/Modal';

export default function () {
	return (
		<>
			<Modal>
				<ModalContent>
					<ModalTitle>
						<h2>hello</h2>
					</ModalTitle>
					<ModalBody>
						<p>bye</p>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
}
