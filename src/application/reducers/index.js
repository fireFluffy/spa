import produce from 'immer';

import mainState from '../states';
import SET_LIST_PEOPLE, { EDIT_LIST_PEOPLE } from '../constants';

const mainReducer = (state = mainState, { payload, type }) =>
  produce(state, draft => {
    switch (type) {
      case SET_LIST_PEOPLE: {
        draft.people = payload;
        break;
      }

      case EDIT_LIST_PEOPLE: {
        const { index, obj } = payload;
        draft.people[index] = obj;
        break;
      }

      default:
        break;
    }
  });

export default mainReducer;
