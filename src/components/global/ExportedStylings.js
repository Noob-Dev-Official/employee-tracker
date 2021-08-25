import styled from 'styled-components';

export const IconButton = styled.div`
    min-width: ${({ width }) => (width ? width : '40px')};
    max-width: ${({ width }) => (width ? width : '40px')};
    min-height: ${({ height }) => (height ? height : '40px')};
    max-height: ${({ height }) => (height ? height : '40px')};

    background-color: ${({ transparent, square }) =>
        transparent ? 'rgba(0, 0, 0, 0)' : square ? '#bbe1fa' : '#b7b7b7'};

    border-radius: ${({ square }) => (square ? '10px' : '50%')};
    margin: ${({ margin }) => (margin ? margin : '0 10px 0 0')};
    padding: ${({ padding }) => (padding ? padding : '2px')};

    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s;
    cursor: pointer;

    &:hover {
        filter: brightness(1.05);
    }
`;

export const TextWrapper = styled.p`
    display: flex;
    line-height: 1.3em;
    max-height: 1.3em;
    overflow: hidden;
    word-break: break-word;
`;
export const TextContainer = styled.div`
    display: flex;
    align-items: center;
    min-height: ${({ minHeight }) => minHeight || '30px'};
    max-height: 100px;
    overflow: hidden auto; // Make this scroll instead of auto, if needed
    padding: ${({ padding }) => padding || '5px 0'};
    word-break: break-word;
    width: ${({ width }) => width || '100%'};
    font-size: ${({ fontSize }) => fontSize || '1em'};
    cursor: inherit;

    &:hover ${TextWrapper} {
        max-height: unset;
        align-self: start;
    }
`;
