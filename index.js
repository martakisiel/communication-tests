

let saveEl = document.getElementById("save-el")

let countMEl = document.getElementById("countM-el")
let countFEl = document.getElementById("countF-el")

let countM = 0
let countF = 0

let fullDate = new Date().toLocaleDateString()
let todayDateEl = document.getElementById("todayDate-el")
   todayDateEl.textContent = "Date: " + fullDate

function incrementM() {

    countM += 1
    countMEl.textContent = countM
}
function incrementF() {

    countF += 1
    countFEl.textContent = countF
}
function save() {
    let countStrM = "Male: " + countM 
    let countStrF = "Female: " + countF
    let sum = countF + countM
    saveEl.textContent = countStrM + " " + countStrF + " summary: " + sum
    if (countFEl != '0') {
        countFEl.textContent = 0;
        countF = 0;
    }
    if (countMEl != '0') {
        countMEl.textContent = 0;
        countM = 0;
    }
} 


function send(){

    //what to do to sent previous entries data to server?
    //send: name="mass"+value, fullDate, countM, countF, sum
    saveEl.textContent= "Entries:  "
    alert ("Data was send")
    
}

