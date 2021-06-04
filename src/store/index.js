import { createStore } from 'redux';

// const BOOKS = {
//   data: []
// }

function books(state, action){
  switch(action.type){
    case 'ADD_BOOKS':
      return {...state, data: [...state.data, action.books]}
    default:
      return state
  }
}

const store = createStore(books);

export default store;   