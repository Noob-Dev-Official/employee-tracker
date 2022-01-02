import { combineReducers, createStore } from 'redux';

import timesheetReducer from './ducks/Timesheet';
import timesheetRowReducer from './ducks/TimesheetRow';
import projectsReducer from './ducks/Projects';
import employeesReducer from './ducks/Employees';
import timesheetsReducer from './ducks/Timesheets';

const rootReducer = combineReducers({
	timesheet: timesheetReducer,
	timesheetRow: timesheetRowReducer,
	projects: projectsReducer,
	employees: employeesReducer,
	timesheets: timesheetsReducer,
});

const store = createStore(rootReducer);

export default store;
