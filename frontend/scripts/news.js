function newNews() {
    let url = `http://localhost:3000/news`;
    let logElem = document.querySelector(".stage1");
    let newsID = Math.floor(Math.random() * Math.floor(100));
    let news = document.getElementById('Field2').value;
    let type = document.getElementById('Field1').value;
    let now = new Date().toLocaleString();
    if (news.length !== 0 && type.length !== 0) {
        const body = {
            newsID: `${newsID}`,
            authorName: localStorage.name,
            news: `${news}`,
            data: `${now}`,
            type: `${type}`
        };
        let dataAll = AddOne(url, body).then(result => console.log(result));
        logElem.textContent = "Успешно";
    } else {
        logElem.textContent = "Ошибка";
    }
}