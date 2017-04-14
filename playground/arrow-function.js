// var square = x => x * x  //no need for parenthesis if one parameter and one line

// console.log(square(3))

var user = {
	name: 'Ori',
	sayHi: (name) => console.log(`Hi, I'm ${name}`),
	sayHiAlt () {
		console.log(arguments)
		console.log(`Hi. I'm ${this.name}`);}
}

user.sayHi(user.name) 

