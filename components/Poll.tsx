import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { QandA, QandAsDocument } from '../types';
import Question from './Question/Question';

type Props = {
  qAndAs: QandAsDocument;
};

const PollWrapper: FC = styled.div``;
const Paragraph: FC = styled.p`
  font-size: 16px;
`;
const Page: FC = styled.div`
  min-height: 90vh;
  display: flex;
  flex-direction: column;
`;

const Flex1: FC = styled.div`
  flex: 1;
  margin: auto;
  display: flex;
  align-items: center;
`;

const Poll: FC<Props> = ({ qAndAs }: Props) => {
  const { questions } = qAndAs;
  const [question, setQuestion] = useState<QandA>();

  useEffect(() => {
    setQuestion(questions[Math.floor(Math.random() * questions.length)])
  }, [questions]);

  return (
    <PollWrapper>
      <Page>
        <Paragraph>
          Here some text that is on the page in a paragraph tag. The poll will
          appear within the context below.
        </Paragraph>
        <Flex1>
          {question && <Question questionAndAnswer={question} />}
        </Flex1>
        <Paragraph>
          Here is the rest of the text in the page. We just have something down
          here for context to see it in.
        </Paragraph>
      </Page>
    </PollWrapper>
  );
};

export default Poll;
