import { combineReducers, createStore } from 'redux';

import timesheetReducer from './ducks/Timesheet';
import timesheetRowReducer from './ducks/TimesheetRow';

const rootReducer = combineReducers({
	timesheet: timesheetReducer,
	timesheetRow: timesheetRowReducer,
});

const store = createStore(rootReducer);

export default store;
