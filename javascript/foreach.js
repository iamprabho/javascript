const days = ['mon', 'tues', 'wed', 'thurs', 'fri']
console.log(days[0]);
let fullname = function() {
    console.log("happy")
}
days.forEach(function(day) {
    console.log(day);
})
days.forEach(function(day, index) {
    console.log(`day is: ${day} and index is ${index}`);
})

const month = ['jan', 'feb', 'march', 'april']
console.log(month[1])
let monthname = function() {
    console.log("goooddd")

}
month.forEach(function(mon) {
    console.log(mon)
})
month.forEach(function(mon, ind) {
    console.log(`month is ${mon} and its index is ${ind}`)

})