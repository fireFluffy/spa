// @flow
import SET_LIST_PEOPLE, { ADD_LIST_PEOPLE, EDIT_LIST_PEOPLE, SET_EDIT_PROFILE } from '../constants';
import type { TSetPeopleList, TAddPeopleList, TEditPeopleList } from '../types';

const setPeopleList: TSetPeopleList = list => ({
  type: SET_LIST_PEOPLE,
  payload: list,
});

export default setPeopleList;

export const addPeopleList: TAddPeopleList = obj => ({
  type: ADD_LIST_PEOPLE,
  payload: obj,
});

export const editPeopleList: TEditPeopleList = obj => ({
  type: EDIT_LIST_PEOPLE,
  payload: obj,
});

export const setEditProfile = (key = null) => ({
  type: SET_EDIT_PROFILE,
  payload: key,
});
