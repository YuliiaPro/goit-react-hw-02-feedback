import React, { Component } from "react";
import PropTypes from 'prop-types';

class Statistics extends Component {
render() {
const { good, neutral, bad, countTotalFeedback, countPositiveFeedbackPercentage } = this.props;
return (  
<div >
<ul >             
<li><p>Good: {good}</p>  </li>
<li><p>Neutral: {neutral}</p> </li>
<li><p>Bad: {bad}</p> </li>  
<li><p>Total: {countTotalFeedback()}</p> </li>  
<li><p>Positive feedback: {countPositiveFeedbackPercentage}%</p> </li>                      
</ul>
</div>)
}
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  countTotalFeedback: PropTypes.func.isRequired,
  countPositiveFeedbackPercentage: PropTypes.number.isRequired
};
            
export default Statistics;

