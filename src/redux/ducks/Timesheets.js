// eslint-disable-next-line
import { v4 as uuidV4 } from 'uuid';

/* state */
const initialState = {
	timesheets: {
		id: 0,
		name: '',
		project_id: '',
		date_from: '',
		date_to: '',
	},
	timesheets_count: {
		num: 0,
	},
};

/* increment timesheets count */
const ADD_TIMESHEETS_COUNT = 'ADD_TIMESHEETS_COUNT';

/* actions */
export const addTimesheetsCount = () => ({
	type: ADD_TIMESHEETS_COUNT,
});

/* reducer */
const timesheetsReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TIMESHEETS_COUNT: {
			return {
				...state,
				timesheets_count: {
					num: state.timesheets_count.num + 1,
				},
			};
		}
		default:
			return state;
	}
};

export default timesheetsReducer;
