//const sayHello = function(name) {//
//  return "hey there," + name + "!"//
//}
//console.log(sayHello('samay'));//

//arrow function



//const sayHello = (name) => {
//    return `hey there $(name) !`
//console.log(sayHello('samay'));

//another short form of arrow function
//const sayHello = (name) => `hey there ${name} !`

//console.log(sayHello('samay'));
const dokk = {
    rupee: 400,
    mass: 4,
    mgtS: function() {
        return `dokk is of rupee ${this.rupee} and masss is ${this.mass}`
    }
}
console.log(dokk.mgtS());


//const todos = [{ title: 'buy', isdone: true },
//  { title: 'go', isdone: true },
//  { title: 'record', isdone: false }
//]
//const thingsdone = todos.filter((todos) =>  todos.isdone === true)
//console.log(thingsdone);
//we cant use arrow function at mydes function
const cameras = {
    price: 600,
    weight: 4,
    myDes: function() {
        return `this canon camera is of ${this.price} `
    }
}
console.log(cameras.myDes());