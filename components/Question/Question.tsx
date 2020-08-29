import React, { FC, useState } from 'react';
import { Props } from './Question.types';
import { H1, Card, Text } from './Question.styles';
import PollChoice from '../PollChoice/PollChoice';
import { Answer, QandA } from '../../types';

const Question: FC<Props> = (props: Props) => {
  const [questionAndAnswer, setQuestionAndAnswer] = useState<QandA>(
    () => props.questionAndAnswer
  );

  const [selected, setSelected] = useState<number>();
  const [clicking, setClicking] = useState<boolean>(false);

  const total: number = questionAndAnswer.answers.reduce(
    (previousValue: number, currentValue: Answer) =>
      previousValue + currentValue.votes,
    0
  );

  const highestScore: number = Math.max(
    ...questionAndAnswer.answers.map(({ votes }) => votes)
  );

  const onClick = (index: number): void => {
    setQuestionAndAnswer((previousValue: QandA) => ({
      ...previousValue,
      answers: previousValue.answers.map((answer: Answer, idx: number) =>
        idx === index ? { ...answer, votes: answer.votes + 1 } : answer
      ),
    }));
    setSelected(index);
  };

  return (
    <Card>
      <H1>{questionAndAnswer.question.text}</H1>
      {questionAndAnswer.answers.map(
        ({ text, votes }: Answer, index: number) => (
          <PollChoice
            alreadyVoted={selected !== undefined}
            isSelected={selected === index}
            onClick={() => onClick(index)}
            key={index}
            isPopular={votes === highestScore}
            score={Math.round((votes / total) * 100)}
            text={text}
            clicking={clicking}
            setClicking={setClicking}
          />
        )
      )}
      <Text>{total} votes</Text>
    </Card>
  );
};

export default Question;
