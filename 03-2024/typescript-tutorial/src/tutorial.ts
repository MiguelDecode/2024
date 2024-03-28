console.log("TypeScript Tutorial");

let awesomeName: string = "Miguel Decode";

awesomeName = "something";
awesomeName = awesomeName.toUpperCase();

console.log(awesomeName);
// awesomeName = 20; => Type number is not assignable to a type string

let amount: number = 20;
amount = 12 - 1;
// amount = 'pants' => Type number is not assignable to a type number

let isAwesome: boolean = true;
isAwesome = false;
// isAwesome = "Miguel Decode"; => Type string is not assignable to a type boolean

// CHALLENGE ONE

let username: string = "Miguel";
username = username.toUpperCase();
console.log(username);

let age: number = 38;
let ageNextYear = age + 1;
console.log(ageNextYear);

let isLogin: boolean = true;
if (isLogin) console.log(`The user ${username.toLowerCase()} is login.`);

// Error examples
/* username = 38;
age = "treinta y ocho";
isLogin = [1, 2, 3]; */
// FINISH CHALLENGE ONE

let tax: number | string = 10;
tax = 100;
tax = "$100";

let requestStatus: "pending" | "success" | "error" = "pending";
requestStatus = "success";
requestStatus = "error";

let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false;

const books = ["1984", "Brave New World", "Fahrenheit 451"];

let foundBook: string | undefined;

for (let book of books) {
  if (book === "1984") {
    foundBook = book;

    foundBook = foundBook.toUpperCase();
    break;
  }
}

console.log(foundBook);

console.log(foundBook?.length);

// CHALLENGE TWO
let orderStatus: "procesing" | "shipped" | "delivered" = "procesing";
orderStatus = "shipped";
orderStatus = "delivered";
// orderStatus = 'canceled' => Show an error

let discount: number | string = 20;
discount = "20%";
// FINISH CHALLENGE TWO

let prices: number[] = [100, 75, 42];
// prices.push('Hello')

let fruit: string[] = ["apple", "orange"];

// let randomValues:[] = ['hello']
let emptyValues: number[] = [];

let names = ["Peter", "Susan", 1];
let array: (string | boolean)[] = ["apple", true, "orange", false];

let temperatures: number[] = [20, 25, 30];
// temperatures.push("hot");

let colors: string[] = ["red", "green", "blue"];
// colors.push(true)

let mixedArray: (number | string)[] = [1, "two", 3];

let car: { brand: string; year: number } = { brand: "toyota", year: 2020 };

car.brand = "ford";
// car.color = 'blue'

let car1: { brand: string; year: number } = { brand: "audi", year: 2022 };

let book = { title: "book", cost: 20 };
let pen = { title: "pen", cost: 10 };
let notebook = { title: "notebook" };

let items: { readonly title: string; cost?: number }[] = [book, pen, notebook];

// items[0].title = "new book";

let bike: { brand: string; year: number } = { brand: "yamaha", year: 2010 };
// bike.year = 'old'

let laptop: { brand: string; year: number } = { brand: "Dell", year: 2020 };
// let laptop2: { brand: string; year: number } = { brand: "HP"};

let product1 = { title: "shirt", price: 20 };
let product2 = { title: "pants" };
let products: { title: string; price?: number }[] = [product1, product2];

products.push({ title: "shoes" });

function sayHi(name: string) {
  console.log(`Hello there ${name.toUpperCase()}.`);
}

sayHi("Miguel");
// sayHi(3);

function calculateDiscount(price: number) {
  const hasDiscount = true;

  if (hasDiscount) {
    return "Discount Applied";
  }

  return price * 0.9;
}

const finalPrice = calculateDiscount(200);
console.log(finalPrice);

function addThree(number: any) {
  let anotherNumber: number = 3;
  return number * anotherNumber;
}

const result = addThree(3);
const someValue = result;
console.log(result);

let superheros: string[] = ["Peter", "Thor", "Logan", "Ironman"];

const isSuperHero = (hero: string): boolean => superheros.includes(hero);

console.log(isSuperHero("Logan"));
console.log(isSuperHero("Ironman"));
console.log(isSuperHero("Green Arrow"));

function calculatePrice(price: number, discount?: number): number {
  return price - (discount || 0);
}

let priceAfterDiscount = calculatePrice(100, 20);
console.log(priceAfterDiscount);

let newPriceAfterDiscount = calculatePrice(100);
console.log(newPriceAfterDiscount);

function calculateScore(
  initialScore: number,
  penaltyPoints: number = 0
): number {
  return initialScore - penaltyPoints;
}

let scoreAfterPenalty = calculateScore(100, 20);
let scoreWithoutPenalty = calculateScore(300);

function sum(message: string, ...numbers: number[]): string {
  let total = numbers.reduce((prev, curr) => prev + curr, 0);
  return message + total;
}

let resultTwo = sum("The totals is: ", 1, 2, 3, 4, 5);

console.log(resultTwo);

function logMessage(message: string) {
  console.log(message);
}

logMessage("Hello, TypeScript");

const processInput = (input: number | string) => {
  if (typeof input === "number") console.log(input * 2);

  if (typeof input === "string") console.log(input.toUpperCase());
};

processInput(10);
processInput("Hello World");

function createEmployee({ id }: { id: number }): {
  id: number;
  isActive: boolean;
} {
  return {
    id,
    isActive: id % 2 === 0,
  };
}

const first = createEmployee({ id: 1 });
const second = createEmployee({ id: 2 });
console.log(first, second);

// Alternative

function createStudent(student: { id: number; name: string }): void {
  console.log(`Welcome to the course ${student.name.toUpperCase()}.`);
}

const newStudent = createStudent({
  id: 5,
  name: "Ana",
  email: "anna@gmail.com",
});
const olderStudent = createStudent({
  id: 1,
  name: "bob",
  email: "bobo@gmail.com",
});

const processData = (
  input: string | number,
  config: { reverse: boolean } = { reverse: false }
): number | string | undefined => {
  if (typeof input === "number") return input * input;

  if (typeof input === "string") {
    if (config.reverse) {
      return input.toUpperCase().split("").reverse().join("");
    } else {
      return input.toUpperCase();
    }
  }
};

console.log(processData(3, { reverse: false }));
console.log(processData(3, { reverse: true }));
console.log(processData("hello", { reverse: false }));
console.log(processData("hello", { reverse: true }));
console.log(processData("Hello World"));

type User = {
  id: number;
  name: string;
  isActive: boolean;
};

const john: User = {
  id: 1,
  name: "john",
  isActive: true,
};

const susan: User = {
  id: 1,
  name: "susan",
  isActive: true,
};

function createUser(user: User): User {
  console.log(`Hello there ${user.name}.`);
  return user;
}

type StringOrNumber = string | number;

let value: StringOrNumber;
value = "hello";
value = 123;
// value = true;

type Theme = "light" | "dark";

let theme: Theme;

theme = "dark";
theme = "light";

function setTheme(color: Theme) {
  theme = color;
}

setTheme("dark");

type Employee = {
  id: number;
  name: string;
  department: string;
};

type Manager = {
  id: number;
  name: string;
  employees: Employee[];
};

type Staff = Employee | Manager;

function printStaffDetails(staff: Staff): void {
  if ("employees" in staff) {
    console.log(
      `This person is a manager and has ${staff.employees.length} employees.`
    );
  } else {
    console.log(
      `${staff.name} is a employee and works in ${staff.department}.`
    );
  }
}

const staffOne: Staff = {
  id: 1,
  name: "Marcos",
  department: "Ventas",
};

const staffTwo: Staff = {
  id: 2,
  name: "Magdalena",
  department: "Ventas",
};

const staffThree: Staff = {
  id: 3,
  name: "Manuel",
  employees: [staffOne, staffTwo],
};

printStaffDetails(staffOne);
printStaffDetails(staffTwo);
printStaffDetails(staffThree);

type Book = { id: number; name: string; price: number };
type DiscountedBook = Book & { discount: number };

const book1: Book = {
  id: 1,
  name: "How to cook a dragon",
  price: 15,
};

const book2: Book = {
  id: 2,
  name: "The secret life of unicorns",
  price: 18,
};

const discountedBook: DiscountedBook = {
  id: 3,
  name: "Gnomes vs. Goblins: The Ultimate Guide",
  price: 25,
  discount: 0.15,
};

const propName = 'age'

type Animal = {
  [propName] : number
}

let tiger: Animal = {[propName]: 5}
