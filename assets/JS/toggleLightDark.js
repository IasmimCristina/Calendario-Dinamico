import { buttonLight, rootElement } from './documentTags.js';
import { darkTheme, lightTheme } from './themes.js';


function changeTheme(theme) {

  for (let [property, value] of Object.entries(theme)) {
    changeProperty(property, value);
  }  
  // TO DO: estilizar footer e visualiza ro vídeo do relógio!

}

function changeProperty(property, value) {
  rootElement.style.setProperty(property, value);
}

export function initialThemeSwitcher() {


  if (localStorage.getItem("PageTheme")) {
    let currentInitialTheme = localStorage.getItem("PageTheme");
    if (currentInitialTheme == "light") {
      buttonLight.innerHTML = 'light_mode';
      changeTheme(lightTheme);
    } else {
      buttonLight.innerHTML = 'mode_night';
      changeTheme(darkTheme);
    }
  } else {
    localStorage.setItem("PageTheme", "light")
    buttonLight.innerHTML = 'light_mode';
    changeTheme(lightTheme);
  }

}




export function toggleLightSwitch() {
  //   let currentTheme = JSON.parse(localStorage.getItem("PageTheme"));
  //   if (currentTheme == lightTheme) {
  // alert("Está no tema claro!");
  //   } else if (currentTheme == darkTheme) {
  //     alert("Está no tema escuro!")

  //   } else {
  //     alert("Algum erro ocorreu!");
  //   }
  // localStorage.setItem('PageTheme', "light");
  let currentTheme = localStorage.getItem("PageTheme");
  console.log(currentTheme)
  buttonLight.addEventListener('click', function () {
    if (currentTheme == "dark") {
      buttonLight.innerHTML = 'light_mode';
      changeTheme(lightTheme);
      localStorage.setItem('PageTheme', "light");
      currentTheme = localStorage.getItem("PageTheme");

    } else {
      buttonLight.innerHTML = 'mode_night';
      changeTheme(darkTheme);
      localStorage.setItem('PageTheme', "dark");
      currentTheme = localStorage.getItem("PageTheme");

    }



    // buttonLight.innerHTML == 'mode_night' ? buttonLight.innerHTML = 'light_mode' && changeTheme(lightTheme) : buttonLight.innerHTML = 'mode_night' && changeTheme(darkTheme);

  })
}

// if (buttonLight.innerHTML == 'mode_night') {
//   buttonLight.innerHTML = 'light_mode';
//   changeTheme(lightTheme);
// } else {
//   buttonLight.innerHTML = 'mode_night';
//   changeTheme(darkTheme);
// }