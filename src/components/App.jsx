import React, { Component } from 'react'

import css from './App.module.css';
import SectionFeedback from 'components/SectionFeedback/SectionFeedback';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import StatisticsFeedback from 'components/StatisticsFeedback/StatisticsFeedback';
import Notification from 'components/Notification/Notification'

class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  
  handleIncrement = (option) => {
    this.setState((prevState) => {
      return {
        [option]: prevState[option] + 1,
      };
  });
  }

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage = () => (this.countTotalFeedback() > 0 ? Math.round((this.state.good * 100) / this.countTotalFeedback()) : 0);
  
  render() {
    const options = Object.keys(this.state);
    const total = this.countTotalFeedback();

    return (
      <div className={css.container}>
      <SectionFeedback title='please leave feedback'>
        <FeedbackOptions options={options} handleIncrement={this.handleIncrement} />
        </SectionFeedback>
        
        <SectionFeedback title='statistics'>
          {total <= 0 ? (<Notification message='There is no feedback' />) : (<StatisticsFeedback feedbackItem={this.state} total={total} positivePercentage={this.countPositiveFeedbackPercentage} /> )}
        </SectionFeedback>
      </div>
    )
  }
}

export default App;