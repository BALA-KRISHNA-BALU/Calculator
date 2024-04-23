let main = document.getElementById("body")
let input = document.getElementById("input-container")
function show(a){
    input.value = input.value + a
}
function ac(){
    input.value = " "
}
function c(){
    input.value = input.value.slice(0,-1)
}
function calculate(){
    input.value = eval(input.value)
}
function calculate(){
    try{
        input.value = eval(input.value)
    }
    catch{
        input.value = "Error"
    }
}
