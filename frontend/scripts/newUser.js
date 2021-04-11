let a = document.getElementById('saveForm');
a.onclick = function addData() {
    let urlMain = `http://localhost:3000/main`;
    let urlDescription = `http://localhost:3000/description`;
    let logElem = document.querySelector(".stage1");

    let personID = Math.floor(Math.random() * Math.floor(100));
    let descriptionID = personID;
    let fullName = document.getElementById('Field1').value;
    let email = document.getElementById('Field2').value;

    let roots = "false";
    let checked = document.getElementById('Field3');
    if (checked.checked) {
        roots = true;
    }

    let password = document.getElementById('Field4').value;
    let phone = document.getElementById('Field5').value;
    let img = document.getElementById('Field7').value;
    let birthday = document.getElementById('Field6').value;
    let position = document.getElementById('Field8').value;
    let department = document.getElementById('Field9').value;

    if (fullName.length !== 0 && email.length !== 0 && password.length !== 0 && phone.length !== 0 && img.length !== 0 && birthday.length !== 0 && position.length !== 0) {
        const bodyMain = {
            personID: `${personID}`,
            fullName: `${fullName}`,
            email: `${email}`,
            roots: `${roots}`,
            department: `${department}`,
            password: `${password}`
        };
        const bodyDescription = {
            descriptionID: `${descriptionID}`,
            phone: `${phone}`,
            img: `${img}`,
            birthday: `${birthday}`,
            position: `${position}`
        };
        let dataMain = AddOne(urlMain, bodyMain);
        let dataDescription = AddOne(urlDescription, bodyDescription);
        logElem.textContent = "Успешно";
    } else {
        logElem.textContent = "Ошибка";
    }
};