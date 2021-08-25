const CornerUpRight = ({ width, height }) => {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={width}
            height={height}
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='#000'
            fill='none'
            strokeLinecap='round'
            strokeLinejoin='round'
        >
            <path stroke='none' d='M0 0h24v24H0z' fill='none' />
            <path d='M6 18v-6a3 3 0 0 1 3 -3h10l-4 -4m0 8l4 -4' />
        </svg>
    );
};

export default CornerUpRight;

CornerUpRight.defaultProps = {
    width: '44px',
    height: '44px',
};
