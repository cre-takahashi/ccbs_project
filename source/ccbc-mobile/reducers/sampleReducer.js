const initialState = {
  number: 0
}

export function sampleReducer(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE': {
      return { ...state, number: state.number + 1 }
    }
    default: {
      return state
    }
  }
}
