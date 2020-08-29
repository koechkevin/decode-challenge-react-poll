import React, { FC } from 'react';
import styled from 'styled-components';
import GlobalStyles from '../components/GlobalStyles';
import questions from '../questions.json';
import Poll from '../components/Poll';

interface Props {}

const IndexPage: FC<Props> = styled.div``;

const Index: FC<Props> = () => (
  <IndexPage>
    <GlobalStyles />
    <Poll qAndAs={questions} />
  </IndexPage>
);

export default Index;
