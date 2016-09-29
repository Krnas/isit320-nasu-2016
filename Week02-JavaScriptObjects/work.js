var person = {
	firstName: "Kristi",
	lastName: "Nasu",
	fullName: function() {
		return this.firstName + " " + this.lastName;
	}
};
console.log(person.firstName);
console.log(person.lastName);
console.log(person.fullName());
