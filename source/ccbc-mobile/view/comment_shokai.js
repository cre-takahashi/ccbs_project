import React, { Component } from 'react'
import { StyleSheet, View, Text, Image, AsyncStorage } from 'react-native'
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
          <Text style={{ fontSize: 16 }}>
            投票・コイン贈与：札幌の未来について
            {'\n'}
          </Text>
          <Text style={{ fontSize: 16 }}>
            投票（授与）者　：苫小牧　太郎
            {'\n'}
          </Text>
          <Text style={{ fontSize: 16 }}>
            受領コイン　　　：25 coin
            {'\n'}
          </Text>
          <View style={styles.rating_item}>
            <View style={styles.rating_title_view}>
              <Text style={{ fontSize: 12 }}>資料作成：</Text>
            </View>
            <View style={styles.rating_point_view}>
              <Text style={{ fontSize: 14 }}>5点</Text>
            </View>
            <View style={styles.rating_value_view}>
              <Rating
                ratingCount={10}
                imageSize={25}
                onFinishRating={this.ratingCompleted}
                style={{ paddingVertical: 5 }}
              />
            </View>
          </View>
          <View style={styles.rating_item}>
            <View style={styles.rating_title_view}>
              <Text style={{ fontSize: 12 }}>発表力　：</Text>
            </View>
            <View style={styles.rating_point_view}>
              <Text style={{ fontSize: 14 }}>5点</Text>
            </View>
            <View style={styles.rating_value_view}>
              <Rating
                ratingCount={10}
                imageSize={25}
                onFinishRating={this.ratingCompleted}
                style={{ paddingVertical: 5 }}
              />
            </View>
          </View>
          <View style={styles.rating_item}>
            <View style={styles.rating_title_view}>
              <Text style={{ fontSize: 12 }}>表現力　：</Text>
            </View>
            <View style={styles.rating_point_view}>
              <Text style={{ fontSize: 14 }}>5点</Text>
            </View>
            <View style={styles.rating_value_view}>
              <Rating
                ratingCount={10}
                imageSize={25}
                onFinishRating={this.ratingCompleted}
                style={{ paddingVertical: 5 }}
              />
            </View>
          </View>
          <View style={styles.rating_item}>
            <View style={styles.rating_title_view}>
              <Text style={{ fontSize: 12 }}>影響力　：</Text>
            </View>
            <View style={styles.rating_point_view}>
              <Text style={{ fontSize: 14 }}>5点</Text>
            </View>
            <View style={styles.rating_value_view}>
              <Rating
                ratingCount={10}
                imageSize={25}
                onFinishRating={this.ratingCompleted}
                style={{ paddingVertical: 5 }}
              />
            </View>
          </View>
          <View style={styles.rating_item}>
            <View style={styles.rating_title_view}>
              <Text style={{ fontSize: 12 }}>限界突破：</Text>
            </View>
            <View style={styles.rating_point_view}>
              <Text style={{ fontSize: 14 }}>5点</Text>
            </View>
            <View style={styles.rating_value_view}>
              <Rating
                ratingCount={10}
                imageSize={25}
                onFinishRating={this.ratingCompleted}
                style={{ paddingVertical: 5 }}
              />
            </View>
          </View>
          <View style={{ marginTop: 10, marginBottom: 0, marginRight: 10 }}>
            <Text style={{ fontSize: 12 }}>【コメント】</Text>
            <FormInput multiline style={{ fontSize: 12 }}>
              ここが良かったね。
              {'\n'}
              ここをこうすると更に良くなるはず。
            </FormInput>
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
