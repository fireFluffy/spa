// @flow
import React, { PureComponent } from 'react';
import { Col, Row, Form } from 'antd';

import GetField from './GetField';
import RenderFooter from './Footer';
import constants from '../../utils/constants';

const { FORM } = constants;
const { FIELDS } = FORM;

class FormContainer extends PureComponent<{}, null> {
  handleCreateSubmit = e => {
    const { form, addPeopleList, changeVisibleAdd, length } = this.props;
    const { validateFields } = form;

    e.preventDefault();
    validateFields((err, values) => {
      if (!err) {
        addPeopleList({ key: length, ...values });
        changeVisibleAdd();
      }
    });
  };

  handleEditSubmit = e => {
    const { form, changeVisibleAdd, length } = this.props;
    const { validateFields } = form;

    e.preventDefault();
    validateFields((err, values) => {
      if (!err) {
        changeVisibleAdd();
      }
    });
  };

  renderField = item => {
    const { editProfile, form } = this.props;
    const { getFieldDecorator } = form;
    const initialValue = editProfile ? { initialValue: editProfile[item.name] } : {};

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
    const onSubmit = editProfile ? this.handleEditSubmit : this.handleCreateSubmit;

    return (
      <Form onSubmit={onSubmit}>
        <Row gutter={24}>{FIELDS.map(this.renderField)}</Row>
        <Form.Item>
          <RenderFooter />
        </Form.Item>
      </Form>
    );
  }
}

export default Form.create({ name: 'createForm' })(FormContainer);
