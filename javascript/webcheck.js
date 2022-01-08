 let usermail = 'lcdddddo12'
 let pass = '1234'


 console.log(pass.length);
 console.log(usermail.trim()) //it cuts the white space around the string
 let userchecker = function(mystr) {
     if ((mystr.includes(123)) && (mystr.length > 6)) {
         return true
     } else {
         return false
     }
 }
 console.log(userchecker(usermail))
 let passchecker = function(passs) {
     if ((mystr.includes(123)) && (passs.length > 6)) {
         return true
     } else {
         return false
     }

 }

 const student = {
         name: 'prsth',
         age: 89,
         isactive: true

     }
     //const studentObjtostr = JSON.stringify(student)
 console.log(typeof studentObjtostr);
 //we convert again to json
 //const toJSON = JSON.parse(studentObjtostr);
 //console.log(typeof studentObjtostr);