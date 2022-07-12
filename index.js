//array that holds all contacts. acts as a searchable database we can later add contacts to and delete contacts from.
let contacts = [
  {
    firstName: "Seth",
    lastName: "Platt",
    phoneNumber: "4258306261",
    address: "600 S 1st St",
    id: "0",
  },
  {
    firstName: "Paul",
    lastName: "Jones",
    phoneNumber: "2065415602",
    address: "10 Lake Rd",
    id: "1",
  },
  {
    firstName: "Dave",
    lastName: "Wall",
    phoneNumber: "5128830912",
    address: "98 West ave",
    id: "2",
  },
];

//will use count to assign a unique id to each new contact, then reference that id upon deleting a contact
let count = 3;

//create a new contact object that will be pushed into our "database" contacts array. Values retrieved from HTML form.
function addContact(firstName, lastName, phoneNumber, address) {
  let newContact = {
    firstName: document.getElementById("first-name").value,
    lastName: document.getElementById("last-name").value,
    phoneNumber: document.getElementById("phone-number").value,
    address: document.getElementById("address").value,
    //each new contact is given an incremented id
    id: count++,
  };
  contacts.push(newContact);
  //clear called so that each contact list element is displayed only once upon new contacts being added
  clear();
  //when new contact is added, display updated contact list
  displayContacts(contacts);
  console.log(contacts);
}

//clears all contact list elements on the HTML file
function clear() {
  document.getElementById("contacts-container").innerHTML = "";
}

let searchInput = document.getElementById("search-bar");
//when any key is typed into or deleted from search-bar, the current search input is checked against all contacts first name, last name, phone number, and address
searchInput.addEventListener("input", function (e) {
  let currentSearch = e.target.value.toLowerCase();
  let filteredContacts = contacts.filter((contact) => {
    //any contact list element that matches the current input will be returned in the new filteredContacts array
    return (
      contact.firstName.toLowerCase().includes(currentSearch) ||
      contact.lastName.toLowerCase().includes(currentSearch) ||
      contact.phoneNumber.toLowerCase().includes(currentSearch) ||
      contact.address.toLowerCase().includes(currentSearch)
    );
  });
  clear();
  //any contact that includes the current search input will be displayed
  displayContacts(filteredContacts);
});

//creates html elements from contacts "database" array of objects
function displayContacts(contacts) {
  //create unordered list
  let contactsElms = document.createElement("ul");
  //for each contact object in the contacts array, create a new contact list element.
  let contactListElm = contacts.map(function (contact) {
    //within each new contact list item, create multiple HTML elements for the corresponding object key value pairs
    let wrapper = document.createElement("li");
    let firstName = document.createElement("span");
    let lastName = document.createElement("span");
    let phoneNumber = document.createElement("span");
    let address = document.createElement("span");
    let deleteButton = document.createElement("button");

    //give html elements classes, text content, and id's as fit.
    wrapper.className = "contact";
    firstName.innerHTML = contact.firstName;
    firstName.className = "first-name";
    lastName.innerHTML = contact.lastName;
    lastName.className = "last-name";
    phoneNumber.innerHTML = contact.phoneNumber;
    phoneNumber.className = "phone-number";
    address.innerHTML = contact.address;
    address.className = "address";
    deleteButton.innerHTML = "Delete";
    //each contact given id corresponding to its contact id. Will allow us to delete specific contact from contacts array onclick.
    deleteButton.id = `${contact.id}`;

    //link all html elements together
    wrapper.appendChild(firstName);
    wrapper.appendChild(lastName);
    wrapper.appendChild(phoneNumber);
    wrapper.appendChild(address);
    wrapper.appendChild(deleteButton);
    contactsElms.appendChild(wrapper);

    //on click, html element removed and contact list element removed from contact array with deleteContact function
    deleteButton.addEventListener("click", function () {
      wrapper.remove();
      console.log(deleteButton.id);
      deleteContact(deleteButton.id);
    });
  });

  // place all contacts elements under the HTML contacts-container div
  return document
    .getElementById("contacts-container")
    .appendChild(contactsElms);
}

//for all contacts, check if a contact object's id is equal to the passed in id
function deleteContact(id) {
  contacts = contacts.filter(function (contact) {
    //if a contact object's id is not equal to the passed in id, keep it in the contacts array
    if (contact.id !== id) {
      return true;
    }
    //if a contact object's id is equal to the passed in id, do not pass it into the updated contacts array
    return false;
  });
}

displayContacts(contacts);

//jquery to put text within HTML elements
$("h1").text("Contact Book");
$("#search-label").text("Search Contacts");
