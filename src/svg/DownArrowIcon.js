const DownArrowIcon = ({ width, height, isRotate }) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={width}
			height={height}
			transform={isRotate ? 'rotate(180)' : 'rotate(0)'}
			viewBox='0 0 24 24'
			strokeWidth='2'
			stroke='#2c3e50'
			fill='none'
			strokeLinecap='round'
			strokeLinejoin='round'
		>
			<path stroke='none' d='M0 0h24v24H0z' fill='none' />
			<line x1='12' y1='5' x2='12' y2='19' />
			<line x1='18' y1='13' x2='12' y2='19' />
			<line x1='6' y1='13' x2='12' y2='19' />
		</svg>
	);
};

export default DownArrowIcon;

DownArrowIcon.defaultProps = {
	width: '44px',
	height: '44px',
};
