//using Concat as a constructor to create a 'roadmap' that will be used to create new entries in the address book

function Concat (firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

let Anna = new Concat ("Anna", "McHughes")

console.log(Anna.firstName)
console.log(Anna.lastName);