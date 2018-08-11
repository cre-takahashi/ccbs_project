import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import { Provider, connect } from "react-redux"; // 5.0.6
import { createStore } from "redux"; // 3.7.2
import { StackNavigator } from "react-navigation"; // 1.0.0-beta.21

class NextScreen extends Component {
  onPressButton = () => {
    this.props.update();
  };
  render() {
    return <Button title="Update store" onPress={this.onPressButton} />;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    update: () => dispatch({ type: "UPDATE" })
  };
};

export default connect(
  null,
  mapDispatchToProps
)(NextScreen);
