//using Contact as a constructor to create a 'roadmap' that will be used to create new entries in the address book
//business logic
function Contact (firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}
Contact.prototype.fullName = function(){ return this.firstName + " " + this.lastName};

let Anna = new Contact ("Anna", "McHughes")
console.log(Anna.firstName)
/*
console.log(Anna.firstName)
console.log(Anna.lastName); */

//user-interface logic 

$("#contactform").submit(function(event){
    event.preventDefault();
    
    let inputtedFirstName = $("input#First").val();
    let inputtedLastName = $("input#Last").val();

   // console.log(Anna.firstName)

    let newContact = new Contact(inputtedFirstName, inputtedLastName);

    $("ul#contacts").append("<li><span class ='contact'>" + newContact.fullName()  + "</span></li>");

    //these are also defined where we define the variable inputtedFirstName and inputtedLastName
   // $("input#First").val(" ");
    //$("input#Last").val(" ")
}); 

//If we didn't add last() to $(".contact"), each time a new contact was added, every element with the Contact class would show the information of the most recently added contact on click. By adding last(), we only bind the event to most recently-inserted contact.


$(".contact").last().click(function(){
  $("#show-contact").show();
  $("#show-contact h2").text(newContact.firstName);
  $(".first-name").text(newContact.firstName);
  $(".last-name").text(newContact.lastName);
});

/*
$(".contact").last().click(function() {
  $("#show-contact").show();
  $("#show-contact h2").text(newContact.firstName);
  $(".first-name").text(newContact.firstName);
  $(".last-name").text(newContact.lastName);
});  */


/*$(document).ready(function() {
    $("form#new-contact").submit(function(event) {
      event.preventDefault();
      //console.log(Anna)
  
      var inputtedFirstName = $("input#new-first-name").val();
      var inputtedLastName = $("input#new-last-name").val();
      
  
      var newContact = new Contact(inputtedFirstName, inputtedLastName);
  
      $("ul#contacts").append("<li><span class='contact'>" + newContact.firstName + "</span></li>");
  
      $("input#new-first-name").val("");
      $("input#new-last-name").val("");
    });
  });  */