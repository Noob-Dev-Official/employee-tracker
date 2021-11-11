// eslint-disable-next-line
import { v4 as uuidV4 } from 'uuid';

/* state */
const initialState = {
	projects: {
		id: '',
		name: '',
		date_started: '',
		no_of_emp: '',
		address: '',
		completed: false,
	},
};

/* increment project count */
const ADD_PROJECTS_COUNT = 'ADD_PROJECTS_COUNT';

/* actions */
export const addProjectCount = () => ({
	type: ADD_PROJECTS_COUNT,
});

/* reducer */
const projectsReducer = (state = initialState, action) => {};
