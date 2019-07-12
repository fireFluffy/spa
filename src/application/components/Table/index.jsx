// @flow
import React, { PureComponent } from 'react';
import { Route, Switch } from 'react-router-dom';
import type { TableComponentProps as TProps } from '../../types';

import TableRouterComponent from './Table';
import TableItemRouterComponent from './Item';

import { TableWrap } from '../../styles';

class TableComponent extends PureComponent<TProps, null> {
  render() {
    return (
      <TableWrap>
        <Switch>
          <Route exact path="/profile/:key" component={TableItemRouterComponent} />
          <Route path="/" component={TableRouterComponent} />
        </Switch>
      </TableWrap>
    );
  }
}

export default TableComponent;
