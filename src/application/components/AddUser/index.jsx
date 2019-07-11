// @flow
import React, { PureComponent } from 'react';
import { Button } from 'antd';

import strings from '../../utils/strings';
import { ButtonWrap } from '../../styles';
import type { AddUserComponentProps as TProps } from '../../types';

class AddUserComponent extends PureComponent<TProps, null> {
  render() {
    const { changeVisibleAdd } = this.props;
    return (
      <ButtonWrap>
        <Button onClick={changeVisibleAdd} type="primary">
          {strings.ADD}
        </Button>
      </ButtonWrap>
    );
  }
}

export default AddUserComponent;
