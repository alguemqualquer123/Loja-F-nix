import styled from "styled-components";



export const DivGerenciamento = styled.div`
position: fixed;
display: flex;
width: 100vw;
height: 100%;
justify-content: center;
align-items: center;
top: 0;
color: white;
font-family: 'Outfit';
background-color: #000;
z-index: 9;
& .TokensPage {
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    width: 100vw;
    bottom: 0;
    height: 100%;
    justify-content: center;
    align-items: center;
    &::-webkit-scrollbar {
        display: none;
    } 
}


& .TokensPage .ListTokens {
    position: relative;
    display: grid;
    grid-template-columns: repeat(2, auto);
    height: 50rem;
    left: 15%;
    justify-content: center;
    bottom: 1rem;
    right: 69rem;
    color: black;
    
    
    & .Itens {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 22rem;
        height: 22rem;
        margin-top: 2rem;
        color: black;
        
        
        
        .card {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 10px;
            width: 14rem;
            height: 20rem;
            border-radius: 20px;
            background: #e8e8e8;
            transition: 0.4s;
            background: linear-gradient(#212121, #212121) padding-box, linear-gradient(145deg, transparent 35%,#e81cff, #40c9ff) border-box;
            border: 2px solid transparent;
            animation: gradient 1s ease infinite;
        }
        .card:hover {
            translate: 0 -10px;
        }
        @keyframes gradient {
            0% {
                background-position: 0% 50%;
            }
            
            50% {
                background-position: 100% 50%;
            }
            
            100% {
                background-position: 0% 50%;
            }
        }
        
        .card-title {
            font-size: 18px;
            font-weight: 600;
            color: yellow;
            margin: 15px 0 0 10px;
        }
        
        .card-image {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            left: 0%;
            width: 5rem;
            min-height: 5rem;
            background-color: rgba(0,0,0,0.7);
            border-radius: 15px;
            /* box-shadow: inset 8px 8px 10px #c3c3c3, inset -8px -8px 10px #cfcfcf; */
        }
        
        .card-body {
            margin: 13px 0 0 10px;
            color: white;
            /* color: rgb(31, 31, 31); */
            font-size: 15px;
        }
        
        .footer {
            position: relative;
            width: 100%;
            float: right;
            margin: 28px 0 0 18px;
            font-size: 13px;
            color: white;
        }
        
        .by-name {
            position: fixed;
            width: 100%;
            font-family: 'Outfit';
            font-weight: 400;
        }
        &:hover{
            transform: scale(1.06);
        }
        &:active{
            & .bg {
                /* background: rgba(0, 0, 0, .15) */
            }
            & .blob {
                background: blue 
            }
        }
        
        
        & a {
            color: black;
        }
        & img {
            margin: 1rem;
            width: 20px;
        }
    }
    &   .card {
        position: relative;
        display: flex;
        width: 80%;
        height: 100%;
        margin-left: 1rem;
        border-radius: 14px;
        z-index: 1111;
        overflow: hidden;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    
    & .bg {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        position: absolute;
        top: 5px;
        left: 5px;
        width: 95%;
        height: 100%;
        z-index: 2;
        background: rgba(255, 255, 255, .95);
        backdrop-filter: blur(24px);
        border-radius: 10px;
        overflow: hidden;
        outline: 2px solid white;
        
        
        & a {
            color: black;
        }
        & img {
            margin: 1rem;
            width: 20px;
        }
    }
    
    & .blob {
        position: absolute;
        z-index: 1;
        top: 50%;
        left: 50%;
        width: 150px;
        height: 150px;
        border-radius: 50%;
        background-color: #ff0000;
        opacity: 1;
        filter: blur(12px);
        animation: blob-bounce 2s infinite ease;
    }
    
    @keyframes blob-bounce {
        0% {
            transform: translate(-100%, -100%) translate3d(0, 0, 0);
        }
        
        25% {
            transform: translate(-100%, -100%) translate3d(100%, 0, 0);
        }
        
        50% {
            transform: translate(-100%, -100%) translate3d(100%, 100%, 0);
        }
        
        75% {
            transform: translate(-100%, -100%) translate3d(0, 100%, 0);
        }
        
        100% {
            transform: translate(-100%, -100%) translate3d(0, 0, 0);
        }
    }
    
} 

@media screen and (max-width: 480px) {
    left: 0;
    top: 0;
}

@media screen and (min-width: 481px) and (max-width: 720px) {
    height: 72vw;
}

@media screen and (min-width: 721px) and (max-width: 768px) {
    height: 70vw;
}

@media screen and (min-width: 769px) and (max-width: 900px) {
    height: 55.2vw;
}

@media screen and (min-width: 901px) and (max-width: 1080px) {
    height: 56vw;
}
`;


export const EditingToken = styled.div`
position: relative;
display: flex;
justify-content: center;
align-items: center;
color: white;
font-family: 'Outfit';
border-radius: .5rem;
margin: 1rem;
width: 90%;
.form-row {
    position: relative;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, auto);
    padding: .5rem;
    margin-top: .5rem;
    margin: .5rem;
}
.form-group{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin-bottom: 1rem;
}
.form-group input {
    display: flex;
    padding: .2rem;
    border-radius: .5rem;
    outline: 0;
    position: relative;
    margin-left: 1rem;
    margin: .5rem;
}
.dropdown-menu{
    display: flex;
    flex-direction: row;
    position: relative;
    justify-content: center;
    align-items: center;
    & #editar{
        display: flex;
        position: relative;
        width: 5rem;
        justify-content: center;
        background-color: blue;
        border-radius: .2rem;
    }
    & #salvar{
        display: flex;
        position: relative;
        width: 5rem;
        justify-content: center;
        background-color: green;
        border-radius: .2rem;
    }
    & #deletar{
        display: flex;
        position: relative;
        width: 5rem;
        justify-content: center;
        background-color: red;
        border-radius: .2rem;
    }
    & #descartar{
        display: flex;
        position: relative;
        width: 5rem;
        justify-content: center;
        background-color: red;
        border-radius: .2rem;
    }
    & .dropdown-item {
        margin: 1rem;
        color: white;
        &:hover{
            color: black;
        }
    }
}
form {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 100%;
    height: 100%;
    padding: 20px;
    border-radius: 20px;
    position: relative;
    background-color: #1a1a1a;
    color: #fff;
    border: 1px solid #333;
}

`;
export const CardClient = styled.div`
position: fixed;
display: flex;
flex-direction: column;
justify-content: center;
gap: 10px;
width: 35rem;
height: 20rem;
min-height: 20rem;
min-width: 20rem;
max-height: 20rem;
max-width: 25rem;
right: 10%;
border-radius: 10px;
position: relative;
color: #fff;
border: 1px solid #fff;

& .card-banner{
    position: relative;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    width: 100%;
    top: 0;
    z-index: 1;
    & img {
        position: absolute;
        width: 100%;
        height: 6rem;
    }
}
& .card-user{
    position: relative;
    display: flex;
    width: 100%;
    height: 20rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 2;
    top: 0rem;
    & img {
        position: relative;
        width: 6rem;
        border: 10px solid #1a1a1a;
        border-radius: 50rem;
        bottom: 2rem;
    }
}
.card {
    position: relative;
    display: flex;
    flex-direction: column;
}

`;