export interface Props {
  score: number;
  isPopular: boolean;
  text: string;
  isSelected: boolean;
  alreadyVoted: boolean;
  clicking: boolean;
  setClicking: (value: boolean) => void;
  onClick: () => void;
}

export interface StyledBackgroundInterface {
  score: number;
  isPopular: boolean;
  alreadyVoted: boolean;
}

export interface AnimatedDiv {
  open: boolean;
  isSelected: boolean;
}
