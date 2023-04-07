
const container = document.querySelector('.container')
const input = document.querySelector('.input')

//logicals

const logical = () => {
  container.innerHTML = person
    .filter((elem) => elem.value.includes(input.value)  ) // use indexOf
    .map((elem) => `<p>${elem.value}</p>`)
    .join('')
};

//events
input.oninput = logical;


//start 
(function () {
  logical()
}())