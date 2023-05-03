// default
const data = [
  {
    name: 'Oatmeal',
    src: 'im1.jpg'
  },
  {
    name: 'Omlet',
    src: 'im2.jpg'
  },
  {
    name: 'Ingredients',
    src: 'im3.jpg'
  },
  {
    name: 'Carrot Pie',
    src: 'im4.jpg'
  },
  {
    name: 'Сheesecakes',
    src: 'im5.jpg'
  },
  {
    name: 'Spinach Mousse',
    src: 'im6.jpg'
  }
]

const divBtn = document.querySelector('.btns')
const img = document.querySelector('.img')
const text = document.querySelector('.text');


// logicals
const createBTNS = () => {
  let allBtns = ''
  for (let i = 0; i < data.length; i++) {
    allBtns += `<button class="btn" value="${i}">${data[i].name}</button> `
  }
  divBtn.innerHTML = allBtns
};

const showElem = (num = 0) => {
  const elem = data[num];
  console.log(1);
  img.src = `img/` + elem.src;
  text.textContent = elem.name;
}

// events

divBtn.onclick = (e) => {
  const imgNum = e.target.value;
  if (e.target.value) showElem(imgNum)
}

  // start
  ; (function () {
    createBTNS();
    showElem();
  })();
