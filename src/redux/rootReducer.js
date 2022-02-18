import { combineReducers } from "redux"
import { CHANGE_THEME, INCREMENT, DECREMENT, ASYNC_INCREMENT } from "./types"

function conterReducer(state = 0, action){
  if(action.type === INCREMENT){
    return state + 1
  } else if (action.type === DECREMENT){
    return state - 1
  } else if (action.type === ASYNC_INCREMENT){
    return state + 10
  }
  return state 
}

const initialThemeState ={
  value: 'light'
}

function themeReducer(state = initialThemeState, action){
  switch (action.type){
    case CHANGE_THEME:
      return {...state, value: 'dark'}
    default:return state 
  }
  
}


export const rootReducer = combineReducers({
  counter: conterReducer,
  theme: themeReducer
})