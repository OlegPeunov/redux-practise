// export function createStore(rootReducer, initialState){
//   let state = rootReducer(initialState, {type: '__init__'})
//   const sudscribers = []

//   return {
//     dispatch(action){
//       state = rootReducer(state, action)
//       sudscribers.forEach(sub=>{
//         sub()
//         console.log(sub)
//       })
      
//     },
//     subscribe(callback){
//       sudscribers.push(callback)
//     },
//     getState(){
//       return state
//     }
//   }
// }
