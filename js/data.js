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


const data = [
  {
    name: "Каша",
    photo: './img/im1.jpg',
    _id: id(),
    text: "I write it down now",
    value: 2,
    price: 20
  },
  {
    name: "Cалат",
    photo: './img/im2.jpg',
    _id: id(),
    text: "I write it down now",
    value: 2,
    price: 25
  },
  {
    name: "Ingridients",
    photo: './img/im3.jpg',
    _id: id(),
    text: "I write it down now",
    value: 2,
    price: 50
  },
  {
    name: "Суп",
    photo: './img/im4.jpg',
    _id: id(),
    text: "I write it down now",
    value: 1,
    price: 20
  },
  {
    name: "Сырники",
    photo: './img/im5.jpg',
    _id: id(),
    text: "I write it down now",
    value: 2,
    price: 40
  },
  {
    name: "Суп2",
    photo: './img/im6.jpg',
    _id: id(),
    text: "I write it down now",
    value: 1,
    price: 80
  },
  {
    name: "Крем суп",
    photo: './img/im7.jpg',
    _id: id(),
    text: "I write it down now",
    value: 1,
    price: 65
  },
  {
    name: "Борщ",
    photo: './img/im8.jpg',
    _id: id(),
    text: "I write it down now",
    value: 1,
    price: 35
  },
  {
    name: "Суп3",
    photo: './img/im9.jpg',
    _id: id(),
    text: "I write it down now",
    value: 1,
    price: 50
  },
  {
    name: "Холодец",
    photo: './img/im10.jpg',
    _id: id(),
    text: "I write it down now",
    value: 1,
    price: 55
  },
  {
    name: "Картошка",
    photo: './img/im11.jpg',
    _id: id(),
    text: "I write it down now",
    value: 3,
    price: 45
  },
  {
    name: "Картошка гриль",
    photo: './img/im12.jpg',
    _id: id(),
    text: "I write it down now",
    value: 3,
    price: 105
  },
];






// const imgDescr = (arr = data) => {
//   const foodDescr = arr
//                 .map((elem) => `<div>
//                         <img src='${elem.photo}'>
//                         <p>${elem.name}</p>
//                       </div>`
//  )
//     .join("")
//   productsWrapper.innerHTML = foodDescr
// }

// imgDescr()