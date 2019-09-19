console.log('Add validation!');
const submit = document.querySelector("#parking-form")

function validName(content){
    for (let i of content){
        // loop through content string and if any characters aren't letters or whitespace, return false)
        if (i )
    }
}

function validateForm(){
    let inputs = document.querySelectorAll(".input-field")
    console.log(inputs)
    let trimmed
    for(let i of inputs){
        console.log("looping through "+i.value)
        trimmed = i.trim()
        if (!i.value){
            i.classList.toggle("input-invalid")
            console.log("toggling")
        }
    }
}

submit.addEventListener('submit',event => event.preventDefault())