import React, { useState } from 'react';

import { useDispatch } from 'react-redux';

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
	const { onModalCloseBtnClick, setShowModalForm } = props;

	const date = new Date();

	const dispatch = useDispatch();

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

	const onFormSubmit = (e) => {
		e.preventDefault();

		dispatch(
			addProject(
				projectName.projectName,
				0,
				projectAddress.projectAddress,
				projectDescription.projectDescription,
				false,
				date.getDate(),
			),
		);

		setShowModalForm((prev) => !prev);
	};

	return (
		<>
			<ModalContainer onModalCloseBtnClick={onModalCloseBtnClick}>
				<ModalTitle>
					<h2>Add Project</h2>
				</ModalTitle>
				<ModalBody>
					<Form onSubmit={onFormSubmit}>
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
