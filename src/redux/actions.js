import { DECREMENT, INCREMENT, ASYNC_INCREMENT, CHANGE_THEME } from "./types";

export function increment() {
  return{
    type: INCREMENT
  }
}

export function decrement() {
  return{
    type: DECREMENT
  }
}

export function changeTheme(newTheme){
  return {
    type: CHANGE_THEME,
    payload: newTheme
  }
}

export function asyncIncrement() {
  return function(dispatch){
    setTimeout(() => {
      dispatch({type: ASYNC_INCREMENT})
    }, 1500);
  }  
}
