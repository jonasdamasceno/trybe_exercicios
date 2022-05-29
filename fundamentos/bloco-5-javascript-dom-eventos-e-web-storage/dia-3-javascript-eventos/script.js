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
  let taskColor = 'rgb(238,238,238)';
  let cor = 'blue';

  clickBotaoFeriado.addEventListener('click', function() {
    for (let index = 0; index < diasDeFeriado.length; index += 1) {
      if (diasDeFeriado[index].style.taskColor === cor) {
        diasDeFeriado[index].style.taskColor = taskColor;
      } else {
        diasDeFeriado[index].style.taskColor = cor;
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

// Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
// Dica - Propriedade: event.target.

function mouseOver(){
  let dias = document.querySelector('#days');

  dias.addEventListener('mouseover', function(event){
    event.target.style.fontSize = '40px';
    event.target.style.fontWeigth = "500";

  })

};
function mouseOut(){
  let dias = document.querySelector('#days');
 
  dias.addEventListener('mouseout', function(event){
    event.target.style.fontSize = '20px';
    event.target.style.fontWeigth = "200";
  })
};
mouseOver();
mouseOut();

// Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".

function addAppointment(tasks){
  let appointment = document.querySelector('.my-tasks');
  let elementapponintment = document.createElement('span');

  elementapponintment.innerHTML = tasks;
  appointment.appendChild(elementapponintment);
};
addAppointment('limpar casa');

// Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task.
// O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".

function addCaption(color){
  let tasksConteiner = document.querySelector('.my-tasks');
  let elementTag = document.createElement('div');

  elementTag.className = 'task';
  elementTag.style.backgroundColor = color
  tasksConteiner.appendChild(elementTag);   
};
addCaption('orange');

// mplemente uma função que adiciona um evento que, ao clicar no elemento com a tag <div> referente a cor da sua tarefa, atribua a este elemento a classe task selected, ou seja, quando sua tarefa possuir a classe task selected, ela estará selecionada.
// Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task, ou seja, esta tarefa está deixando de ser uma tarefa selecionada.


function selectingTag(){
  let elementTag = document.querySelector('.task');
  let selectedTask = document.getElementsByClassName('taks selected');


  elementTag.addEventListener('click', function(event){
    if(selectedTask.length === 0){
      event.target.className = 'task selected'
    } else {
      event.target.className = 'task';
    }
  });
};
selectingTag();

// Implemente uma função que adiciona um evento que ao clicar em um dia do mês no calendário, atribua a este dia a cor da legenda da sua tarefa selecionada.
// Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119).

function setDayColor() {
  let selectedTask = document.getElementsByClassName('task selected');
  let days = document.querySelector('#days');
  let taskDiv = document.querySelector('.task');
  let taskColor = taskDiv.style.backgroundColor;
  
  days.addEventListener('click', function(event){
    let eventTargetColor = event.target.style.color;
    if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
      let color = selectedTask[0].style.backgroundColor;
      event.target.style.color = color;
    } else if (eventTargetColor === taskColor && selectedTask.length !== 0) {
      event.target.style.color = 'rgb(119,119,119)';
    }
  });
};

setDayColor();