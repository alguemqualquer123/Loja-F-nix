import styled from "styled-components";


export const DivContaty = styled.div`
position: absolute;
width: 100vw;
height: 100%;
background-color: rgba(0 ,0 , 0 , 0.8);
left: 0;
top: 0;

& .Contatos {
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 100rem;
    height: 50rem;
}

& .Contatos .Contatos-Itens {
    position: relative;
    display: grid;
    grid-template-columns: repeat(5, auto);
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;
    width: 120vw;
    height: 100%;
    
    &::-webkit-scrollbar {
        width: 5px;
        background: rgb(17, 17, 17) !important;
    }
    
    &::-webkit-scrollbar-thumb {
        width: 5px;
        background: rgba(247, 66, 66, 0.424);
        border-radius: 999px;
    }
    
    
    & .Itens{
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        left: 0%;
        flex-direction: column;
        width: 11rem;
        height: 11rem;
        margin-left: 5rem;
        &:hover{
            transform: scale(1.1)
        }
        img {
            width: 100px;
            border-radius: 50px;
        }
    }
    
}
iframe {
    .widgetHeader-1cAbIw{
        display: none;
    }
}

.iframe::-webkit-scrollbar {
    display: none;
} 





`;