import { combineReducers, createStore } from 'redux';

import timesheetReducer from './ducks/Timesheet';
import timesheetRowReducer from './ducks/TimesheetRow';
import projectsReducer from './ducks/Projects';

const rootReducer = combineReducers({
	timesheet: timesheetReducer,
	timesheetRow: timesheetRowReducer,
	projects: projectsReducer,
});

const store = createStore(rootReducer);

export default store;
