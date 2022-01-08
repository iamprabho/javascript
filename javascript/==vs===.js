console.log(2 == 2)
console.log(2 == 2.0)
console.log(2 === 2.0)
    //== checks equality
    //=== checks identitiy actually obj in memory are exact or not
let myvar = {}
let myvar2 = {}
console.log(myvar === myvar2)
    //it will return false
let myrvar = {}
let myrvar2 = myrvar
console.log(myrvar === myrvar2)
    //it will return true as it is refering to second obj