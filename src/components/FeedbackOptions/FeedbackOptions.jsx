import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Btn, BtnDiv } from './FeedbackOptions.styled'

class FeedbackOptions extends Component {
render() {
const { options, onLeaveFeedback } = this.props;
 return (
<BtnDiv>
{options.map(option => (
<Btn key={option} onClick={() => {onLeaveFeedback(option)}}>
{option}</Btn>
))}            
</BtnDiv>
)
 }
}

 FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired
};


export default FeedbackOptions;



