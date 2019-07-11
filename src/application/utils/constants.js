// @flow

const constants: Object = {
  LOCAL_STORAGE: {
    PREFIX: 'SPA_123',
  },
  LIST_PEOPLE: {
    START_QUANTITY: 10,
  },
  TABLE: {
    COLUMNS: [
      {
        title: 'Имя',
        dataIndex: 'firstName',
        key: 'firstName',
      },
      {
        title: 'Фамилия',
        dataIndex: 'lastName',
        key: 'lastName',
      },
      {
        title: 'Должность',
        dataIndex: 'position',
        key: 'position',
      },
    ],
  },

  FORM: {
    FIELDS: [
      {
        name: 'firstName',
        label: 'Имя',
        placeholder: 'Добавьте имя',
        required: true,
        span: 12,
        type: 'text',
      },
      {
        name: 'lastName',
        label: 'Фамилия',
        placeholder: 'Добавьте фамилию',
        required: true,
        span: 12,
        type: 'text',
      },
      {
        name: 'position',
        label: 'Должность',
        placeholder: 'Добавьте должность',
        required: true,
        span: 12,
        type: 'text',
      },
      {
        name: 'description',
        label: 'Описание',
        placeholder: 'Добавьте описание',
        required: false,
        span: 24,
        rows: 4,
        type: 'textarea',
      },
    ],
  },
};
const { LOCAL_STORAGE, TABLE } = constants;
const { PREFIX } = LOCAL_STORAGE;
const { COLUMNS } = TABLE;
const description = {
  title: 'Описание',
  dataIndex: 'description',
  key: 'description',
};

constants.LOCAL_STORAGE.PEOPLE = `${PREFIX}_PEOPLE`;
constants.TABLE.PROFILE_COLUMNS = COLUMNS.concat(description);

export default constants;
