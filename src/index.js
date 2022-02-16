import './styles.css'

const addButton = document.getElementById('add');
const subButton = document.getElementById('sub');
const asyncButton = document.getElementById('async');
const counter = document.getElementById('counter');
const themeBtn = document.getElementById('theme');

let state = 0

function render(){
  counter.textContent = state.toString()
}
render()



addButton.addEventListener('click', ()=>{
  state++
  render()
})

subButton.addEventListener('click', ()=>{
  state--
  render()
})

asyncButton.addEventListener('click', ()=>{
  setTimeout(()=>{
    state+=10
    render()
  }, 2000)
})

themeBtn.addEventListener('click', ()=>{
  document.body.classList.toggle('dark')
})
