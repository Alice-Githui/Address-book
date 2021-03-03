//using Contact as a constructor to create a 'roadmap' that will be used to create new entries in the address book
//business logic
function Contact (firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
    this.addresses =[]; //creates an empty array of address associated with the object Contact so each new address created is pushed to this address
}

function Address (street, city, county){
  this.street = street;
  this.city = city;
  this.county = county;
}
Contact.prototype.fullName = function(){ return this.firstName + " " + this.lastName};
Address.prototype.fullAddress = function(){ return this.street + " " + this.city + " " + this.county}

let Anna = new Contact ("Anna", "McHughes") //creates a new variable named Anna
//console.log(Anna) //- --was a debugger
let home = new Address("Lavington" , "Nairobi" , "Nairobi") //make a new entry that defines a new Address
//console.log(home)

Anna.addresses.push(home); //this is done to push the variable home to our array address in the variable Anna
//console.log(Anna); // to check if the address has been pushed to our variable Anna

//console.log(Anna.addresses[0]);


/*
console.log(Anna.firstName)
console.log(Anna.lastName); */

//user-interface logic 
//this is added so that every time the user clicks on new address the below HTML code will be added to the form inputs 
$('#add-address').click(function(){
  $('#new-addresses').append( '<div class ="new-address"> '+
                                 '<div class="street">' +
                                   '<label for ="Street">Street:</label>' +
                                    '<input type="text" id="Street" placeholder=" ">'+
                                  '</div>' +
                                  '<div class="city">' +
                                      '<label for="City">City:</label>' +
                                      '<input type="text" id="City" placeholder=" ">' +
                                  '</div>' +
                                  '<div class="county">' +
                                      '<label for ="county">County:</label>' +
                                      '<input type="text" id="county" placeholder=" ">'+
                                  '</div>' +
                               '</div>'); 
}); 



$("#contactform").submit(function(event){
    event.preventDefault();
    
    let inputtedFirstName = $("input#First").val();
    let inputtedLastName = $("input#Last").val();

    let newContact = new Contact(inputtedFirstName, inputtedLastName);
    $("ul#contacts").append("<li><span class = 'contact'>" + newContact.fullName()  + "</span></li>");



    $('.new-address').each(function(){
      var inputtedStreet =$(this).find('input#Street').val();
      var InputtedCity =$(this).find('input#City').val();
      var InputtedCounty = $(this).find('input#county').val();
      var newAddress = new Address (inputtedStreet, inputtedCity, inputtedCounty);
      newContact.addresses.push(newAddress);

    }); 

    $("ul#contacts").append("<li><span class = 'contact'>" + newContact.fullName()  + "</span></li>");


  $(".contact").last().click(function(){
    $("#show-contact").show();
    $("#show-contact h2").text(newContact.firstName);
    $(".first-name").text(newContact.firstName);
    $(".last-name").text(newContact.lastName);
    //$("ul#addresses").text(" ");
    //newContact.addresses.forEach(function(address){
      //$('ul#addresses').append("<li>" + address.fullAddress + "</li>")

      // this line of code below is replaced by the one above since we have created a prototype which defines our fullAddress to incorporate all the details of street, city and county 
      //$('ul#addresses').append("<li>" + address.street + " ," + address.city + " , " + address.county + "</li>"); 

    });
 
  });

  //these are also defined where we define the variable inputtedFirstName and inputtedLastName
 // $("input#First").val(" ");
 // $("input#Last").val(" ")
 // $("input#Street").val(" ")
 // $("input#City").val(" ")
 // $("input#county").val(" ")
//}); 

//If we didn't add last() to $(".contact"), each time a new contact was added, every element with the Contact class would show the information of the most recently added contact on click. By adding last(), we only bind the event to most recently-inserted contact.




/*
$(".contact").last().click(function() {
  $("#show-contact").show();
  $("#show-contact h2").text(newContact.firstName);
  $(".first-name").text(newContact.firstName);
  $(".last-name").text(newContact.lastName);
});  */
