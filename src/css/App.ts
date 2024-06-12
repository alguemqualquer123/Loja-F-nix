import styled from "styled-components";



// media queries //

// @media screen and (min-width: 2560px){}
// @media screen and (min-width: 1920px){}
// @media screen and (min-width: 1600px){}
// @media screen and (min-width: 1360px){}
// @media screen and (min-width: 1366px){}
// @media screen and (min-width: 1280px){}
// @media screen and (min-width: 1024px){}
// @media screen and (min-width: 800px){}

// media queries //


export const Copyright = styled.div`
display: flex;
position: relative;

& div {
   position: fixed;
   display: flex;
   justify-content: flex-end;
   align-items: flex-end;
   color: white;
   bottom: 0;
   right: 1rem;
   width: 20rem;
   height: 2rem;
   font-family: 'Outfit';
   font-weight: 500;
   font-size: .7rem;
   z-index: 50000;
}

`;
export const Main = styled.div`


`
export const Body = styled.body`
&::-webkit-scrollbar {
   display: none;
}      
`;

export const HeaderPrimary = styled.header`
font-family: "Signika Negative", sans-serif;
// background: radial-gradient(circle, rgb(0 0 0), rgb(15, 15, 15));
display: flex;
justify-content: center;
align-items: center;
place-items: center;
color: white;
position: absolute;
top: 0;

&  div{
   overflow: visible;
   display: flex;
   flex-direction: column;
   gap: 10px;
}

@media screen and (min-width: 2560px){
   height: 100vh;
   width: 100%;
   font-size: 1rem;
   font-weight: 300;
}
@media screen and (min-width: 1920px){
   height: 100vh;
   width: 100%;
   font-size: 1rem;
   font-weight: 300;
}
@media screen and (min-width: 1600px){
   height: 100vh;
   width: 100%;
   font-size: 1rem;
   font-weight: 300;
}
@media screen and (min-width: 1360px){
   height: 100vh;
   width: 100%;
   font-size: 1rem;
   font-weight: 300;
}
@media screen and (min-width: 1366px){
   height: 100vh;
   width: 100%;
   font-size: 1rem;
   font-weight: 300;
}
@media screen and (min-width: 1280px){
   height: 100vh;
   width: 100%;
   font-size: 1rem;
   font-weight: 300;
}
@media screen and (min-width: 1024px){
   height: 100vh;
   width: 100%;
   font-size: 1rem;
   font-weight: 300;
}
@media screen and (min-width: 800px){
   height: 100vh;
   width: 100%;
   font-size: 1rem;
   font-weight: 300;
}

& #row {
   &::-webkit-scrollbar {
      display: none;
   }
}
& #row div {
   transition: transform 0.3s ease-in-out; 
   overflow-y: hidden;
}

& #row div:hover {
   transform: scale(1.2);
   overflow-y: hidden;
   cursor: pointer;
}
& div p {
   animation: 2s ease 0s 1 normal none running ZtrcR;
   font-size: 20px;
}

& div p a {
   font-size: 17px;
   opacity: 0.7;
   font-weight: 500;
}
& div p span {
   font-size: 19px;
   opacity: 1;
   font-weight: 700;
}
& div h1 {
   line-height: 1;
   text-transform: uppercase;
   font-weight: 800;
   font-size: 100px;
   overflow: hidden;
   animation: 1s ease 0s 1 normal none running bWtKjB;
}
&  div footer {
   display: flex;
   gap: 50px;
   overflow: visible;
}
/* @media screen and (min-width: 1080px) {
   
   &  div{
      display: flex;
      justify-content: center;
      align-self: center;
      overflow: visible;
      flex-direction: column;
      gap: 10px;
   }
   & div h1 {
      display: flex;
      animation: 1s ease 0s 1 normal none running styles-bumpDev;
   }
   
   & div p {
      animation: 2s ease 0s 1 normal none running ZtrcR;
      font-size: 20px;
   }
   
   & div p a {
      font-size: 17px;
      opacity: 0.7;
      font-weight: 500;
   }
   & div p span {
      font-size: 19px;
      opacity: 1;
      font-weight: 700;
   }
   & div h1 {
      line-height: 1;
      text-transform: uppercase;
      font-weight: 800;
      font-size: 100px;
      overflow: hidden;
      animation: 1s ease 0s 1 normal none running bWtKjB;
   }
   &  div footer {
      display: flex;
      gap: 50px;
      overflow: visible;
   }
} */
`;
export const AA = styled.span`
color: red;
`;
export const Small = styled.small`
display: flex;
float: left;
flex-direction: column;
& span {
   display: flex;
   overflow: none;
   right: 42rem;
   width: 25rem;
   font-size: 2;
   font-weight: 500;
   animation: 1s ease 0s 1 normal none running styles-bumpDev;
}

@keyframes styles-bumpDev {
   0% {
      opacity: 0;
      transform: translateX(-100px);
   }
   100% {
      opacity: 1;
      transform: translateX(0px);
   }
}
`;
export const Spanrow = styled.span`
position: relative;
display: flex;
flex-direction: row;
float: left;
justify-content: center;
align-items: center;

&  div {
   display: flex;
   margin: .2rem;
}
&  #row div:hover {
   transform: scale(1.2);
   overflow-y: hidden;
   cursor: pointer;
}
`;

export const BumpDev = styled.span`
display: flex;
overflow: none;
right: 42rem;
width: 25rem;
font-size: 2;
font-weight: 500;
animation: 1s ease 0s 1 normal none running styles-bumpDev;

@keyframes styles-bumpDev {
   0% {
      opacity: 0;
      transform: translateX(-100px);
   }
   100% {
      opacity: 1;
      transform: translateX(0px);
   }
}
`
export const SpanrowDiv = styled.div`
& :hover {
   position: relative;
   transform: scale(1.05);
   cursor: pointer;
}
`
export const Scroll = styled.div`
position: absolute;
bottom: 50px;
left: 50px;
display: flex;
align-items: center;
font-family: Outfit;
flex-direction: row;
font-weight: 500;
text-transform: uppercase;
font-size: 12px;
opacity: 0.6;
`
export const SectionPrimary = styled.section`
width: 100vw;
height: 40vw;
background: #ffffff26;
& div {
   display: flex;
   position: relative;
   justify-content: center;
   align-self: center;
   width: 100vw;
   height: 30vw;
}
& div circle {
   fill: none;
   stroke: url(#GradientColor);
   stroke-width: 20px;
   stroke-dasharray: 450;
   stroke-dashoffset: 10;
   /* animation: anim 2s linear forwards; */
}
& svg {
   position: absolute;
   top: 0;
   left: 0;
}
/* @keyframes anim {
   100%{
      stroke-dashoffset: 99%;
   }
} */





/* & .skill {
   width: 16rem;
   height: 16rem;
   position: relative;
}
& .outer {
   width: 16rem;
   height: 16rem;
   border-radius: 50%;
   border: 1px solid red;
   padding: 20px;
   box-shadow: 6px 6px 10px -1px rgba(0,0,0,0.15), -6px -6px 10px -1px rgba(255,255,255,0.7)
}
& .inner {
   height: 120px;
   width: 120px;
   border-radius: 50%;
   box-shadow: inset 4px 4px 6px -1px rgba(0,0,0,0.2),inset -4px -4px 6px -1px rgba(255,255,255,0.7), -0.5px -0.5px 0px rgba(255,255,255,1),0.5px 0.5px 0px rgba(0,0,0,15),0px 12px 10px -10px rgba(0,0,0,0.05);
} */

`;
export const SectionSecundary = styled.div`
display: flex;
position: relative;
color: rgb(15, 15, 15);
align-items: center;
justify-content: flex-start;
overflow: hidden;
padding: 100px;
width: 120%;
height: 30rem;
right: 2rem;
// background: radial-gradient(circle, rgb(0,0, 1), rgb(15, 15, 15));
z-index: 999;
color: white;
font-family: Outfit;
font-weight: 900;
font-size: 20px;

& .sectionVideo1 {
   display: flex;
   position: relative;
   justify-content: flex-start;
   flex-direction: column;
   align-items: start;
   left: 0;
   bottom: 1rem;
}
& .sectionVideo2 {
   display: flex;
   position: relative;
   justify-content: flex-start;
   align-items: start;
   width: 100%;
   left: 0;
}
& h2 {
   display: flex;
   position: relative;
   justify-content: center;
   align-items: center;
}
& div span {
   color: white;
}
& div h2 {
   color: red;
}

& div::-webkit-scrollbar {
   display: none
}
& .Sobre {
   position: relative;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   width: 90%;
   height: 20rem;
   top: 50%;
   font-family: Outfit;  
   font-size: 8px; 
   font-weight: bold;
   
   &  h2 {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      
   }
   &  {
      position: relative;
      display: flex;
      overflow-y: auto; 
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 36rem;
      height: 20rem;
      margin: 5rem;
      top: 2rem;
      font-size: 10px; 
      margin-bottom: 10rem;
   }
}
& span {
   margin: 2rem;
   padding: 2rem;
}
& h1{
   width: 10rem;
   height: 4rem;
   color: white
}  
`;
export const VideoDemonstaTive = styled.div`

& .sectionVideo {
   position: relative;
   display: flex;
   justify-content: center;
   align-items: center;
   width: 100%;
   height: 100%;
   right: 5rem;
}
& div {
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   margin: 0;
   padding: 0;
   & h2 {
      position:  relative;
      color: white;
      font-family: Outfit;
      font-weight: 900;
      font-size: 20px;
      bottom: 10rem;
   }
   & h2::-webkit-scrollbar {
      display: none;
   }
}
`;
export const SectionTerciary = styled.div`
height: 20rem;
width: 100vw;
// background: radial-gradient(circle, rgb(2, 10, 10), rgb(15, 15, 15));
color: rgb(15, 15, 15);
display: flex;
float: left;
align-items: center;
flex-direction: row;
justify-content: space-between;
position: relative;
padding: 0px 2rem;
z-index: -2;
`

export const Contaty = styled.div`
& h2 {
   display: flex;
   align-items: center;
   justify-content: center;
   color: white;
}

& div {
   display: flex; 
   flex-direction: row;
   padding: .8rem;
   
}

& div img {
   position: relative;
   width: 0.9rem;
   color: white; 
   margin: 0.5rem;
}
`
export const InfosContaty = styled.div`
position: relative;
width: 18rem;
height: 3rem;
user-select: text;
background: rgba(255, 255, 255, 0.075);
color: white !important;
opacity: 100%;
padding: 4px 10px;
border-radius: 4px;
& span {
   font-size: 0.9rem;
   cursor: pointer;
}
`
export const Statistics = styled.div`
position: relative;
display: flex;
flex-direction: column;
height: 275px;
width: 55vw;
gap: 15px;
color: white;
justify-content: center;
align-items: center;

&  #section .title {
   display: flex;
   align-items: center;
   overflow: hidden;
   color: rgb(228, 228, 228);
   font-family: Outfit;
   font-weight: 700;
   font-size: 55px;
}
& .progress {
   display: grid;
   grid-template-columns: 1fr 1fr;
   gap: 20px;
   width: 600px;
}
&  .progress .reg {
   flex: 0 0 auto;
   display: flex;
   align-items: center;
   justify-content: space-between;
   color: #f74242;
   width: 260px;
}
& .progress .reg .icon {
   height: 50px;
   width: 50px;
   display: grid;
   place-items: center;
}
&  .progress .reg .wrapper {
   border: 2px solid #C70D0F;
   width: 200px;
   height: 22px;
   border-radius: 999px;
   padding: 4px;
}
&  .progress .reg .wrapper .dJZeAq {
   animation: 500ms ease 0s 1 normal none running dhZscn;
   width: 70%;
   height: 100%;
   background: #C70D0F;
   border-radius: 999px;
}
& h2 {
   display: flex;
   align-items: center;
   justify-content: center;
   color: white;
}

& .progress .reg img, .sectionTerciary .Form img {
   position: relative;
   width: 30px;
   margin: .5rem;
}
`
export const DiscordForm = styled.div`
position: relative;
display: flex;
width: 20vw;
height: 15rem;
max-height: 15rem;
justify-content: center;
flex-direction: column;
align-items: center;
color: white;
right: 5rem;
& div {
   display: grid;
   grid-template-columns:
   repeat(3, auto);
   justify-content: center;
   align-items: center;
   align-content: center; 
   width: 100%;
   height: 100%;
}
& div div {
   justify-content: center;
   align-items: center;
   overflow: auto;
   width: 8rem;
   height: 3rem;
}
& div div::-webkit-scrollbar {
   display: none
}
& h2 {
   position: relative;
   display: flex;
   justify-content: center;
   align-items: center;
   text-align: center;
   font-weight: 500;
   font-family: 'Outfit';
   font-size: 13px;
}
& img {
   width: 30px;
   border-radius: 5rem;
} 
&  span {
   padding: 1rem;
   right: 4rem;
   font-weight: bold;
   font-size: 1rem;
   color: white;
}

& {
   .button {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px 15px;
      gap: 10px;
      background-color: #181717;
      outline: 3px #181717 solid;
      outline-offset: -3px;
      border-radius: 5px;
      border: none;
      cursor: pointer;
      transition: 400ms;
      height: 4rem;
   }
   
   .button .text {
      color: white;
      font-weight: 700;
      font-size: 1em;
      transition: 400ms;
   }
   
   .button svg path {
      transition: 400ms;
   }
   
   .button:hover {
      background-color: transparent;
   }
   
   .button:hover .text {
      color: #181717;
   }
   
   .button:hover svg path {
      fill: #ffff;
   }
}





`
export const DivCard = styled.div`
position: relative;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 20rem;
height: 15rem;
& img {
   width: 5rem;
}
& .card-title,.card-text {
   position: relative;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
}
`
// export const Contaty = styled.div`

// `



export const sectionContainer = styled.section`
width: 100vw;
height: 40vw;
background: #ffffff26;
& div {
   display: flex;
   position: relative;
   justify-content: center;
   align-self: center;
   width: 100vw;
   height: 30vw;
}
`;