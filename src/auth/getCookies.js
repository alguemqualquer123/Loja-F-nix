function getCookie(cookieName) {
  const cookies = document.cookie.split(";");
  var decodeCookies;
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith(cookieName + "=")) {
      return decodeURIComponent(cookie.substring(cookieName.length + 1));
    }
  }
  return null;
}


function clearUserData() {
  document.cookie = "user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  localStorage.removeItem("user");
}


let data = JSON.parse(getCookie("user"));

let user = null;
if (data) {
  user = {
    ...data,
    avatar: `https://cdn.discordapp.com/avatars/${data.id ? data.id : ''}/${data.avatar ? data.avatar : ''}`,
    banner: `https://cdn.discordapp.com/banners/${data.id ? data.id : ''}/${data.banner ? data.banner : ''}`
  };
}
let inactivityTimer;

function resetInactivityTimer() {
  clearTimeout(inactivityTimer);
  inactivityTimer = setTimeout(clearUserData, 5 * 60 * 1000); // 5 minutos em milissegundos
}

document.addEventListener("mousemove", resetInactivityTimer);
resetInactivityTimer();
export { user };





// function getCookie(cookieName) {
//   const cookies = document.cookie.split(";");
//   for (let i = 0; i < cookies.length; i++) {
//     const cookie = cookies[i].trim();
//     if (cookie.startsWith(cookieName + "=")) {
//       return decodeURIComponent(cookie.substring(cookieName.length + 1));
//     }
//   }
//   return null;
// }
// let data = JSON.parse(getCookie("user"));
// export const user = { ...data, avatar: `https://cdn.discordapp.com/avatars/${data.id}/${data.avatar}.png`, banner: `https://cdn.discordapp.com/banners/${data.id}/${data.banner}.png` }
