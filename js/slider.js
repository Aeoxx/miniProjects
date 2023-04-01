const prevImg = document.querySelector('.prev')
const nextImg = document.querySelector('.next')
const img = document.querySelector('.img')
const miniImg = document.querySelectorAll('.miniImg')
const wrapper = document.querySelector('.miniImg__wrapper')

const maxImg = 12;
let num = 1

wrapper.onclick = (e) => {
  const srcStr = e.target.getAttribute('src')
  let srcNum = srcStr.replace(/\D/g, '')
  num = +srcNum
  
  show4img()
  img.src = src(num)
}

// function
const src = num => `img/im${num}.jpg`;

const show4img = () => {
  const maybeCurrentForNum = num + 2;
  const currentForNum = maybeCurrentForNum > maxImg ? maybeCurrentForNum - maxImg : maybeCurrentForNum; // for 4

  let maybeCurrentZeroNum = num - 2;
  if (maybeCurrentZeroNum === 0) {
    maybeCurrentZeroNum = maxImg
  } else if (maybeCurrentZeroNum === -1) {
    maybeCurrentZeroNum = maxImg - 1;
  }


  const maybeCurrentSixoNum = num + 3;
  const currentSixrNum = maybeCurrentSixoNum > maxImg ? maybeCurrentSixoNum - maxImg : maybeCurrentSixoNum; // for 4


  miniImg[0].src = src(maybeCurrentZeroNum)
  miniImg[1].src = src(num - 1 === 0 ? maxImg : num - 1) // -1
  miniImg[2].src = src(num) // main 
  miniImg[3].src = src(num + 1 === maxImg + 1 ? 1 : num + 1)
  miniImg[4].src = src(currentForNum)
  miniImg[5].src = src(currentSixrNum) // main 


}

//events
nextImg.onclick = () => {
  miniImg[4].classList.add('hiden')
  miniImg[0].classList.add('open')
  nextImg.disabled = true;
  setTimeout(() => {
    nextImg.disabled = false;
    num--;
    if (num === 0) num = maxImg;
    show4img()
    img.src = src(num)
    miniImg[4].classList.remove('hiden')
    miniImg[0].classList.remove('open')
  }, 300)
}

prevImg.onclick = () => {
  miniImg[1].classList.add('hiden')
  miniImg[5].classList.add('open')
  prevImg.disabled = true;
  setTimeout(() => {
    prevImg.disabled = false;
    num++
    if (num === maxImg + 1) num = 1;
    show4img()
    img.src = src(num)
    miniImg[1].classList.remove('hiden')
    miniImg[5].classList.remove('open')
  }, 300)
};

// start 

(function () {
  img.src = src(num)
  show4img()
})()


