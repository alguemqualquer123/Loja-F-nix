import styled from "styled-components";

export const Nav = styled.nav`
    display: flex;
    position: fixed;
    width: 100%;
    height: 10vh;
    justify-content: space-between;
    align-items: center;
    /* background: rgb(0,0,0); */
    /* background: linear-gradient(0deg, rgba(0,0,0,0) 21%, rgba(0,0,0,0.6811099439775911) 100%); */
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