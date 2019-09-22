console.log('Add validation!');
const submit = document.querySelector("#parking-form")
const regExLetter = /^[A-Za-z\s]+$/
const regExExpiration = /^\d{2}\/\d{2}$/

function qSelect(property) {
    return document.querySelector(property)
}
function qSelectAll(property) {
    return document.querySelectorAll(property)
}
function validParent(content) {
    content.parentNode.classList.remove("input-invalid")
    content.parentNode.classList.add("input-valid")
}
function invalidParent(content) {
    content.parentNode.classList.remove("input-valid")
    content.parentNode.classList.add("input-invalid")
}
function throwError(message){
    let errDiv = document.createElement("div")

}
function validName(content) {
    if (!regExLetter.test(content)){
        invalidParent(content)
        // throw error: Please enter a valid name (letters and spaces only)
    } else {
        validParent(content)
    }
}

function validYear(content) {
    if (!isNaN(content)) {
        // ensure that input is in a valid range
        if (1900 < content < 2019) {
            validParent(content)
        } else {
            invalidParent(content)
            // pass error: please select a year between 1900 and 2019
        }
    } else {
        invalidParent(content)
        // pass error: last I checked years only contain numbers
    }
}
function validParkDate(content) {
    // Make sure that input is a date. Then compare to ensure it's after present date
    if (isDate) {
        if (dateInFuture) {
            validParent(content)
        } else {
            invalidParent(content)
            // pass error: Unless that's one special delorean you're driving, please select a date in the future
        }
    } else {
        invalidParent(content)
        // pass error please enter a valid date
    }
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
    if (!regExExpiration.test(content.value)){
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
    let inputs = document.querySelectorAll("input")
    console.log(inputs)
    for (let i of inputs) {
        console.log("looping through " + i.value)
        i.value = i.value.trim()
        if (!i.value) {
            console.log("no value")
            console.log(i)
            invalidParent(i)
            // pass error: Please enter a value
        }
    }
}

submit.addEventListener(
    'submit', function(event){
        event.preventDefault()
        validateForm()
    })
