let ListDemo = [];
let List = [];

function calendarData(result, callback) {
    let length = result.length;
    let name;
    let time;
    let type;
    let typeColor;
    for (let i = 0; i < length; i++) {
        if (result[i].manID === Number(localStorage.personID)) {
            name = result[i].taskName;
            time = result[i].term;
            type = result[i].type;
            if (type === 'easy') {
                typeColor = 'DarkGreen';
            }
            if (type === 'medium') {
                typeColor = 'DarkOrange';
            }
            if (type === 'hard') {
                typeColor = 'red';
            }
            console.log(typeColor);
            ListDemo.push({ title: name, backgroundColor: typeColor, start: time })
        }
    }
    List = ListDemo;
    ListDemo = [];
    callback(List);
}

document.addEventListener('DOMContentLoaded', function() {
    let urlMain = `http://localhost:3000/tasks`;
    let data = GetAll(urlMain).then(result => calendarData(result, function() {

        var calendarEl = document.getElementById('calendar');
        var now = new Date();
        var calendar = new FullCalendar.Calendar(calendarEl, {
            editable: false,
            initialView: 'dayGridMonth',
            initialDate: now,
            headerToolbar: {
                left: 'prev,next',
                center: 'title',
                right: 'today'
            },
            locale: 'ru',
            events: List
        });
        calendar.render();
    }));
});