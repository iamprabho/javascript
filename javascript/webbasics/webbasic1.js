//dom 
//console.log(document); it will show op of html doc
//console.log(document.head);it will show htmls head part only
//console.log(document.URL);
//OP IN INSPECT CONSOLE IS http://127.0.0.1:5500/webbasics/index.html
//console.log(document.title); //it give us title name so we can use it directly to mainpulate obj or to update values
//changing title using js
//document.title = "i got changed";
//console.log(document.getElementById("idone"));
//document.getElementById("idone") = 'some' it is not possible
//way to access class
//console.log(document.getElementsByClassName(""));
//most preferred wy of using is by using queryselector
//const myele = document.querySelector('p')
//console.log(myele); //it will display first para
//if we use all
//const myele = document.querySelectorAll('p')
//console.log(myele);
//op is0: p
//1: p#idone
//2: p.classone
//3: p
//4: p
//length: 5
//if u want first one
//console.log(myele[0]);
//const myele = document.querySelectorAll('#done')
//console.log(myele)
//const myPele = document.querySelector('p')
//myPele.textContent = 'i am being changed using js' // it change text content ie we change content of p
//const myPele = document.querySelectorAll('p')
//myPele.forEach(function(p) {
//   p.textContent = 'i am change using loop in js' //it changes all p to this content
//p.remove() remove it

//})
//how to create a new elemet in dom
const mynewpara = document.createElement('p')
mynewpara.textContent = 'i was added via js'
document.querySelector('body').appendChild(mynewpara) //here we append doc in body with child mynewpara


//event listeners its format iss(event,function callback)
document.querySelector('button').addEventListener('click', (event) => {
        //console.log(event);
        event.target.textContent = 'i was clicked'; //it will change text click me to i was clicked

    })
    //track input form
document.querySelector('#myform').addEventListener('input', (event) => {
    console.log(event.target.value);

})