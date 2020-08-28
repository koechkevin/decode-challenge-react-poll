import React, { FC } from 'react';
import styled from 'styled-components';
import GlobalStyles from '../components/GlobalStyles';
import questions from '../questions.json';
import Poll from '../components/Poll';

const IndexPage = styled.div``;

interface Props {}

const Index: FC<Props> = () => (
  <IndexPage>
    <GlobalStyles />
    Setup Complete!
    <Poll qAndAs={questions} />
  </IndexPage>
);

export default Index
