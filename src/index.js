import './styles.css'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {rootReducer} from './redux/rootReducer'
import { increment, decrement, asyncIncrement, changeTheme } from './redux/actions'


const addButton = document.getElementById('add');
const subButton = document.getElementById('sub');
const asyncButton = document.getElementById('async');
const counter = document.getElementById('counter');
const themeBtn = document.getElementById('theme');

const store = createStore(
  rootReducer,
  applyMiddleware(thunk))


addButton.addEventListener('click', () => {
  store.dispatch(increment())
})

subButton.addEventListener('click', ()=>{
  store.dispatch(decrement())
})

asyncButton.addEventListener('click', ()=>{
  setTimeout(() => {
    store.dispatch(asyncIncrement())
  })
})

store.subscribe(() => {
  const state = store.getState()
  counter.textContent = state.counter
  document.body.className = state.theme.value
})

store.dispatch({type: 'INIT_APPLICATION'})

themeBtn.addEventListener('click', ()=>{
  store.dispatch(changeTheme())
  // document.body.classList.toggle('dark')
})
