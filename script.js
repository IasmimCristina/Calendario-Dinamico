
const currentDate = document.querySelector(".current-date"),
  daysTag = document.querySelector(".days"),
  prevNextButton = document.querySelectorAll(".icons span");



// Pegando a data, mês e ano atuais:
let date = new Date(),
  currentYear = date.getFullYear(),
  currentMonth = date.getMonth();


//Meses:
const monthsBrazil = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];




const showCalendar = () => {

  let firstDayMonth = new Date(currentYear, currentMonth, 1).getDay(),  //Baseado na ordem do dia de semana. 
    lastDateMonth = new Date(currentYear, currentMonth + 1, 0).getDate(), // Observação: se você não usar o +1, será feito o cálculo com o mês passado.  
    lastDayMonth = new Date(currentYear, currentMonth, lastDateMonth).getDay(), //Obtendo o último dia na semana do mês.
    lastDayLastMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  let liTag = "";

  //Linha superior.
  for (let i = firstDayMonth; i > 0; i--) {
    liTag += `<li class="inactive">${lastDayLastMonth - i + 1}</li>`; //Dias inativos do próximo mês.

  }

  // Números na tela:
  for (let i = 1; i <= lastDateMonth; i++) {
    let isToday = i === date.getDate() && currentMonth === new Date().getMonth()
      && currentYear === new Date().getFullYear() ? "active" : " ";

    liTag += `<li class=" ${isToday} ">${i}</li>`; //Faz com que todos os números do mês apareçam. 

  }

  //Linha inferior.
  for (let i = lastDayMonth; i < 6; i++) {
    liTag += `<li class="inactive">${i - lastDayMonth + 1}</li>`;

  }


  currentDate.innerText = `${monthsBrazil[currentMonth]} - ${currentYear}`;
  daysTag.innerHTML = liTag;


}
function prevNextChange() {

  prevNextButton.forEach(icon => {

    icon.addEventListener("click", () => {
      currentMonth = icon.id === "prev" ? currentMonth - 1 : currentMonth + 1;


      if (currentMonth < 0 || currentMonth > 11) {
        //As datas no calendário ainda funcionam, mas ainda se precisa atualizar os nomes na tela:
        date = new Date(currentYear, currentMonth);
        currentYear = date.getFullYear(); //Atualizando o ano.
        currentMonth = date.getMonth(); //Atualizando o mês.

      } else   date = new Date(); //Uma data nova será passada normalmente caso contrário.
      
      showCalendar();
    })
  })
}

showCalendar();
prevNextChange();

