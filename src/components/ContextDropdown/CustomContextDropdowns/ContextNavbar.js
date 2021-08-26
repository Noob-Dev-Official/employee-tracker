import { useRef } from 'react'; // remove this

import { useHistory } from 'react-router-dom';

import { useAuth } from '../../../contexts/AuthContext';

import { IconButton } from '../../global/ExportedStylings';
import LogoutIcon from '../../../svg/LogoutIcon';
import AccountIcon from '../../../svg/AccountIcon';
import {
	ContextDropdownContainer,
	ContextItemWrapper,
	ContextItemWrapperLink,
} from '../ContextStylings';

const ContextNavbar = () => {
	const countref = useRef(0); // remove this
	console.log('ContextHome.js: ' + countref.current++); // remove this

	// eslint-disable-next-line
	const { currentUser, signout } = useAuth();

	const history = useHistory();

	const handleSignout = async (e) => {
		e.preventDefault();

		// setError(false);

		try {
			await signout();
			history.push('/sign-in');
		} catch (err) {
			console.log(err);
			// setErrorMssg('Failed to Logout');
		}
	};

	return (
		<ContextDropdownContainer>
			<ContextItemWrapperLink to='/update-profile'>
				<IconButton width='30px' height='30px' margin='0 5px 0 0'>
					<AccountIcon />
				</IconButton>
				Profile
			</ContextItemWrapperLink>
			<ContextItemWrapper onClick={handleSignout}>
				<IconButton width='30px' height='30px' margin='0 5px 0 0'>
					<LogoutIcon />
				</IconButton>
				Logout
			</ContextItemWrapper>
		</ContextDropdownContainer>
	);
};

export default ContextNavbar;
