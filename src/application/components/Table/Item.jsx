// @flow
import React, { PureComponent } from 'react';
import { Table } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setEditProfile } from '../../actions';
import { mainStructuredSelector } from '../../selectors';
import constants from '../../utils/constants';

const { PROFILE_COLUMNS } = constants.TABLE;

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setEditProfile,
    },
    dispatch
  );

// $FlowFixMe
@connect(
  mainStructuredSelector,
  mapDispatchToProps
)
class TableItemRouterComponent extends PureComponent<{}, null> {
  constructor(props) {
    super(props);
    const { history, match, peoplesList, setEditProfile } = props;
    const { key } = match.params;

    if (key) {
      this.index = peoplesList.findIndex(i => i.key === +key);
      setEditProfile(this.index);
    } else {
      history.replace('/');
    }
  }

  componentWillUnmount() {
    const { setEditProfile, peoplesList } = this.props;
    setEditProfile();
  }

  render() {
    const { peoplesList } = this.props;
    return (
      <Table
        bordered
        columns={PROFILE_COLUMNS}
        dataSource={[peoplesList[this.index]]}
        pagination={false}
      />
    );
  }
}

export default TableItemRouterComponent;
