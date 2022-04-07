function toTheTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
let butao = document.querySelector('button')
function dinamicButton() {
  if (window.scrollY == 0) {
    butao.classList.add('invisible')
  } else {
    butao.classList.remove('invisible')
  }
}
window.addEventListener('scroll', dinamicButton)
