(function allStaff() {
    let urlMain = `http://localhost:3000/main`;
    let urlDescription = `http://localhost:3000/description`;
    let dataGetPassword = GetAll(urlMain).then(result => (GetAll(urlDescription).then(data => staff(result, data))));
})();


function staff(result, data) {
    let length = result.length;
    let lengthData = data.length;

    let staff;
    let str = ' ';
    if (length === 0) {
        staff = document.getElementById('mainBack');
        str += `
    <img src='https://i.ibb.co/27hfS2T/fludd.jpg' alt='Photo' width="100%"/>`
        document.getElementById('main').style.display = 'none';
    } else {
        staff = document.getElementById('main');
        for (let i = 0; i < length; i++) {
            if (+localStorage.personID !== result[i].personID) {
                let name = result[i].fullName;
                let img = 'https://morane.by/images/work1.png';
                let position = "Должность не определена";
                for (let k = 0; k < lengthData; k++) {
                    if (result[i].personID === data[k].descriptionID) {
                        if (data[k].img !== undefined) { img = data[k].img; }
                        if (data[k].position !== undefined) { position = data[k].position; }
                    }
                }

                str += `
<div class="card" id=${result[i].personID}>
  <div class="card-foto">
          <img class="photo" src=${img} alt='Photo'/>
  </div>
    <div class="card-text">
          <h1 class="title">${name}</h1>
          <h4 class="sub-title">${position}</h4>
          </div>
    </div>`

            }
        }
        document.getElementById('mainBack').style.display = 'none';

    }
    staff.innerHTML = str;
}


//просмотреть выполнение задач сотрудниками


const newT = document.getElementById('main');
newT.addEventListener('click', (event) => {
    localStorage.event = event.path[2].id;
    document.location.href = "showAll.html";
});