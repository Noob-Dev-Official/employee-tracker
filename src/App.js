import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home/Home';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import { AuthProvider } from './contexts/AuthContext';
import PrivateRoute from './components/Utilities/PrivateRoute';
import ForgotPassword from './pages/ForgotPassword';
import UpdateProfile from './pages/UpdateProfile';
import ManageEmployees from './pages/ManageEmployees/ManageEmployees';
import ManageProjects from './pages/ManageProjects/ManageProjects';
import Timesheets from './pages/Timesheets/Timesheets';
import Timesheet from './pages/Timesheet/Timesheet';

import './App.scss';

function App() {
	return (
		<>
			<Router>
				<div className='auth-app'>
					<div className='content'>
						<AuthProvider>
							<Switch>
								<PrivateRoute exact path='/' component={Home} />
								<PrivateRoute
									exact
									path='/update-profile'
									component={UpdateProfile}
								/>
								<PrivateRoute
									exact
									path='/manage-employees'
									component={ManageEmployees}
								/>
								<PrivateRoute
									exact
									path='/manage-projects'
									component={ManageProjects}
								/>
								<PrivateRoute
									exact
									path='/timesheets/:projectID'
									component={Timesheets}
								/>
								<PrivateRoute
									exact
									path='/timesheet/:timesheetsID'
									component={Timesheet}
								/>
								<Route exact path='/sign-in'>
									<SignIn />
								</Route>
								<Route exact path='/sign-up'>
									<SignUp />
								</Route>
								<Route exact path='/forgot-password'>
									<ForgotPassword />
								</Route>
							</Switch>
						</AuthProvider>
					</div>
				</div>
			</Router>
		</>
	);
}

export default App;
