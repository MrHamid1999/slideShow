// setting the counter
let counter = 0;

// getting all the elements we need
let slideShow = document.querySelector('.sliders');
let sliders = document.querySelectorAll('.slide')
let prevBtn = document.querySelector('.prev-btn')
let nextBtn = document.querySelector('.next-btn')
let points = document.querySelectorAll('.points span')

let classSwitcher = () => {
  sliders.forEach(slider => {slider.classList.remove("active")});
  points.forEach(point => {point.classList.remove("active")});
  sliders[counter].classList.add('active')
  points[counter].classList.add('active')

}

let next = () => {
  counter = (counter == sliders.length -1) ? 0 : counter+1;
  classSwitcher();
}
  let prev = () => {
    counter = counter == 0 ? sliders.length -1 : counter-1;
    classSwitcher();
  }
  nextBtn.addEventListener("click" ,e => next());
  prevBtn.addEventListener("click" ,e => prev());
// setting interval for sliders
let repeater = setInterval(next , 2000);

points.forEach((point, index) => {
  point.addEventListener("click", e=> {
    counter = index ;
    classSwitcher()
  })
});
slideShow.addEventListener("mouseover",e => clearInterval(repeater));
slideShow.addEventListener("mouseleave",e => repeater = setInterval(next , 2000))
