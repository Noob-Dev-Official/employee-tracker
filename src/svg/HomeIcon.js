const HomeIcon = ({ width, height, color, marginRight }) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			class='icon icon-tabler icon-tabler-home'
			width={width}
			height={height}
			color={color}
			viewBox='0 0 24 24'
			stroke-width='1.5'
			stroke='#2c3e50'
			fill='none'
			stroke-linecap='round'
			stroke-linejoin='round'
			style={{
				marginRight: `${marginRight}`,
			}}
		>
			<path stroke='none' d='M0 0h24v24H0z' fill='none' />
			<polyline points='5 12 3 12 12 3 21 12 19 12' />
			<path d='M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7' />
			<path d='M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6' />
		</svg>
	);
};

export default HomeIcon;

HomeIcon.defaultProps = {
	width: '44px',
	height: '44px',
	color: '#fff',
};
