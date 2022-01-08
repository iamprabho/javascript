var john = {
    name: 'i am john',
    age: 44,
    isactive: true
}
var marry = {
    name: 'i am marry',
    age: 22,
    isactive: true
}
var ma = {
        name: 'i am ma',
        age: 28,
        isactive: false
    }
    //use of map
    //here the var john which we have defined above will be totally replaced by JOHN
    //and after we call user it will display whole obj  database a nd also it it iterable
let user = new Map()
user.set('JOHN', john);
user.set('MARRY', marry);
user.set('MA', ma);
//console.log(user);
//console.log(user.size);
//console.log(user.get('MA'));
//'JOHN' => { name: 'i am john', age: 44, isactive: true },
//'MARRY' => { name: 'i am marry', age: 22, isactive: true },
//'MA' => { name: 'i am ma', age: 28, isactive: false }
//console.log(user.keys());
//console.log(user.values());

//how to loop or iterate to find keys values etc
for (const key of user.keys()) {
    console.log(key);

}
for (const value of user.values()) {
    console.log(value.name);

}
for (const [key, value] of user.entries()) {
    console.log(key + "=" + value.age);
}
user.forEach((value, key) => console.log(key + "=" + value.name))


var arr = [
    ['one', '1'],
    ['two', '2']
]
var newMap = new Map(arr)
console.log(newMap)