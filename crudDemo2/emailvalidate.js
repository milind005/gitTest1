// [A-Za-z]@.*\.com
//  alert("milu")

var emailVal = document.getElementById("emailAddress")
var EmailWarn = document.getElementById("EmailWarn")

var NameVal = document.getElementById("name")
var nameWarn = document.getElementById("nameWarn")

var addressVal = document.getElementById("address")
var addressWarn = document.getElementById("addressWarn")



var readingVal = document.getElementById("reading")
var coadingVal = document.getElementById("coading")
var runningVal = document.getElementById("running")
var WritingVal = document.getElementById("Writing")
var swimmingVal = document.getElementById("swimming")
var hobbieWarn = document.getElementById("hobbieWarn")

emailVal.onchange = function () {
    let mailformat = /[A-Za-z0-9]@.[A-Za-z0-9]*\.[0-9A-Za-z]/
    if (this.value.match(mailformat)) {
        EmailWarn.textContent = ""
    }
    else {
        EmailWarn.style.color = "red"
        EmailWarn.textContent = "Email not valid"
    }
    // console.log(this.value)
}

NameVal.onchange = function () {
    let nameformat = /[A-Za-z]/
    if (this.value.match(nameformat)) {
        nameWarn.textContent = ""
    }
    else {
        nameWarn.style.color = "red"
        nameWarn.textContent = "please Enter the name"
    }
    // console.log(this.value)
}

addressVal.onchange = function () {
    let nameformat = /[A-Za-z]/
    if (this.value.match(nameformat)) {
        addressWarn.textContent = ""
    }
    else {
        addressWarn.style.color = "red"
        addressWarn.textContent = "please Enter the Address"
    }
    // console.log(this.value)
}

function hobbieCheack() {
    if (!readingVal.checked && !coadingVal.checked && !runningVal.checked && !WritingVal.checked && !swimmingVal.checked) {
        hobbieWarn.textContent = "Please select Your Hobbie"
        hobbieWarn.style.color = "red"
    }
    else{
        hobbieWarn.textContent = ""
    }
}

readingVal.onchange = function(){hobbieCheack()}
coadingVal.onchange = function(){hobbieCheack()}
runningVal.onchange = function(){hobbieCheack()}
WritingVal.onchange = function(){hobbieCheack()}
swimmingVal.onchange = function(){hobbieCheack()}
