import React, { Component } from 'react'
import { StyleSheet, View, Text, Image, Picker } from 'react-native'
import {
  Header,
  Button,
  Icon,
  Avatar,
  Rating,
  FormLabel,
  FormInput,
  Card
} from 'react-native-elements'

export default class TohyoToroku extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  /** コンポーネントのマウント時処理 */
  componentWillMount() {
    var loginInfo = this.getLoginInfo()

    this.setState({ userid: loginInfo['userid'] })
    this.setState({ password: loginInfo['password'] })
    this.setState({ tShainPk: loginInfo['tShainPk'] })
    this.setState({ imageFileName: loginInfo['imageFileName'] })
    this.setState({ shimei: loginInfo['shimei'] })
    this.setState({ kengenCd: loginInfo['kengenCd'] })
  }

  getLoginInfo = async () => {
    try {
      return JSON.parse(await AsyncStorage.getItem('loginInfo'))
    } catch (error) {
      return
    }
  }
  onPressLogoutButton = () => {
    this.props.navigation.navigate('Login')
  }
  onPressMenuButton = () => {
    this.props.navigation.navigate('Menu')
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          leftComponent={
            <Icon
              name={'home'}
              type={'font-awesome'}
              color="#fff"
              onPress={this.onPressMenuButton}
            />
          }
          centerComponent={{
            text: 'MVP Vote System',
            style: { color: '#fff' }
          }}
          rightComponent={
            <Icon
              name={'sign-out'}
              type={'font-awesome'}
              color="#fff"
              onPress={this.onPressLogoutButton}
            />
          }
          style={styles.header}
        />
        <Card>
          <Text style={{ fontSize: 18 }}>
            札幌　太郎　の所持コイン数
            {'\n'}
            1,000コイン
          </Text>
        </Card>
        <View>
          <FormLabel>贈与相手</FormLabel>
          <Picker style={{ marginLeft: 30 }}>
            <Picker.Item label="札幌　太郎" value={1} />
            <Picker.Item label="北海　花子" value={2} />
          </Picker>
          <FormLabel>贈与コイン数</FormLabel>
          <FormInput style={{ marginLeft: 30 }} />
          <Button
            title="send"
            icon={{ name: 'sign-in', type: 'font-awesome' }}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF'
  },
  header: {}
})
