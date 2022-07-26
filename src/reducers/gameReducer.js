import { GET_GAME_SUCCESS, START_GAME_SUCCESS } from '../actions/game/actionTypes';

const initialState = {
  game: {
    status: '',
    questionId: '',
    questionNumber: -1,
    questionsCount: -1,
  }
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_GAME_SUCCESS:
      return {
        ...state,
        game: action.game
      };
    case GET_GAME_SUCCESS:
      return {
        ...state,
        game: action.game
      };
    default:
      return state;
  }
};

export default gameReducer;
