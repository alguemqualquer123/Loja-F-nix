import styled from 'styled-components';


export const DivDaganddrop = styled.div`
    position: fixed;
    width: 100vw;
    height: 100%;
    top: 0;
    background-color: rgba(0,0,0,0.5);



& {
    .invisible {
        display: none;
    }
    .enter{
        border: dashed 2px #bbb;
    }
}

`;