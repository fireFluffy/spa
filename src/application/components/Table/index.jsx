// @flow
import React, { PureComponent } from 'react';
import { Table } from 'antd';
import type { TableComponentProps as TProps, TListPeopleItem } from '../../types';

import { TableWrap } from '../../styles';
import constants from '../../utils/constants';

const { COLUMNS } = constants.TABLE;

class TableComponent extends PureComponent<TProps, null> {
  onClick = (man: TListPeopleItem, index: number) => {
    console.log({ man, index });
  };

  render() {
    const { peoplesList } = this.props;

    return (
      <TableWrap>
        <Table
          bordered
          columns={COLUMNS}
          dataSource={peoplesList}
          onRow={(record, rowIndex) => ({
            onClick: () => this.onClick(record, rowIndex),
          })}
        />
      </TableWrap>
    );
  }
}

export default TableComponent;
