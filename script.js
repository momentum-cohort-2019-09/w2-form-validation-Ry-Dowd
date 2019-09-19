console.log('Add validation!');
const submit = document.querySelector("#parking-form")
function qSelect(property) {
    return document.querySelector(property)
}
function qSelectAll(property) {
    return document.querySelectorAll(property)
}

function validName(content) {
    for (let i of content) {
        // loop through content string and if any characters aren't letters or whitespace, return false)
        if (i)
    }
}
function validParent(content){
    content.parent.classList.remove("is-invalid")
    content.parent.classList.add("is-valid")
}
function invalidParent(content){
    content.parent.classList.remove("is-valid")
    content.parent.classList.add("is-invalid")
}

function validYear(content) {
    // check that input is only numbers
    if () {
        // ensure that input is in a valid range
        if (content < 1900 || content > 2019) {

        } else {
            // pass error: please select a year between 1900 and 2019
        }
    } else {
        // pass error: last I checked years only contain numbers
    }

}
function validCVV(content) {
    if(!isNaN(content)){
        if (content.length === 3) {
            content.parent.classList.remove("is-invalid")
            content.parent.classList.add("is-valid")
    } else {
        // pass error state: must be a 3 digit number
    }
}

function validateForm() {
    let inputs = document.querySelectorAll(".input-field")
    console.log(inputs)
    let trimmed
    for (let i of inputs) {
        console.log("looping through " + i.value)
        trimmed = i.trim()
        if (!i.value) {
            i.classList.remove("input-valid")
            i.classList.add("input-invalid")
            console.log("toggling")
        }
    }
}

submit.addEventListener('submit', event => event.preventDefault())