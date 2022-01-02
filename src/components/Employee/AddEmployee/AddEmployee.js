import React, { useState } from 'react';

import { useDispatch } from 'react-redux';

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
import { addEmployee } from '../../../redux/ducks/Employees';

const AddEmployee = (props) => {
	const { onModalCloseBtnClick, setShowModalForm } = props;

	const dispatch = useDispatch();

	const [employeeName, setEmployeeName] = useState({ employeeName: '' });
	const [employeeAddress, setEmployeeAddress] = useState({
		employeeAddress: '',
	});

	const onEmployeeNameChange = (e) => {
		setEmployeeName(() => {
			return {
				[e.target.name]: e.target.value,
			};
		});
	};

	const onEmployeeAddressChange = (e) => {
		setEmployeeAddress(() => {
			return {
				[e.target.name]: e.target.value,
			};
		});
	};

	const onFormSubmit = (e) => {
		e.preventDefault();

		dispatch(
			addEmployee(
				employeeName.employeeName,
				employeeAddress.employeeAddress,
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
							<FormLabel>Employee Name</FormLabel>
							<FormInput
								type='text'
								name='employeeName'
								value={employeeName.employeeName}
								onChange={onEmployeeNameChange}
							/>
						</FormInputDiv>
						<FormInputDiv>
							<FormLabel>Employee Address</FormLabel>
							<FormInput
								type='text'
								name='employeeAddress'
								value={employeeAddress.employeeAddress}
								onChange={onEmployeeAddressChange}
							/>
						</FormInputDiv>
						<FormSubmitDiv>
							<FormSubmitInput
								type='submit'
								name='submit'
								value='Add Employee'
							/>
						</FormSubmitDiv>
					</Form>
				</ModalBody>
			</ModalContainer>
		</>
	);
};

export default AddEmployee;
