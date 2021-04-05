(function stat() {
    let url = `http://localhost:3000/tasks`;
    let data = GetAll(url).then(result => drawCharts(result));
})();

function drawCharts(result) {
    let length = result.length;
    let allTasks = [];
    let allTask = 0;
    for (let k = 1; k <= 12; k++) {
        for (let i = 0; i < length; i++) {
            if (k === Number(result[i].term.slice(5, 7))) {
                allTask++;
            };
        };
        allTasks.push(allTask);
        allTask = 0;
    };
    new Chart(document.getElementById("line-bar"), {
        type: 'bar',
        data: {
            labels: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
            datasets: [{
                data: allTasks,
                label: "Общее число задач за месяц",
                backgroundColor: "#6B5B95",
                fill: false
            }]
        },
        options: {
            responsive: true,
            title: {
                display: true,
                text: 'Годовой график задач'
            },
            scales: {
                yAxes: [{
                    ticks: {
                        stepSize: 1,
                        beginAtZero: true,
                    }
                }]
            },
        }
    });
    //самый загруженный/незагруженный месяц
    let hardM = allTasks.indexOf(Math.max.apply(null, allTasks));
    let easyM = allTasks.indexOf(Math.min.apply(null, allTasks));
    let arr = ["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"];
    let hard = document.getElementById('hard');
    hard.innerHTML += `<div>Самый загруженный месяц - ${arr[hardM]} (${allTasks[hardM]} задач(-и))</div>`
    let easy = document.getElementById('easy');
    easy.innerHTML += `<div>Самый разгруженный месяц - ${arr[easyM]} (${allTasks[easyM]} задач(-и))</div>`

    //самый занятый сотрудник
    let array = [];
    for (let m = 0; m < length; m++) {
        array.push(result[m].manID);
    };
    let ranks = array.reduce(function(totals, num) {
        if (!totals[num]) totals[num] = 0;
        totals[num]++;
        return totals;
    }, {});

    let max = 0;
    let maxId = 0;
    Object.keys(ranks).forEach(function(num) {
        if (ranks[num] > max) {
            max = ranks[num];
            maxId = num;
        }

    });
    let urlMain = `http://localhost:3000/main`;
    let data = GetAll(urlMain).then(data => main(data, max, maxId));

    //проценты
    let allT = [0, 0, 0];
    for (let i = 0; i < length; i++) { //перебор всех задач
        let subLength = result[i].subtasks.length; //длина подзадач совпавшей задачи
        let a = 0,
            b = 0;
        for (let k = 0; k < subLength; k++) { //перебор подзадач задачи
            if (result[i].subtasks[k][1] === "true") { //если она выполнена
                a++;
            } else { //иначе
                b++;
            }
        }
        if (a === 0) { //записываем в наш массив
            allT[2]++;
        } else if (b === 0) {
            allT[0]++;
        } else {
            allT[1]++;
        }
    }
    let percent = document.getElementById('percent');
    percent.innerHTML += `<div>
Процент выполненных задач - ${(allT[0]/(allT[0]+allT[1]+allT[2])*100).toFixed(2)}%,
 в процессе - ${(allT[1]/(allT[0]+allT[1]+allT[2])*100).toFixed(2)}%,
 новых - ${(allT[2]/(allT[0]+allT[1]+allT[2])*100).toFixed(2)}%</div>`

    //всего задач
    let tasksALL = document.getElementById('tasks');
    tasksALL.innerHTML += `<div>Всего задач - ${allT[0]+allT[1]+allT[2]}</div>`
}

function main(data, max, maxId) {
    let length = data.length;
    let name;
    for (let m = 0; m < length; m++) {
        if (data[m].personID === +maxId) {
            name = data[m].fullName;
        }
    };
    let people = document.getElementById('people');
    people.innerHTML += `<div>Самый загруженный сотрудник - ${name} (${max} задач(-а) в год)</div>`
}