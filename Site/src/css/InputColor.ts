import styled from "styled-components";


export const DivInputColor = styled.div`
    position: fixed !important;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 5rem;
    height: 5rem;
    top: 50%;
    bottom: 0;
    z-index: 1999999999999999;

    & div {
        width: 4rem;
        height: 10rem;
        overflow: hidden;
        &::-webkit-scrollbar {
            display: none;
        }
    }
`;