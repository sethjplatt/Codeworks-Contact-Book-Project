let contacts = [
  {
    name: "seth",
    address: "2nd st",
    id: "seth2nd st",
  },
  {
    name: "steve",
    address: "5th ave",
    id: "steve5th ave",
  },
];

function addContact(name, address) {
  let newContact = {
    name: document.getElementById("first-name").value,
    address: document.getElementById("address").value,
    id: name + address,
  };
  contacts.push(newContact);
  clear();
  displayContact(contacts);
}

function clear() {
  document.getElementById("contacts-container").innerHTML = "";
}

let searchInput = document.getElementById("search-bar");

searchInput.addEventListener("input", function (e) {
  let currentSearch = e.target.value;
  let filteredContacts = contacts.filter((contact) => {
    return contact.name.includes(currentSearch);
  });
  clear();
  displayContact(filteredContacts);
});

function displayContact(contacts) {
  let contactsElms = document.createElement("ul");
  let contactListElm = contacts.map(function (contact) {
    let wrapper = document.createElement("li");
    let name = document.createElement("span");
    let address = document.createElement("span");
    let deleteButton = document.createElement("button");

    name.innerHTML = contact.name;
    address.innerHTML = contact.address;
    deleteButton.innerHTML = "Delete";
    wrapper.appendChild(name);
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
