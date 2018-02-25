const initialState = []

export default (state = initialState, { type, payload } = {}) => {
  if (type === 'GUESS') {
    return state.concat(payload)
  } else {
    return state
  }
}
