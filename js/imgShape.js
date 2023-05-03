const controls = {
  width: {
    value: 200,
    min: 100,
    max: 500,
  },
  height: {
    value: 200,
    min: 100,
    max: 500
  },
  'border-top-right-radius': {
    value: 0,
    min: 0,
    max: 250
  },
  'border-bottom-left-radius': {
    value: 0,
    min: 0,
    max: 250
  },
  'border-top-left-radius': {
    value: 0,
    min: 0,
    max: 250
  },
  'border-bottom-right-radius': {
    value: 0,
    min: 0,
    max: 250
  },
  filter: {
    value: 0,
    min: 0,
    max: 20,
    isCustam : true
  },
}


const carImg = document.querySelector('.carImg')
const allRange = document.querySelectorAll('input[type=range].controlInput');
const localControls = JSON.parse(localStorage.getItem('controls'));
const imgBlur = document.querySelector('.blur')


allRange.forEach((input) => {
  const key = input.name;   // width

  const value = localControls
    ? localControls[key].value  // localControls['width'].value  232
    : controls[key].value;  // localControls['width'].value  232
  // const value = localControls[key].value; // localControls['width'].value  232

  input.value = value;
  carImg.style[key] = value + 'px'; //  carImg.style[width] 

  controls[key].value = value;


  input.oninput = () => {
    const value = input.value;
    controls[key].value = value;
    localStorage.setItem('controls', JSON.stringify(controls))


    if(controls[key].isCustam){
      carImg.style[key] = `blur(${value}px)`; //  carImg.style[filter] = 15 + 'px';
    } else {

      carImg.style[key] = value + 'px'; //  carImg.style[filter] = 15 + 'px';
    }

  }
})






