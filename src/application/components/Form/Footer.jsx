// @flow
import React, { PureComponent } from 'react';
import { Row, Button } from 'antd';

import strings from '../../utils/strings';

class RenderFooter extends PureComponent<{}, null> {
  render() {
    return (
      <Row type="flex" justify="end">
        <Button size="large" type="primary" htmlType="submit" className="login-form-button">
          {strings.SAVE}
        </Button>
      </Row>
    );
  }
}
export default RenderFooter;
