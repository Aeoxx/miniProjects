let num = 1
const id = () => num++

let tasks = [
  { name: "Wake up ", id: id(), completed: false },
  { name: "Take a shower", id: id(), completed: false },
  { name: "Make breakfast", id: id(), completed: true },
  { name: "Check emails", id: id(), completed: false },
  { name: "Start working", id: id(), completed: false },
  { name: "Go for a walk outside", id: id(), completed: false },
  { name: "Household chores", id: id(), completed: false },
  { name: "Have a lunch", id: id(), completed: true },
  { name: "Grocery shopping", id: id(), completed: false },
  { name: "Attend a meeting", id: id(), completed: true },
  { name: "Plan for the next day", id: id(), completed: false }
];

const input = document.querySelector('.input')
const btnAdd = document.querySelector('.btn')
const leftBox = document.querySelector('.leftBox')
const rightBox = document.querySelector('.rightBox')

// new Task

const LS = {
  get: () => JSON.parse(localStorage.getItem('tasks')),
  set: () => localStorage.setItem('tasks', JSON.stringify(tasks))
}

// logical

const createNewTask = () => { // функція, що відповідає за створення нових пунктів завдань
  const newTask = { // функція починається з того, що створюється новий об'єкт //* цей об'єкт повинен мати усі властивості як об'єкт із початкового масиву з об'єктами
    name: input.value, // те, що вписав користувач, буде назвою нового завдання 
    id: id(), // порядковий номер залежить від кількості разів викликаної функції 'id'
    completed: false // за замовчуванням завдання невиконане
  }
  tasks.push(newTask); // наступний крок даної функції - додавання щойно створенного об'єкту в кінець масиву із об'єктами
  createTodo(newTask); //* остання дія функції - це виклик іншої функції на щойно створенному об'єкті, а саме функції, що відображає цей об'єкт на HTML сторінці
  LS.set()
}

const choiceDiv = (div, completed) => { // функція, що відповідає за перенаправлення пунктів між блоками виконаних і невиконаних завдань //* має 2 аргументи 
  completed ? leftBox.append(div) : rightBox.append(div)
}

const createTodo = (elem) => { // функція, що відображає завдання на сторінці
  const div = document.createElement('div') // div елемент, що містить в собі інші 3 елементи (виконує роль контейнера, щоб можна було переміщати одразу всі 3 елементи між блоками)
  const checkbox = document.createElement('input') // підключений інпут 
  const span = document.createElement('span') // спан, що містить назву завдання 
  const btnRemove = document.createElement('button') // кнопка, що буде видаляти завдання 
  const inputText = document.createElement('input')

  checkbox.type = 'checkbox' // вказуємо, що тип інпуту має бути чекбокс
  span.textContent = elem.name;
  btnRemove.textContent = "X";
  btnRemove.className = 'btnRemove'
  checkbox.checked = elem.completed;
  div.className = 'items'
  inputText.className = 'inputText'

  // events

  checkbox.onclick = () => { // функція, що спрацьовує кожного разу, коли ми нажимаємо на чекбокс
    choiceDiv(div, checkbox.checked) // 
    elem.completed = checkbox.checked
    LS.set()
  }

  btnRemove.onclick = () => {
    const elemIndex = tasks.indexOf(elem)
    tasks.splice(elemIndex, 1);
    div.remove()
    LS.set()
  }
  span.ondblclick = () => {
    span.remove()
    inputText.value = elem.name;
    div.insertBefore(inputText, btnRemove);
    inputText.select();

    inputText.onblur = () => {
      inputText.remove()
      const newName = inputText.value
      span.textContent = newName
      div.insertBefore(span, btnRemove);
      elem.name = newName
      LS.set()
    }

  }

  div.append(checkbox, span, btnRemove)

  choiceDiv(div, elem.completed)

}

// events

btnAdd.onclick = createNewTask; //*  тут ми навішуємо на кнопку виклик функції, що ствоює новий пункт, додає його в масив і викликає відображення цього пункту на сторінці


const createAll = (data = tasks) => data.forEach(createTodo)

  //start 
  ; (function () {

    const data = LS.get(); 

    if (data)  tasks = data;
     createAll()
    // if (data === null) createAll()
    // else createAll(data)
  })();
