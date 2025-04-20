//Part 1: For Loops,Problem 1: Count to 10
//Use a for loop to print numbers 1 through 10 in the console.
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
//Problem 2: Even Numbers
//Print all even numbers from 2 to 20 using a for loop
for (let i = 2; i <= 20; i += 2) {
  console.log(i);
}
//Problem 3: Loop through an Array
//Loop through the animals array and print each animal with a message like: i like dogs
let animals = ["dog", "cat", "rabbit", "parrot"];
animals.forEach((element) => {
  console.log(`I like ${element}`);
});
//Problem 4: Reverse Array Output
//Use a for loop to print the array in reverse order
let colors = ["red", "green", "blue", "yellow"];
for (let i = colors.length - 1; i >= 0; i--) {
  console.log(colors[i]);
}
//Part 2: Objects
// Problem 5: Simple Object
//Create an object named person with properties:name,age,favorite color.Log a message using all three values.
let person = {
  name: "Erica McMillan",
  age: 32,
  favoriteColor: "maroon",
};
person.hobby = "gaming";
console.log(
  `My name is ${person.name}, I am ${person.age} years old, and my favorite color is ${person.favoriteColor}.`
);
console.log(person);

// Problem 6: Modify an Object,Add a new property hobby to the person object using dot notation.above
//Problem 7: Array of Objects,Create an array of 3 book objects. Each book should have:title,author,pages
//Loop through the array and print each book
let books = [
  {
    title: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    pages: 310,
    isFavorite:true
  },
  { title: "Pride and Prejudice", author: "Jane Austen", pages: 410 , isFavorite: false },
  { title: "1984", author: "George Orwell", pages: 510 , isFavorite: false },
];
for (let i = 0; i < books.length; i++) {
  console.log(
    `title: ${books[i].title}, author: ${books[i].author}, pages: ${books[i].pages}`
  );
}
//Problem 8: Favorite Book Finder,Inside your array of books, add a property isFavorite: true to one of them.
for (let i = 0; i < books.length; i++) {
    if(books[i].isFavorite){
        console.log(books[i])
    }

  }
  