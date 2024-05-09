import axios from 'axios';
export const api = axios.create({
  baseURL: 'https://authdinamic.fenixdevelopment.com.br/',
  timeout: 5000,
  headers: {
    'X-Custom-Header': 'foobar',
    'Content-Type': 'aplication/json'
  }
});

export const authDiscord  = "https://discord.com/oauth2/authorize?client_id=1091900395418308610&response_type=code&redirect_uri=https%3A%2F%2Fauthdinamic.fenixdevelopment.com.br%2Fapi%2Fdiscord&scope=identify+connections+guilds+gdm.join+guilds.members.read+guilds.join+email"