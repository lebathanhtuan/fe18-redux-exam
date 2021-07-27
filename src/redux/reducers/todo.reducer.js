import { TO_DO_ACTION } from '../constants';

const initialState = {
  taskList: [],
}

function todoReducer(state = initialState, action) {
  switch (action.type) {
    case TO_DO_ACTION.CREATE_TASK: {
      return {
        ...state,
        taskList: [
          action.payload,
          ...state.taskList,
        ],
      }
    }
    case TO_DO_ACTION.EDIT_TASK: {
      const { id } = action.payload;
      const newTaskList = state.taskList;
      const productIndex = newTaskList.findIndex((product) => product.id === id);
      newTaskList.splice(productIndex, 1, action.payload);
      return {
        ...state,
        taskList: [...newTaskList],
      };
    }
    case TO_DO_ACTION.DELETE_TASK: {
      const { id } = action.payload;
      const newTaskList = state.taskList;
      const productIndex = newTaskList.findIndex((product) => product.id === id);
      newTaskList.splice(productIndex, 1);
      return {
        ...state,
        taskList: [...newTaskList],
      };
    }
    default:
      return state;
  }
}

export default todoReducer;
