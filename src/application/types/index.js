// @flow

export type TListPeopleItem = {|
  key: string,
  firstName: string,
  lastName: string,
  position: string,
  description: string,
|};

export type TListPeople = Array<TListPeopleItem>;

export type TSetPeopleList = (
  list: TListPeople
) => {|
  type: 'SET_LIST_PEOPLE',
  payload: TListPeople,
|};

export type TEditPeopleList = (
  index: number,
  obj: TListPeopleItem
) => {|
  type: 'EDIT_LIST_PEOPLE',
  payload: { index: number, obj: TListPeopleItem },
|};

// Table Container
export type TableContainerProps = {|
  setPeopleList: TSetPeopleList,
  editPeopleList: TEditPeopleList,
  peoplesList: TListPeople,
|};

export type TableContainerState = {|
  visibleAdd: boolean,
|};

export type TChangeVisibleAdd = () => void;
// ---

// Table Component
export type TableComponentProps = {|
  peoplesList: TListPeople,
|};

export type TableStringComponentProps = {|
  man: TListPeopleItem,
|};

// AddUser Component
export type AddUserComponentProps = {|
  changeVisibleAdd: TChangeVisibleAdd,
|};
// ---

// Form
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
