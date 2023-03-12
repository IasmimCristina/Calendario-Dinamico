import { buttonLight, rootElement } from './documentTags.js';
import { darkTheme, lightTheme } from './themes.js';


// Mudar o tema:
function changeTheme(theme) {

  for (let [property, value] of Object.entries(theme)) {
    changeProperty(property, value);
  }


}

//Função que muda o estilos das variáveis CSS:
function changeProperty(property, value) {
  rootElement.style.setProperty(property, value);
}

//Função que define o estilo inicial caso o local storage esteja vazio:
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



//Função do botão que troca o modo escuro/claro:
export function toggleLightSwitch() {

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



  })
}
