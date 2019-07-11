// @flow
import styled from 'styled-components';
import { Row, Modal } from 'antd';

const BodyWrap = styled.div`
  max-width: 80%;
  margin: 0 auto;
  padding: 50px 0;
`;
export default BodyWrap;

export const TableWrap = styled.div`
  background-color: #fff;
`;

export const ButtonWrap = styled.div`
  margin: 0 0 25px -15px;

  & > * {
    margin-left: 15px;
  }
`;

export const RowForm = styled(Row)`
  padding-bottom: 15px;
`;

export const ModalAddWrap = styled(Modal)`
  max-width: 900px;
`;

export const ButtonPanel = styled.div`
  display: flex;
  margin: 0 0 0 -15px;

  & > * {
    margin-left: 15px;
  }
`;
