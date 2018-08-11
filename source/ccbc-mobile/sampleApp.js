import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import { Provider, connect } from "react-redux"; // 5.0.6
import { createStore } from "redux"; // 3.7.2
import { StackNavigator } from "react-navigation"; // 1.0.0-beta.21

/******* Home Screen *******/

class Home extends Component {
  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps! nextProps: ", nextProps);
  }
  onPressButton = () => {
    this.props.navigation.navigate("NextScreen");
  };
  render() {
    console.log("Rendering Home");
    return (
      <View>
        <Text>{this.props.number}</Text>
        <Button title="Go to next screen" onPress={this.onPressButton} />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    number: state.number
  };
};

const connectedHome = connect(
  mapStateToProps,
  null
)(Home);

/**************/

/******* Next Screen *******/

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

const connectedNextScreen = connect(
  null,
  mapDispatchToProps
)(NextScreen);

/**************/

/******* Navigator *******/

const HomeNavigator = StackNavigator({
  Home: { screen: connectedHome },
  NextScreen: { screen: connectedNextScreen }
});

/**************/

/******* Set up store *******/

const initialState = {
  number: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE": {
      return { ...state, number: state.number + 1 };
    }
    default: {
      return state;
    }
  }
};

const store = createStore(reducer);

/**************/

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HomeNavigator />
      </Provider>
    );
  }
}
