// eslint-disable-next-line
import { v4 as uuidV4 } from 'uuid';

/* state */
const initialState = {
	timesheets_template: [
		{
			id: 0,
			name: '',
			project_id: '',
			date_from: '',
			date_to: '',
		},
	],
	timesheets: [],
};

// const GET_TIMESHEETS = 'GET_TIMESHEETS'

/* increment timesheets count */
const ADD_TIMESHEETS = 'ADD_TIMESHEETS';

/* actions */
export const addTimesheets = (name, date_from, date_to) => ({
	type: ADD_TIMESHEETS,
	id: uuidV4(),
	date_from,
	date_to,
	name,
});

/* reducer */
const timesheetsReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TIMESHEETS: {
			const { name, date_from, date_to, id } = action;

			return {
				...state,
				projects: [
					...state.projects,
					{
						id: id,
						name: name,
						date_from: date_from,
						date_to: date_to,
					},
				],
			};
		}
		default:
			return state;
	}
};

export default timesheetsReducer;
