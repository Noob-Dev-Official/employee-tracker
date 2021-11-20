// eslint-disable-next-line
import { v4 as uuidV4 } from 'uuid';

/* state */
const initialState = {
	timesheet_row: [
		// {
		// 	id: 0,
		// 	day: 0,
		// 	month: 0,
		// 	year: 0,
		// 	rate: 0,
		// 	hour: 0,
		// 	total: 0,
		// 	timesheet_id: 0, // this could be UID
		// },
	],
	timesheet_row_count: {
		num: 0,
	},
};

/* 
   {
      id: 32523=23423
   },
   

*/

const ADD_TIMESHEET_ROW_COUNT = 'ADD_TIMESHEET_ROW_COUNT';
const ADD_TIMESHEET_ROW = 'ADD_TIMESHEET_ROW';
const DELETE_TIMESHEET_ROW = 'DELETE_TIMESHEET_ROW';
const UPDATE_TIMESHEET_ROW = 'UPDATE_TIMESHEET_ROW';

/* actions */
export const addTimesheetRowCount = () => ({
	type: ADD_TIMESHEET_ROW_COUNT,
});

export const addTimesheet = (
	id,
	day,
	month,
	year,
	rate,
	hour,
	timesheet_id,
	total,
) => ({
	type: ADD_TIMESHEET_ROW,
	id,
	day,
	month,
	year,
	rate,
	total,
	timesheet_id,
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

		case ADD_TIMESHEET_ROW: {
			const { id, day, month, year, rate, timesheet_id, hour, total } =
				action;

			return {
				...state,
				timesheet_row: [
					...state.timesheet_row,
					{
						id: id,
						day: day,
						month: month,
						year: year,
						rate: rate,
						hour: hour,
						total: total,
						timesheet_id: timesheet_id,
					},
				],
			};
		}
		default:
			return state;
	}
};

export default timesheetRowReducer;
