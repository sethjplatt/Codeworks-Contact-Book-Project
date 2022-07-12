let contacts = [
  {
    firstName: "Joe",
    lastName: "Baggs",
  },
];

function addContact(firstName, lastName) {
  newContact = {
    firstName: document.getElementById("first-name"),
    lastName: document.getElemetnById("last-name"),
  };
  contacts.push(newContact);
  displayContacts(contacts);
}

function displayContacts(contacts) {
  let contactsElms = document.createElement("ul");
  let contactListElm = contacts.map(function (contact) {
    let wrapper = document.createElement("li");
    let firstName = document.createElement("span");
    let lastName = document.createElement("span");

    firstName.innerHTML = contact.firstName;
    lastName.innerHTML = contact.lastName;

    wrapper.appendChild(firstName);
    wrapper.appendChild(firstName);
    contactsElms.appendChild(wrapper);

    return wrapper;
  });
  return document
    .getElementById("contacts-container")
    .appendChild(contactsElms);
}

function deleteContacts(id) {
  contacts = contacts.filter(function (contact) {
    if (contact.id !== id) {
      return true;
    }
    return false;
  });
}

searchInput = document.getElementById("search-input");
searchInput.addEventListener(input, function (e) {});
