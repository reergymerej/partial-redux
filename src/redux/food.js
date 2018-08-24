const defaultState = {
  favorite: 'spinach',
  pantry: {
    oreos: 100,
    avocado: 2,
  },
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'eat cookie':
      return {
        ...state,
        pantry: {
          ...state.pantry,
          oreos: state.pantry.oreos - 1,
        },
      }
    default:
      return state
  }
}
