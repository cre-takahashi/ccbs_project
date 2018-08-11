import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  AsyncStorage
} from 'react-native'
import { Button, FormLabel, FormInput, Card } from 'react-native-elements'

const restdomain = require('./common/constans.js').restdomain

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: '',
      passwordInput: '',
      bc_account: '',
      image_file_nm: '',
      shimei: '',
      kengen_cd: '',
      msg: ''
    }
  }

  /** コンポーネントのマウント時処理 */
  async componentWillMount() {
    this.removeLoginInfo()
  }

  removeLoginInfo = async () => {
    try {
      await AsyncStorage.removeItem('loginInfo')
    } catch (error) {
      return
    }
  }

  setLoginInfo = async loginInfo => {
    try {
      await AsyncStorage.setItem('loginInfo', JSON.stringify(loginInfo))
    } catch (error) {
      alert(error)
      return
    }
  }

  onPressButton = () => {
    fetch(restdomain + '/login/find', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: new Headers({ 'Content-type': 'application/json' })
    })
      .then(function(response) {
        return response.json()
      })
      .then(
        function(json) {
          if (json.status) {
            // 結果が取得できない場合は終了
            if (typeof json.data === 'undefined') {
              return
            }
            var resList = json.data[0]
            let loginInfo = {
              userid: resList.bc_account,
              password: this.state.passwordInput,
              tShainPk: resList.t_shain_pk,
              imageFileName: resList.image_file_nm,
              shimei: resList.shimei,
              kengenCd: resList.kengen_cd
            }
            this.setLoginInfo(loginInfo)

            this.props.navigation.navigate('Menu')
          } else {
            this.setState({
              msg: 'ユーザ名またはパスワードを確認してください'
            })
            return
          }
        }.bind(this)
      )
      .catch(error => console.error(error))
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('./../images/title.jpg')}
          style={styles.backgroud_image}
        >
          <View style={{ height: 30, marginTop: 100 }}>
            <Text
              style={{
                color: '#FFFFFF',
                textAlign: 'center',
                fontSize: 24
              }}
            >
              MVP Vote System
            </Text>
          </View>
          <Card>
            <View>
              <FormLabel>ID</FormLabel>
              <FormInput
                onChangeText={text => this.setState({ id: text })}
                value={this.state.id}
              />
              <FormLabel>Password</FormLabel>
              <FormInput
                onChangeText={text => this.setState({ passwordInput: text })}
                value={this.state.passwordInput}
                secureTextEntry={true}
              />
              <Button
                title="login"
                onPress={this.onPressButton}
                icon={{ name: 'sign-in', type: 'font-awesome' }}
              />
              <Text style={{ color: 'red' }}>{this.state.msg}</Text>
            </View>
            <View>
              <Text style={{ textAlign: 'right' }}>
                　※ID、パスワード紛失時は管理者に連絡して下さい
              </Text>
            </View>
          </Card>
          <View>
            <Text style={{ color: '#FFFFFF', textAlign: 'right' }}>
              Copyright © 2018 Creative Consultant
            </Text>
          </View>
        </ImageBackground>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  backgroud_image: {
    width: '100%',
    height: '100%'
  }
})
