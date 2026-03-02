//Exercise 2: Loop Controls and Conditions

//Part 1: Print all values using a for loop
console.log("Print all values using a for loop:");
for (let i=0; i<numbers.length; i++){
    //Print each number one by one
    console.log(numbers[i]);
}

//Part 2: Skip even numbers using a for loop and continue statement
console.log("Odd numbers only")
for (let i=0; i<numbers.length; i++){
    if (numbers[i] % 2 === 0){
        continue; // Skip even numbers
    }
    //Print odd numbers only
    console.log(numbers[i]);
}

//Part 3: Stop the loop when reaching the number 10
console.log("Stop at number 10")
for (let i=0; i<numbers.length; i++){
    if (numbers[i] === 10){
        break; // Stop the loop when reaching 10
    }
    //Print numbers until 10 is reached
    console.log(numbers[i]);
}