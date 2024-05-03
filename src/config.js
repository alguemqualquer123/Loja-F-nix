import axios from 'axios';

export const pesquisa = axios.create({
  baseURL: 'http://fenixdevelopment.com.br:3001/',
  timeout: 10000,
  headers: {'X-Custom-Header': 'foobar'}
});
export const api = axios.create({
  baseURL: 'http://localhost:6969',
  timeout: 10000,
  headers: {'X-Custom-Header': 'foobar'}
});


export const buttonsEvent = [
  {
    text: 'CLICK',
    href: 'http://youtube.com'
  },
  {
    text: 'AREA CLIENTES',
    href: 'http://youtube.com/'
  },
];


export const Itens = [
  {
    Id: 1,
    Name: 'Songfy',
    Type: 'Mensal',
    Logo: './../public/planeta.png',
    Infos: {}
  }
]



export const config = {
  copyright: '©copyright Production By Fênix Development',
  DescriptionHeader: 'Desenvolvedor Front-End e Back-End, experiência com Javascript , Typescript , Lua , C# , PHP , NodeJs .',
  DescriptionH1: 'Desenvolvedor',
  DescriptionAA: '  Me Chamo  ',
  TilteNav: 'Fênix Development',
  Author: 'Vini Santos',
  Criadores: [
    {
      AvatarAuthor: 'https://avatars.githubusercontent.com/u/109557202?v=4',
      Nome: '#srvinix',
    },
  ],
  Administradores: [
    {
      USERNAME: 'srvinix',
      ID: '530706233389350912',
    },
  ],
  WebhoockPostImages: 'https://discord.com/api/webhooks/1180850239960256522/qNpF9KzwMwIFGd4tRTE_WRcwmafvp30sFBhCEXnLdOen38K69yrgwMJnT3arXBW8kzqR',
  PainelOptions: [
    {
      title: 'Loja',
      description: 'Gerenciar Itens da loja',
      href: 'AdminLoja'
    },
    {
      title: 'Criar Token',
      description: 'Gerar novos tokens',
      href: 'NewToken'
    },
    {
      title: 'Criar Novo Item',
      description: 'Gerar novos itens',
      href: 'CreateItem'
    },
    {
      title: 'Gerenciar',
      description: 'Gerenciar Licenças',
      href: 'Gerenciamento'
    },
    {
      title: 'Restart Aplicação',
      description: "reiniciar Bot's",
      href: 'RestartAplication'
    },
  ],
  skills: {
    statisticsHTML: 45,
    statisticsCSS: 86,
    statisticsREACT: 95,
    statisticsSCHARP: 45,
    statisticsLUA: 80,
    statisticsJS: 90,
    statisticsTS: 75,
  },
  contats: {
    email: "danilovinicius1790@gmail.com",
    phone: "+55 (79) 981247689",
    location: "Aracaju / Sergipe",
    github: "https://github.com/srvinix",
    instagram: "https://instagram.com/vinix_santoos",
    discord: "https://discord.gg/CwQrSypj2T",
    idvideo: "EgBJmlPo8Xw"
  },
  authDiscord: "https://discord.com/oauth2/authorize?client_id=1091900395418308610&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A6969%2Fapi%2Fdiscord&scope=identify+email+guilds.join+guilds+connections",


}


export const sounds = {
  1: {
    id: 1,
    name: 'Nadson Ferinha 1',
    alt: 'Nadson Ferinha',
    image: 'https://i.ytimg.com/vi/j3yyiqz4kd0/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLCrbFlc2ho6V2vKBvfYGaTRgDK5mw',
    src: 'https://cdn.discordapp.com/attachments/1158135276334501978/1174231640172671007/SnapInsta.io-NADSON_O_FERINHA_2023_-_REPERTORIO_NOVO_-_MUSICAS_NOVAS_CD_NOVO_ATUALIZADO_NADSON_O_FERINHA_2024-128kbps.ogg',
  },
};

export const Cmusics = [
  {
    id: 1,
    name: 'Nadson Ferinha 1',
    alt: 'Nadson Ferinha',
    image_url: 'https://i.ytimg.com/vi/j3yyiqz4kd0/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLCrbFlc2ho6V2vKBvfYGaTRgDK5mw',
    src: 'https://cdn.discordapp.com/attachments/1158135276334501978/1174231640172671007/SnapInsta.io-NADSON_O_FERINHA_2023_-_REPERTORIO_NOVO_-_MUSICAS_NOVAS_CD_NOVO_ATUALIZADO_NADSON_O_FERINHA_2024-128kbps.ogg'
  },
  {
    id: 2,
    name: 'MaryJane VMZ',
    alt: 'vmz',
    image_url: 'https://i1.sndcdn.com/artworks-000486127707-a0vq6e-large.jpg',
    src: 'https://cdn.discordapp.com/attachments/1158135276334501978/1174312815239102544/Vmz-Mary_jane.mp3'
  },
  {
    id: 3,
    name: 'Longe De Casa',
    alt: 'vmz',
    image_url: 'https://i1.sndcdn.com/artworks-GCAWtQ2NxmM0Qzas-xl1AFw-large.jpg',
    src: 'https://cdn.discordapp.com/attachments/1158135276334501978/1174313091421450250/VMZ_-_Longe_de_Casa_.mp3'
  },
]
export const optionsLi = [
  { title: 'Área do cliente', description: 'Pagamentos & Suporte', href: '/Cliente' },
  { title: 'Membros', description: 'Ver Lista De Membros Do Servidor', href: '/Membros' },
]
export const optionsButtons = [
  { title: 'Home', href: '/' },
]



export const ActiveSections = {
  HeaderPrimary: false,
  SectionPrimary: true,
  SectionSecundary: true,
  SectionTerciary: true,
  InputColor: false  ,
}