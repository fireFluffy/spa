// @flow
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

import type {
  TableContainerProps as TProps,
  TableContainerState as TState,
  TChangeVisibleAdd,
} from '../types';

import { mainStructuredSelector } from '../selectors';
import setPeopleList, { addPeopleList, editPeopleList } from '../actions';

import TableComponent from '../components/Table';
import AddUserComponent from '../components/AddUser';
import BodyWrap from '../styles';

import getPeople from '../utils/getPeople';

const PEOPLE = getPeople();

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setPeopleList,
      addPeopleList,
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
    const { editProfile, peoplesList, addPeopleList, editPeopleList } = this.props;
    const { visibleAdd } = this.state;
    const { location } = this.props;

    if (!peoplesList) {
      return null;
    }

    return (
      <BodyWrap>
        <AddUserComponent
          addPeopleList={addPeopleList}
          editPeopleList={editPeopleList}
          editProfile={editProfile}
          changeVisibleAdd={this.changeVisibleAdd}
          location={location}
          peoplesList={peoplesList}
          visibleAdd={visibleAdd}
        />
        <TableComponent />
      </BodyWrap>
    );
  }
}

export default withRouter(TableContainer);
