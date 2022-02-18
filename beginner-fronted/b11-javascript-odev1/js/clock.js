
let myName = prompt("Adınızı giriniz");

let nameTag = document.getElementById("myName");
nameTag.innerText = myName;

const myDate = () => {
    let fullYear = new Date().toLocaleDateString();
    let fullTime = new Date().toLocaleTimeString()

    fullYear = fullYear.split(".")
    return fullYear[2] + ":" + fullYear[1] + ":" + fullYear[0] + " " + fullTime
}


const days = ["Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi","Pazar"]
let myClock = document.getElementById("myClock");

const showTime = ()=>{
    let fullTime = new Date().toLocaleTimeString()
    let day = new Date().getDay()
    myClock.innerHTML = fullTime + " " + days[day-1];
}

setInterval(showTime,500)


