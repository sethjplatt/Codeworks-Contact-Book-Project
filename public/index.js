/*
Count variable used to assign unique id's to each contact
These id's are what we will reference to delete a contact
*/
let count = 3;

/*
Array that holds all contacts. 
It acts as a searchable database we can later add contacts to and delete contacts from.
*/
let contacts = [
  //gave contacts array a few default contacts
  {
    firstName: "Seth",
    lastName: "Platt",
    phoneNumber: "4258306261",
    address: "600 S 1st St",
    id: 0,
  },
  {
    firstName: "Paul",
    lastName: "Jones",
    phoneNumber: "2065415602",
    address: "10 Lake Rd",
    id: 1,
  },
  {
    firstName: "James",
    lastName: "Stevens",
    phoneNumber: "8180981265",
    address: "988 Willow Blvd",
    id: 2,
  },
];

//all form input fields are cleared when a contact is added.
function resetForm() {
  $(".input-box").val("");
}

/*
This function creates a contact object
The object is then pushed into our "database" contacts array. Values retrieved from HTML form.
*/
function addContact(firstName, lastName, phoneNumber, address) {
  let newContact = {
    firstName: $("#first-name").val(),
    lastName: $("#last-name").val(),
    phoneNumber: $("#phone-number").val(),
    address: $("#address").val(),
    id: count,
  };
  count++;
  //form validation to ensure every contact has a first name, last name, phone number, and address
  if (
    newContact.firstName === "" ||
    newContact.lastName === "" ||
    newContact.phoneNumber === "" ||
    newContact.address === ""
  ) {
    alert("Please Enter All Contact Information To Add A Contact");
  } else {
    contacts.push(newContact);
    //form fields are reset
    resetForm();
    //clear called so that each contact list element is displayed only once upon new contacts being added
    clear();
    //when new contact is added, display updated contact list
    displayContacts(contacts);
  }
}

//clears all contact list elements on the HTML file
function clear() {
  $("#contacts-container").html("");
}

/*
when any key is typed into or deleted from search-bar
the current search input is checked against all contacts first name, last name, phone number, and address
*/
$("#search-bar").on("input", function (event) {
  //tutorial citation https://www.youtube.com/watch?v=wxz5vJ1BWrc&t=591s to get current input value
  let currentSearch = event.target.value.toLowerCase();
  //any contact list element that matches the current input will be returned in the new filteredContacts array. Case insensitive
  let filteredContacts = contacts.filter((contact) => {
    // check all input values against first name, last name, phone number, address
    return (
      contact.firstName.toLowerCase().includes(currentSearch) ||
      contact.lastName.toLowerCase().includes(currentSearch) ||
      contact.phoneNumber.toLowerCase().includes(currentSearch) ||
      contact.address.toLowerCase().includes(currentSearch)
    );
  });
  //clear called so that contact list is displayed only once on page
  clear();
  //any contact that includes the current search input will be displayed
  displayContacts(filteredContacts);
});

//creates html elements from contacts "database" array of objects
function displayContacts(contacts) {
  //create unordered list to store contact list elements in
  let contactsElms = $("<ul></ul>");
  //loop through each contact object in the contacts array
  let contactListElm = contacts.map(function (contact) {
    //within each new contact list item, create multiple HTML elements for the corresponding contact object key value pairs
    let wrapper = $("<li></li>").addClass("contact").addClass("row-item");
    let firstName = $("<span></span>")
      .addClass("first-name")
      .addClass("col-item")
      .html(contact.firstName);
    let lastName = $("<span></span>")
      .addClass("last-name")
      .addClass("col-item")
      .html(contact.lastName);
    let phoneNumber = $("<span></span>")
      .addClass("phone-number")
      .addClass("col-item")
      .html(contact.phoneNumber);
    let address = $("<span></span>")
      .addClass("address")
      .addClass("col-item")
      .html(contact.address);
    let deleteButton = $("<div></div>")
      .html("X")
      .attr("id", `${contact.id}`)
      .addClass("delete-button col-item");
    //each delete button given id corresponding to its contact id. Will allow us to delete specific contact from contacts array onclick.

    //append all html elements
    wrapper.append(firstName, lastName, phoneNumber, address, deleteButton);
    contactsElms.append(wrapper);

    //on click, contact list item element removed from html and contact object removed from contact array with deleteContact function
    deleteButton.on("click", function () {
      deleteContact(deleteButton.id);
      wrapper.remove();
    });
  });

  // place all contacts elements under the HTML contacts-container div
  return $("#contacts-container").append(contactsElms);
}

//for all contacts, check if a contact object's id is equal to the passed in delete button id
function deleteContact(id) {
  contacts = contacts.filter(function (contact) {
    //if a contact object's id is not equal to the passed in delete button id, keep it in the contacts array
    if (contact.id != parseInt(id)) {
      return true;
    }
    //if a contact object's id is equal to the passed in delete button id, do not pass it into the filtered contacts array
    return false;
  });
}

//display default contacts upon opening html file in browser
displayContacts(contacts);
