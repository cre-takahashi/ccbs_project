import React, { Component } from 'react'
import { StyleSheet, View, Text, Image, Picker, FlatList } from 'react-native'
import {
  Header,
  Button,
  Icon,
  Avatar,
  Rating,
  FormInput,
  Card
} from 'react-native-elements'

export default class CoinShokai extends Component {
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
        <View style={styles.targe_item}>
          <View style={styles.target_year_view}>
            <Picker style={{ width: 150 }} itemStyle={styles.year_list}>
              <Picker.Item label="2017年" value={1} />
              <Picker.Item label="2018年" value={2} />
            </Picker>
          </View>
          <View style={styles.target_name_view}>
            <Picker style={{ width: 200 }} itemStyle={styles.year_list}>
              <Picker.Item label="札幌　太郎" value={1} />
              <Picker.Item label="北海　花子" value={2} />
            </Picker>
          </View>
        </View>
        <FlatList
          data={this.state.data1}
          extraData={this.state.data1}
          keyExtractor={this._keyExtractor}
          renderItem={({ item }) => (
            <View>
              <Text
                style={styles.movieText}
                onPress={() => Alert.alert(item.title)}
              >
                {item.releaseYear}
                {'\n\t'}
                {item.title}
              </Text>
            </View>
          )}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF'
  },
  header: {},
  targe_item: {
    flexDirection: 'row',
    marginTop: 0,
    marginLeft: 30,
    marginRight: 30
  },
  target_year_view: {},
  target_name_view: {
    flexDirection: 'column',
    marginLeft: 30,
    justifyContent: 'center'
  },
  target_title_view: {
    marginTop: 10,
    marginLeft: 0,
    marginBottom: 20
  },
  target_coin_view: {
    marginLeft: 0
  },
  target_total_coin_view: {
    marginLeft: 10
  },
  rating_item: {
    flexDirection: 'row'
  },
  rating_title_view: {
    justifyContent: 'center',
    marginLeft: 0
  },
  rating_point_view: {
    justifyContent: 'center'
  },
  rating_value_view: {
    flexDirection: 'column',
    marginLeft: 10
  },
  picker: {
    width: 200
  },
  year_list: {
    color: 'blue'
  }
})
