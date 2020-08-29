import React, { FC } from 'react';
import { Props } from './PollChoice.types';

import {
  PollRoot,
  StyledBackground,
  StyledPercent,
  Text,
  Img,
  Animate,
} from './PollChoice.styles';

const PollChoice: FC<Props> = (props: Props) => {
  const {
    isPopular,
    score,
    text,
    onClick,
    alreadyVoted,
    isSelected,
    clicking,
    setClicking,
  } = props;

  const onSelect = (): void => {
    if (!alreadyVoted) {
      setClicking(true);
      setTimeout(() => {
        setClicking(false);
        onClick();
      }, 200);
    }
  };
  return (
    <Animate isSelected={isSelected} open={clicking}>
      <PollRoot role="button" onClick={onSelect}>
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
    </Animate>
  );
};

export default PollChoice;
