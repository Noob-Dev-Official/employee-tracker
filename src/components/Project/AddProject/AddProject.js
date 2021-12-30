import React, { useState } from 'react';

import { addProject } from '../../../redux/ducks/Projects';
import { ModalTitle, ModalBody } from '../../Utilities/modal/Modal';
import ModalContainer from '../../Utilities/modal/ModalContainer';
import {
	Form,
	FormLabel,
	FormInput,
	FormInputDiv,
	FormSubmitDiv,
	FormSubmitInput,
} from '../../Utilities/general-form/FormComponents';

const AddProject = (props) => {
	const { onModalCloseBtnClick } = props;

	const [projectName, setProjectName] = useState({ projectName: '' });
	const [projectDescription, setProjectDescription] = useState({
		projectDescription: '',
	});
	const [projectAddress, setProjectAddress] = useState({
		projectAddress: '',
	});

	const onProjectNameChange = (e) => {
		setProjectName(() => {
			return {
				[e.target.name]: e.target.value,
			};
		});
	};

	const onProjectDescriptionChange = (e) => {
		setProjectDescription(() => {
			return {
				[e.target.name]: e.target.value,
			};
		});
	};

	const onProjectAddressChange = (e) => {
		setProjectAddress(() => {
			return {
				[e.target.name]: e.target.value,
			};
		});
	};

	return (
		<>
			<ModalContainer onModalCloseBtnClick={onModalCloseBtnClick}>
				<ModalTitle>
					<h2>Add Project</h2>
				</ModalTitle>
				<ModalBody>
					<Form>
						<FormInputDiv>
							<FormLabel>ProjectName</FormLabel>
							<FormInput
								type='text'
								name='projectName'
								value={projectName.projectName}
								onChange={onProjectNameChange}
							/>
						</FormInputDiv>
						<FormInputDiv>
							<FormLabel>Description</FormLabel>
							<FormInput
								type='text'
								name='projectDescription'
								value={projectDescription.projectDescription}
								onChange={onProjectDescriptionChange}
							/>
						</FormInputDiv>
						<FormInputDiv>
							<FormLabel>Address</FormLabel>
							<FormInput
								type='text'
								name='projectAddress'
								value={projectAddress.projectAddress}
								onChange={onProjectAddressChange}
							/>
						</FormInputDiv>
						<FormSubmitDiv>
							<FormSubmitInput
								type='submit'
								name='submit'
								value='Add Project'
							/>
						</FormSubmitDiv>
					</Form>
				</ModalBody>
			</ModalContainer>
		</>
	);
};

export default AddProject;
