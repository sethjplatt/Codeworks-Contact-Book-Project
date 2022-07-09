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
  displayContact(contacts);
}

function deleteContact(id) {
  contacts = contacts.filter(function (contact) {
    if (contact.id !== id) {
      return true;
    }
    return false;
  });
}

function displayContact(contacts) {
  let contactListElm = document.createElement("ul");
  let wrapper = document.createElement("li");
  let name = document.createElement("span");
  let address = document.createElement("span");
  let deleteButton = document.createElement("button");

  name.innerHTML = contacts[contacts.length - 1].name;
  address.innerHTML = contacts[contacts.length - 1].address;
  deleteButton.innerHTML = "Delete";
  wrapper.appendChild(name);
  wrapper.appendChild(address);
  wrapper.appendChild(deleteButton);
  contactListElm.appendChild(wrapper);

  deleteButton.addEventListener("click", function () {
    contactListElm.remove();
  });

  return document
    .getElementById("contacts-container")
    .appendChild(contactListElm);
}
