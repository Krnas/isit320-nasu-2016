var person = {
	firstName: "Kristi",
	lastName: "Nasu",
	fullName: function() {
		return this.firstName + " " + this.lastName;
	}
};

var calculator= {
    operator01: -1,
    operator02: -1,
    add:function(){return this.operator01 + this.operator02;},
    subtract: function(){return this.operator01 + this.operator02;}
};

var multiply={
mult: function() {return this.operator01 * this.operator02}
};
calculator.operator01 = person.firstName.length;
calculator.operator02 = person.lastName.length;

console.log(person.firstName);
console.log(person.lastName);
console.log((fullName.full()));
console.log(calculator.add());
console.log(calculator.subtract())


function divider(title) {
    console.log("====================================");
    console.log(title);
    console.log("====================================");
}
divider('Calculator');
console.log('operator01 =', calculator.operator01);
console.log('operator02 =', calculator.operator02);
