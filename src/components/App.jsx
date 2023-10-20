import React, { Component } from 'react';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Statistics from 'components/Statistics/Statistics';
import Section from 'components/Section/Section';
import Notification from 'components/Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,

  };

  handleFeedback = (option) => {
    this.setState((prevState) => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };

  countTotalFeedback = () => {
const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

   countPositiveFeedbackPercentage = () => {
     const { good, neutral, bad } = this.state;
    return Math.round(good / (good + neutral + bad) * 100);
  }
    render() {
      const options = Object.keys(this.state);
      const { good, neutral, bad } = this.state;
      const visible = good + neutral + bad > 0;
      
    return (
      <div>
        <Section title="Please leave feedback">
        <FeedbackOptions options={options}
          onLeaveFeedback={this.handleFeedback}
          />
        </Section>
        <Section title="Statistics">
          {!visible ? <Notification message="There is no feedback"/>: <Statistics options={options}
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          countTotalFeedback={this.countTotalFeedback}
          countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage()}
          />}
        </Section>
      </div>
    );
  }
}


