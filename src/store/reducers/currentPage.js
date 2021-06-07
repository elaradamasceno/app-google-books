export default function currentPage(state = [], action){
  switch(action.type){
    case 'CURRENT_PAGE':
      return {data: action.page}
    default:
      return state
  }
}