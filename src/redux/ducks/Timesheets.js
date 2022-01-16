// eslint-disable-next-line
import { v4 as uuidV4 } from 'uuid';

/* state */
const initialState = {
	timesheets_template: [
		{
			id: 0,
			name: '',
			project_id: '',
			date_created: '',
		},
	],
	timesheets: [],
};

// const GET_TIMESHEETS = 'GET_TIMESHEETS'

/* increment timesheets count */
const ADD_TIMESHEETS = 'ADD_TIMESHEETS';

/* actions */
export const addTimesheets = (name, dateCreated) => ({
	type: ADD_TIMESHEETS,
	id: uuidV4(),
	name,
	dateCreated,
});

/* reducer */
const timesheetsReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TIMESHEETS: {
			const { name, id, dateCreated } = action;

			return {
				...state,
				projects: [
					...state.projects,
					{
						id: id,
						name: name,
						date_created: dateCreated,
					},
				],
			};
		}
		default:
			return state;
	}
};

export default timesheetsReducer;
