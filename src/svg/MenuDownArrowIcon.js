const MenuDownArrowIcon = ({ width, height }) => {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={width}
            height={height}
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='#2c3e50'
            fill='none'
            strokeLinecap='round'
            strokeLinejoin='round'
        >
            <path stroke='none' d='M0 0h24v24H0z' fill='none' />
            <path d='M18 15l-6 -6l-6 6h12' transform='rotate(180 12 12)' />
        </svg>
    );
};

export default MenuDownArrowIcon;

MenuDownArrowIcon.defaultProps = {
    width: '44px',
    height: '44px',
};
