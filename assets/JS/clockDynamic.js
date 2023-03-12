import { hours, minutes, seconds } from './documentTags.js';


//Função que atualiza o relógio:
export function clockDynamism() {

  setInterval(function time() {


    let dateToday = new Date();
    let hr = dateToday.getHours(),
      min = dateToday.getMinutes(),
      sec = dateToday.getSeconds();

    //Adição do zero ao lado esquerdo:
    if (hr < 10) hr = '0' + hr;
    if (min < 10) min = '0' + min;
    if (sec < 10) sec = '0' + sec;

    //Colocação do tempo do documento HTML:
    hours.textContent = hr;
    minutes.textContent = min;
    seconds.textContent = sec;
  })

}
