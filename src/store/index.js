import { createStore } from 'redux';

function books(state, action){
  switch(action.type){
    case 'ADD_BOOKS':
      return {...state, data: action.books}
    default:
      return state
  }
}

const store = createStore(books);

export default store;   