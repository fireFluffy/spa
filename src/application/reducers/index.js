import produce from 'immer';

import mainState from '../states';
import SET_LIST_PEOPLE, { ADD_LIST_PEOPLE, EDIT_LIST_PEOPLE, SET_EDIT_PROFILE } from '../constants';
import { setLocalPeople } from '../utils/getPeople';

const mainReducer = (state = mainState, { payload, type }) =>
  produce(state, draft => {
    switch (type) {
      case ADD_LIST_PEOPLE: {
        draft.people.unshift(payload);
        setLocalPeople(draft.people);
        break;
      }

      case SET_LIST_PEOPLE: {
        draft.people = payload;
        break;
      }

      case EDIT_LIST_PEOPLE: {
        draft.people[draft.editProfile] = payload;
        setLocalPeople(draft.people);
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
