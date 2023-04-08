const dishes = document.querySelector('.dishes')
const foodSelect = document.querySelector('.foodSelect')
const priceSelect = document.querySelector('.priceSelect')

let Newid = 0;
const id = () => Newid++



const creatElemet = (arr = data) => {
  dishes.innerHTML = arr
    .map((elem) => `<div class="wrapper">
          <p>${elem.name}</p>
          <img src='${elem.photo}'>
          <p>${elem.price}</p>
      </div>`)
    .join('')
}


const foodFunction = () => {
  const foodGroup = +foodSelect.value;
  const priceGroup = +priceSelect.value

  let filterGroup = data;

  if (foodGroup !== 0) filterGroup = data.filter((elem) => elem.value === foodGroup)
  if (priceGroup !== 0) filterGroup = filterGroup.filter((elem) => elem.price <= priceGroup)

  creatElemet(filterGroup)
}

priceSelect.onchange = foodFunction;
foodSelect.onchange = foodFunction;

creatElemet();



