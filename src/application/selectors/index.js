import { createSelector, createStructuredSelector } from 'reselect';

const mainSelector = ({ main }) => main;

export default mainSelector;

export const listPeoplesSelector = createSelector(
  mainSelector,
  ({ people }) => people
);

export const editProfileSelector = createSelector(
  mainSelector,
  ({ editProfile }) => editProfile
);

export const mainStructuredSelector = createStructuredSelector({
  editProfile: editProfileSelector,
  peoplesList: listPeoplesSelector,
});
