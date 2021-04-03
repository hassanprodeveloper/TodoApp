const INITIAL_STATE = [
  {id: 0, task: 'task 1', done: false},
  {id: 1, task: 'task 2', done: false},
  {id: 2, task: 'task 3', done: false},
  {id: 3, task: 'task 4', done: false},
];

export default (state = INITIAL_STATE, action) => {
  //   console.log('todos reducer #9 action', action);

  switch(action.type) {
    case 'INITILIZE' : 
    console.log('action data initilized ===', action.payload)
    return [action.payload]
  }

  switch (action.type) {
    case 'SET_TODOS':
      return [action.payload, ...state];
  }

  switch (action.type) {
    case 'DELETE_TODOS': {
      const updatedState = state.filter((item) => item.id !== action.payload);
      return updatedState;
    }
  }

  switch (action.type) {
    case 'SET_TODOS_STATUS': {
      const objID = state.findIndex((obj) => obj.id == action.payload.id);
      state[objID].done = action.payload.status;
      console.log('todos reducer action #26', state);
      return state;
    }
  }

  return state;
};
