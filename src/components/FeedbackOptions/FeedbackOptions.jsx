// import { nanoid } from 'nanoid';
import { OptionsContainer, OptionsButton } from './FeedbackOptions.styled';

export const FeedbackOptions = ({
  // options,
  onClickGood,
  onClickNeutral,
  onClickBad,
}) => {
  return (
    <OptionsContainer>
      {/* {options.map(option => (
        <OptionsButton key={nanoid()} name={option} onClick={onLeaveFeedback}>
          {option}
        </OptionsButton>
      ))} */}
      <OptionsButton name="good" onClick={onClickGood}>
        Good
      </OptionsButton>
      <OptionsButton name="neutral" onClick={onClickNeutral}>
        Neutral
      </OptionsButton>
      <OptionsButton name="bad" onClick={onClickBad}>
        Bad
      </OptionsButton>
    </OptionsContainer>
  );
};
