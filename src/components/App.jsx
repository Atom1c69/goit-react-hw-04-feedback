import { useState } from 'react';
//Імпорт компонентів
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

//Імпорт стилів
import css from './App.module.css';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  //Функція-обробник кліка на відповідну кнопку
  const onBtnClicked = option => {
    switch (option) {
      case 'good':
        setGood(prev => prev + 1);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;
      case 'bad':
        setBad(prev => prev + 1);
        break;
      default:
        return;
    }
  };

  //Функція підрахунку суми всіх фідбеків
  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  //Функція підрахунку процентного співвідношення позитивних фідбеків
  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    const positivePercentage = Math.round((good / total) * 100);
    return total ? positivePercentage : 0;
  };

  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();
  const options = ['good', 'neutral', 'bad'];

  return (
    <div className={css.wrapper}>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={onBtnClicked} />
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
    </div>
  );
};
