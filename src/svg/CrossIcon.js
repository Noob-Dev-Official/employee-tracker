const CrossIcon = ({ width, height }) => {
	return (
		<svg
			width={width}
			height={height}
			viewBox='0 0 44 44'
			fill='#000'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M33 11L11 33'
				stroke='#000'
				stroke-width='2.75'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path
				d='M11 11L33 33'
				stroke='#000'
				stroke-width='2.75'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
		</svg>
	);
};

export default CrossIcon;

CrossIcon.defaultProps = {
	width: '44px',
	height: '44px',
};
