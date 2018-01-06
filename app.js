const fizzBuzzGenerator = (maxNum) => {
	for (let i = 0; i < maxNum; i++){
	if (i % 3 === 0 && i % 5 === 0){
		console.log("FizzBuzz")
	} else if (i % 3 === 0) {
		console.log("Fizz");
	} else if (i % 5 === 0) {
		console.log("Buzz") 
	} else {
		console.log(i);
	}
}
}

fizzBuzzGenerator(100);