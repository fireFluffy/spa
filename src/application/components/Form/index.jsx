// @flow
import React, { PureComponent } from 'react';
import { Col, Row, Form } from 'antd';

import RenderField from './RenderField';
import RenderFooter from './Footer';
import constants from '../../utils/constants';

const { FORM } = constants;
const { FIELDS } = FORM;

class FormContainer extends PureComponent<{}, null> {
  handleSubmit = e => {
    const { form } = this.props;
    const { validateFields } = form;

    e.preventDefault();
    validateFields((err, values) => {
      if (!err) {
        console.log(values);
      }
    });
  };

  render() {
    const { form } = this.props;
    const { getFieldDecorator } = form;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Row gutter={24}>
          {FIELDS.map(item => (
            <Col key={item.name} span={item.span}>
              <Form.Item label={item.label}>
                {getFieldDecorator(item.name, {
                  rules: [{ required: item.required, message: item.placeholder }],
                })(<RenderField type={item.type} size="large" placeholder={item.placeholder} />)}
              </Form.Item>
            </Col>
          ))}
        </Row>
        <Form.Item>
          <RenderFooter />
        </Form.Item>
      </Form>
    );
  }
}

export default Form.create({ name: 'createForm' })(FormContainer);
