import { number } from 'prop-types';
import { setEditProfile } from '../actions';

// @flow
export type TEditProfile = ?number;

export type TListPeopleItem = {
  key: string,
  firstName: string,
  lastName: string,
  position: string,
  description: ?string,
};

export type TListPeople = Array<TListPeopleItem>;

export type TSetPeopleList = (
  list: TListPeople
) => {|
  type: 'SET_LIST_PEOPLE',
  payload: TListPeople,
|};

export type TSetEditProfile = (
  key: ?number
) => {|
  type: 'SET_EDIT_PROFILE',
  payload: ?number,
|};

export type TAddPeopleList = (
  obj: TListPeopleItem
) => {|
  type: 'ADD_LIST_PEOPLE',
  payload: TListPeopleItem,
|};

export type TEditPeopleList = (
  obj: TListPeopleItem
) => {|
  type: 'EDIT_LIST_PEOPLE',
  payload: TListPeopleItem,
|};

// Table Container
export type TableRouterProps = {||};

export type TableContainerProps = {|
  setPeopleList: TSetPeopleList,
  addPeopleList: TAddPeopleList,
  editPeopleList: TEditPeopleList,
  peoplesList: TListPeople,
|};

export type TableContainerState = {|
  visibleAdd: boolean,
|};

export type TChangeVisibleAdd = () => void;
// ---

// Table Component
export type TableComponentProps = {||};

export type TableItemProps = {|
  peoplesList: TListPeople,
  setEditProfile: TSetEditProfile,
|};

export type TableStringComponentProps = {|
  man: TListPeopleItem,
|};
// ---

// AddUser Component
export type AddUserComponentProps = {|
  changeVisibleAdd: TChangeVisibleAdd,
  addPeopleList: TAddPeopleList,
  editPeopleList: TEditPeopleList,
  peoplesList: TListPeople,
  editProfile: TEditProfile,
|};
// ---

// Form
// ---FormContainer
export type FormContainerProps = {|
  form: *,
  addPeopleList: TAddPeopleList,
  changeVisibleAdd: TChangeVisibleAdd,
  editPeopleList: TEditPeopleList,
  peoplesList: TListPeople,
  editProfile: TEditProfile,
|};

// ---RenderField
export type RenderFieldProps = {
  id: string,
  component: string,
  name: string,
  placeholder: string,
  required: boolean,
  span: number,
};
// ---
