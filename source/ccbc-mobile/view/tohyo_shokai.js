import React, { Component } from 'react'
import { StyleSheet, View, Text, Image, AsyncStorage } from 'react-native'
import {
  Header,
  Button,
  Icon,
  Avatar,
  Rating,
  FormInput,
  Card
} from 'react-native-elements'

export default class TohyoShokai extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  /** コンポーネントのマウント時処理 */
  async componentWillMount() {
    var loginInfo = await this.getLoginInfo()

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
          <View style={styles.targe_item}>
            <View style={styles.target_rank_view}>
              <Avatar
                large
                rounded
                source={require('./../images/medal_g_n.png')}
                activeOpacity={0.7}
              />
              <Text style={{ textAlign: 'center' }}>800 coin</Text>
            </View>
            <View style={styles.target_avatar_view}>
              <Avatar
                large
                rounded
                source={require('./../images/person11.png')}
                activeOpacity={0.7}
              />
            </View>
            <View style={styles.target_name_view}>
              <Text style={{ fontSize: 18 }}>札幌　太郎</Text>
              <Text style={{ fontSize: 12 }}>
                『新しい価値を創造するために
                {'\n'}
                ・・・』
              </Text>
            </View>
          </View>
        </Card>
        <Card>
          <View style={styles.targe_item}>
            <View style={styles.target_rank_view}>
              <Avatar
                large
                rounded
                source={require('./../images/medal_s_n.png')}
                activeOpacity={0.7}
              />
              <Text style={{ textAlign: 'center' }}>750 coin</Text>
            </View>
            <View style={styles.target_avatar_view}>
              <Avatar
                large
                rounded
                source={require('./../images/person12.png')}
                activeOpacity={0.7}
              />
            </View>
            <View style={styles.target_name_view}>
              <Text style={{ fontSize: 18 }}>中央 二郎</Text>
              <Text style={{ fontSize: 12 }}>配属後に始めた習慣</Text>
            </View>
          </View>
        </Card>
        <Card>
          <View style={styles.targe_item}>
            <View style={styles.target_rank_view}>
              <Avatar
                large
                rounded
                source={require('./../images/medal_c_n.png')}
                activeOpacity={0.7}
              />
              <Text style={{ textAlign: 'center' }}>700 coin</Text>
            </View>
            <View style={styles.target_avatar_view}>
              <Avatar
                large
                rounded
                source={require('./../images/person15.png')}
                activeOpacity={0.7}
              />
            </View>
            <View style={styles.target_name_view}>
              <Text style={{ fontSize: 18 }}>豊平　花子</Text>
              <Text style={{ fontSize: 12 }}>概念だけでもわかる！p-進数</Text>
            </View>
          </View>
        </Card>
        <Card>
          <View style={styles.targe_item}>
            <View style={styles.target_rank_view}>
              <Text style={{ textAlign: 'center', fontSize: 24 }}>{'\n'}4</Text>
              <Text style={{ textAlign: 'center' }}>500 coin</Text>
            </View>
            <View style={styles.target_avatar_view}>
              <Avatar
                large
                rounded
                source={require('./../images/person13.png')}
                activeOpacity={0.7}
              />
            </View>
            <View style={styles.target_name_view}>
              <Text style={{ fontSize: 18 }}>東 十郎</Text>
              <Text style={{ fontSize: 12 }}>プレゼンノウハウ</Text>
            </View>
          </View>
        </Card>
        <Card>
          <View style={styles.targe_item}>
            <View style={styles.target_rank_view}>
              <Text style={{ textAlign: 'center', fontSize: 24 }}>{'\n'}5</Text>
              <Text style={{ textAlign: 'center' }}>450 coin</Text>
            </View>
            <View style={styles.target_avatar_view}>
              <Avatar
                large
                rounded
                source={require('./../images/person1.png')}
                activeOpacity={0.7}
              />
            </View>
            <View style={styles.target_name_view}>
              <Text style={{ fontSize: 18 }}>北見 圭吾</Text>
              <Text style={{ fontSize: 12 }}>
                甘くて美味しいみかんの見分け方
              </Text>
            </View>
          </View>
        </Card>
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
    marginLeft: 0,
    marginRight: 30
  },
  target_rank_view: {
    width: 80
  },
  target_avatar_view: {
    justifyContent: 'center',
    marginLeft: 10
  },
  target_name_view: {
    flexDirection: 'column',
    marginLeft: 10,
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
  }
})
