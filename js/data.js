let num = 1
const id = () => num++

const person = [
  { value: "Pants", id: id(), packed: false, filter: false},
  { value: "Jacket", id: id(), packed: false, filter: false},
  { value: "iPhone Charger", id:id(), packed: false, filter: false},
  { value: "MacBook", id:id(), packed: false, filter: false},
  { value: "Sleeping Pills", id:id(), packed: true, filter: false},
  { value: "Underwear", id:id(), packed: false, filter: false},
  { value: "Hat", id:id(), packed: false, filter: false},
  { value: "T-Shirts", id:id(), packed: false, filter: false},
  { value: "Belt", id:id(), packed: false, filter: false},
  { value: "Passport", id:id(), packed: true, filter: false},
  { value: "Sandwich", id:id(), packed: true, filter: false}
];



