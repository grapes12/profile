
const one = document.querySelector('.child-1');
const two = document.querySelector('.child-2');
const three = document.querySelector('.child-3');

const container = document.querySelector('.container')

const lightbulb = document.querySelector('.far');
const body = document.querySelector('body');
const navBar = document.querySelector('.nav-bar')

lightbulb.addEventListener('click', (event) => {
  lightbulb.classList.toggle('dark');
  body.classList.toggle('darken');
});

container.addEventListener('click', (event) => {
  if (event.target !== lightbulb) {
    const changeZIndex = () => {
      if (three.style.zIndex === "-2") {
        two.classList.remove('active');
        one.classList.remove('active');
        three.style.zIndex = 1;
        three.classList.add('active');
        two.style.zIndex = -3;
        one.style.zIndex = -2;
      } else if (three.style.zIndex === "1") {
        two.classList.remove('active');
        three.classList.remove('active');
        three.style.zIndex = -3;
        two.style.zIndex = -2;
        one.style.zIndex = 1;
        one.classList.add('active');
      } else {
          one.classList.remove('active');
          three.classList.remove('active');
          three.style.zIndex = -2;
          two.style.zIndex = 1;
          one.style.zIndex = -3;
          two.classList.add('active');
      }
    }
  setTimeout(changeZIndex, 0)
  }
})
