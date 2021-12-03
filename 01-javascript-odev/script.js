let userName = prompt("Please enter your name");
const dateDiv = document.querySelector('.date')
const title = document.querySelector('.title')


title.innerHTML = `Hello, ${userName} Welcome !`

function createClock() {

    let date = new Date()
    let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
    let dateHour = date.getHours();
    let dateMinute = date.getMinutes();
    let dateSecond = date.getSeconds();
    let dateDay = date.getDay();


    dateHour = (dateHour < 10) ? "0" + dateHour :dateHour;
    dateMinute = (dateMinute < 10) ? "0" + dateMinute : dateMinute;
    dateSecond = (dateSecond < 10) ? "0" + dateSecond : dateSecond;
    dateTime =  `${dateHour} : ${dateMinute} : ${dateSecond}`
    dateDiv.innerHTML = `${dateTime}`

    switch(dateDay) {
        case 0:
        dateDiv.innerHTML += ` - ${days[5]}`
        break; 
        case 1:
        dateDiv.innerHTML += ` - ${days[5]}`
        break;
        case 2:
        dateDiv.innerHTML += ` - ${days[5]}`
        break;
        case 3:
        dateDiv.innerHTML += ` - ${days[5]}`
        break;
        case 4:
        dateDiv.innerHTML += ` - ${days[5]}`
        break;
        case 5:
        dateDiv.innerHTML += ` - ${days[5]}`
        break;
        case 6:
        dateDiv.innerHTML += ` - ${days[5]}`
        break;
    }

    


    
    setInterval("createClock()",1000);
}

