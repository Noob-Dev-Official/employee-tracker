//* Styles
import {
    ContextDropdownContainer,
    ContextItemWrapper,
} from '../ContextStylings';

import { IconButton } from '../../global/ExportedStylings';

//* Components

//* Hooks, React
import { useRef } from 'react'; // remove this

//* SVG
import LogoutIcon from '../../../svg/LogoutIcon';

const ContextTimesheet = () => {
    const countref = useRef(0); // remove this
    console.log('ContextTimesheet.js: ' + countref.current++); // remove this

    return (
        <ContextDropdownContainer>
            <ContextItemWrapper>
                <IconButton width='30px' height='30px' margin='0 5px 0 0'>
                    <LogoutIcon />
                </IconButton>
                Logout
            </ContextItemWrapper>
        </ContextDropdownContainer>
    );
};

export default ContextTimesheet;
