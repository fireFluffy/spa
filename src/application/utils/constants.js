// @flow

const constants: Object = {
  LOCAL_STORAGE: {
    PREFIX: 'SPA_123',
  },
  LIST_PEOPLE: {
    START_QUANTITY: 20,
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
        minLength: 4,
        span: 24,
        rows: 4,
        type: 'textarea',
      },
    ],
  },
};
const { PREFIX } = constants.LOCAL_STORAGE;

constants.LOCAL_STORAGE.PEOPLE = `${PREFIX}_PEOPLE`;

export default constants;
