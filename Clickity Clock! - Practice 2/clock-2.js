
const secondsNeedle = document.querySelector('.seconds-needle');
const minutesNeedle = document.querySelector('.minutes-needle')
const hoursNeedle = document.querySelector('.hours-needle')

function setDate () {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds/60)*360) +90;                          /*+90 to offset the 90deg transform proerpty in CSS so it will go full 360 when running the clock*/
    secondsNeedle.style.transform = `rotate(${secondsDegrees}deg)`;

    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes/60) * 360) +90;
    minutesNeedle.style.transform =`rotate(${minutesDegrees}deg)`;

    const hours = now.getHours();
    const hoursDegrees = ((hours/12) * 360) +90;
    hoursNeedle.style.transform =`rotate(${hoursDegrees}deg)`;

}

setInterval(setDate, 1000);         //sets up a repeating process where setDate function is executed every second//