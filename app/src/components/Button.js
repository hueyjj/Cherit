import React, { Component } from 'react';

import "../styles/Button.css";

class Button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { className, svg, svgName, onClick } = this.props;

    return (
      <div
        className={className}
        onClick={onClick}
      >
        <img
          className={svgName + '-' + 'svg'}
          src={svg} />
      </div>
    );
  }
}

export default Button;