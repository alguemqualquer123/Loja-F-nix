import styled from "styled-components";



export const DivMusic = styled.div`
    display: flex;
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 999;
`;

export const Principaldiv = styled.div`
    display: flex;
    position: relative;
    margin: 2;
    justify-content: flex-end;
    align-items: flex-end;
    bottom: 0;
    width: 18rem;
    height: 20rem;
    background: black;
`;
export const ImputSearchDiv = styled.div`
    display: flex;
    position: absolute;
    float: left;
    justify-content: center;
    align-items: center;
    width: 18rem;
    height: 20rem;
    background: red;
    top: 0;
`;

export const inputDiv = styled.input`
    border-radius: 2px;
    width: 100%;
    background: transparent;
    max-width: 80rem;
`;
export const ArtistasDiv = styled.div`
   display: flex;
   flex-direction:column;
   justify-content: start;
   align-items: start;
   bottom: 12;
   max-height: 10rem;
   width: 18rem;
   height: 12rem;
   overflow-y: auto;
   overflow-x: auto;
`;