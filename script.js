//! defoult data
const rangeW = document.querySelector('.sizeWidth')
const rangeH = document.querySelector('.sizeHeight')
const block = document.querySelector('.box')
const radius = document.querySelector('.radius')
const welcome = document.querySelector('.welcome')
const redCross = document.querySelector('.red-cross__box')
const controls = document.querySelector('.controls')

let isMenu = true; // 1


const data = {
  top: 0,
  left: 0,
  background: null,
}
const addSize = 50;

//! create function
const minMax = (min = 0, max = 255) => Math.floor(Math.random() * (max - min + 1) + min);
const createRGB = () => `rgb(${minMax()},${minMax()},${minMax()})`
const changeBG = () => {
  const newBGColor = createRGB()
  data.background = newBGColor
  block.style.background = newBGColor
}

const getDataBox = () => {
  const { width, height } = block.getBoundingClientRect();
  const { innerHeight, innerWidth } = window;
  const maxW = innerWidth - width
  const maxH = innerHeight - height;
  return {
    maxH, maxW, w: innerWidth, h: innerHeight, width, height
  }
}



//! add events 

block.onclick = changeBG;

block.oncontextmenu = () => {
  const {maxW, maxH} = getDataBox()

  const newLeft = minMax(0, maxW)
  block.style.left = newLeft + 'px';
  data.left = newLeft;

  const newTop = minMax(0, maxH)
  block.style.top = newTop + 'px';
  data.top = newTop;

  return false
}

// if(isMenu) return; // 2


rangeW.oninput = () => {
  const { width, w } = getDataBox()
  if (w <= data.left + width){ 
    rangeW.value = width
    return rangeW.disabled = true
  };
  block.style.width = rangeW.value + 'px';

}

rangeH.oninput = () => {
  const { height, h } = getDataBox()
  if (h <= data.top + height){ 
    rangeH.value = height
    return rangeH.disabled = true
  };
  block.style.height = rangeH.value + 'px'
}

radius.oninput = () => {
  block.style['border-radius'] = radius.value + '%'
}

redCross.onclick = () => {
  welcome.className = 'display-none'
  controls.classList.remove('disable')
  block.classList.remove('disable')
  // isMenu = false; // 3

  
  document.onkeydown = (e) => {
    const { maxW, maxH } = getDataBox();
    rangeW.disabled = false;
    rangeH.disabled = false;
    switch (e.key) {
      case 'ArrowDown':
        if (data.top >= maxH) data.top = maxH;
        else data.top += addSize;
        block.style.top = data.top + 'px'
        break
      case 'ArrowUp':
        console.log(data.top);
        data.top -= addSize;
        if (data.top <= 0) data.top = 0;
        block.style.top = data.top + 'px'
        break
      case 'ArrowLeft':
        data.left -= addSize;
        if (data.left <= 0) data.left = 0;
        block.style.left = data.left + 'px'
        break
      case 'ArrowRight':
        if (data.left >= maxW) data.left = maxW
        else data.left += addSize;
        block.style.left = data.left + 'px'
        break
    };
  
  }
}

//! start;

(function () {
  changeBG();
}());



