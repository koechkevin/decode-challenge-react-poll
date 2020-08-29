import React, { FC } from 'react';
import { Props } from './PollChoice.types';

import {
  PollRoot,
  StyledBackground,
  StyledPercent,
  Text,
  Img,
} from './PollChoice.styles';

const PollChoice: FC<Props> = (props: Props) => {
  const { isPopular, score, text, onClick, alreadyVoted, isSelected } = props;
  return (
    <PollRoot role="button" onClick={!alreadyVoted ? onClick : undefined}>
      <StyledBackground
        alreadyVoted={alreadyVoted}
        isPopular={isPopular}
        score={score}
      >
        <Text>{text}</Text>
        {isSelected && (
          <Img
            alt=""
            height={18}
            src={require('../../static/check-circle.svg')}
          />
        )}
        {alreadyVoted && <StyledPercent>{score}%</StyledPercent>}
      </StyledBackground>
    </PollRoot>
  );
};

export default PollChoice;
