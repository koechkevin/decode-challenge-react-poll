import * as React from 'react';
import styled from 'styled-components';
import { QandAsDocument } from '../types';
import { FC } from 'react';

type Props = {
  qAndAs: QandAsDocument;
};

const PollWrapper = styled.div``;

const Poll: FC<Props> = ({ qAndAs }) => {
  console.log('questions and answers: ', qAndAs);
  return <PollWrapper>The Poll implementation goes here</PollWrapper>;
};

export default Poll
