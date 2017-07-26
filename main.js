// 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// Then, write and example of using the function.

    // Your answer here

function max(num1, num2){

      if (num1 > num2) {
        return 'greaterThan';
      }else if (num1 < num2) {
        return 'lessThan';
      } else if (num1 === num2) {
        return 'equalto';
      }
    }

console.log(max(1, 1))




// 2.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// Then, write and example of using the function.
  // Your answer here

function maxOfThree(number1, number2, number3){
  if (number1 > number2 && number1 > number3){
    return number1;
  } else if (number2 > number1 && number2 > number3){
    return number2;
  } else if (number3 > number1 && number3 > number2){
    return number3;
  }
}

console.log(maxOfThree(56, 2, 256));
console.log(maxOfThree(256, 2, 56));
console.log(maxOfThree(2, 256, 56))

// 3.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// Then, write and example of using the function.

function isVowel(char){
  if (char.length ===1)

  if (char=== 'a' || char=== 'e' || char=== 'i'|| char === 'o' || char === 'u'){
    return true;
  } else {
      return false;
  }
}

// console.log(isVowel(char(s))) what?
// console.log('a'=== true)
// console.log('f'===false)
console.log(isVowel('e'))
console.log(isVowel('j'))



// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
// Then, write and example of using the function.

function sum (n1, n2) {
  return (n1 + n2)
}

console.log(sum(1,245))
console.log(sum(1,36))

// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
// Then, write and example of using the function.


function sumz (m1, m2, m3){
  return (m1 + m2 + m3)
}

function avg (n1, n2, n3){
  return sumz(n1, n2, n3) / 3
}


console.log(avg(1, 3, 10))


// 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
// Then, write and example of using the function.


function getLength(string){
  return string.length  //string is not defined
}
console.log(getLength('arm'))

// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// Then, write and example of using the function.

function greaterThan(one, two) {
  if (two>one){
    return "true";
  }
  else if (one>two || one ===two) {
    return "false";
  }
}

console.log(greaterThan(3,4))
console.log(greaterThan(4,3))


// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
// Then, write and example of using the function.

function greet(single){
  return "Hello, " + single + "!";
}

console.log(greet("Jimbob"))
console.log(greet("Gertrude"))

// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// Then, write and example of using the function.

function madlib(ay, bay, cay, day){
  return ay + " is like a " +  bay + " of " + cay + "s; you " + day + " know what you're gonna get!";
}

  console.log(madlib("Life", "box", "chocolate", "never"));
