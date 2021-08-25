const ToolsIcon = ({ width, height }) => {
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
            <circle cx='6' cy='10' r='2' />
            <line x1='6' y1='4' x2='6' y2='8' />
            <line x1='6' y1='12' x2='6' y2='20' />
            <circle cx='12' cy='16' r='2' />
            <line x1='12' y1='4' x2='12' y2='14' />
            <line x1='12' y1='18' x2='12' y2='20' />
            <circle cx='18' cy='7' r='2' />
            <line x1='18' y1='4' x2='18' y2='5' />
            <line x1='18' y1='9' x2='18' y2='20' />
        </svg>
    );
};

export default ToolsIcon;

ToolsIcon.defaultProps = {
    width: '44px',
    height: '44px',
};
