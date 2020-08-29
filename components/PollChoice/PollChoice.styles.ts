import styled, { css } from 'styled-components';
import { AnimatedDiv, StyledBackgroundInterface } from './PollChoice.types';

export const PollRoot = styled.div`
  border: 1px solid lightgrey;
  border-radius: 8px;
  box-sizing: border-box;
  position: relative;
  margin-bottom: 8px;
  cursor: pointer;
`;

export const StyledBackground = styled.div`
  padding: 8px;
  white-space: nowrap;
  display: flex;
  align-items: center;
  ${({ isPopular, score, alreadyVoted }: StyledBackgroundInterface) =>
    alreadyVoted &&
    css`
      background: ${isPopular ? 'cyan' : '#e8e8e8'};
      font-weight: ${isPopular ? 'bold' : 'normal'};
      border-radius: 8px ${score < 100 ? 0 : '8px'} ${score < 100 ? 0 : '8px'}
        8px;
      width: ${score}%;
    `}
`;

export const Img = styled.img`
  margin-left: 8px;
`;

export const Animate = styled.div`
  ${({ open, isSelected }: AnimatedDiv) => css`
    width: ${open ? '40%' : '100%'};
    transform: scale(${open && isSelected ? 0.8 : 1});
    transition: all 100ms ease 0s;
  `}
`;

export const StyledPercent = styled.div`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
`;

export const Text = styled.span``;
