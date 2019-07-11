// @flow
import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

import FormContainer from '../Form';

import strings from '../../utils/strings';
import { ButtonWrap, ModalAddWrap } from '../../styles';
import type { AddUserComponentProps as TProps } from '../../types';

class AddUserComponent extends PureComponent<TProps, null> {
  render() {
    const {
      changeVisibleAdd,
      location,
      visibleAdd,
      length,
      addPeopleList,
      editProfile,
    } = this.props;
    const { pathname } = location;
    const str = /^\/profile\/\d/gi;
    const isReturn = pathname.match(str);

    return (
      <>
        <ModalAddWrap
          centered
          destroyOnClose
          footer={null}
          onCancel={changeVisibleAdd}
          onOk={changeVisibleAdd}
          title={strings.ADD_USER}
          width="80%"
          visible={visibleAdd}>
          <FormContainer
            length={length}
            addPeopleList={addPeopleList}
            editProfile={editProfile}
            changeVisibleAdd={changeVisibleAdd}
          />
        </ModalAddWrap>

        <ButtonWrap>
          {isReturn ? (
            <>
              <Link to="/">
                <Button type="primary">{strings.RETURN}</Button>
              </Link>
              <Button onClick={changeVisibleAdd} type="primary">
                {strings.EDIT}
              </Button>
            </>
          ) : (
            <Button onClick={changeVisibleAdd} type="primary">
              {strings.ADD}
            </Button>
          )}
        </ButtonWrap>
      </>
    );
  }
}

export default AddUserComponent;
