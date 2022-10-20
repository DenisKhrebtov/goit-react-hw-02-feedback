import React, { Component } from 'react';
import { Wrapper, Title, ButtonContainer } from './App.styled';
import { Statistics } from '../Statistics/Statistics';
import { Notification } from '../Notification/Notification';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onSetVoice = type => {
    this.setState(prevState => ({ [type]: prevState[type] + 1 }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((total, item) => total + item);
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    const keyOptions = Object.keys(this.state);
    const total = this.countTotalFeedback();
    const positive = this.countPositiveFeedbackPercentage();
    return (
      <Wrapper>
        <Title>
          <FeedbackOptions
            options={keyOptions}
            onLeaveFeedback={this.onSetVoice}
          />
        </Title>
        <Title title="Statistics">
          {total > 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={total}
              positive={positive}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Title>
      </Wrapper>
    );
  }
}
