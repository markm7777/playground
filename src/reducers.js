const reducer = (state = {count:0}, action) => {
  let newState = '';
  switch (action.type) {
    case 'INCREMENT':
      newState = Object.assign({}, state);
      newState.count++;
      return newState;
    case 'DECREMENT':
      newState = Object.assign({}, state);
      newState.count--;
      return newState;
    default:
      return state;
  }
};

export default reducer;