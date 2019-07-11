// @flow
import React, { PureComponent } from 'react';
import { Route } from 'react-router-dom';
import type { TableComponentProps as TProps } from '../../types';

import TableRouterComponent from './Table';
import TableItemRouterComponent from './Item';

import { TableWrap } from '../../styles';

class TableComponent extends PureComponent<TProps, null> {
  render() {
    return (
      <TableWrap>
        <Route exact path="/" component={TableRouterComponent} />
        <Route exact path="/profile/:key" component={TableItemRouterComponent} />
      </TableWrap>
    );
  }
}

export default TableComponent;
