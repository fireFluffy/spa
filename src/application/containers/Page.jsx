// @flow
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import type {
  TableContainerProps as TProps,
  TableContainerState as TState,
  TChangeVisibleAdd,
} from '../types';

import { mainStructuredSelector } from '../selectors';
import setPeopleList, { editPeopleList } from '../actions';

import TableComponent from '../components/Table';
import AddUserComponent from '../components/AddUser';
import FormContainer from '../components/Form';
import BodyWrap, { ModalAddWrap } from '../styles';

import getPeople from '../utils/getPeople';
import strings from '../utils/strings';

const PEOPLE = getPeople();

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setPeopleList,
      editPeopleList,
    },
    dispatch
  );

// $FlowFixMe
@connect(
  mainStructuredSelector,
  mapDispatchToProps
)
class TableContainer extends PureComponent<TProps, TState> {
  constructor(props: TProps) {
    super(props);
    props.setPeopleList(PEOPLE);

    this.state = {
      visibleAdd: false,
    };
  }

  changeVisibleAdd: TChangeVisibleAdd = () => {
    const { visibleAdd } = this.state;
    this.setState({ visibleAdd: !visibleAdd });
  };

  render() {
    const { peoplesList } = this.props;
    const { visibleAdd } = this.state;

    if (!peoplesList) {
      return null;
    }

    return (
      <BodyWrap>
        <ModalAddWrap
          width="80%"
          centered
          footer={null}
          onCancel={this.changeVisibleAdd}
          onOk={this.changeVisibleAdd}
          title={strings.ADD_USER}
          visible={visibleAdd}>
          <FormContainer />
        </ModalAddWrap>
        <AddUserComponent changeVisibleAdd={this.changeVisibleAdd} />
        <TableComponent peoplesList={peoplesList} />
      </BodyWrap>
    );
  }
}

export default TableContainer;
