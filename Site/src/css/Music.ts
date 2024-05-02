import styled from "styled-components";



export const DivMusic = styled.div`
    display: flex;
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 60000;
`;

export const Principaldiv = styled.div`
    display: flex;
    position: fixed;
    bottom: 0;
    right: 0;
    background-color: rgb(8,0,0, 1);
    left: .5rem;
    bottom: .5rem;
    z-index: 60000;
    width: 22rem;
    height: 25rem;
    border-radius: 1rem;
    animation: subir 1.5s ease ;

    @keyframes subir {
        0% {
            opacity: 0;
            transform: translateX(-10rem);
        }
        50% {
            opacity: 1;
            transform: translateX(0rem);
        }
        100% {
            opacity: 1;
            transform: translateX(0rem);
        }
    }
`;
export const DivCloseNui = styled.div`
    display: flex;
    position: absolute;
    justify-content: end;
    align-items: flex-end;
    left: 85%;
    top: 3%;
    z-index: 60000;
    & img{
        width: 20px; 
        height: 20px;
    }
    &:hover{
        transform: scale(1.3);
    }
`;
export const DivOpenNui = styled.div`
    display: flex;
    position: fixed;
    justify-content: end;
    align-items: flex-end;
    left: 1%;
    top: 91%;
    z-index: 60000;
    & img{
        width: 40px; 
        height: 40px;
    }
    &:hover{
        transform: scale(1.3);
    }
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

export const MusicList = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 20rem;
    top: 0;
    flex-direction: column;
    & div div {
        display: flex;
        align-items: center;
        justify-content: start;
        margin: 2rem;
        position: relative;
        flex-direction: row;
        width: 18rem;
        height: 4rem;
        right: 0rem;
    }
    & div div:hover{
        cursor: pointer;
        transform: scale(1.1);
    }
    & div::-webkit-scrollbar {
        display: none; 
    }
    & div div img {
        width: 30px;
        height: 30px;
        margin-right: 2.5rem; 
        border-radius: 50%;
    }
    & div div span {
        display: flex;
        float: left;
        color: white;
        font-weight: 900;
        font-size: 20px;
}
`; 

export const Controler = styled.div`
    position: absolute;
    display: flex;
    flex-direction: row;
    justify-content: center; align-items: center;
    bottom: 0;
    width: 100%;
    height: 5rem;
    /* background-color: #fff; */
    z-index: 2;
    & input {
        /* appearance: none;  */
        /* border: none; */
        /* outline: auto; */
    }
    & input::-webkit-slider-thumb {
        /* appearance: none; */
        width: 10rem;
    }
    & input::-moz-range-thumb {
        /* appearance: none; */
        width: 10rem;
    }

    & .InputVol{
        display: flex;
        position: fixed;
        width: 5rem;
        height: 1rem;
        left: 16.9rem;
        bottom: 2.5rem;
        transform: rotate(0deg);
    }

    & img {
        position: relative;
        width: 30px;
        cursor: pointer;
        width: 1rem;
        height: 1rem;
        margin: 1rem;
    }
    & img:hover {
        transform: scale(1.2)
    }
    & div input {
        display: flex;
        position: absolute;
        width: 4rem;
        height: .3rem;
        align-items: center;
        justify-content: center;
        right: -4.5rem;
    }
    & .MusicProgress{
        display: flex;
        position: absolute;
        width: 100%;
        height: 1rem;
        align-items: start;
        justify-content: start;
        bottom: 3.5rem;
        border-radius: 5px 5px 4px 5px;
        z-index: 50
    }

`;

