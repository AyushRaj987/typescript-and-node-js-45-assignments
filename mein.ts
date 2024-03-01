//task 1

console.log("hallow world")

//task 2

let personname : string= "Ayush";

console.log ('hello Ayush world you like to learn some python today?');

//task 3

let persanolname : string = "Ayush saleem";
in lower case
console.log ("lowercase:",persanolname.toLowerCase());
in upercase
console.log("uppercase:",persanolname.toUpperCase());
title case
console.log("title case:", persanolname.toString());
result
console.log("lowercase","uppercase","title case");

// task 4

let qoute: string= "A person who never made a mistake naver tried anything new.";
let author : string = " albert Einstein"
console.log('${author) once said , ${quote}')

//task 5

person_name = "\t   John Doe\n"
console.log ('jhon')

console.log('jhon'())

//task 6

let personName :string="john doe";
console.log("orignal");
console.log("personName");

//task 7

console.log(5+3);

console.log(16/2);

console.log(10-2);

console.log(4+4    );

//task 9

let favoritnnumber : Number = 4;
console.log (' my favorit number is 4   ');

//task 10

date 19/02/2024
let favoritnnumber : Number = 4;
console.log (' my favorit number is 4   ');

//task 11


let names : string [] = ['amsiha','muzamil',"ayush","Raj"];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);

//task 12

let names : string[]=['raj','ali','ana','eva']
let message : string = "do you like a this person?"
console.log(names[0] + " " +message)
console.log(names[1] + " " +message)
console.log(names[2] + " " +message)
console.log(names[3] + " " +message)

//task 13

//let transptration : string [] + ['honda','super power','crown'];
transptration.map((items)) =>console.log('i would like to own a ${items}'))

//task 14

let guest : string[]=['ali','hamza','taniya'];
guest.map((items) => (console.log('dear $ { items },your are invited to the dinner')))

//task 15

let guest : string [] = ['ali','hamza','taniya'];
let cannotattend : string = 'ali'
console.log(cannotattend + ' '+ 'can not attend the dinner')
let newguset : string = 'alisha'
guest[guest.indexOf(cannotattend)] = newguset
guest.map(() =>
console.log('dear $ {items}.your invitde to the dinner')

// task 16

let dinnerGuests: string[] = ['Alice', 'Bob', 'Charlie'];

console.log("We found a bigger dinner table!");


dinnerGuests.unshift('David'); 
dinnerGuests.splice(Math.floor(dinnerGuests.length / 2), 0, 'Eve'); 
dinnerGuests.push('Frank'); 

// task 17

dinnerGuests.forEach(guest => {
    console.log(`Dear ${guest}, you are invited to the dinner party!`);
});

// task 18

console.log("We can only invite two people for dinner now.");


while (dinnerGuests.length > 2) {
   const removedGuest = dinnerGuests.pop();
   console.log(`Sorry ${removedGuest}, we can't invite you to dinner.`);
}

// task 19

dinnerGuests.forEach(guest => {
   console.log(`Dear ${guest}, you're still invited to the dinner party!`);
});

// task 20

dinnerGuests = [];
console.log("Empty guest list:", dinnerGuests);

Seeing the World
let placesToVisit: string[] = ['Paris', 'Tokyo', 'Venice', 'Rio de Janeiro', 'Santorini'];

// task 21 22 23
        let invitation : string [] = ['ali', 'bilal']
        let count_invitation : number = invitation.length

        console.log (count_invitation)+("people will come to the dinner");

        // task 24
        
let names1 : string [] =["ayush"]
let names2 : string [] =["zoe"]
let names3 : string [] =["raj"]
let names4 : string [] =["moon"]
if (names1 == names3)
{
  console.log("names are equal")

}
else
{
  console.log("names are not equal")
}
if (names1 != names3)
{
  console.log("names are equal")

}
else
{
  console.log("names are not equal")
}
let name2 : number =18
let name1 : number =22
if (name1 == 18)
{
  console.log("eligible for vote")

}
let age1 : number =18
let age2 : number =22
if (age2 == 22)
{
  console.log("eligible for vote in older category")
  
}

// task 25 26 27

placesToVisit.sort().reverse();
console.log("Sorted in reverse alphabetical order:", placesToVisit);

Dinner Guests
console.log(`Number of people invited to dinner: ${dinnerGuests.length}`);

Array of favorite items
let favoriteMountains: string[] = ['Mount Everest', 'K2', 'Matterhorn', 'Kangchenjunga', 'Mount Kilimanjaro'];

console.log("Favorite mountains:", favoriteMountains);

TypeScript Objects containing items
let favoriteThings: { [key: string]: string }[] = [
    { type: 'mountain', name: 'Mount Everest' },
   { type: 'river', name: 'Nile' },
   { type: 'country', name: 'Italy' },
   { type: 'language', name: 'JavaScript' },
];

console.log("Favorite things:", favoriteThings);

Intentional Error
let fruits: string[] = ['apple', 'banana', 'orange'];
console.log(fruits[3]); // This will cause an intentional error because there's no element at index 3.
And THe last one task

let car = "subaru";
console.log ("is car == 'subaru'? predict true")
   console.log(car == 'subaru')
   console.log("is cae !='honda city'?predict true")
    console.log(car != 'honda city')

    // task 28 ...... 2, 4, 13 ,20 ,64 older

    let age : number = 100
    if (age < 2) {
      console.log ("YOU ARE A BABY")
    } else if (age < 4){
      console.log("you are a toodler")
    } else if (age < 13){
      console.log("you are a kid")
    } else if (age < 20){
      console.log("you are a teenager")
    } else if (age < 65){
      console.log("you are a adult")
    } else {
      console.log("you are older")
    }

    // task 29

    let favorite_fruits : string [] = ["kivi" ,"oringe","apple"]
    if (favorite_fruits.includes("kivi")){
      console.log("kivi")
    }
    if (favorite_fruits.includes("peach")){
      console.log("you really like banana")
    }
    if (favorite_fruits.includes("oringe")){
      console.log("oringe")
    }
    if (favorite_fruits.includes("berry")){
      console.log("you really like banana")
    }
    if (favorite_fruits.includes("apple")){
      console.log("apple")
    }

    // task 30 to 32

     let users : string [] = ["ayush","aric ","haseen","ali", "fatima"]
     for (let user of users) {
      if (user === "ayush")
     
console.log ("hallo ayush, would you like to see a status report")
     }
    else {
      console.log("hallo ${user},thank you logging in again")
     }

let users : string [] = ["ayush","aric ","haseen","ali", "fatima","admin"]

if (users.length === 0) {
  console.log("we nrrd to find users!")
} else {
  for (let user of users){
    if (user === "admin") {
      console.log("hallo admin would you like to see a status report")
    } else {
      console.log("hallo $(user),thank you for loging in again")
    }
  }
}
users = []

if (users.length === 0) {
  console.log ("we need to find users")

}
    // task 32

    let current_usar : string [] = ["Ayush","Aric ","Haseen","Ali", "Fatima","Admin"]
    let new_usar : string [] = ["Ayush","Hasseb ","Aliza","Ali", "Noor","Admin"]

    let current_usar_lower : string [] = current_usar.map(usar => usar.toLowerCase())
    for (let new_usar of new_usar) {
      if (current_usar_lower.includes(new_usar.toLowerCase()))
      console.log ("sorry"(new_usar)"that name is taken")
    } else {
      console.log('yes'(new_usar)'is still in avalible list')
      
    }

    // task 33

    let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let num of numbers) {
    let ordinalEnding: string;
    
    if (num === 1) {
        ordinalEnding = "st";
    } else if (num === 2) {
        ordinalEnding = "nd";
    } else if (num === 3) {
        ordinalEnding = "rd";
    } else {
        ordinalEnding = "th";
    }

    console.log(`${num}${ordinalEnding}`);
}

// task 34

let favoritePizzas: string[] = ["Pepperoni", "Margherita", "BBQ Chicken"];

for (let pizza of favoritePizzas) {
    console.log(`I like ${pizza} pizza.`);
}

console.log("I really love pizza!");

task 35

let animals: string[] = ["Dog", "Cat", "Rabbit"];

for (let animal of animals) {
    console.log(`A ${animal.toLowerCase()} would make a great pet.`);
}

console.log("Any of these animals would make a great pet!");

// task 36

function make_shirt(size: string, message: string): void {
  console.log(`The shirt size is ${size} and the message printed on it is: ${message}`);
}
make_shirt("Medium", "Hello, World!");
    
// task 37

function make_shirt(size: string = "Large", message: string = "I love TypeScript"): void {
  console.log(`The shirt size is ${size} and the message printed on it is: ${message}`);
}

make_shirt();

make_shirt("Medium");

make_shirt("Small", "Hello, World!");

// task 38

function describe_city(city: string, country: string = "Pakistan"): void {
  console.log(`${city} is in ${country}.`);
}

describe_city("Karachi", "Pakistan");
describe_city("New York", "USA");
describe_city("Mirpurkhas");

// task 39

function city_country(city: string, country: string): string {
  return `${city}, ${country}`;
}


let city1 = city_country("Lahore", "Pakistan");
let city2 = city_country("New York", "USA");
let city3 = city_country("Paris", "France");

console.log(city1);
console.log(city2);
console.log(city3);

// task 40

function make_album(artist: string, title: string, tracks?: number): { artist: string, title: string, tracks?: number } {
  const album = {
      artist: artist,
      title: title
  };
  if (tracks !== undefined) {
      artist.artist = tracks;
  }
  return album;
}

let album1 = make_album("Artist1", "Album1");
let album2 = make_album("Artist2", "Album2", 12);
let album3 = make_album("Artist3", "Album3");

console.log(album1);
console.log(album2);
console.log(album3);

// task 41

function show_magicians(magicians: string[]): void {
  magicians.forEach(magician => console.log(magician));
}

let magicians: string[] = ["Harry ", "David", "Penn ", "Teller"];

show_magicians(magicians);

// task 42

function make_great(magicians: string[]): string[] {
  return magicians.map(magician => `the Great ${magician}`);
}

function show_magicians(magicians: string[]): void {
  magicians.forEach(magician => console.log(magician));
}

let magicians: string[] = ["Harry", "David ", "Penn ", "Teller"];

magicians = make_great(magicians);

show_magicians(magicians);

// task 43

function make_great(magicians: string[]): string[] {
  return magicians.map(magician => `the Great ${magician}`);
}

function show_magicians(magicians: string[]): void {
  magicians.forEach(magician => console.log(magician));
}


const originalMagicians: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];


const greatMagicians: string[] = make_great([...originalMagicians]);

console.log("Original Magicians:");
show_magicians(originalMagicians);

console.log("\nGreat Magicians:");
show_magicians(greatMagicians);

// task 44

function makeSandwich(...items: string[]): void {
  console.log("Making a sandwich with the following items:");
  for (const item of items) {
      console.log("- " + item);
  }
  console.log("Enjoy your sandwich!");
}

makeSandwich("Ham", "Cheese", "Lettuce");
makeSandwich("Turkey", "Swiss");
makeSandwich("Peanut Butter", "Jelly");

// task 45 

function carInfo(manufacturer: string, modelName: string, ...otherInfo: { [key: string]: any }[]): { manufacturer: string, modelName: string, [key: string]: any } {
  let car: { manufacturer: string, modelName: string, [key: string]: any } = {
      manufacturer: manufacturer,
      modelName: modelName
  };
  for (let info of otherInfo) {
      for (let key in info) {
          car[key] = info[key];
      }
  }
  return car;
}

const myCar = carInfo("Toyota", "Camry", color: "red", year: 2022);

console.log(myCar);

// end




























