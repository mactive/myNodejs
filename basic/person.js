module.exports = Person;

function Person (name) {
	// body...
	this.name = name;
}

Person.prototype.talk = function(words) {
	// body...
	console.log("My name is ", this.name, ". I want to talk ", words );
};