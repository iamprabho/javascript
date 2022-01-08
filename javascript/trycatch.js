const getrupee = (dollar) => {
    if (typeof dollar === 'number') {
        return dollar * 64
    } else {
        throw Error("unlucky")
    }
}
try {
    const myval = getrupee('hjn')
    console.log(myval);
} catch (error) {
    console.log(error);

}
console.log("i will not run if program crashes");

//
//