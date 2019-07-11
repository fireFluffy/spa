// @flow
import SET_LIST_PEOPLE, { EDIT_LIST_PEOPLE } from '../constants';
import type { TSetPeopleList, TEditPeopleList } from '../types';

const setPeopleList: TSetPeopleList = list => ({
  type: SET_LIST_PEOPLE,
  payload: list,
});

export default setPeopleList;

export const editPeopleList: TEditPeopleList = (index, obj) => ({
  type: EDIT_LIST_PEOPLE,
  payload: { index, obj },
});
