const INITIAL_STATE = {
    data: []
}

export default function books(state = INITIAL_STATE, action){
  switch(action.type){
    case 'SHOW_BOOK_LIST':
      return {...state, data: action.books}
    default:
      return state
  }
}