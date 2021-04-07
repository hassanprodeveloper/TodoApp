const INITIAL_STATE = {
  name: 'Guest',
  totalTodos: 0,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'USER_INFO':
      // console.log('action data initilized ===', action.payload)
      return action.payload;
  }
  switch (action.type) {
    case 'USER_NAME':
      // console.log('action data initilized ===', action.payload)
      return (state.name = action.payload);
  }
  switch (action.type) {
    case 'USER_TODOS':
      // console.log('action data initilized ===', action.payload)
      return (state.totalTodos = action.payload);
  }
  return state;
};
