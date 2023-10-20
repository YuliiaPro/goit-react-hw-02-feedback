import React, { Component } from "react";
import PropTypes from 'prop-types';
import { ListStatistics, ItemStatistics, Paragraph } from './Statistics.styled'

class Statistics extends Component {
render() {
const { good, neutral, bad, countTotalFeedback, countPositiveFeedbackPercentage } = this.props;
return (  
<>
<ListStatistics >             
<ItemStatistics><Paragraph>Good: {good}</Paragraph>  </ItemStatistics>
<ItemStatistics><Paragraph>Neutral: {neutral}</Paragraph> </ItemStatistics>
<ItemStatistics><Paragraph>Bad: {bad}</Paragraph> </ItemStatistics>  
<ItemStatistics><Paragraph>Total: {countTotalFeedback()}</Paragraph> </ItemStatistics>  
<ItemStatistics><Paragraph>Positive feedback: {countPositiveFeedbackPercentage}%</Paragraph> </ItemStatistics>                      
</ListStatistics>
</>)
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

