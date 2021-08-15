const AccountIcon = ({ width, height, color, marginRight }) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			class='icon icon-tabler icon-tabler-user'
			width={width}
			height={height}
			viewBox='0 0 24 24'
			stroke-width='1.5'
			stroke='#2c3e50'
			fill='none'
			color={color}
			stroke-linecap='round'
			stroke-linejoin='round'
			style={{ marginRight: `${marginRight}` }}
		>
			<path stroke='none' d='M0 0h24v24H0z' fill='none' />
			<circle cx='12' cy='7' r='4' />
			<path d='M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2' />
		</svg>
	);
};

export default AccountIcon;

AccountIcon.defaultProps = {
	width: '44px',
	height: '44px',
	color: '#fff',
};
