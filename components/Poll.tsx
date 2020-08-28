import React, { FC } from 'react';
import styled from 'styled-components';
import { QandAsDocument, QandA } from '../types';
import Question from './Question/Question';

type Props = {
  qAndAs: QandAsDocument;
};

const PollWrapper = styled.div``;
const Paragraph = styled.p`
  font-size: 16px;
`;
const Page = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Flex1 = styled.div`
  flex: 1;
  margin: auto;
  display: flex;
  align-items: center;
`;

const Poll: FC<Props> = ({ qAndAs }) => {
  const { questions } = qAndAs;
  return (
    <PollWrapper>
      {questions.map((question: QandA, idx: number) => (
        <Page key={idx}>
          <Paragraph>
            Here some text that is on the page in a paragraph tag. The poll will
            appear within the context below.
          </Paragraph>
          <Flex1>
            <Question questionAndAnswer={question} />
          </Flex1>
          <Paragraph>
            Here is the rest of the text in the page. We just have something
            down here for context to see it in.
          </Paragraph>
        </Page>
      ))}
    </PollWrapper>
  );
};

export default Poll;
