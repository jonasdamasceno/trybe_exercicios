function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  /*O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days". Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.
Os dias devem estar contidos em uma tag <li>, e todos devem ter a classe day. Ex: <li class="day">3</li>
Os dias 24, 25 e 31 são feriados e, além da classe day, devem conter também a classe holiday. Ex: <li class="day holiday">24</li>
Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday. Ex: <li class="day friday">4</li>
Copiar*/
let dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];


function criarDias(){
  const criarOsDIasMes = document.querySelector('#days')
  for(let index = 0; index < dezDaysList.length; index += 1){
  let day = dezDaysList[index]
  let dayItem = document.createElement('li');
    if(day === 24 || day === 31){
      dayItem.className = 'day holiday';
      dayItem.innerText = day;
      criarOsDIasMes.appendChild(dayItem);
    }
    else if (day === 4 || day === 11 || day === 18){
      dayItem.className = 'day friday';
      dayItem.innerText = day;
      criarOsDIasMes.appendChild(dayItem);
    }
    else if(day === 25){
      dayItem.className = 'day holiday friday';
      dayItem.innerText = day;
      criarOsDIasMes.appendChild(dayItem);
    }
    else{
      dayItem.innerText = day;
      dayItem.className = 'day';
      criarOsDIasMes.appendChild(dayItem);
    }
  };  
};
criarDias();

//Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
//Adicione a este botão a ID "btn-holiday".
//Adicione este botão como filho/filha da tag <div> com classe "buttons-container".

//Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
//Adicione a este botão a ID "btn-holiday".
//Adicione este botão como filho/filha da tag <div> com classe "buttons-container".

function buttonHoliday(button){
  let buttonConteiner = document.querySelector('.buttons-container');
  let botaoFeriado = document.createElement('button');
  let botaoFeriadoId = 'btn-holiday';

  botaoFeriado.innerText = button;
  botaoFeriado.id = botaoFeriadoId;
  buttonConteiner.appendChild(botaoFeriado);
};
buttonHoliday('Feriado!!');

//Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday".
//É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)"



function destacarFeriados() {
  let clickBotaoFeriado = document.querySelector('#btn-holiday');
  let diasDeFeriado = document.querySelectorAll('.holiday')
  let backgroundColor = 'rgb(238,238,238)';
  let cor = 'blue';

  clickBotaoFeriado.addEventListener('click', function() {
    for (let index = 0; index < diasDeFeriado.length; index += 1) {
      if (diasDeFeriado[index].style.backgroundColor === cor) {
        diasDeFeriado[index].style.backgroundColor = backgroundColor;
      } else {
        diasDeFeriado[index].style.backgroundColor = cor;
      }
    }
  })
};

destacarFeriados();


function buttonFriday(friday){
  let buttonConteiner2 = document.querySelector('.buttons-container');
  let buttonFridays = document.createElement('button');
  let buttonFridaysid = 'btn-friday';

  buttonFridays.innerText = friday;
  buttonFridays.id = buttonFridaysid;
  buttonConteiner2.appendChild(buttonFridays);

};
buttonFriday('Sextou');

// Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.

function destacarSextas(){
  let clickBotaoSextou = document.querySelector('#btn-friday');
  let diasDeSexta = document.querySelectorAll('.friday')
  let backgroundColor = 'rgb(238,238,238)';
  let corSextou = 'rgb(0,100,0)';
  clickBotaoSextou.addEventListener('click', function(){
    for(let index = 0; index < diasDeSexta.length; index += 1){
      if(diasDeSexta[index].style.backgroundColor === corSextou){
        diasDeSexta[index].style.backgroundColor = backgroundColor;
      } else{
        diasDeSexta[index].style.backgroundColor = corSextou;
      }
    }
  })
};
destacarSextas();
