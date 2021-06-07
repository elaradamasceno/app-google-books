const INITIAL_STATE = {
  data: []
}

export default function currentBook(state = INITIAL_STATE, action){
  switch(action.type){
    case 'CURRENT_BOOK':
      return {data: action.book}
    default:
      return state
  }
}