// eslint-disable-next-line
import { v4 as uuidV4 } from 'uuid';

/* state */
const initialState = {
	timesheet_row: {
		id: 0,
		day: 0,
		month: 0,
		year: 0,
		rate: 0,
		total: 0,
		timesheet_id: 0, // this could be UID
	},
	timesheet_row_count: {
		num: 0,
	},
};

const ADD_TIMESHEET_ROW_COUNT = 'ADD_TIMESHEET_ROW_COUNT';

/* actions */
export const addTimesheetRowCount = () => ({
	type: ADD_TIMESHEET_ROW_COUNT,
});

/* reducer */
const timesheetRowReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TIMESHEET_ROW_COUNT: {
			return {
				...state,
				timesheet_row_count: {
					num: state.timesheet_row_count.num + 1,
				},
			};
		}
		default:
			return state;
	}
};

export default timesheetRowReducer;
