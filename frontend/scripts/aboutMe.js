(function aboutMe() {
    document.getElementById('name').innerHTML = localStorage.name;
    document.getElementById('email').innerHTML = localStorage.email;
    document.getElementById('department').innerHTML = localStorage.department;
    let urlDescription = `http://localhost:3000/description`;
    let dataAll = GetAll(urlDescription).then(result => comparison(result));
})();

function comparison(result) {
    let count = result.length;
    let parentEl = document.getElementById("photo"),
        img = document.createElement("IMG");
    for (let i = 0; i < count; i++) {
        if (Number(localStorage.personID) === result[i].descriptionID) {
            if (result[i].birthday !== undefined && result[i].birthday !== null) {
                let k = result[i].birthday.slice(8, 10) + "." + result[i].birthday.slice(5, 7) + "." + result[i].birthday.slice(0, 4);
                document.getElementById('birthday').innerHTML = k;
            }
            if (result[i].phone !== undefined) {
                document.getElementById('phone').innerHTML = result[i].phone;
            }
            if (result[i].img !== undefined) {
                img.src = result[i].img;
                parentEl.appendChild(img);
            } else {
                img.src = "https://morane.by/images/work1.png";
                parentEl.appendChild(img);
            }
            if (result[i].position !== undefined) {
                document.getElementById('category').innerHTML = result[i].position;
            }
        }
    }
}

let replase = document.getElementById('change');
replase.onclick = function editData() {
    let urlPass = `http://localhost:3000/main/getproduct/?personID=${localStorage.personID}`;
    let urlUpdate = `http://localhost:3000/description/getproduct/?descriptionID=${localStorage.personID}`;
    let dataGetPassword = GetOne(urlPass).then(data => (GetOne(urlUpdate).then(dat => changeAll(data, dat))));
};

function changeAll(data, dat) {

    let urlMain = `http://localhost:3000/main/update?personID=${localStorage.personID}`;
    let urlDescription = `http://localhost:3000/description/update?descriptionID=${localStorage.personID}`;
    let fullName = document.getElementById('changeName').value;
    let roots = false;
    let password = data[0].password;
    let email = document.getElementById('changeEmail').value;
    let phone = document.getElementById('changePhone').value;
    let img = document.getElementById('changePhoto').value;
    let position = document.getElementById('changePosition').value;
    let birthday = document.getElementById('changeBirthday').value;

    if (fullName.trim().length === 0) { fullName = localStorage.name; }
    if (email.trim().length === 0) { email = localStorage.email; }
    if (phone.trim().length === 0) { phone = dat[0].phone; }
    if (img.trim().length === 0) { img = dat[0].img; }
    if (position.trim().length === 0) { position = dat[0].position; }
    if (birthday.trim().length === 0) { birthday = dat[0].birthday; }

    const bodyMain = {
        personID: `${localStorage.personID}`,
        fullName: `${fullName}`,
        email: `${email}`,
        roots: `${roots}`,
        department: `${localStorage.department}`,
        password: `${password}`
    };
    const bodyDescription = {
        descriptionID: `${localStorage.personID}`,
        phone: `${phone}`,
        img: `${img}`,
        birthday: `${birthday}`,
        position: `${position}`
    };
    let dataAllMain = UpdateOne(urlMain, bodyMain).then(localStorage.email = email).then(localStorage.name = fullName)
        .then(UpdateOne(urlDescription, bodyDescription).then(setTimeout(plan, 1000)));
}

function plan() {
    document.location.href = "aboutMe.html"
}