//* Styles
import {
	ContextDropdownContainer,
	ContextItemWrapper,
} from '../ContextStylings';

import { IconButton } from '../../Utilities/ExportedStylings';

//* Components

//* Hooks, React
import { useRef } from 'react'; // remove this

//* SVG
import EditIcon from '../../../svg/EditIcon';
import TrashIcon from '../../../svg/TrashIcon';

const ContextEmployeeTableRows = ({ handleOnEdit, handleOnDelete }) => {
	const countref = useRef(0); // remove this
	console.log('ContextListTableRows.js: ' + countref.current++); // remove this

	return (
		<ContextDropdownContainer>
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

export default ContextEmployeeTableRows;
