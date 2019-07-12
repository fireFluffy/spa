// @flow
import React, { PureComponent } from 'react';
import { Table } from 'antd';
import { connect } from 'react-redux';

import { mainStructuredSelector } from '../../selectors';
import type { TListPeopleItem, TableRouterProps as TProps } from '../../types';
import constants from '../../utils/constants';

const { COLUMNS } = constants.TABLE;

// $FlowFixMe
@connect(mainStructuredSelector)
class TableRouterComponent extends PureComponent<TProps, null> {
  onClick = (man: TListPeopleItem) => {
    const { history } = this.props;
    const { replace } = history;

    replace(`/profile/${man.key}`);
  };

  render() {
    const { peoplesList } = this.props;

    return (
      <Table
        bordered
        columns={COLUMNS}
        dataSource={peoplesList}
        pagination={{ pageSize: 50, size: 'small' }}
        onRow={record => ({
          onClick: () => this.onClick(record),
        })}
      />
    );
  }
}

export default TableRouterComponent;
