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
	timesheet_table_row_count: {
		num: 0,
	},
};

/* this increment timesheet_num_row */
const ADD_TIMESHEET_TABLE_ROW_COUNT = 'ADD_TIMESHEET_TABLE_ROW_COUNT';

/* actions */
export const addTimesheetTableRowCount = () => ({
	type: ADD_TIMESHEET_TABLE_ROW_COUNT,
});

/* reducer */
const timesheetReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TIMESHEET_TABLE_ROW_COUNT: {
			return {
				...state,
				timesheet_table_row_count: {
					num: state.timesheet_table_row_count.num + 1,
				},
			};
		}
		default:
			return state;
	}
};

export default timesheetReducer;
