let utubevideo = {
    title: 'loops in jaava',
    videolength: 15,
    videocretor: "ghopl",
    discriptn: 'ths is video dis'


}
let utubevideo2 = {
    title: 'loops anf func in jaava',
    videolength: 10,
    videocretor: "ghopl",
    discriptn: 'ths is video dis'


}

let changevidlen = function(myobj) {
    return {
        formatone: `time of this video is: ${myobj.videolength+2}`
    }
    //console.log(`time of this video is: ${myobj.videolength}`)
    // return `time of this video is: ${myobj.videolength+2}`
    //  console.log(`time of this video is: ${myobj.videolength}`)

}
let adone = changevidlen(utubevideo2.videolength)
console.log(adone.formatone)