let mfdl = {
    day: 'monday',
    meetingss: 0,
    meetdone: 22,
    addmeet: function(num) {
        this.meetingss = this.meetingss + num


    },
    summas: function() {
        return `u hav ${this.meetingss} meetings today!`
    }
}

mfdl.addmeet(3)
console.log(mfdl.summas())