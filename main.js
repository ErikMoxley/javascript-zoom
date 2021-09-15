function getData(){
    const name = document.getElementById('name').value
    const age = parseInt(document.getElementById('age').value)
    displayData(name, age)
}

function displayData(name, age){
    const output = document.getElementById('output')
    output.innerHTML = `Your name is ${name} and your age is ${age}, in ten years you will be ${age + 10}`
}