//* Styles
import {
    ContextDropdownContainer,
    ContextItemWrapper,
    ContextItemWrapperLink,
} from '../ContextStylings';

import { IconButton } from '../../global/ExportedStylings';

//* Components

//* Hooks, React
import { useRef } from 'react'; // remove this
import { useAuth } from '../../../contexts/AuthContext';
import { useHistory } from 'react-router-dom';

//* SVG
import LogoutIcon from '../../../svg/LogoutIcon';
import AccountIcon from '../../../svg/AccountIcon';

const ContextHome = () => {
    const countref = useRef(0); // remove this
    console.log('ContextHome.js: ' + countref.current++); // remove this

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

export default ContextHome;
