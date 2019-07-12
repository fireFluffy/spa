// @flow
import React, { PureComponent } from 'react';
import { Col, Row, Form } from 'antd';

import GetField from './GetField';
import RenderFooter from './Footer';
import constants from '../../utils/constants';

const { FORM } = constants;
const { FIELDS } = FORM;

class FormContainer extends PureComponent<{}, null> {
  handleSubmit = e => {
    const {
      form,
      addPeopleList,
      changeVisibleAdd,
      editProfile,
      editPeopleList,
      peoplesList,
    } = this.props;
    const { validateFields } = form;

    e.preventDefault();
    validateFields((err, values) => {
      if (!err) {
        if (editProfile !== null) {
          editPeopleList({ key: peoplesList[editProfile].key, ...values });
        } else {
          addPeopleList({ key: peoplesList.length, ...values });
        }
        changeVisibleAdd();
      }
    });
  };

  renderField = item => {
    const { editProfile, form, peoplesList } = this.props;
    const { getFieldDecorator } = form;
    const initialValue =
      editProfile !== null ? { initialValue: peoplesList[editProfile][item.name] } : {};

    return (
      <Col key={item.name} span={item.span}>
        <Form.Item label={item.label}>
          {getFieldDecorator(item.name, {
            ...initialValue,
            rules: [{ required: item.required, message: item.placeholder }],
          })(<GetField type={item.type} size="large" placeholder={item.placeholder} />)}
        </Form.Item>
      </Col>
    );
  };

  render() {
    const { editProfile } = this.props;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Row gutter={24}>{FIELDS.map(this.renderField)}</Row>
        <Form.Item>
          <RenderFooter />
        </Form.Item>
      </Form>
    );
  }
}

export default Form.create({ name: 'userForm' })(FormContainer);
