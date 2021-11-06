// eslint-disable-next-line
import { v4 as uuidV4 } from 'uuid';

/* state */
const initialState = {
	timesheet: {
		id: 0,
		name: '',
		emp_id: '',
		timesheet_id: '',
		rate: '',
		hours: '',
		total: '',
	},
	timesheet_num_row: {
		num: 0,
	},
};

/* this increment timesheet_num_row */
const ADD_TIMESHEET_TABLE_ROW = 'ADD_TIMESHEET_TABLE_ROW';

/* actions */
export const addTimesheetTableRow = () => ({
	type: ADD_TIMESHEET_TABLE_ROW,
});

/* reducer */
const timesheetReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TIMESHEET_TABLE_ROW: {
			return {
				...state,
				timesheet_num_row: {
					num: state.timesheet_num_row.num + 1,
				},
			};
		}
		default:
			return state;
	}
};

export default timesheetReducer;
