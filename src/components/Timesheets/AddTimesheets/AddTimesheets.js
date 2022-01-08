import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import DatePicker from 'react-datepicker';
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

	const [timesheetName, setTimesheetName] = useState({ timesheetName: '' });
	const [dateFrom, setDateFrom] = useState(new Date());
	const [dateTo, setDateTo] = useState(new Date());

	const onTimesheetNameChange = (e) => {
		setTimesheetName(() => {
			return {
				[e.target.name]: e.target.value,
			};
		});
	};

	const onFormSubmit = (e) => {
		e.preventDefault();

		// dispatch(
		// 	addTimesheets(
		// 		timesheetName.timesheetName,
		// 		0,
		// 		projectAddress.projectAddress,
		// 		projectDescription.projectDescription,
		// 		false,
		// 		date.getDate(),
		// 	),
		// );

		setShowModalForm((prev) => !prev);
	};

	console.log(dateTo);

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
						<FormInputDiv>
							<FormLabel>Date From</FormLabel>
							<DatePicker
								selected={dateFrom}
								onChange={(date) => setDateFrom(date)}
								dateFormat='dd/MM/yyyy'
								className='date-picker'
								monthsShown={2}
							/>
						</FormInputDiv>
						<FormInputDiv>
							<FormLabel>Date To</FormLabel>
							<DatePicker
								selected={dateTo}
								onChange={(date) => setDateTo(date)}
								dateFormat='dd/MM/yyyy'
								className='date-picker'
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
