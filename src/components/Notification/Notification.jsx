import React, { Component } from "react";
import PropTypes from 'prop-types';

class Notification extends Component {
render() {
const { message } = this.props;
 return (
<div>
      <p>{message}</p>
    </div>
)
 }
}
 
Notification.propTypes = {
  message: PropTypes.string.isRequired 
};
  
  export default Notification;