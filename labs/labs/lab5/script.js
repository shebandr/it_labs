function makeAnimation(santa_image){
    santa_image_number = Number(santa_image.alt);
    santa_image_number =  santa_image_number == 12 ? 1 : santa_image_number + 1;
    santa_image.alt = santa_image_number;
    santa_image.src = `./img/s${santa_image_number}.gif`;
}

function changeInterval(interval){
    if(interval != 0){
        clearInterval(interval);
        interval = setInterval(() => makeAnimation(santa_image), delay)
    }

    return interval;
}

let root = document.getElementById('root'),
    santa_image = document.createElement('img'),
    delay_span = document.getElementById('delay'),
    delay = 1000;

santa_image.src = './img/s1.gif';
santa_image.alt = 1;
delay_span.innerHTML = delay;

root.appendChild(santa_image);

let start_button = document.getElementById('start-button'),
    speed_up_button = document.getElementById('speed-up-button'),
    slow_down_button = document.getElementById('slow-down-button'),
    stop_button = document.getElementById('stop-button');

stop_button.disabled = true;

let interval = 0;
start_button.addEventListener('click', () => {
    start_button.disabled = true;
    stop_button.disabled = false;
    if(interval == 0){
        interval = setInterval(() => makeAnimation(santa_image), delay);
    }
});

speed_up_button.addEventListener('click', () => {
    if(delay > 0){
        delay -= 100;
        interval = changeInterval(interval);
        delay_span.innerHTML = delay;
        slow_down_button.disabled = false;
    }
    else{
        speed_up_button.disabled = true;
    }
});

slow_down_button.addEventListener('click', () => {
    if(delay < 1500){
        delay += 100;
        interval = changeInterval(interval);
        delay_span.innerHTML = delay;
        speed_up_button.disabled = false;
    }
    else{
        slow_down_button.disabled = true;
    }
});

stop_button.addEventListener('click', () => {
    clearInterval(interval);
    interval = 0;
    start_button.disabled = false;
    stop_button.disabled = true;
});

