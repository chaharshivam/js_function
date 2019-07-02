1. 🎖Write a function named calculateDogAge that:
  * [ ] Takes 1 argument: your puppy's age.
  * [ ] Calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
  * [ ] Outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
  * [ ] Add an additional argument to the function that takes the conversion rate of human to dog years.

```js
  function calculateDogAge(puppyAge) {

    alert(`Your doggie is ${ (puppyAge * 7) } years old in dog years!`);

  }
```
2. 🎖Write a function named calculateSupply that:
  * [ ] takes 2 arguments: age, amount per day.
  * [ ] calculates the amount consumed for rest of the life (based on a constant max age).
  * [ ] outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
  * [ ] Accept floating point values for amount per day, and round the result to a round number.

```js

  function calculateSupply(age, amountPerDay) {
    let amountPerYear = (365 * amountPerDay);

    alert(`You will need ${ (age * amountPerYear) } to last you until the ripe old age of ${ age }`)  
  }
```
3. 🎖Create a function called celsiusToFahrenheit:
  * [ ] Store a celsius temperature into a variable.
  * [ ] Convert it to fahrenheit and output "NN°C is NN°F".
  * [ ] Create a function called fahrenheitToCelsius:
  * [ ] Now store a fahrenheit temperature into a variable.
  * [ ] Convert it to celsius and output "NN°F is NN°C."

```js
  function celsiusToFahrenheit(temperature) {
    return (temperature * (9/5) + 32);
  }

  function fahrenheitToCelsius(temperature) {
    return ( (temperature - 32) * (5/9) );
  }
```
4. 🎖The function below returns true if the parameter age is greater than 18. Otherwise it asks for a confirmation and returns its result:

```js
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm("Did parents allow you?");
  }
}
```
  4.1 🎖Convert the above function using ternary operator.
  ```js
  function checkAge(age) {
    return (age > 18) ? true : confirm("Did parents allow you?");
  }
  ```

  4.2 🎖Convert the above function using `||` operator.
  
  ```js
    function checkAge(age) {
      return (age > 18 && true) || confirm("Did parents allow you?");
    }
  ```
Will the function work differently if else is removed like below?

```js
function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm("Did parents allow you?");
}

// No it won't work differently, the last return statement would act as base condition
```
Is there any difference in the behavior of these two variants? If there is what is that?

- There is a difference if you see it in a syntactic manner. however, there is no difference
in their working

5. 🎖 Write a function pow(x,n) that returns x in power n.

  * [ ] Use prompt to take values for x and n, and then shows the result of pow(x,n) using alert.
  * [ ] In this task the function should support only natural values of n: integers greater then 1.

```js
function pow(number, power) {
  let res = 1;
  
  while(power--) {
    res *= number;
  }
  
  return res;
}

// After writing code uncomment to check the answer.
// pow(3, 2); // 9
// pow(3, 3); // 27
// pow(1, 100); // 1
// pow(-31, 2); // "The number below 1 is not allowed"
```
6. 🎖Write a program that asks the user for a number n and gives them the possibility to choose between computing the sum and computing the product of 1,…,n. Return the result accordingly.

```js
  function factorial(n) {
    let fact = 1;
    for (var i = 1; i <= n; i++) {
      fact *= i;
    }

    return fact;
  }

  function computeRes() {
    let number = prompt('Enter a number of your choice');

    let choice = prompt('Enter 1 for sum \n Enter 2 for product');

    switch(choice) {
      case 1:
        alert(`Sum: ${ (number/2)*(2 + (number-1)) }`);
        break;
      case 2:
        alert(`product: ${ factorial(number) }`);
        break;
    }  
  }
  
```
6. 🎖Write a program that asks the user for a number n using prompt and prints the sum of the numbers 1 to n

```js
  let number = prompt('Enter a number');
  alert(`Sum: ${ (number/2)*(2 + (number-1)) }`);
```
7. 🎖Modify the previous program such that only multiples of 5 or 7 are considered in the sum, e.g. n = 20 (5,7,10,14,15,20) 71

```js
  let sum = 0;
  for (var i = 1; i <= 20; i++) {
    if (!(i % 5) || !(i % 7)) {
      sum += i;
    }
  }
  console.log(sum);
```

8. 🎖Write a function `min` that takes two arguments and returns their minimum.

```js
// Your code here.

function min(a, b) {
  return (a < b) ? a : b;
}

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10
```