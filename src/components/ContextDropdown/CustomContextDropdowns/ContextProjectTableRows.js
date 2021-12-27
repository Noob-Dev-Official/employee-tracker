//* Styles
import {
	ContextDropdownContainer,
	ContextItemWrapper,
	ContextItemWrapperLink,
} from '../ContextStylings';

import { IconButton } from '../../Utilities/ExportedStylings';

//* Components

//* Hooks, React
import { useRef } from 'react'; // remove this

//* SVG
import EditIcon from '../../../svg/EditIcon';
import TrashIcon from '../../../svg/TrashIcon';
import CornerUpRight from '../../../svg/CornerUpRight';

const ContextProjectTableRows = ({ handleOnEdit, handleOnDelete }) => {
	const countref = useRef(0); // remove this
	console.log('ContextProjectTableRows.js: ' + countref.current++); // remove this

	return (
		<ContextDropdownContainer>
			<ContextItemWrapperLink to='/timesheets'>
				<IconButton width='30px' height='30px' margin='0 5px 0 0'>
					<CornerUpRight />
				</IconButton>
				Timesheets
			</ContextItemWrapperLink>
			<ContextItemWrapper onClick={handleOnEdit}>
				<IconButton width='30px' height='30px' margin='0 5px 0 0'>
					<EditIcon />
				</IconButton>
				Edit
			</ContextItemWrapper>
			<ContextItemWrapper onClick={handleOnDelete}>
				<IconButton width='30px' height='30px' margin='0 5px 0 0'>
					<TrashIcon />
				</IconButton>
				Delete
			</ContextItemWrapper>
		</ContextDropdownContainer>
	);
};

export default ContextProjectTableRows;
