// eslint-disable-next-line
import { v4 as uuidV4 } from 'uuid';

/* state */
const initialState = {
	employees: {
		id: 0,
		name: '',
		address,
	},
	employees_count: {
		num: 0,
	},
};

/* increment employees count */
const ADD_EMPLOYEES_COUNT = 'ADD_EMPLOYEES_COUNT';

/* action */
export const addEmployeesCount = () => ({
	type: ADD_EMPLOYEES_COUNT,
});

/* reducer */
const employeesReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_EMPLOYEES_COUNT: {
			return {
				state,
				employees_count: {
					num: state.employees_count.num + 1,
				},
			};
		}
		default:
			return state;
	}
};

export default employeesReducer;
