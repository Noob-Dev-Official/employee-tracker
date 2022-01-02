// eslint-disable-next-line
import { v4 as uuidV4 } from 'uuid';

/* state */
const initialState = {
	employees_template: [
		{
			id: 0,
			name: '',
			address: '',
		},
	],
	employees: [],
};

/* increment employees count */
const ADD_EMPLOYEE = 'ADD_EMPLOYEE';

/* action */
export const addEmployee = (name, address) => ({
	type: ADD_EMPLOYEE,
	id: uuidV4(),
	name,
	address,
});

/* reducer */
const employeesReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_EMPLOYEE: {
			const { id, name, address } = action;

			return {
				...state,
				employees: [
					...state.employees,
					{
						id: id,
						name: name,
						address: address,
					},
				],
			};
		}
		default:
			return state;
	}
};

export default employeesReducer;
