export default function books(state = [], action){
  switch(action.type){
    case 'SHOW_BOOK_LIST':
      return {...state, data: action.books}
    default:
      return state
  }
}