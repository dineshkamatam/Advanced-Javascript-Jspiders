// destructuring

// let languages = ["java", "javascript", "nodejs", "python", "php", "reactjs"]; //array zip
// let [java, js, node, py] = languages;

// console.log(java);
// console.log(js);
// console.log(node);
// console.log(py);

//destructuring with REST

// let [ja, ...rest] = languages;
// console.log(ja);
// rest.forEach((x) => console.log(x));

//destructuring with default values
// let a, b;

// let [x = "shahsi", y = "manu"] = [(a = "shishira"), (b = "javascript")];

// console.log(x);
// console.log(y);

//swapping values with destruturing
let a = "shashi",
  b = "manu";

let [x, y] = [b, a];

console.log(x, y);

//object destructuring
let users = {
  username: "manu",
  age: 20,
  company: "test yanthra",
  salary: 20000,
  designation: "nodejs developer",
};

let {username, age, ...rest} = users;
console.log(username);
console.log(age);
console.log(rest);
