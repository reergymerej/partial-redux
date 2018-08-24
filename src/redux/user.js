export default (state = null, action) => {
  switch (action.type) {
    case 'login':
      return { name: 'Dizzy', id: '112233xyz' }
    case 'logout':
      return null
    default:
      return state
  }
}
