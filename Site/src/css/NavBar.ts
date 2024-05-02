import styled from "styled-components";

export const DivNav = styled.nav`
    position: relative;
    top: 0;
    z-index: 999999999999;
    width: 100%;
    height: 9%;
    & #buttonsHover a:hover{
        transform: scale(1.01)
    }
`;
export const Nav = styled.nav`
    display: flex;
    position: fixed;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    background-color: #1b0707;
    color: white;
    z-index: 1000;
    top: 0;
    & .dropdown-button {
        position: relative;
        background-color: transparent;
        border: transparent;
        bottom: 0rem;
    }
    & .dropdown-button:active {
        border: transparent;
        background-color: black
    }
    & .title {
        position: relative;
        flex-direction: row;
        width: 19rem;
        margin-left: 2rem;
        display: flex;
        font-size: 1.5rem;
        margin: 1rem;
        font-weight: bold;
        text-decoration: none;
        color: white;
        & p:hover{
            transform: scale(1.02)
        }
    }
    & .title img {
        width: 2rem;
        margin-right: 2rem;
    }
    active{
        background-color: #d81d1d;
    }
    & ul {
        display: flex;
    }
    & ul li {
        list-style: none; 
    }
    &  ul li a {
        display: block;
        text-decoration: none;
        color: white;
        padding: 0.5rem;
        margin: 0 0.5rem;
        border-radius: 0.5rem;
    }
    & ul li a:not(.active):hover {
        /* background-color:#bd0b0b ; */
        transform: scale(1.05)
    }
    & .menu {
        display: none;
        position: absolute;
        top: 0.75rem;
        right: 0.5rem;
        flex-direction: column;
        justify-content: space-between;
        width: 2.25rem;
        height: 2rem;
    }
    & .menu span {
        height: 0.4rem;
        width: 100%;
        background-color: #fff;
        border-radius: 0.2rem;
    }
    /* & p:hover, nav ul li a:hover {
        color: #bd0b0b;
    } */
    & .favcolor {
        display: flex;
        position: relative;
        justify-content: center;
        align-items: center;
        top: 0rem;
        background-color: transparent;
    }
& input {
    width: 2rem; 
    height: 2rem;
    border-radius: 50%;
    border: transparent;
    background-color: transparent;
    }



    @media (max-width: 480px) {
        & .menu {
            display: flex;
        }
        
        & {
            flex-direction: column;
            align-items: flex-start;
        }
        
        & ul {
            display: none;
            flex-direction: column;
            width: 100%;
            margin-bottom: 0.25rem;
        }
        
        & ul.open {
            display: flex;
        }
        
        & ul li {
            width: 100%;
            text-align: center;
        }
        
        & ul li a {
            margin: 0.2rem 0.5rem;
        }
        &   p:hover, nav ul li a:hover {
            color: #bd0b0b;
        }
    }

`;
export const SelectMenus = styled.div`
    display: flex;  
    position: relative;
    width: 10rem;
    top: 100%;
    left: 94%;
    right: 0;
    background: black;
    color: white;
    z-index: 10000;
    background-color: #333;
    color: white;
    & ul {
        width: 100%;
        display: flex;
        flex-direction: column;
        list-style: none;
        padding: 0;
        margin: 0;
    }

    & li {
        padding: 10px;
        cursor: pointer;
    }
    /* &:hover {
            background-color: #ffff;
    } */
    
`;
export const SelectMenu = styled.div`
    display: flex;
    justify-content: flex-end; 
    align-items: flex-end;
    position: fixed;
    top: 4.2rem;
    right: 0rem;
    width: 15rem;
    height: auto;
    z-index: 1000;
    background-color: #000000;
    border-radius: 0px 0px 10px 10px;
    font-size: 15px;
    animation: 1s ease 0s 1 normal none running SelectOpen;
    & .nfDropDown {
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    & div div ul {
        position: relative;
        width: 100%;
        height: 100%;
    }
    & div div ul li {
        display: flex;
        position: relative;
        height: 3rem;
    }
    & .sub-menu-item {
        display: flex;
        position: relative;
        flex-direction: column;
        justify-content: center;
        align-items: center;   
        width: 15rem;
    }
    & .sub-menu-item span {
        display: flex;
        position: relative;
        top: 0;
        font-size: 8px;
        color: gray;
    }
    & div div ul li:hover {
        & a {
            color: red;
        }
    }
    & div div ul li a {
        position: relative;
        font-size: 0.9rem;
        color: white;
        /* &:hover {
            color: red;
        } */
    }
    
    @keyframes SelectOpen {
        0% {
            opacity: 0;
            transform: translateX(10rem);
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

export const UserLogged = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    position: relative;
    & img {
        width: 2rem;
        border: 2px solid #ccc;
        border-radius: 50%;
        margin-right: 1rem;
        margin-left: 5rem;
        &:hover{
            transform: scale(1.1)
        }
    }
    & span {
        color: white;
        font-weight: 500;
        margin-right: 1rem;
        &:hover{
            transform: scale(1.1)
        }
    }
`;