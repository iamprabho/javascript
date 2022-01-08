function myvalidation() {
    // let myvalue = document.querySelector('#myform') or
    let myvalue = document.getElementById('myform').value;
    if (isNaN(myvalue) || myvalue < 1 || myvalue > 20) { //it will check if an input is no or not and also greater or lesser than
        console.log("not a valid input");

    } else {
        console.log("its ok");
    }
}
//form validation
document.querySelector('.myform').addEventListener('submit', (event) => {
    event.preventDefault(); //when we submit our name it get display in url of browser its it default behaviour to avoid it we need this command

    console.log(event.target.username.value); //it will fetch value in console after inspecting
    event.target.username.value = '';


})