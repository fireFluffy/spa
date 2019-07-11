import { createSelector, createStructuredSelector } from 'reselect';

const mainSelector = ({ main }) => main;

export default mainSelector;

export const listPeoplesSelector = createSelector(
  mainSelector,
  ({ people }) => (people ? people.reverse() : people)
);

export const mainStructuredSelector = createStructuredSelector({
  peoplesList: listPeoplesSelector,
});
