function displayBox(num) {
    inpt.value += num;

}

function evaluateExpression() {
    let val = inpt.value
    let result = eval(val)
    inpt.value = result
}

function clearScreen(val) {
    inpt.value = ""
}

function backspace() {
    inpt.value = inpt.value.slice(0, -1)
}