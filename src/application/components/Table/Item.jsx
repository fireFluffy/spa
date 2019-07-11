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
    const { match, peoplesList, setEditProfile } = props;
    const { key } = match.params;
    this.item = [peoplesList.find(i => i.key === +key)];

    setEditProfile(this.item[0]);
  }

  componentWillUnmount() {
    const { setEditProfile } = this.props;
    setEditProfile();
  }

  render() {
    return <Table bordered columns={PROFILE_COLUMNS} dataSource={this.item} pagination={false} />;
  }
}

export default TableItemRouterComponent;
