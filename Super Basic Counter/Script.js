const BUTTON = document.getElementById("start");
const BUTTON2 = document.getElementById("stop");
const TIMER = document.getElementById("timer");
const CLEAR = document.getElementById("clear");
console.log(BUTTON,TIMER);

var interval;
var time = 0; 
var notrunning = true; 
BUTTON.addEventListener("click", start, false);
CLEAR.addEventListener("click", clear, false);

function start(){
    if (notrunning){
        interval = setInterval(update, 0.1);
        notrunning = false;
        BUTTON.classList.toggle("stop");
        BUTTON.innerHTML ="Stop";
        CLEAR.classList.remove("hide");
    }else{
        clearInterval(interval);
        notrunning = true;
        BUTTON.classList.toggle("start");
        BUTTON.innerHTML ="Start";
        
    }  
}

function update(){
    time++;
    TIMER.innerHTML = time;
}

function clear(){
    
    clearInterval(interval);
    if(!notrunning){
        BUTTON.classList.toggle("stop");
        CLEAR.classList.add("hide");
    }
    notrunning = true;
     time = 0;
     BUTTON.innerHTML ="Start";
     TIMER.innerHTML = time;
}
