//first way
let sayhello = function(name) {
    console.log("greeting")
    console.log(`hey hello ${name}`)

}

sayhello('john')

let fullname = function(firstname, lastname) {
    console.log("happy")
    console.log(`happy to have u ${firstname} ${lastname}`)


}
fullname('john', 'duo')
let adder = function(num1, num2) {
    let add = num1 + num2;
    return add


}
console.log(adder(45, 6))