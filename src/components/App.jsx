import { React, useState } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onClickGood = () => {
    setGood(prevState => prevState + 1);
  };

  const onClickNeutral = () => {
    setNeutral(prevState => prevState + 1);
  };

  const onClickBad = () => {
    setBad(prevState => prevState + 1);
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total ? ((good / total) * 100).toFixed() : 0;
  };

  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();
  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          // options={['good', 'neutral', 'bad']}
          onClickGood={onClickGood}
          onClickNeutral={onClickNeutral}
          onClickBad={onClickBad}
        />
      </Section>
      <Section title="Statistics">
        {total ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
  // onLeaveFeedback = e => {
  //   const { name } = e.target;

  //   this.setState(prevState => ({ [name]: prevState[name] + 1 }));
  // };

  // countTotalFeedback() {
  //   const { good, neutral, bad } = this.state;
  //   return good + neutral + bad;
  // }

  // countPositiveFeedbackPercentage() {
  //   const total = this.countTotalFeedback();
  //   return total ? ((this.state.good / total) * 100).toFixed() : 0;
  // }

  // render() {
  //   const { good, neutral, bad } = this.state;
  //   const total = this.countTotalFeedback();
  //   const positivePercentage = this.countPositiveFeedbackPercentage();

  // }
};
