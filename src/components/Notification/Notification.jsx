import React, { Component } from "react";
import PropTypes from 'prop-types';
import {Message} from './Notifiation.styled'


class Notification extends Component {
render() {
const { message } = this.props;
 return (
<>
      <Message>{message}</Message>
    </>
)
 }
}
 
Notification.propTypes = {
  message: PropTypes.string.isRequired 
};
  
  export default Notification;