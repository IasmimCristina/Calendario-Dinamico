
const currentDate = document.querySelector(".current-date"),
  daysTag = document.querySelector(".days"),
  prevNextButton = document.querySelectorAll(".icons span");



// Pegando a data, mês e ano atuais:
let date = new Date();
currentYear = date.getFullYear();
currentMonth = date.getMonth();
let monthName;

//Meses:
const monthsBrazil = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];





const showCalendar = () => {

  let firstDayMonth = new Date(currentYear, currentMonth,   1).getDay(),  //Baseado na ordem do dia de semana. 
  lastDayMonth = new Date(currentYear, currentMonth + 1, 0).getDate(), // Observação: se você não usar o +1, será feito o cálculo com o mês passado.  
  lastDayLastMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  
  let liTag = "";

  //Linha superior.
  for (let i = firstDayMonth; i > 0; i--) {
    liTag += `<li class="inactive">${lastDayLastMonth - i + 1}</li>`;
    
  }

  // Números na tela:
  for (let i = 1; i <= lastDayMonth; i++) {
    liTag += `<li>${i}</li>`; //Faz com que todos os números do mês apareçam. 

  }

  //Linha inferior.


  
  currentDate.innerText = `${monthsBrazil[currentMonth]} - ${currentYear}`;
  daysTag.innerHTML = liTag;
 

}
function prevNextChange() {

  prevNextButton.forEach(icon => {

    icon.addEventListener("click", () => {
      currentMonth = icon.id === "prev" ? currentMonth - 1 : currentMonth + 1;
      showCalendar();
    })  
  })
}

showCalendar();
prevNextChange();

