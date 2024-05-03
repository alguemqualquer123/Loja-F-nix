import styled from 'styled-components';


export const DivPainel = styled.div`
position: relative;
width: 100vw;
height: 100vh;
background-color: rgb(0 0 0 / 14%);
/* background-color: rgba(255, 255, 255,0.9); */


& .Buttons-NavBar{
    display: flex;
    position: fixed;
    top: 4.5rem;
    & button {
        background-color: #000;
        margin-left: 1rem;
        &:hover{
            border: none;
        }
        &:active{
            border: none;
        }
    }
}


`;

export const MenuOptions = styled.div`
position: absolute;
display: flex;
width: 15rem;
height: 100%;
background-color: rgb(255, 255, 255);
border: 5px solid black;
font-family: 'Outfit';
/* box-shadow: #000000 0px 0px 10px 1px ; */
z-index: 10;
.Buttons {
    position: relative;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 10rem;
    top: 4.5rem;
    color: black;
    font-size: 12px;
    z-index: 199999999999; 
    
    & select{
        position: relative;
        width: 100%;
        display: flex;
        top: 0;
        background-color: linear;
        padding: 14px;
        margin: 8px 0 0 0;
        font-size: 13px;
        font-weight: 600;
        border-radius: 0 10px 0 10px;
        cursor: pointer;
        border: 5px solid rgba(187, 187, 187, 0.164);
        color: white;
        transition: .3s ease;
    }
    & select option {
        position: relative;
        display: flex;
        border-radius: 0 10px 0 10px;
        cursor: pointer;
        margin-top: 1rem;
    }
}
& .NavButtons {
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    width: 90%;
    background: white;
    color: black;
    left: 0;
    margin-top: 1rem;
    border-radius: .3rem;
    height: 3rem;
    &:hover {
        transform: scale(1.02);
        color: red;
    }
    &:active {
        transform: scale(1.05);
        color: black;
    }
}





& #ButtonClose {
    
a {
    border: none;
    background: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
    font-family: inherit;
}
.menu__icon {
    width: 28px;
    height: 28px;
    padding: 3px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    transform: rotate(90deg)
}

.menu__icon span {
    width: 100%;
    height: 0.125rem;
    border-radius: 0.125rem;
    background-color: rgb(0, 122, 255);
    box-shadow: 0 .5px 2px 0 hsla(0, 0%, 0%, .2);
    transition: transform .4s, background-color .4s, width .4s, opacity .4s;
}

.menu__icon span:nth-child(2) {
    width: 60%;
}
}
`;

export const OpenDivMenu = styled.div`

position: absolute;



/* <reset-style> ============================ */
a {
    border: none;
    background: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
    font-family: inherit;
}
/* ============================ */
/* <style for bg> ======== */
.background {
    border-radius: 16px;
    border: 1px solid #1a1a1a;
    background: rgba(74, 74, 74, 0.39);
    mix-blend-mode: luminosity;
    box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.20);
    backdrop-filter: blur(15px);
    width: 65px;
    height: 65px;
    display: flex;
    justify-content: center;
    align-items: center;
}

/* <style for menu__icon> ======== */
.menu__icon {
    width: 28px;
    height: 28px;
    padding: 3px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    transform: rotate(0deg)
}

.menu__icon span {
    width: 100%;
    height: 0.125rem;
    border-radius: 0.125rem;
    background-color: rgb(0, 122, 255);
    box-shadow: 0 .5px 2px 0 hsla(0, 0%, 0%, .2);
    transition: transform .4s, background-color .4s, width .4s, opacity .4s;
}

.menu__icon span:nth-child(2) {
    width: 60%;
}
`;