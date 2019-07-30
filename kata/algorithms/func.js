
// notes from mpjme videos 
// higher order functions 
// functions are values 
// break up concerns into smaller functions

// today we learn about filter 

var animals = [
	{name: 'Zaphy', species: 'cat'},
	{name: 'Domino',  species: 'cat' },
	{name: 'Spencer', species: 'cat'},
	{name: 'Melissa', species: 'cat'},
	{name: 'Buck', species: 'dog'},
	{name: 'Ellie', species: 'dog'}
]

// decoupled from filter can be reused
/*
var isDog = function(animal){
	return animal.species === 'dog'
}

var dogs = animals.filter(isDog)

*/


/*
var dogs = animals.filter(function(animal){
	return animal.species === 'dog'
})

var dogs = []; 
for (var i = 0; i < animals.length; i++){
	if(animals[i].species === 'dog')
		dogs.push(animals[i])
} 
console.log(dogs); 

*/


// learn about Map 
// goes thru array but unlike filter it doesn't throw away 
//  it transforms   
/*
var names = [] 
for(var i = 0; i < animals.length; i++){
	names.push(animals[i].name)
}  */


// map expects callback to return 
//new transformed obj 
/*
var names = animals.map(function(animal){
	return animal.name + ' is a ' + animal.species
})


console.log(names); 
*/


// reduce is the multitool of list transformation.  
var orders = [
	{amount: 250 },
	{amount: 400 },
	{amount: 100 },
	{amount: 325 },
]

// reduce version 

var totalAmount = orders.reduce(function(sum, order){
	return sum + order.amount
	
}, 0)

console.log(totalAmount);


// imperative version 
/*
var totalAmount = 0 
for (var i = 0; i < orders.length; i++){
	totalAmount += orders[i].amount
}

console.log(totalAmount);

*/

// advanced Reduce 


