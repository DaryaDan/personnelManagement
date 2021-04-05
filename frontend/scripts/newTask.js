$("#Field4").live("keyup", function() { //для появления новых ячеек для подзадач
    if (!$(this).next('#Field4').length) $(this).after('<input id="Field4" name="Field4" type="text" class="field text fn input Field4" value="" size="8" tabindex="1">');
});


(function allPeoples() {
    let urlMain = `http://localhost:3000/main`;
    let data = GetAll(urlMain).then(result => options(result));
})();


function options(result) { //для выпадающего списка сотрудников
    let select = document.getElementById("Field0");
    let length = result.length;
    for (let i = 0; i < length; i++) {
        let opt = result[i].fullName;
        let el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        select.appendChild(el);
    }


    let a = document.getElementById('saveForm');
    a.onclick = function addData() {
        let url = `http://localhost:3000/tasks`;
        let logElem = document.querySelector(".stage1");

        let manID;
        for (let i = 0; i < length; i++) {
            if (result[i].fullName === document.getElementById('Field0').value) {
                manID = result[i].personID;
            }
        }

        let taskID = Math.floor(Math.random() * Math.floor(100));
        let taskName = document.getElementById('Field1').value;
        let description = document.getElementById('Field2').value;
        let term = document.getElementById('Field3').value;

        let subtasks = [];
        let change = [];
        document.querySelectorAll('.Field4').forEach(element => {
            change.push(element.value);
            change.push("false");
            subtasks.push(change);
            change = [];
        });
        var filtered = subtasks.filter(function(el) {
            return el[0] != "";
        });

        let radios = document.getElementsByName('typeT');
        let type;
        for (let i = 0; i < 3; i++) {
            if (radios[i].checked) {
                type = radios[i].value;
            }
        }
        if (manID.length !== 0 && taskName.length !== 0 && description.length !== 0 && term.length !== 0 && filtered.length !== 0) {
            const body = {
                manID: `${manID}`,
                taskID: `${taskID}`,
                taskName: `${taskName}`,
                description: `${description}`,
                term: `${term}`,
                subtasks: filtered,
                type: `${type}`
            };
            let dataAll = AddOne(url, body).then(result => console.log(result));
            logElem.textContent = "Успешно";
        } else {
            logElem.textContent = "Ошибка";
        }
    };
}