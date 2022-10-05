const secondsPointer = document.querySelector(".pointer.seconds");
const minutesPointer = document.querySelector(".pointer.minutes");
const hoursPointer = document.querySelector(".pointer.hours");

const setRotation = (element, rotationP) => {
    element.style.setProperty("--rotation", rotationP * 360);
};

const setClock = () => {

    const data = new Date();

    const seconds = data.getSeconds() / 60;
    const minutes = (seconds + data.getMinutes()) / 60;
    const hours = (minutes + data.getHours()) / 12;
    
    setRotation(secondsPointer, seconds)
    setRotation(minutesPointer, minutes)
    setRotation(hoursPointer, hours)

};

setClock();

setInterval(setClock, 1000)
