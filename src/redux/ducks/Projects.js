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
	projects_count: {
		num: 0,
	},
};

/* increment project count */
const ADD_PROJECTS_COUNT = 'ADD_PROJECTS_COUNT';

/* actions */
export const addProjectCount = () => ({
	type: ADD_PROJECTS_COUNT,
});

/* reducer */
const projectsReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_PROJECTS_COUNT: {
			return {
				...state,
				projects_count: {
					num: state.projects_count.num + 1,
				},
			};
		}
	}
};

export default projectsReducer;
