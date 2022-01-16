import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import 'react-datepicker/dist/react-datepicker.css';

import { addTimesheets } from '../../../redux/ducks/Timesheets';
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

const AddTimesheets = (props) => {
	const { onModalCloseBtnClick, setShowModalForm } = props;

	const dispatch = useDispatch();

	const date = new Date();

	const [timesheetName, setTimesheetName] = useState({ timesheetName: '' });

	const onTimesheetNameChange = (e) => {
		setTimesheetName(() => {
			return {
				[e.target.name]: e.target.value,
			};
		});
	};

	const onFormSubmit = (e) => {
		e.preventDefault();

		dispatch(
			addTimesheets(timesheetName.timesheetName, date.toLocaleDateString()),
		);

		setShowModalForm((prev) => !prev);
	};

	return (
		<>
			<ModalContainer onModalCloseBtnClick={onModalCloseBtnClick}>
				<ModalTitle>
					<h2>Add Timesheet</h2>
				</ModalTitle>
				<ModalBody>
					<Form onSubmit={onFormSubmit}>
						<FormInputDiv>
							<FormLabel>Timesheet Name</FormLabel>
							<FormInput
								type='text'
								name='timesheetName'
								value={timesheetName.timesheetName}
								onChange={onTimesheetNameChange}
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

export default AddTimesheets;
