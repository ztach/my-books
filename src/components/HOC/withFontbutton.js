import React from "react";

const withFontbutton = WrapperFontButton => {
  return class extends React.Component {
    state = {
      sFont: 20
    };

    addSize = () => {
      this.setState({
        sFont: this.state.sFont + 1
      });
    };

    oddSize = () => {
      this.setState({
        sFont: this.state.sFont - 1
      });
    };

    zeroSize = () => {
      this.setState({
        sFont: 20
      });
    };

    render() {
      return (
        <WrapperFontButton
          {...this.state}
          {...this.props}
          addSize={this.addSize}
          oddSize={this.oddSize}
          zeroSize={this.zeroSize}
        />
      );
    }
  };
};

export default withFontbutton;
