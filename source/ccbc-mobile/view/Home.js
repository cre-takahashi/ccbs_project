import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { Provider, connect } from 'react-redux' // 5.0.6
import { createStore } from 'redux' // 3.7.2
import { StackNavigator } from 'react-navigation' // 1.0.0-beta.21

class Home extends Component {
  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps! nextProps: ', nextProps)
  }
  onPressButton = () => {
    this.props.navigation.navigate('NextScreen')
  }
  render() {
    console.log('Rendering Home')
    return (
      <View>
        <Text>{this.props.number}</Text>
        <Button title="Go to next screen" onPress={this.onPressButton} />
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    number: state.sample.number
  }
}

export default connect(
  mapStateToProps,
  null
)(Home)
