import { combineReducers, createStore } from 'redux';

import timesheetReducer from './ducks/Timesheet';
import timesheetRowReducer from './ducks/TimesheetRow';
import projectsReducer from './ducks/Projects';
import employeesReducer from './ducks/Employees';

const rootReducer = combineReducers({
	timesheet: timesheetReducer,
	timesheetRow: timesheetRowReducer,
	projects: projectsReducer,
	employees: employeesReducer,
});

const store = createStore(rootReducer);

export default store;
