console.log('Add validation!');
let submit = document.querySelector("#submit-button")


function validateForm(){
    let inputs = document.querySelectorAll(".input-field")
    console.log(inputs)
    for(let i of inputs){
        console.log("looping through "+i.value)
        if (i.value === undefined){
            i.classList.toggle("input-invalid")
            console.log("toggling")
        }
    }
}

submit.addEventListener('click', function(){
    validateForm()
})