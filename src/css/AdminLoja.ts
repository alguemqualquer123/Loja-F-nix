import styled from "styled-components";

export const DivAdminLoja = styled.div`
position: absolute;
display: flex;
width: 100%;
height: 100%;
justify-content: center;
align-items: center;
margin: 0;
top: 0;
left: 0;
background-color: #000;
font-family: 'Outfit';


& .ListScripts {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    right: 0;
    height: 59rem;
    background-color: #171717;
    bottom: 0;
}

& .CardOptions{
    position: absolute;
    display: flex;
    justify-content: flex-start;
    width: 50%;
    height: 100%;
    left: 0;
    /* background-color: #fff; */
}
& .EditItens {
    position: absolute;
    display: flex;
    justify-content: flex-start;
    width: 50%;
    height: 95%;
    left: 50%;
    bottom: 0;
}
& .CardOptions .ListProducts{
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, auto);
    &::-webkit-scrollbar {
        display: none;
    } 
}

& .CardOptions #Itens-Product {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 17rem;
    height: 24rem;
    
    .card {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 10px;
        width: 15rem;
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
        color: #2e54a7;
        margin: 15px 0 0 10px;
    }
    
    .card-image {
        position: relative;
        left: 4%;
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
        position: relative;
        width: 100%;
        font-family: 'Outfit';
        color: yellow;
        font-weight: 400;
    }
}

& .ResumCart{
    position: relative;
    display: flex;
    justify-content: center;
    align-self: center;
    width: 30rem;
    height: 30rem;
    left: 30%;
    .form-container {
        width: 400px;
        background: linear-gradient(#212121, #212121) padding-box, linear-gradient(145deg, transparent 35%,#e81cff, #40c9ff) border-box;
        border: 2px solid transparent;
        padding: 32px 24px;
        font-size: 14px;
        font-family: inherit;
        color: white;
        display: flex;
        flex-direction: column;
        gap: 20px;
        box-sizing: border-box;
        border-radius: 16px;
        background-size: 200% 100%;
        animation: gradient 5s ease infinite;
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
    
    .form-container button:active {
        scale: 0.95;
    }
    
    .form-container .form .ClearInputs {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        bottom: 1rem;
        right: 12rem;
        & a {
            margin: .4rem
        }
    }
    .form-container .form {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    
    .form-container .form-group {
        display: flex;
        flex-direction: column;
        gap: 2px;
    }
    .form-container .form-group select {
        width: 100%;
        height: 2rem;
        background-color: #171717;
        border-radius: 5px;
        color: #fff;
        & option {
            border-radius: 5px;
            background-color: #171717;
        }
    }
    .form-container .form-group label {
        display: block;
        margin-bottom: 5px;
        color: #717171;
        font-weight: 600;
        font-size: 12px;
    }
    
    .Input-Image {
        position: relative;
        display: flex;
        /* width: 5rem; */
        /* height: 5rem; */
        top: 0;
        overflow: hidden;
        justify-content: center;
        align-items: center;
        max-width: 100%;
        max-height: 3rem;
        
        & img {
            background-repeat: no-repeat;
            width: 70px;
        }
    }
    #deleteImage {
        position: relative;
        display: flex;
        width: 10px;
        bottom: 1rem;
        right: 0;
        & img {
            width: 10px;
        }
        & img:hover{
            cursor: pointer;
            transform: scale(1.1)
        }
    }
    .form-container .form-group input {
        width: 100%;
        padding: 5px 16px;
        border-radius: 8px;
        color: #fff;
        font-family: 'Outfit';
        background-color: transparent;
        border: 1px solid #414141;
    }
    
    .form-container .form-group textarea {
        width: 100%;
        padding: 12px 16px;
        border-radius: 8px;
        resize: none;
        color: #fff;
        height: 50px;
        border: 1px solid #414141;
        background-color: transparent;
        font-family: inherit;
    }
    
    .form-container .form-group input::placeholder {
        opacity: 0.5;
    }
    
    .form-container .form-group input:focus {
        outline: none;
        border-color: #e81cff;
    }
    
    .form-container .form-group textarea:focus {
        outline: none;
        border-color: #e81cff;
    }
    
    .form-container .form-submit-btn {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        align-self: flex-start;
        font-family: inherit;
        color: #717171;
        font-weight: 600;
        width: 40%;
        background: #313131;
        border: 1px solid #414141;
        padding: 12px 16px;
        font-size: inherit;
        gap: 8px;
        margin-top: 8px;
        cursor: pointer;
        border-radius: 6px;
    }
    
    .form-container .form-submit-btn:hover {
        background-color: #fff;
        border-color: #fff;
    }
    
    
    
    
}
`;

export const NavButton = styled.button`
width: 4rem;
height: 2rem;
font-size: 10px;
margin-left: 1rem;
background-color: #fff;
border-radius: .1rem;
&:hover {
    color: black;
    background-color: rgba(255,255,255,0.5);        
}
&:active {
    border: none; 
}

`;