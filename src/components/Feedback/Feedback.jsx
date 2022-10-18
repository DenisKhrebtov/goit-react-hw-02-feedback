import React from 'react';
import { StatisticsSection } from '../StatisticsSection/StatisticsSection';
import { Wrapper, Title, ButtonContainer } from './Feedback.styles';

export default class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handlePositive = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };
  handleNeutral = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };
  handleBad = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  // countPositiveFeedbackPercentage = () => {};

  render() {
    const totalFeedback = this.state.length;
    console.log(totalFeedback);
    return (
      <Wrapper>
        <Title>Please leave feedback </Title>
        <ButtonContainer>
          <button type="button" onClick={this.handlePositive}>
            Good
          </button>
          <button type="button" onClick={this.handleNeutral}>
            Neutral
          </button>
          <button type="button" onClick={this.handleBad}>
            Bad
          </button>
        </ButtonContainer>
        <h3>Statistics</h3>
        <StatisticsSection stat={this.state} />
      </Wrapper>
    );
  }
}
