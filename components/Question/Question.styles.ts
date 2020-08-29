import styled from 'styled-components';
import { FC } from 'react';

export const Card: FC = styled.div`
  padding: 16px;
  max-width: 320px;
  border-radius: 8px;
  margin: auto;
  margin-top: 32px;
  margin-bottom: 32px;
  -webkit-box-shadow: -1px 1px 5px 0px rgba(0, 0, 0, 0.36);
  -moz-box-shadow: -1px 1px 5px 0px rgba(0, 0, 0, 0.36);
  box-shadow: -1px 1px 5px 0px rgba(0, 0, 0, 0.36);
`;
export const H1: FC = styled.h1``;
export const Text: FC = styled.span`
    color: #aaa;
`;
