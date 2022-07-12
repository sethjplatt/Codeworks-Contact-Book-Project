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
    id: "10",
  },
  {
    firstName: "Dave",
    lastName: "Wall",
    phoneNumber: "5128830912",
    address: "98 West ave",
    id: "11",
  },
];

count = 3;

function addContact(firstName, lastName, phoneNumber, address) {
  let newContact = {
    firstName: document.getElementById("first-name").value,
    lastName: document.getElementById("last-name").value,
    phoneNumber: document.getElementById("phone-number").value,
    address: document.getElementById("address").value,
    id: count++,
  };
  contacts.push(newContact);
  clear();
  displayContacts(contacts);
  console.log(contacts);
}

function clear() {
  document.getElementById("contacts-container").innerHTML = "";
}

let searchInput = document.getElementById("search-bar");

searchInput.addEventListener("input", function (e) {
  let currentSearch = e.target.value.toLowerCase();
  let filteredContacts = contacts.filter((contact) => {
    return (
      contact.firstName.toLowerCase().includes(currentSearch) ||
      contact.lastName.toLowerCase().includes(currentSearch) ||
      contact.phoneNumber.toLowerCase().includes(currentSearch) ||
      contact.address.toLowerCase().includes(currentSearch)
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
    deleteButton.className = "delete";

    wrapper.appendChild(firstName);
    wrapper.appendChild(lastName);
    wrapper.appendChild(phoneNumber);
    wrapper.appendChild(address);
    wrapper.appendChild(deleteButton);
    contactsElms.appendChild(wrapper);

    deleteButton.addEventListener("click", function () {
      wrapper.remove();
      deleteContact();
    });

    return wrapper;
  });

  return document
    .getElementById("contacts-container")
    .appendChild(contactsElms);
}

function deleteContact(id) {
  contacts = contacts.filter(function (contact) {
    if (contact.id !== id) {
      return true;
    }
    return false;
  });
}

displayContacts(contacts);
