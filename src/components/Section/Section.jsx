import React, { Component } from "react";
import PropTypes from 'prop-types';

class Section extends Component {
render() {
const { title, children } = this.props;
 return (
<section>
        {title && <h2>{title}</h2>}
        {children}
      </section>
)
 }
}
 
Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired 
};
  
  export default Section;