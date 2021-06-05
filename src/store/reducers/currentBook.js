export default function currentBook(state = [], action){
  switch(action.type){
    case 'CURRENT_BOOK':
      return {data: action.book}
    default:
      return state
  }
}