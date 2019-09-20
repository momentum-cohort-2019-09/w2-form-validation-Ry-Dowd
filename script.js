console.log('Add validation!');
const submit = document.querySelector("#parking-form")

const regExLetter = /^[A-Za-z\s]+$/
function qSelect(property) {
    return document.querySelector(property)
}
function qSelectAll(property) {
    return document.querySelectorAll(property)
}
function validParent(content) {
    content.parent.classList.remove("is-invalid")
    content.parent.classList.add("is-valid")
}
function invalidParent(content) {
    content.parent.classList.remove("is-valid")
    content.parent.classList.add("is-invalid")
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
function validExpiration(content) {
    // check that content's first 2 characters are a number from 01 through 12, that the 3rd is a /, and that the last 2 are a number between 2019 and 2025
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
    let inputs = document.querySelectorAll(".input-field")
    console.log(inputs)
    let trimmed
    for (let i of inputs) {
        console.log("looping through " + i.value)
        // figure out how the fuck trim is called
        i.value = i.value.trim()
        if (!trimmed) {
            invalidParent(i)
            console.log("empty")
            // pass error: Please enter a value
        }
    }
}

submit.addEventListener(
    'submit', function(event){
        event.preventDefault()
        validateForm()
    })
