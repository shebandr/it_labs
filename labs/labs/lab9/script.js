function setCookie(cookie_name, cookie_value, expires_days){
    const expire_date = new Date();
    expire_date.setTime(expire_date.getTime() + (expires_days*24*60*60*1000));
    let expires = "expires=" + expire_date.toUTCString();
    document.cookie = `${cookie_name}=${cookie_value};${expires};path=/`;
}

function getCookie(cookie_name){
    let name = cookie_name + "=";
    let decoded_cookie = decodeURIComponent(document.cookie);
    let cookie_array = decoded_cookie.split(";");
    for(let i = 0; i < cookie_array.length; i++){
        let c = cookie_array[i];
        while(c.charAt(0) == ' '){
            c = c.substring(1);
        }
        if(c.indexOf(name) == 0){
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function deleteCookie(cookie_name){
    document.cookie = `${cookie_name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}

function isCookieExist(cookie_name){
    let cookie_data = getCookie(cookie_name);
    if(cookie_data != ""){
        return true;
    }
    else {
        return false;
    }
}

function greeting(){
    if(isCookieExist("username")){
        username = getCookie("username");
        amount_of_visits = getCookie("amount_of_visits");
        
        let root = document.getElementById("root"),
            gretting_tag = document.createElement('p'),
            amount_of_visits_tag = document.createElement('p'),
            last_visit_tag = getLastVisit();

        root.innerHTML = "";

        gretting_tag.innerHTML = "Привет, " + username;
        amount_of_visits_tag.innerHTML = "Количество посещений этой страницы: " + amount_of_visits;

        root.appendChild(gretting_tag);
        root.appendChild(amount_of_visits_tag)
        root.appendChild(last_visit_tag);
    }
}

function getLastVisit(){
    let last_visit = getCookie("last_visit"),
    last_visit_tag = document.createElement('p');

    let last_visit_date = new Date(last_visit),
        current_visit_date = new Date();
    
    let days = current_visit_date.getDate(),
        hours = current_visit_date.getHours(),
        minutes = current_visit_date.getMinutes(),
        seconds = current_visit_date.getSeconds();

    let last_visit_days = last_visit_date.getDate(),
        last_visit_hours = last_visit_date.getHours(),
        last_visit_minutes = last_visit_date.getMinutes(),
        last_visit_seconds = last_visit_date.getSeconds();
    
    last_visit_days = Math.abs(days - last_visit_days);
    last_visit_days = last_visit_days > 0 ? last_visit_days + " дней" : "";

    last_visit_hours = Math.abs(hours - last_visit_hours);
    last_visit_hours = last_visit_hours > 0 ? last_visit_hours + " часов" : "";

    last_visit_minutes = Math.abs(minutes - last_visit_minutes);
    last_visit_minutes = last_visit_minutes > 0 ? last_visit_minutes + " минут" : "";

    last_visit_seconds = Math.abs(seconds - last_visit_seconds) + " секунд назад";

    last_visit_date = last_visit_days + " " + last_visit_hours + " " + last_visit_minutes + " " + last_visit_seconds;

    last_visit_tag.innerHTML = "Вы были на этой странице: " + last_visit_date;

    return last_visit_tag
}


let sign_in_btn = document.getElementById("sign-in-btn"),
    reset_visits_btn = document.getElementById("reset-visits-btn");

let amount_of_visits = 0;
if(isCookieExist("amount_of_visits")){
    amount_of_visits = Number(getCookie("amount_of_visits"));
}
setCookie("amount_of_visits", amount_of_visits+1, 365);

greeting()

sign_in_btn.addEventListener('click', () => {
    let username = document.getElementById("username").value;
    if(username != "" && username != null){
        // today = new Date(2022, 09, 5, 10, 33, 30, 0);
        today = new Date();
        today = today.toUTCString();
        setCookie("username", username, 365)
        setCookie("last_visit", today, 365);
        greeting()
    }
})

reset_visits_btn.addEventListener('click', () => {setCookie("amount_of_visits", 1, 365); greeting()})
