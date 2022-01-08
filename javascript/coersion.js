console.log('5' - 5);
//op=0
console.log('5' + 5);
//op=55 it treat it as string
const givetype = typeof 5
console.log(givetype);
const adder = true + 5
console.log(adder);
//op is 6 as it treat true as 1 and false as 0
const login = ['ggg']
    //logic for getting details
const loginid = login[0]
    //if (loginid !== undefined) {
    //  console.log("allow user to login");
    //} else {
    //console.log("aut failed");
    //}
    //op is auut failed
    //values that interprets as false are false,0,','null,undefined
if (login) {
    console.log("allow user to login");

} else {
    console.log("aut failed");
}