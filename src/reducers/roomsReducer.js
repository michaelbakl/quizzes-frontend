import { ADD_ROOM, GET_ROOMS_SUCCESS } from '../actions/rooms/actionTypes';

const initialState = {
  rooms: {
    rooms: [],
  }
};

const roomsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROOMS_SUCCESS:
      return {
        ...state,
        rooms: action.rooms,
      };
    case ADD_ROOM:
      return {
        ...state,
        rooms: [...state.rooms, action.payload]
      };
    default:
      return state;
  }
};

export default roomsReducer;
