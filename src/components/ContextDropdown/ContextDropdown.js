import React, { useRef } from 'react';

import { useComponentVisible } from '../../hooks/useComponentVisible';

import {
	ContextParentContainer,
	ContextPortalContainer,
} from './ContextStylings';
import { IconButton } from '../global/ExportedStylings';

const ContextDropdown = (props) => {
	const {
		icon,
		stayOpen,
		width,
		height,
		padding,
		margin,
		transparent,
		parentWidth,
		children,
	} = props;

	const countref = useRef(0); // remove this
	console.log('ContextDropdown.js: ' + countref.current++); // remove this

	// eslint-disable-next-line
	const { dropdownRef, isComponentVisible, handleClick, coords } =
		useComponentVisible(stayOpen);

	return (
		<ContextParentContainer ref={dropdownRef} parentWidth={parentWidth}>
			<IconButton
				margin={margin}
				width={width}
				height={height}
				padding={padding}
				transparent={transparent}
				onClick={handleClick}
			>
				{icon}
			</IconButton>

			{isComponentVisible && (
				<ContextPortalContainer
				// yPos={coords.Y}
				>
					{children}
				</ContextPortalContainer>
			)}
		</ContextParentContainer>
	);
};

export default React.memo(ContextDropdown);

ContextDropdown.defaultProps = {
	stayOpen: false,
	width: '40px',
	height: '40px',
	padding: '2px',
	margin: '0',
	transparent: false,
	parentWidth: 'auto',
};
