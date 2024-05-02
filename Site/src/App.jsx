import './css/App.css'
import { useState, useEffect } from "react"
import YouTube from 'react-youtube'
import { Main, HeaderPrimary, SectionSecundary, AA, Small, Spanrow, BumpDev, SpanrowDiv, SectionTerciary, Contaty, InfosContaty, Statistics, DiscordForm, DivCard } from './css/App.ts'
import { Sugestions } from "./componentes/sugestions"
import emailSvg from './assets/email.svg';
import whatsappSvg from './assets/whatsapp.svg';
import locationSvg from './assets/location.svg';
import fenixPng from './assets/fenix.png';
import jvscriptSvg from './assets/js.svg';
import csharpSvg from './assets/csharp.svg';
import cssSvg from './assets/css.svg';
import reactSvg from './assets/react.svg';
import luaSvg from './assets/lua.svg';
import htmlSvg from './assets/html.svg';
import { pesquisa, config, ActiveSections } from './config.js'





function App() {
  const [sugestinos, setSugestinos] = useState([]);
  const Criadores = config.Criadores
  const handleContextMenu = (event) => {
    event.preventDefault();
  };

  const searchSugestions = async (value) => {
    try {
      const response = await pesquisa.get(`/get_sugestions?query=${value}`);
      setSugestinos(response.data);
      return;
    } catch (error) {
      console.error(error);
      return;
    }
  };



  useEffect(() => {
    searchSugestions("vmz")
  }, [])



  return (
    <div onContextMenu={handleContextMenu}>
      <Main>
        {!ActiveSections["HeaderPrimary"] ? (
          <HeaderPrimary>
            <div>
              <p>Olá
                <AA>{config ? config.DescriptionAA : ''}</AA>
                <span>{config ? config.Author : ''}</span>
              </p>
              <h1> {config ? config.DescriptionH1 : ''}</h1>
              <footer>
                <Spanrow>
                  <SpanrowDiv onClick={() => { window.open(config.contats.github, "blank") }}><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="37" width="37" xmlns="http://www.w3.org/2000/svg"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg></SpanrowDiv>
                  <SpanrowDiv onClick={() => { window.open(config.contats.discord, "blank") }}><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="43" width="43" xmlns="http://www.w3.org/2000/svg"><path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"></path></svg></SpanrowDiv>
                  <SpanrowDiv onClick={() => { window.open(config.contats.instagram, "blank") }}><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="40" width="40" xmlns="http://www.w3.org/2000/svg"><path d="M512 378.7c-73.4 0-133.3 59.9-133.3 133.3S438.6 645.3 512 645.3 645.3 585.4 645.3 512 585.4 378.7 512 378.7zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zM512 717.1c-113.5 0-205.1-91.6-205.1-205.1S398.5 306.9 512 306.9 717.1 398.5 717.1 512 625.5 717.1 512 717.1zm213.5-370.7c-26.5 0-47.9-21.4-47.9-47.9s21.4-47.9 47.9-47.9 47.9 21.4 47.9 47.9a47.84 47.84 0 0 1-47.9 47.9z"></path></svg></SpanrowDiv>
                </Spanrow>
                <Small>
                  <BumpDev>
                    {config ? config.DescriptionHeader : ''}
                  </BumpDev>
                </Small>
              </footer>
            </div>
            {/* <Scroll><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="15" width="15" xmlns="http://www.w3.org/2000/svg"><path d="M7.5.026C4.958.286 3 2.515 3 5.188V5.5h4.5V.026zm1 0V5.5H13v-.312C13 2.515 11.042.286 8.5.026zM13 6.5H3v4.313C3 13.658 5.22 16 8 16s5-2.342 5-5.188V6.5z"></path></svg> Deslize para ver mais</Scroll> */}
          </HeaderPrimary>
        ) : null}

        <Sugestions sugestinos={sugestinos} />
        {/* <sectionContainer  >
          <div className="sectionContainerContainer">

          </div>
        </sectionContainer> */}


        {/* {!ActiveSections["SectionTerciary"] ? (
          <SectionPrimary className='SectionPrimary' >
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                <defs>
                  <linearGradient id="GradientColor">
                    <stop offset="0%" stop-color="#e91e63" />
                    <stop offset="100%" stop-color="#673ab7" />
                  </linearGradient>
                </defs>
                <circle cx="80" cy="80" r="70" stroke-linecap="round" />
              </svg>
              <circle></circle>
              <div className='skill'>
                <div className='outer'>
                  <div className='inner'></div>
                </div>
              </div>
            </div>

          </SectionPrimary>
        ) : null} */}
        {!ActiveSections["SectionPrimary"] ? (
          <SectionSecundary className='sectionSecundary' >
            <div className='sectionVideo1'>
              <h2>Video Explicativo sobre nossos serviços</h2>
              <YouTube className='sectionVideo2' videoId={config.contats.idvideo} />
            </div>
            <div className='Sobre'>
              <div>
                <h2>Texto Explicativo sobre nossos serviços</h2>
                <span>Bem-vindo ao nosso serviço de scripts para Sua base fivem ! Antes de adquirir e utilizar nossos scripts, pedimos que você leia atentamente este termo para garantir uma experiência segura e satisfatória.<br /></span>
                <span><br />Uso Licenciado: Ao adquirir nossos scripts, você recebe uma licença de uso pessoal e não exclusiva. Isso significa que você tem permissão para utilizar os scripts em sua base fivem de acordo com as condições estabelecidas neste termo.<br /></span>
                <span><br />Propriedade Intelectual: Todos os scripts fornecidos são de propriedade exclusiva da nossa empresa. Você não tem permissão para redistribuir, vender, alugar, copiar ou modificar os scripts, total ou parcialmente, sem autorização prévia por escrito.
                  <br /></span>
                <span><br />Atualizações e Suporte: Nos esforçamos para fornecer atualizações regulares para nossos scripts, a fim de aprimorar a funcionalidade e corrigir eventuais problemas. No entanto, não podemos garantir um suporte 24/7. Faremos o possível para responder suas dúvidas e fornecer assistência dentro de um prazo razoável.<br /></span>
                <span><br />Responsabilidade do Usuário: Ao utilizar nossos scripts, você é responsável por garantir que eles sejam usados de acordo com as leis aplicáveis. Não nos responsabilizamos pelo uso indevido dos scripts ou por quaisquer consequências legais decorrentes de seu uso.<br /></span>
                <span><br /> Compatibilidade: Nossos scripts são projetados para serem compatíveis com a framework Vrpex . No entanto, não podemos garantir a compatibilidade com outras framework ou com outros mods ou plugins instalados em seu servidor. Recomendamos que você faça backup de seus arquivos antes de instalar qualquer script. <br /></span>
              </div>
            </div>
          </SectionSecundary>
        ) : null}

        {!ActiveSections["SectionTerciary"] ? (
          <SectionTerciary >
            <div className='Experiency'></div>
            <Contaty className='Contaty'>
              <h2>CONTATO</h2>
              <div>
                <img src={whatsappSvg} alt='whatsapp' />
                <InfosContaty>
                  <span>{config.contats.phone}</span>
                </InfosContaty>
              </div>
              <div>
                <img src={emailSvg} alt='email' />
                <InfosContaty>
                  <span>{config.contats.email}</span>
                </InfosContaty>
              </div>
              <div>
                <img src={locationSvg} alt='location' />
                <InfosContaty>
                  <span>{config.contats.location}</span>
                </InfosContaty>
              </div>
            </Contaty>
            <Statistics className='statistics' id="section" >
              <h2>SKILLS</h2>
              <div className='progress'>
                <div className='reg'>
                  <div className='icon'>
                    <img src={htmlSvg} alt='location' />
                  </div>
                  <div className='wrapper'>
                    <div className='dJZeAq' style={{ width: `${config ? config.skills.statisticsHTML : 100}%` }}></div>
                  </div>
                </div>
                <div className='reg'>
                  <div className='icon'>
                    <img src={jvscriptSvg} alt='location' />
                  </div>
                  <div className='wrapper'>
                    <div className='dJZeAq' style={{ width: `${config ? config.skills.statisticsJS : 100}%` }}></div>
                  </div>
                </div>
                <div className='reg'>
                  <div className='icon'>
                    <img src={csharpSvg} alt='location' />
                  </div>
                  <div className='wrapper'>
                    <div className='dJZeAq' style={{ width: `${config ? config.skills.statisticsSCHARP : 100}%` }}></div>
                  </div>
                </div>
                <div className='reg'>
                  <div className='icon'>
                    <img src={cssSvg} alt='location' />
                  </div>
                  <div className='wrapper'>
                    <div className='dJZeAq' style={{ width: `${config ? config.skills.statisticsCSS : 100}%` }}></div>
                  </div>
                </div>
                <div className='reg'>
                  <div className='icon'>
                    <img src={reactSvg} alt='location' />
                  </div>
                  <div className='wrapper'>
                    <div className='dJZeAq' style={{ width: `${config ? config.skills.statisticsREACT : 100}%` }}></div>
                  </div>
                </div>
                <div className='reg'>
                  <div className='icon'>
                    <img src={luaSvg} alt='location' />
                  </div>
                  <div className='wrapper'>
                    <div className='dJZeAq' style={{ width: `${config ? config.skills.statisticsLUA : 100}%` }}></div>
                  </div>
                </div>
              </div>
            </Statistics>
            <DiscordForm className='Form'>
              <h2>CRIADORES</h2>
              <div>
                {Criadores.map((identify, index) => (
                  <div key={index}>
                    <img src={identify.AvatarAuthor ? identify.AvatarAuthor : ''} alt='logo' />
                    <span>{identify ? identify.Nome : ''}</span>
                  </div>
                ))}
              </div>
              {/* <button className="button">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 0.296997C5.37 0.296997 0 5.67 0 12.297C0 17.6 3.438 22.097 8.205 23.682C8.805 23.795 9.025 23.424 9.025 23.105C9.025 22.82 9.015 22.065 9.01 21.065C5.672 21.789 4.968 19.455 4.968 19.455C4.422 18.07 3.633 17.7 3.633 17.7C2.546 16.956 3.717 16.971 3.717 16.971C4.922 17.055 5.555 18.207 5.555 18.207C6.625 20.042 8.364 19.512 9.05 19.205C9.158 18.429 9.467 17.9 9.81 17.6C7.145 17.3 4.344 16.268 4.344 11.67C4.344 10.36 4.809 9.29 5.579 8.45C5.444 8.147 5.039 6.927 5.684 5.274C5.684 5.274 6.689 4.952 8.984 6.504C9.944 6.237 10.964 6.105 11.984 6.099C13.004 6.105 14.024 6.237 14.984 6.504C17.264 4.952 18.269 5.274 18.269 5.274C18.914 6.927 18.509 8.147 18.389 8.45C19.154 9.29 19.619 10.36 19.619 11.67C19.619 16.28 16.814 17.295 14.144 17.59C14.564 17.95 14.954 18.686 14.954 19.81C14.954 21.416 14.939 22.706 14.939 23.096C14.939 23.411 15.149 23.786 15.764 23.666C20.565 22.092 24 17.592 24 12.297C24 5.67 18.627 0.296997 12 0.296997Z" fill="white"></path>
            </svg>
            <p className="text">Click me</p>
          </button> */}




            </DiscordForm>
            <DivCard className="card" style={{ color: 'white', width: "18rem" }}>
              <img className="card-img-top" src={fenixPng} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Fenix Development</h5>
                <p className="card-text">Todos os direitos reservados.<br /> <a style={{ color: 'red' }}>©copyright</a> Production By Fênix Development</p>
              </div>
            </DivCard>
          </SectionTerciary>
        ) : null}
      </Main>
    </div>
  )
}

export default App
