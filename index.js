//1.Write a program to print "Hello, World!" to the console.
// console.log("Hello,World!");
---------------------------------------------------------------------------------
//2.Create a variable and assign a number to it. Print the value of the variable.
// let myAge = 20;
// console.log(myAge);
---------------------------------------------------------------------------------    
//3.Write a program to add two numbers and display the result.
// let firstNumber = 1;
// let secondNumber = 7;
// console.log(firstNumber + secondNumber);
---------------------------------------------------------------------------------
//4.Write a program to subtract two numbers and display the result.
// let number1 = 5;
// let number2 = 4;
// console.log(number1 + number2);
---------------------------------------------------------------------------------
//5.Write a program to multiply two numbers and display the result.
// let number1 = 3;
// let number2 = 7;
// console.log(number1 * number2);
---------------------------------------------------------------------------------
//6.Write a program to divide two numbers and display the result.
// let number1 = 20;
// let number2 = 5;
// console.log(number1 / number2);
---------------------------------------------------------------------------------
//7.Write a program to calculate the remainder of dividing two numbers.
// let number1 = 20;
// let number2 = 3;
// console.log(number1 % number2);
---------------------------------------------------------------------------------
//8.Create a variable and assign a string to it. Print the length of the string.
// let myName = "Zviad";
// console.log(myName.length);
---------------------------------------------------------------------------------
//9.Write a program to concatenate two strings and display the result.
// let myName = "Zviad ";
// let mySurname = "Kvara";
// console.log(myName + mySurname);
---------------------------------------------------------------------------------
//10.Write a program to convert a string to uppercase.
// let myString = "hello";
// console.log(myString.toUpperCase());
---------------------------------------------------------------------------------
//11Write a program to convert a string to lowercase.
// let myString = "ZvIAD";
// console.log(myString.toLowerCase());
---------------------------------------------------------------------------------
//12.Write a program to check if a number is even or odd.
// function checkNum(num) {
//   if (num % 2 == 0) {
//     return "its even number";
//   } else {
//     return "its odd number";
//   }
// }
// console.log(checkNum(0));
// console.log(checkNum(1));
// console.log(checkNum(8));
---------------------------------------------------------------------------------
//13.Write a program to check if a number is positive, negative, or zero.
// function checkNum(num) {
//   if (num > 0) {
//     return "positive";
//   } else if (num < 0) {
//     return "negative";
//   } else {
//     return "Zero";
//   }
// }
// console.log(checkNum(-5));
// console.log(checkNum(0));
// console.log(checkNum(5));
---------------------------------------------------------------------------------
//14.Write a program to find the maximum of two numbers.
// function maxNum(a, b) {
//   if (a > b) {
//     return "the max number is " + a;
//   } else if (a < b) {
//     return "the max number is " + b;
//   } else {
//     return "its equal";
//   }
// }
// console.log(maxNum(9, 8));
// console.log(maxNum(4, 8));
// console.log(maxNum(7, 7));
---------------------------------------------------------------------------------
//15.Write a program to find the minimum of two numbers.
// function minNum(a, b) {
//   if (a > b) {
//     return "minimum is " + b;
//   } else if (a < b) {
//     return `minimum is ${a}`;
//   } else {
//     ("its equal");
//   }
// }
// console.log(minNum(4, 2));
// console.log(minNum(3, 4));
// console.log(minNum(4, 4));

// function minNum(a, b) {
//   return Math.min(a, b);
// }
---------------------------------------------------------------------------------
//16.Write a program to check if a number is divisible by another number.
// function checkDiv(a, b) {
//   if (a % b === 0) {
//     return "divisible";
//   } else {
//     return "undivisible";
//   }
// }
// console.log(checkDiv(8, 5));
// console.log(checkDiv(8, 4));
---------------------------------------------------------------------------------
//17.Write a program to check if a string is empty or not.
// function emptySting(string){
//   if(string.length===0){
//     return "its empty"
//   }else{
//     return "its not empty"
//   }
// }
// console.log(emptySting(""));
// console.log(emptySting("hello"));
---------------------------------------------------------------------------------
//18.Write a program to check if a string contains a specific word.
// function specString(string, subString) {
//   if (string.includes(subString)) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(specString("hello", "ll"));
// console.log(specString("hello", "World"));
---------------------------------------------------------------------------------
// 19.Write a program to find the factorial of a number.
// 4 factorial is 4*3*2*1=24
// function factorialNum(number) {
//   let result = 1;
//   for (i = 1; i <= number; i++) {
//     result = result * i;
//   }
//   return result;
// }
// console.log(factorialNum(3));
---------------------------------------------------------------------------------
//20.Write a program to check if a number is prime or not.
// 1,2,3,5,7,9,11,13,17...

// function prime(num){
//     if(num<2){
//       return "its not a prime number";
//     }for(i=2;i<num;i++){
//       if(num % i === 0){
//         return "its not a prime number"
//       }
//     }
//     return "its a prime number"
//   }

//   console.log(prime(11));
//   console.log(prime(10));
//   console.log(prime(3));
//   console.log(prime(4));
---------------------------------------------------------------------------------
// 21.დაწერეთ პროგრამა სტრიქონის შებრუნებისთვის.
// Write a program to reverse a string.

// let str = "Hello";
// let output = str.split("").reverse().join("");
// console.log(output);
---------------------------------------------------------------------------------
//22.დაწერეთ პროგრამა, რომ იპოვოთ მასივის ყველა რიცხვის ჯამი.
// Write a program to find the sum of all numbers in an array.
// function sumArr(arr){
//   let number = 0;
//   for(i=0;i<arr.length;i++){
//     number = number +arr[i]
//   }
//   return number;
// }
// console.log(sumArr([1,2,3,4]))

//23.დაწერეთ პროგრამა მასივში რიცხვების საშუალოს საპოვნელად.
// Write a program to find the average of numbers in an array.
// function avarage(arr){
//     let sum = 0;
//     for(i = 0; i < arr.length; i++){
//         sum = sum + arr[i];
//     }
//     let avarage = sum /arr.length;
//     return avarage;
// }
// console.log(avarage([1,2,3,4]));

// 24.დაწერეთ პროგრამა მასივიდან დუბლიკანტების მოსაშორებლად.
// Write a program to remove duplicates from an array.

// const arr = [1,2,3,1,2,3,4,4,5];
// function duplicates(arr){
//   let result = [];
//   for(let i =0;i<arr.length;i++){
//     if(!result.includes(arr[i])){
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }
// console.log(duplicates(arr));

//25.დაწერეთ პროგრამა რიცხვების მასივის ზრდის მიხედვით დასალაგებლად.
// Write a program to sort an array of numbers in ascending order.
// const arr = [5, 2, 8, 7, 1];
// arr.sort();
// console.log(arr);

//26.დაწერეთ პროგრამა მასივში ყველაზე დიდი ელემენტის მოსაძებნად.
// Write a program to find the largest element in an array.
// const arr = [4,5,7,9,11,13,14,19,1]
// function largest(arr){
//   let max = arr[0];
//   for (i=1;i<arr.length;i++);
//     if(arr[i]>max){
//     max = arr[i]
//   }
//   return max;
// }
// console.log(largest(arr));

//27. დაწერეთ პროგრამა მასივის ყველაზე პატარა ელემენტის მოსაძებნად.
// Write a program to find the smallest element in an array.

// const arr = [2,4,6,8,9,2,10,19,7];
// function smallest(arr){
//   let min = arr[0];
//   for (let i = 1; i < arr.length; i++){
//     if(arr[i] < min){
//       min = arr[i];
//     }
//   }
//   return min;
// }
// console.log(smallest(arr));

//28.დაწერეთ პროგრამა, რათა შეამოწმოთ, შეიცავს თუ არა მასივი კონკრეტულ ელემენტს.
// Write a program to check if an array contains a specific element.
// const arr = [1,2,3,11];
// function spec(arr,element){
//   for (let i = 0;i < arr.length; i++){
//     if(arr[i] === element){
//       return true;
//     }
//  }
//   return false;
// }
// console.log(spec(arr,7));

//29.დაწერეთ პროგრამა მასივიდან ელემენტის ამოსაღებად.
// Write a program to remove an element from an array.

// const arr = [1,2,3,4,5,6];
// function remove(arr,index){
//   if(index < 0 || index > arr.length ){
//     return false;
//   }
//    return arr.splice(index,1);
// }

// console.log(remove(arr,0));

//30.დაწერეთ პროგრამა მასივში კონკრეტული ელემენტის გავრცელების რაოდენობის დასათვლელად.
// Write a program to count the number of occurrences of a specific element in an array.

// const arr = [1,2,7,7,7];
// function specEl(arr,element){
//   let count = 0;
//   for( let i = 0; i < arr.length; i ++){
//     if(element === arr[i]){
//       count++;
//     }
//   }
// return count;
// }
// console.log(specEl(arr,7));
// console.log(specEl(arr,3));
// console.log(specEl(arr,2));

//31.დაწერეთ პროგრამა წინადადებაში ყველაზე გრძელი სიტყვის სიგრძის საპოვნელად.
//Write a program to find the length of the longest word in a sentence.
// const sentence = "Death is mine";
// function longest(sentence){
//     let words = sentence.split(" ");
//     let longestword = "";
//     for (let word of words){
//         if(word.length > longestword.length){
//             longestword = word;
//         }
//     }
//     return longestword.length;
// }
// console.log(longest(sentence));

//32.დაწერეთ პროგრამა, რათა შეამოწმოთ არის თუ არა სტრიქონი პალინდრომი.
//Write a program to check if a string is a palindrome.
// const str = "madam"
// function palindrome(str){
//   let reversed = str.split("").reverse().join("")
//   if(reversed === str)
//     return true;
//     return false;

// }

// console.log(palindrome(str));

//33.დაწერეთ პროგრამა რომ წინადადებაში თითოეული სიტყვის პირველი ასოს დიდი ასოებით შეცვალოს.
//Write a program to capitalize the first letter of each word in a sentence.
// const sentence = "Hello I'm the death.";

// function capitalize(sentence){
//   let words = sentence.toLowerCase().split(" ");

//   for(i = 0;i<words.length;i++){
//        words[i] = words[i][0].toUpperCase()+ words[i].slice(1);
//     }
//   return words.join(" ");
//   }

// console.log(capitalize(sentence));

//34.დაწერეთ პროგრამა, რომ იპოვოთ მასივის ყველა ლუწი რიცხვის ჯამი.
//Write a program to find the sum of all even numbers in an array.

// let arr = [1,4,6,7];

// function evenSum(arr){
//   let result = 0;
//   for (i=0;i<arr.length;i++){
//     if(arr[i] % 2 === 0){
//       result = result + arr[i];
//     }
//   }
//   return result;
// }

// console.log(evenSum(arr))

//35.დაწერეთ პროგრამა წინადადებაში სიტყვების თანმიმდევრობის შესაბრუნებლად.
//Write a program to reverse the order of words in a sentence.

// const sentence ="Hello World";
// let reversed = sentence.split(" ").reverse().join(" ");

// console.log(reversed);

//36.დაწერეთ პროგრამა მასივში სიდიდით მეორე რიცხვის მოსაძებნად.
//Write a program to find the second largest number in an array.
// const arr = [3,23,4,9,7,66]
// function findmax2(arr){
//   let sorted = arr.sort((a,b) => a-b);

//   let max2 = sorted[sorted.length-2];
//   return max2;
// }
// console.log(findmax2(arr));

//37.დაწერეთ პროგრამა, რათა შეამოწმოთ არის თუ არა ორი მასივი ტოლი.
//Write a program to check if two arrays are equal.
// const arr1 = [1,2,3];
// const arr2= [1,2,3];
// function equal(arr1,arr2){
//  if (arr1.length !== arr2.length){
//    return false;
//  }
// for (let i =0;i < arr1.length;i++){
//     if(arr1[i] !== arr2[i]){
//       return false;
//     }
//   }
//   return true;
// }
//   console.log(equal(arr1,arr2));

//38.დაწერეთ პროგრამა მასივში ელემენტის პირველი ადგილმდებარეობის ინდექსის მოსაძებნად.
//Write a program to find the index of the first occurrence of an element in an array.
// const arr = [1, 2, 3, 4];
// let element = 4;
// let index = findindex(arr, element);

// function findindex(arr, element) {
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] === element) {
//       return i;
//     }
//   }
//   return false;
// }
// console.log(index);

//!!!!!!39.დაწერეთ პროგრამა, რომ ამოიღოთ ყველა ცრუ მნიშვნელობა მასივიდან.
//Write a program to remove all falsy values from an array.
// const arr = [1, 2, 3, false, 0, null, 4, NaN];
// let removefalse = remove(arr);

// function remove(arr) {
//   let arr1 = [];
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i]) {
//     }
//   }
//   return arr1;
// }
// console.log(removefalse);

//40.დაწერეთ პროგრამა მრავალგანზომილებიან მასივში ყველაზე დიდი ელემენტის მოსაძებნად.
//Write a program to find the largest element in a multi-dimensional array.
// const arr = [
//   [1, 2, 3],
//   [4, 8, 6]
// ];
// let result = findMax(arr);

// function findMax(arr) {
//   let max = 0;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//       if (arr[i][j] > max) {
//         max = arr[i][j];
//       }
//     }
//   }
//   return max;
// }
// console.log(result);

//41.დაწერეთ პროგრამა, რომ ამოიღოთ ყველა დუბლიკატი მასივიდან.
// Write a program to remove all duplicates from an array.
// const arr = [1, 2, 3, 6, 6, 3, 3, 4, 5];
// let result = removeDuplicates(arr);

// function removeDuplicates(arr) {
//   let arr1 = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (!arr1.includes(arr[i])) {
//       arr1.push(arr[i]);
//     }
//   }
//   return arr1.sort();
// }
// console.log(result);

//42.დაწერეთ პროგრამა მასივში ელემენტის ბოლო ადგილმდებარეობის ინდექსის მოსაძებნად.
// Write a program to find the index of the last occurrence of an element in an array.
// const arr = [1,2,3,4,5];
// let result = indexOf(arr);

// function indexOf(arr){
//  let number = arr.length-1;
// }
// console.log(result);

//43.დაწერეთ პროგრამა რომ ორი სორტირებული მასივის შერთდეს და გახდეს ერთი მასივი რომელიც ასევე სორტირებული იქნება.
// Write a program to merge two sorted arrays into a single sorted array.

// const arr1 = [1,2,4,3,5];
// const arr2 = [4,8,6,7,9,0];
// const marged = arr1.concat(arr2).sort();
// console.log(marged)

//44.დაწერეთ პროგრამა სტრიქონების მასივის ანბანის მიხედვით დასალაგებლად.
// Write a program to sort an array of strings in alphabetical order.

// const arr = ["beta","alpha","gama","jemali","candy"]
// sorted = arr.sort();
// console.log(sorted)

//45.დაწერეთ პროგრამა მრავალ მასივებს შორის საერთო ელემენტების მოსაძებნად.
// Write a program to find the common elements among multiple arrays.
// let arr1 = [1, 5, 4];
// let arr2 = [3, 4, 5];
// let result = findCommon(arr1, arr2);

// function findCommon(arr1, arr2) {
//   let common = [];
//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       if (arr1[i] === arr2[j]) {
//         common.push(arr2[i]);
//       }
//     }
//   }
//   return common;
// }
// console.log(result);

//46.დაწერეთ ფუნქცია, რომელიც მიიღებს sentence-ს პარამეტრად და დააბრუნებს სიტყვების მასივს ანბანური თანმიმდევრობით, "the", "a" და "is-ის გამოკლებით.
// Write a function that takes a sentence as input and returns an array of unique words in alphabetical order, excluding common English words such as "the", "a", and "is".

// let sentence = "A is fox jumps over the dog.";
// let result = unique(sentence);

// function unique(sentence) {
//   let sentence1 = sentence.toLowerCase();
//   let sentence2 = sentence1.split(" ");

//   let filtered = sentence2.filter(
//     element => element !== "the" && element !== "a" && element !== "is"
//   );
//   return filtered;
// }
// console.log(result);

//47.დაწერეთ ფუნქცია, რომელიც იღებს სტრიქონს შეყვანად და აბრუნებს ჭეშმარიტს, თუ ის არის პანგრამა (შეიცავს ანბანის ყველა ასოს ერთხელ მაინც), ცრუ სხვა შემთხვევაში.
// Write a function that takes a string as input and returns true if it is a pangram (contains every letter of the alphabet at least once), false otherwise.
// let sentence = "abcdefghijklmnopqrstuvwxyz";
// let result = pangram(sentence);

// function pangram(sentence) {
//   let alphabet = "abcdefghijklmnopqrstuvwxyz";
//   let sentence1 = sentence.toLowerCase();
//   if (sentence1.includes(alphabet)) {
//     return true;
//   }
//   return false;
// }

// console.log(result);
//48.დაწერეთ ფუნქცია, რომელიც მიიღებს ობიექტების მასივს და თვისების სახელს და აბრუნებს ამ თვისების უნიკალური მნიშვნელობების მასივს ყველა ობიექტიდან.
// Write a function that takes an array of objects and a property name, and returns an array of unique values for that property across all objects.

// let arr = [
//   { name: "Alpha", age: 40 },
//   { name: "Beta", age: 30 }
// ];

// let arr1 = arr.map(obj => [obj.name, obj.age]);

// console.log(arr1);

//49.დაწერეთ ფუნქცია, რომელიც იღებს სტრიქონს ინფუთად და აბრუნებს ობიექტს, რომელიც შეიცავს სტრიქონში თითოეული სიმბოლოს რაოდენობას, სივრცეების გამოკლებით.
// Write a function that takes a string as input and returns an object containing the count of each character in the string, excluding spaces.
// const string = "hello world";
// let result = countCharacters(string);

// function countCharacters(string) {
//   let count = {};

//   for(let i=0;i<string.length;i++){
//     let char = string[i];
    
//     if(char !== " "){
//       if(!count[char]){
//         count[char] = 1;
//       }else 
//         count[char]++;
//     }
//   }
//   return count
// }
// console.log(result)
//50.დაწერეთ ფუნქცია, რომელიც იღებს სტრიქონს ინფუთად და აბრუნებს ყველაზე გრძელ ქვესტრინგს, რომელიც შეიცავს მხოლოდ უნიკალურ სიმბოლოებს. თუ არსებობს რამდენიმე ქვესტრიქონი იმავე სიგრძით, დააბრუნეთ პირველი, რომელსაც შეხვდებით.
// Write a function that takes a string as input and returns the longest substring that contains only unique characters. If there are multiple substrings with the same length, return the first one you encounter.
// let string = "hi the";
// let result = longest(string);

// function longest(string){
//   let str = string.split(" ");
//   let max = "";
  
//   for(let i=0;i < str.length;i++){
//     if(str[i].length > max.length){
//       if(str[i] != "a" && str[i] != "the" && str[i] != "is")
//       max = str[i];
//     }
//   }
//   return max
// }

// console.log(result);

//ეტაპი 1 
//დავალება 1
// 1. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.
// Sample arguments : 'w3resource.com', 'o'
// Expected output : 2
// let string = "hello world";
// let letter = "l";
// let result = countLetter(string,letter);

// function countLetter(string,letter){
//     let count = 0;
//   for (let i=0;i <string.length;i++){
//     if(string[i] === letter){
//       count++;
//     }  
//   }
//   return count
// }
// console.log(result)

// 2. Write a JavaScript function to apply the Bubble Sort algorithm.
// Sample array : [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
// Expected output : [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]
// let sorted = arr.sort((a,b) => b-a)
// console.log(sorted);

// 3. Write a JavaScript function that accepts a list of country names as input and returns the longest country name as output.
// Sample function : Longest_Country_Name(["Australia", "Germany", "United States of America"])
// Expected output : "United States of America"
// let result = longest(arr);

// function longest(arr){
//   let largest = "";
//   for (let i=0;i < arr.length;i++){
//     if(arr[i].length > largest.length){
//       largest = arr[i]
//     }
//   }
//   return largest;
// }
// console.log(result)

// 4. Write a JavaScript function that takes an array of numbers and finds the second lowest and second greatest numbers, respectively.
// Sample array : [1,2,3,4,5]
// Expected Output : 2,4
// let arr = [2,4,5,6,9];
// let result = find(arr);

// function find(arr){
//   let arr1=arr.sort((a,b)=> a-b);
//   let lowest = arr1[1];
//   let greatest = arr1[arr1.length -2];
//   return [lowest,greatest]
// }
// console.log(result)
// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word into upper case.
// Example string : 'the quick brown fox'
// Expected Output : 'The Quick Brown Fox '

// let str = "the quick brown fox";
// let result = upper(str);

// function upper(str){
//  let words = str.toLowerCase().split(" ")
//   for(let i=0; i < words.length; i++){
    
//     words[i] = words[i][0].toUpperCase()+words[i].slice(1)
//   }
//   return words.join(" ")
// }
// console.log(result)

// 6. Write a JavaScript function that returns a string that has letters in alphabetical order. 
// Example string : 'webmaster'
// Expected Output : 'abeemrstw'
// let str = 'webmaster'
// function correct(str){
//   let char = str.split("");
//   let sorted = char.sort().join("");
  
//   return sorted
// }

// console.log(correct(str))

//!!!!!!! 7. Write a JavaScript function that generates all combinations of a string. 
// Example string : 'dog'
// Expected Output : d,do,dog,o,og,g
// function combination(str){
//   let newWord = str.split("").reverse().join("");
//   let arr = [];
//   let word;
//   for (let i=0;i<str.length;i++){
//     word = str.slice(0,(str.length-(str.length-i-1)));
//     arr.push(word);
//   }
//   for (let j=0;j<newWord.length;j++){
//     word = newWord.slice(0,(newWord.length-(newWord.length-j-1)));
//     arr.push(word);
//   }
//   return arr;
// }
// console.log(combination(str));

// let str = "dog"

// function combination(str){
//   let newWord = str.split("").reverse().join("");
//   let arr = [];
//   let word;
//   for (let i=0;i<str.length;i++){
//      word = str.slice(0,i+1)
    
    
//     arr.push(word);
//   }
//   for (let j=0;j<newWord.length;j++){
    
//     word = newWord.slice(0,j+1);
//     arr.push(word);
//   }
//   return arr;
// }
// console.log(combination(str));

// !!!!!!8. Write a JavaScript function to find the first not repeated character.
// Sample arguments : 'abacddbec'
// Expected output : 'e'

// let str = 'abacddbec';
// let result = notRepeated(str);

// function notRepeated(str) {
//   let splited = str.split('');
//   let noRepeated = '';
//   let main = {};

//   for (let i = 0; i < splited.length; i++) {
//     if (!main[splited[i]]) {
//       main[splited[i]] = 1;
//     } else {
//       main[splited[i]]++;
//     }
//   }

//   console.log(main)
//   console.log(splited)

//   for (let j = 0; j < splited.length; j++) {
//     if (main[splited[j]] === 1) {
//       noRepeated = splited[j]
//       break;
//     }
//   }
//   return noRepeated;
// }
// console.log(result);
