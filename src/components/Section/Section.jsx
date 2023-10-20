import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Sections, TitleSection } from './Section.styled'

class Section extends Component {
render() {
const { title, children } = this.props;
 return (
<Sections>
        {title && <TitleSection>{title}</TitleSection>}
        {children}
      </Sections>
)
 }
}
 
Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired 
};
  
  export default Section;