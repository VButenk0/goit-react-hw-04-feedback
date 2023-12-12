import { nanoid } from 'nanoid';
import { OptionsContainer, OptionsButton } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <OptionsContainer>
      {options.map(option => (
        <OptionsButton key={nanoid()} name={option} onClick={onLeaveFeedback}>
          {option}
        </OptionsButton>
      ))}
    </OptionsContainer>
  );
};
