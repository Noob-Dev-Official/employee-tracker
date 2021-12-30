// eslint-disable-next-line
import { v4 as uuidV4 } from 'uuid';

/* state */
const initialState = {
	projects_template: [
		{
			id: '',
			name: '',
			date_started: '',
			no_of_emp: '',
			address: '',
			completed: false,
		},
	],
	projects: [],
};

/* add project */
const ADD_PROJECT = 'ADD_PROJECT';

/* actions */
export const addProject = (
	id,
	name,
	numberOfEmployees,
	address,
	description,
	completed,
	dateStarted,
) => ({
	type: ADD_PROJECT,
	id,
	name,
	numberOfEmployees,
	address,
	description,
	completed,
	dateStarted,
});

/* reducer */
const projectsReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_PROJECT: {
			const {
				id,
				name,
				numberOfEmployees,
				address,
				description,
				dataStarted,
				completed,
			} = action;

			return {
				...state,
				projects: [
					state.projects,
					{
						id: id,
						name: name,
						date_started: dataStarted,
						description: description,
						no_of_emp: numberOfEmployees,
						address: address,
						completed: completed,
					},
				],
			};
		}
		default:
			return state;
	}
};

export default projectsReducer;
