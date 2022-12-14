function updateClock(root){
    root.innerHTML = "";

    let current_date_time = new Date();
    let year = current_date_time.getFullYear(),
        month = current_date_time.getMonth() + 1,
        day = current_date_time.getDate(),
        hours = current_date_time.getHours(),
        minutes = current_date_time.getMinutes(),
        seconds = current_date_time.getSeconds();
    let is_pm = hours >= 12 ? true : false;
    hours = hours > 12 ? hours - 12 : hours;
    current_time = `${hours}:${minutes}:${seconds}`;
    [...current_time].forEach(symbol => {
        symbol = symbol == ":" ? "c" : symbol;
        let img = document.createElement('img');
        img.src = `./img/dg${symbol}.gif`;
        root.appendChild(img);
    });

    let img = document.createElement('img');
    let symbol = is_pm ? "pm" : "am";
    img.src = `./img/dg${symbol}.gif`;
    root.appendChild(img);

    let current_date = `${day}.${month}.${year}`;
    [...current_date].forEach(symbol => {
        symbol = symbol == "." ? "p" : symbol;
        let img = document.createElement('img');
        img.src = `./img/dg${symbol}.gif`;
        root.appendChild(img);
    });
}   
let root = document.getElementById('root');

setInterval(() => updateClock(root), 1000);
