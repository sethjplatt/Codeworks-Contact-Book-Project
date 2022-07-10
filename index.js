let contacts = [
  {
    firstName: "Seth",
    lastName: "Platt",
    phoneNumber: "4258306261",
    address: "600 S 1st St",
  },
  {
    firstName: "Paul",
    lastName: "Jones",
    phoneNumber: "2065415602",
    address: "10 Lake Rd",
  },
];

function addContact(name, address) {
  let newContact = {
    firstName: document.getElementById("first-name").value,
    lastName: document.getElementById("last-name").value,
    phoneNumber: document.getElementById("phone-number").value,
    address: document.getElementById("address").value,
  };
  contacts.push(newContact);
  clear();
  displayContacts(contacts);
}

function clear() {
  document.getElementById("contacts-container").innerHTML = "";
}

let searchInput = document.getElementById("search-bar");

searchInput.addEventListener("input", function (e) {
  let currentSearch = e.target.value;
  let filteredContacts = contacts.filter((contact) => {
    return (
      contact.firstName.includes(currentSearch) ||
      contact.lastName.includes(currentSearch) ||
      contact.phoneNumber.includes(currentSearch) ||
      contact.address.includes(currentSearch)
    );
  });
  clear();
  displayContacts(filteredContacts);
});

function displayContacts(contacts) {
  let contactsElms = document.createElement("ul");
  let contactListElm = contacts.map(function (contact) {
    let wrapper = document.createElement("li");
    let firstName = document.createElement("span");
    let lastName = document.createElement("span");
    let phoneNumber = document.createElement("span");
    let address = document.createElement("span");
    let deleteButton = document.createElement("button");

    firstName.innerHTML = contact.firstName;
    lastName.innerHTML = contact.lastName;
    phoneNumber.innerHTML = contact.phoneNumber;
    address.innerHTML = contact.address;
    deleteButton.innerHTML = "Delete";

    wrapper.appendChild(firstName);
    wrapper.appendChild(lastName);
    wrapper.appendChild(phoneNumber);
    wrapper.appendChild(address);
    wrapper.appendChild(deleteButton);
    contactsElms.appendChild(wrapper);

    deleteButton.addEventListener("click", function () {
      wrapper.remove();
      let index = contacts.indexOf(this);
      contacts.splice(index, 1);
    });

    return wrapper;
  });

  return document
    .getElementById("contacts-container")
    .appendChild(contactsElms);
}
