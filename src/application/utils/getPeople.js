import faker from 'faker/locale/ru';
import constants from './constants';

const { LOCAL_STORAGE, LIST_PEOPLE } = constants;

export const getLocalPeople = () => {
  const strData = localStorage.getItem(LOCAL_STORAGE.PEOPLE);
  try {
    const data = JSON.parse(strData);
    return data;
  } catch (error) {
    return null;
  }
};
export const setLocalPeople = data => {
  const stringData = JSON.stringify(data);
  localStorage.setItem(LOCAL_STORAGE.PEOPLE, stringData);
};

export const removeLocalPeople = () => localStorage.removeItem(LOCAL_STORAGE.PEOPLE);

const generatePeople = () =>
  Array(LIST_PEOPLE.START_QUANTITY)
    .fill(null)
    .map((item, index) => {
      const [firstName, lastName] = faker.name.findName().split(' ');

      return {
        key: LIST_PEOPLE.START_QUANTITY - index - 1,
        firstName,
        lastName,
        position: faker.name.jobType(),
        description: faker.lorem.text(),
      };
    });

const getPeople = () => {
  // removeLocalPeople();

  let list = getLocalPeople();

  if (!Array.isArray(list) || !list.length) {
    list = generatePeople();

    setLocalPeople(list);
  }

  return list;
};

export default getPeople;
