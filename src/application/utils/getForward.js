// @flow
import React, { forwardRef } from 'react';

const getForward = (Consumer, Component) =>
  forwardRef((props, ref) => (
    <Consumer>{context => <Component {...props} context={context} ref={ref} />}</Consumer>
  ));

export default getForward;
