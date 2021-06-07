const INITIAL_STATE = {
  data: []
}

export default function currentPage(state = INITIAL_STATE, action){
  switch(action.type){
    case 'CURRENT_PAGE':
      return {data: action.page}
    default:
      return state
  }
}