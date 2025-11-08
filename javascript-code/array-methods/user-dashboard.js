// Tasks:
// Show only active users.


// Get a list of all user names.


// Find the first user older than 30.


// Check if all users are adults.


// Check if any user is inactive.


// Calculate the total of all user ages.


// Print “{name} is active” for each user.


const users = [
  { name: "Alice", age: 25, active: true },
  { name: "Bob", age: 35, active: false },
  { name: "Charlie", age: 20, active: true }
];


const activeUsers = users.filter(user => user.active === true)
const getUserNames = activeUsers.map(user => `${user.name}`)
const find = activeUsers.find(user => user.age < 30)
const checkAllUsersAreAdults = activeUsers.every(user => user.age >= 18)
const someUserInAactive = activeUsers.some(user => user.active === false)

const totalAge = activeUsers.reduce((sum, user) => sum + user.age, 0)








console.log(activeUsers);
console.log(getUserNames.join("\n"))
console.log(find)
console.log(checkAllUsersAreAdults)
console.log(someUserInAactive)
console.log(totalAge)