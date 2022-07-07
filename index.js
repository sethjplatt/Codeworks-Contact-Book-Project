let contacts = [
  {
    name: "seth",
    address: "2nd st",
  },
  {
    name: "steve",
    address: "5th ave",
  },
];

function addContact(name, address) {
  let newContact = {
    name: name,
    address: address,
    id: name + address,
  };
  contacts.push(newContact);
}

function deleteContact(id) {
  contacts.filter(function (contact) {
    if (contact.id !== id) {
      return true;
    }
    return false;
  });
}

function displayContacts(contacts) {
  let contactListElm = document.createElement("ul");
  let contactsElms = contacts.map(function (contact) {
    let wrapper = document.createElement("li");
    let name = document.createElement("span");
    let address = document.createElement("span");

    name.innerHTML = contact.name;
    address.innerHTML = contact.address;
    wrapper.appendChild(name);
    wrapper.appendChild(address);

    return wrapper;
  });

  contactsElms.forEach(function (elm) {
    contactListElm.appendChild(elm);
  });

  document.getElementById("contacts-container").appendChild(contactListElm);
}

displayContacts(contacts);
