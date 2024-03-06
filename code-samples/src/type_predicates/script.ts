// initial code

type User = {
  id: number;
  name: string;
};
// type Employee expand type User with additional info
type Employee = User & {
  email: string;
};

const people: (User | Employee)[] = [
  { id: 1, name: "Kyle" },
  { id: 1, name: "Helen" },
  { id: 1, name: "Mike", email: "mike@test.com" },
  { id: 1, name: "Nick", email: "nick@test.com" },
];

// (parameter) person: User | Employee - works good
people.forEach((person) => {
  if ("email" in person) {
    console.log(`My employee email is ${person.email}`); // (parameter) person: Employee
  } else {
    console.log(`I'm just a user named ${person.name}`); // (parameter) person: User
  }
});

//

// but if we add a function to check instead of if ("email" in person)
// function isEmployee1(person: User | Employee) {
//   return "email" in person;
// }

// typescript is no longer able to infer what this person is
// people.forEach((person) => {
//   if (isEmployee1(person)) {
// getting an error:
// Property 'email' does not exist on type 'User | Employee'.
// Property 'email' does not exist on type 'User'.
//     console.log(`My employee email is ${person.email}`);
//   } else {
//     console.log(`I'm just a user named ${person.name}`);
//   }
// });

//

// to avoid such errors we can tell about this type narrowing === type predicates
// as a return value we take the variable that we want to narrow the type
function isEmployee(person: User | Employee): person is Employee {
  return "email" in person;
}

// no errors
people.forEach((person) => {
  if (isEmployee(person)) {
    console.log(`My employee email is ${person.email}`);
  } else {
    console.log(`I'm just a user named ${person.name}`);
  }
});
