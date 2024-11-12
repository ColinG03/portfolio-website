import styled, { keyframes } from 'styled-components'

const BlinkingCursor = () => {
    return (
    <Cursor>
        |
    </Cursor>
)};

export default BlinkingCursor;

const blink = keyframes`
    0% { opacity: 1; }
    49% { opacity: 1; }
    50% { opacity: 0; }
    100% { opacity: 0; }
`;

const Cursor = styled.div`
    animation: ${blink} 0.5s infinite;
`;