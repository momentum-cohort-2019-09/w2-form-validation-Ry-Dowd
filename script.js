console.log('Add validation!');
const submit = document.querySelector("#parking-form")
const regExLetter = /^[A-Za-z\s]+$/
const regExExpiration = /^\d{2}\/\d{2}$/
const regExDate = /^[0-1][0-9]\/[0-3]\d{1}\/[2][0][1-9][1-9]$/
const currentDate = new Date()
let parkDate



function qSelect(property) {
    return document.querySelector(property)
}
function qSelectAll(property) {
    return document.querySelectorAll(property)
}
function validParent(input) {
    input.parentNode.classList.remove("input-invalid")
    input.parentNode.classList.add("input-valid")
}
function invalidParent(input) {
    input.parentNode.classList.remove("input-valid")
    input.parentNode.classList.add("input-invalid")
}
function throwError(message, invalidInput) {
    let errDiv = document.createElement("div")
    errDiv.classList.add("error")
    errDiv.textContent = message
    invalidInput.parentNode.appendChild(errDiv)
}
function clearErrors() {
    let errors = qSelectAll(".error")
    for (let error of errors){
        error.parentNode.removeChild(error)
    }
}
function validName(input) {
    let content = input.value
    if (!regExLetter.test(content)) {
        invalidParent(content)
        throwError("Please enter a valid name (only use letters and spaces", content)
    } else {
        validParent(content)
    }
}

function validYear(input) {
    let content = input.value
    if (!isNaN(content)) {
        // ensure that input is in a valid range
        if (1900 < content && content <= currentDate.getFullYear()) {
            validParent(input)
        } else {
            invalidParent(input)
            // pass error: please select a year from between 1900 and today
        }
    } else {
        invalidParent(content)
        // pass error: last I checked years only contain numbers
    }
}
function validParkDate(content) {
    let month = eval (content.slice(0, 2) -1)
    let day = content.slice(3, 5)
    let year = content.slice(-4)
    console.log(month, day, year)
    parkdate = new Date(year, month, day)
    console.log(parkdate < currentDate)

}
function validDuration(content) {
    if (!isNaN(content)) {
        if (1 <= content <= 30) {
            validParent(content)
        } else {
            invalidParent(content)
            // pass error: please enter a number between 1 and 30
        }
    } else {
        invalidParent(content)
        // pass error: please enter a NUMBER between 1 and 30
    }
}
function validateCardNumber(number) {
    var regex = new RegExp("^[0-9]{16}$");
    if (!regex.test(number))
        return false;

    return luhnCheck(number);
}

function luhnCheck(val) {
    var sum = 0;
    for (var i = 0; i < val.length; i++) {
        var intVal = parseInt(val.substr(i, 1));
        if (i % 2 == 0) {
            intVal *= 2;
            if (intVal > 9) {
                intVal = 1 + (intVal % 10);
            }
        }
        sum += intVal;
    }
    return (sum % 10) == 0;
}
function validExpiration(content) {
    if (!regExExpiration.test(content.value)) {
        invalidParent(content)
    }
}
function validCVV(content) {
    if (!isNaN(content)) {
        if (content.length === 3) {
            validParent(content)
        } else {
            invalidParent(content)
            // pass error state: must be a 3 digit number
        }
    }
}
function validateForm() {
    clearErrors()
    let inputs = document.querySelectorAll("input")
    console.log(inputs)
    for (let i of inputs) {
        console.log("looping through " + i.value)
        i.value = i.value.trim()
        if (!i.value) {
            console.log("no value")
            console.log(i)
            invalidParent(i)
            throwError("Please enter a value",i)
        }
    }
}

submit.addEventListener(
    'submit', function (event) {
        event.preventDefault()
        validateForm()
    })
