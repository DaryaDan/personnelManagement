const modal = document.getElementById('show');
(function eventTask() {
    modal.style.display = "block";
    let urlTasks = `http://localhost:3000/tasks`;
    let data = GetAll(urlTasks).then(result => {
        let k = result.length;
        let allManTasks = [];
        for (let i = 0; i < k; i++) {
            if (Number(localStorage.event) === result[i].manID) {
                allManTasks.push(result[i]);
            }
        }
        modalNew(allManTasks);
    });
})();

function modalNew(result) {

    let addArr = " ";
    let len = result.length;

    if (len === 0) {
        modal.innerHTML = `
  <div>
  <h1>У этого сотрудника пока нет задач</h1>
  </div>`
    } else {
        for (let u = 0; u < len; u++) {
            let lenSub = result[u].subtasks.length;
            let trueT = 0;
            let tasks = [];

            for (let s = 0; s < lenSub; s++) {
                if (result[u].subtasks[s][1] === "true") {
                    trueT++;
                    tasks += `<li class="liGreen">${result[u].subtasks[s][0]}</li>`
                } else {
                    tasks += `<li class="liRed">${result[u].subtasks[s][0]}</li>`
                }
            }
            let percent = " ";
            percent += ((Number(trueT) / lenSub) * 100).toFixed(2);


            addArr += `<li id=${result[u].taskID} class="string">
    <div class="resSub">${result[u].taskName} (${percent}%) - до ${result[u].term}</div>
    <div class="tasks" id="tasks${result[u].taskID}"><ul>${tasks}</ul></div></li>`
        }

        modal.innerHTML = `
  <div>
  <h1>Задачи</h1>
  <div class="prefix-tabs"><ol id="str">
${addArr}
</ol>
  </div>
  </div>`
    }
    const newT = document.getElementById('str');
    newT.addEventListener('click', (event) => {
        let idTask = "tasks" + event.path[1].id;
        const tas = document.getElementById(idTask);
        tas.style.display = "block";
    });
}