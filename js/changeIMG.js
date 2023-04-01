// default
const data = [
  {
    text: 'some text',
    name: 'Kasha',
    src: 'im1.jpg'
  },
  {
    text: 'some text',
    name: 'Kasha2',
    src: 'im2.jpg'
  },
  {
    text: 'some text',
    name: 'Kasha3',
    src: 'im3.jpg'
  },
  {
    text: 'some text',
    name: 'Kasha4',
    src: 'im4.jpg'
  },
  {
    text: 'some text',
    name: 'Kasha5',
    src: 'im5.jpg'
  },
  {
    text: 'some text',
    name: 'Kasha6',
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
  text.textContent = elem.text;
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
