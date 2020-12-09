(function stat(){
  let urlMain=`http://localhost:3000/tasks`;
let data = GetAll(urlMain).then(result => drawCharts(result));
})();

function drawCharts(result){
let length=result.length;
let allTasks=[];
let allTask=0;
let myTasks=[];
let myTask=0;
for(let k=1;k<=12;k++){
for(let i=0;i<length;i++){
  if (k===Number(result[i].term.slice(5, 7))){
    allTask++;
if(result[i].manID===Number(localStorage.personID)){
  myTask++;
};
};
};
allTasks.push(allTask);
myTasks.push(myTask);
allTask=0;
myTask=0;
};
new Chart(document.getElementById("line-chart"), {
  type: 'line',
  data: {
    labels: ["Январь","Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
    datasets: [{
        data: allTasks,
        label: "Общее число задач",
        borderColor: "#3e95cd",
        fill: false
      }, {
        data: myTasks,
        label: "Мои задачи",
        borderColor: "#8e5ea2",
        fill: false
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: 'Годовой график задач'
    }
  }
});

//за месяц

let pieMy=[0,0,0];
let pieAll=[0,0,0];
var date = new Date();
let month=date.getMonth();
month++;

for(let i=0;i<length;i++){ //перебор всех задач
  if (month===Number(result[i].term.slice(5, 7))){ //если месяц совпал
let subLength=result[i].subtasks.length;  //длина подзадач совпавшей задачи
let a=0,b=0;
for(let k=0;k<subLength;k++){  //перебор подзадач задачи
if(result[i].subtasks[k][1]==="true"){  //если она выполнена
a++;
}
else {  //иначе
  b++;
}
}
if(a===0){   //записываем в наш массив
  pieAll[2]++;
}
else if(b===0){
  pieAll[0]++;
}
else {
  pieAll[1]++;
}

if(result[i].manID===Number(localStorage.personID)){ //для нашего пользователя
  let aa=0,bb=0;
  for(let k=0;k<subLength;k++){  //перебор подзадач задачи
  if(result[i].subtasks[k][1]==="true"){  //если она выполнена
  aa++;
  }
  else {  //иначе
    bb++;
  }
  }
  if(a===0){
    pieMy[2]++;
  }
  else if(b===0){
    pieMy[0]++;
  }
  else {
    pieMy[1]++;
  }
};

};
};
new Chart(document.getElementById("pieChart1"), {
    type: 'pie',
    data: {
      labels: ["Новые", "В процессе", "Завершенные"],
      datasets: [{
        label: "задач",
        backgroundColor: ["#3e95cd", "#8e5ea2","#c45850"],
        data: pieAll
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Общая статистика за месяц'
      }
    }
});

new Chart(document.getElementById("pieChart2"), {
    type: 'pie',
    data: {
      labels: ["Новые", "В процессе", "Завершенные"],
      datasets: [{
        label: "задач",
        backgroundColor: ["#3e95cd", "#8e5ea2","#c45850"],
        data: pieMy
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Моя статистика за месяц'
      }
    }
});

//за год

let pieMyAll=[0,0,0];
let pieAllAll=[0,0,0];

for(let i=0;i<length;i++){ //перебор всех задач
let subLength=result[i].subtasks.length;  //длина подзадач совпавшей задачи
let a=0,b=0;
for(let k=0;k<subLength;k++){  //перебор подзадач задачи
if(result[i].subtasks[k][1]==="true"){  //если она выполнена
a++;
}
else {  //иначе
  b++;
}
}
if(a===0){   //записываем в наш массив
  pieAllAll[2]++;
}
else if(b===0){
  pieAllAll[0]++;
}
else {
  pieAllAll[1]++;
}

if(result[i].manID===Number(localStorage.personID)){ //для нашего пользователя
  let aa=0,bb=0;
  for(let k=0;k<subLength;k++){  //перебор подзадач задачи
  if(result[i].subtasks[k][1]==="true"){  //если она выполнена
  aa++;
  }
  else {  //иначе
    bb++;
  }
  }
  if(a===0){
    pieMyAll[2]++;
  }
  else if(b===0){
    pieMyAll[0]++;
  }
  else {
    pieMyAll[1]++;
  }
};
};
new Chart(document.getElementById("pieChart11"), {
    type: 'pie',
    data: {
      labels: ["Новые", "В процессе", "Завершенные"],
      datasets: [{
        label: "задач",
        backgroundColor: ["#3e95cd", "#8e5ea2","#c45850"],
        data: pieAllAll
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Общая статистика за год'
      }
    }
});

new Chart(document.getElementById("pieChart21"), {
    type: 'pie',
    data: {
      labels: ["Новые", "В процессе", "Завершенные"],
      datasets: [{
        label: "задач",
        backgroundColor: ["#3e95cd", "#8e5ea2","#c45850"],
        data: pieMyAll
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Моя статистика за год'
      }
    }
});

}
