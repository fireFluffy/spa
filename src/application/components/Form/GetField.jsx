// @flow
import React, { memo } from 'react';
import { Input } from 'antd';

const { TextArea } = Input;

const GetField = ({ type, ...options }: { type: string }) => {
  switch (type) {
    case 'textarea':
      return <TextArea {...options} />;

    default:
      return <Input {...options} />;
  }
};

// $FlowFixMe
export default memo(GetField);
