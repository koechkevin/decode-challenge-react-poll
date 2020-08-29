export interface Props {
  score: number;
  isPopular: boolean;
  text: string;
  isSelected: boolean;
  alreadyVoted: boolean;
  onClick: () => void;
}

export interface StyledBackgroundInterface {
  score: number;
  isPopular: boolean;
  alreadyVoted: boolean;
}
