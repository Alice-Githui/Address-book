//using Contact as a constructor to create a 'roadmap' that will be used to create new entries in the address book

function Contact (firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

let Anna = new Contact ("Anna", "McHughes")
console.log(Anna.firstName)
/*
console.log(Anna.firstName)
console.log(Anna.lastName); */

//user-interface logic 

/*$("#contactform").submit(function(event){
    event.preventDefault();
    
    let inputtedFirstName = $("input#First").val();
    let inputtedLastName = $("input#Last").val();

   // console.log(Anna.firstName)

    let newContact = new Contact(inputtedFirstName, inputtedLastName);

    $("ul#contacts").append("<li><span class ='contact'>" + newContact.firstName + "</span></li>");

    $("input#First").val(" ");
    $("input#Last").val(" ")
}); */




$(document).ready(function() {
    $("form#new-contact").submit(function(event) {
      event.preventDefault();
  
      var inputtedFirstName = $("input#new-first-name").val();
      var inputtedLastName = $("input#new-last-name").val();
  
      var newContact = new Contact(inputtedFirstName, inputtedLastName);
  
      $("ul#contacts").append("<li><span class='contact'>" + newContact.firstName + "</span></li>");
  
      $("input#new-first-name").val("");
      $("input#new-last-name").val("");
    });
  });  