import React, { Component, PropTypes } from 'react'
import {
  StyleSheet,
  WebView,
  Dimensions,
  View,
  Text,
  Image,
  Picker,
  FlatList
} from 'react-native'
import {
  Header,
  Button,
  Icon,
  Avatar,
  Rating,
  FormInput,
  Card
} from 'react-native-elements'

const { width } = Dimensions.get('window')
const html = `<html>
	<head>
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
  <style media="screen" type="text/css">#container{width:100%;height:100%;top:0;left:0;right:0;bottom:0;position:absolute;}</style>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.2/Chart.bundle.min.js"></script>
    <script>
      document.addEventListener("DOMContentLoaded", function() {
        var ctx = document.getElementById("container").getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'radar',
            data: {
                labels: ["資料作成", "発表力", "表現力", "影響力", "限界突破"],
                datasets: [{
                    label: '獲得点数',
                    data: [39, 47, 26, 25, 18],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
              ticks: {
                stepSize: 5, // 目盛の間隔
                max: 100, //最大値
                beginAtZero: true
              }
            }
        });
    });
    </script>
</head>
<body>
    <canvas id="container" width="${width}" height="${width}" />
</body>
</html>`

export default class TohyoShokaiShosai extends Component {
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
          <Text style={{ fontSize: 14 }}>
            平成３０年度６月部会
            {'\n'}
          </Text>
          <View style={styles.targe_item}>
            <View style={styles.target_avatar_view}>
              <Avatar
                small
                rounded
                source={require('./../images/person11.png')}
                activeOpacity={0.7}
              />
            </View>
            <View style={styles.target_name_view}>
              <Text style={{ fontSize: 18 }}>札幌　太郎</Text>
            </View>
          </View>
          <Text style={{ fontSize: 14 }}>
            『新しい価値を創造するために・・・』
            {'\n'}
          </Text>
          <Text style={{ fontSize: 14 }}>
            全体順位：１位　獲得コイン：800 coin
          </Text>
        </Card>
        <View style={{ marginTop: 10, marginLeft: 30, marginRight: 20 }}>
          <Image source={require('./../images/RadarChart.png')} />
        </View>
        <Card>
          <View style={styles.targe_com_item}>
            <View style={styles.target_avatar_com_view}>
              <Avatar
                small
                rounded
                source={require('./../images/person12.png')}
                activeOpacity={0.7}
              />
              <Text style={{ fontSize: 12 }}>中央 二郎</Text>
            </View>
            <View style={styles.target_name_com_view}>
              <Text style={{ fontSize: 12 }}>
                投票：500coin
                {'\n'}
                資料作成：10点、発表力：10点、表現力：10点、
                {'\n'}
                影響力：10点、限界突破：10点
                {'\n'}
              </Text>
              <Text style={{ fontSize: 12 }}>
                ここが良かったね。
                {'\n'}
                ここをこうすると更に良くなるはず。
              </Text>
            </View>
          </View>
        </Card>
        <Card>
          <View style={styles.targe_com_item}>
            <View style={styles.target_avatar_com_view}>
              <Avatar
                small
                rounded
                source={require('./../images/person16.png')}
                activeOpacity={0.7}
              />
              <Text style={{ fontSize: 12 }}>厚別　花子</Text>
            </View>
            <View style={styles.target_name_com_view}>
              <Text style={{ fontSize: 12 }}>
                投票：200coin
                {'\n'}
                資料作成： 8点、発表力： 5点、表現力： 3点、
                {'\n'}
                影響力： 3点、限界突破： 1点
                {'\n'}
              </Text>
              <Text style={{ fontSize: 12 }}>資料に工夫が見られてGOOD！</Text>
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
    marginRight: 20,
    marginBottom: 5
  },
  target_avatar_view: {},
  target_name_view: {
    flexDirection: 'column',
    marginLeft: 30,
    justifyContent: 'center'
  },
  targe_com_item: {
    flexDirection: 'row',
    marginTop: 0,
    marginLeft: 0,
    marginRight: 0
  },
  target_avatar_com_view: {},
  target_name_com_view: {
    flexDirection: 'column',
    marginLeft: 20,
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
