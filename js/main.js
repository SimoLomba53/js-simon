const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

//CREA UN COUNTDOWN CHE SCALA FINO ALLE 9.30 DI DOMANI MATTINA

//SETTIAMO LA DATA FINO A QUANDO IL COUNTDOWN DEVE SCALARE

let countDownDate = new Date("Feb 5,2023 09:30:00").getTime();
//SETTIAMO SET INTERVAL PER AVERE IN CONSOLE I NUMERI CHE CAMBIANO,E 1000 DATO CHE DEVONO CAMBIARE OGNI SECONDO
const timer = setInterval(passTime, 1000);
passTime();
function passTime() {
    //PRENDIAMO L'ORA DEL MOMENTO ESATTO
    const nowdate = new Date().getTime();

    //SOTTRAIAMO IL MOMENTO ESATTO ALLA DATA STABILITA,OTTENENDO IL TEMPO CHE MANCA
    const missTime = countDownDate - nowdate;
    //STABILIAMO ORE,MINUTI E SECONDI
    const hours = Math.floor((missTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((missTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((missTime % (1000 * 60)) / (1000));
    //NE RIPORTIAMO I VALORI
    hoursEl.innerHTML = hours;
    minutesEl.innerHTML = minutes;
    secondsEl.innerHTML = seconds;

}