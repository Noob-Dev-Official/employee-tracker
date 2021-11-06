import { combineReducers, createStore } from 'redux';

import timesheetReducer from './ducks/Timesheet';

const rootReducer = combineReducers({
	timesheet: timesheetReducer,
});

const store = createStore(rootReducer);

export default store;
