class User {
    constructor(firstname, lastname, credit) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.credit = credit;

    }
    getfullName() { //methd
        let fullname = `${this.firstname} ${this.lastname} is my full name`;
        return fullname

    }
    editname(newname) {
        const names = newname.split(' ')
        this.firstname = names[0];
        this.lastname = names[1];

    }
}


const john = new User('john', 'anderson', 77);
const sammy = new User();
console.log(sammy);
console.log(john.getfullName());
john.editname('jonnh andccmd');
console.log(john.getfullName());