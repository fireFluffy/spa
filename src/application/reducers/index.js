import produce from 'immer';

import mainState from '../states';
import SET_LIST_PEOPLE, { ADD_LIST_PEOPLE, EDIT_LIST_PEOPLE, SET_EDIT_PROFILE } from '../constants';

const mainReducer = (state = mainState, { payload, type }) =>
  produce(state, draft => {
    switch (type) {
      case ADD_LIST_PEOPLE: {
        draft.people.unshift(payload);
        break;
      }

      case SET_LIST_PEOPLE: {
        draft.people = payload;
        break;
      }

      case EDIT_LIST_PEOPLE: {
        const { key, obj } = payload;
        const index = draft.people.findIndex(i => i.key === key);
        draft.people[index] = obj;
        break;
      }

      case SET_EDIT_PROFILE: {
        draft.editProfile = payload;
        break;
      }

      default:
        break;
    }
  });

export default mainReducer;
