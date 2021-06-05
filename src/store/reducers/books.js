const INITIAL_STATE = {
    data: []
}

export default function books(state = INITIAL_STATE, action){
    switch(action.type){
      case 'ADD_BOOKS':
        return {...state, data: action.books}
      default:
        return state
    }
  }