import React, { Component, PropTypes } from 'react'
import {
  StyleSheet,
  WebView,
  Dimensions,
  View,
  ScrollView,
  Text,
  Image,
  AsyncStorage
} from 'react-native'
import {
  Header,
  Button,
  Icon,
  Avatar,
  Card,
  Divider
} from 'react-native-elements'

const restdomain = require('./common/constans.js').restdomain

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
  constructor(props) {
    super()
    this.state = {
      resultList: [],
      tohyo_coin: []
    }
    this.props = props
  }

  /** コンポーネントのマウント時処理 */
  async componentWillMount() {
    var loginInfo = await this.getLoginInfo()
    this.setState({ userid: loginInfo['userid'] })
    this.setState({ password: loginInfo['password'] })
    this.setState({ tShainPk: loginInfo['tShainPk'] })
    this.state.tShainPk = Number(loginInfo['tShainPk'])
    this.setState({ imageFileName: loginInfo['imageFileName'] })
    this.setState({ shimei: loginInfo['shimei'] })
    this.setState({ kengenCd: loginInfo['kengenCd'] })

    var tohyoShokaiShosaiInfo = await this.getTohyoShokaiShosaiInfo()
    this.setState({ senkyoNm: tohyoShokaiShosaiInfo['senkyoNm'] })
    this.setState({ tSenkyoPk: tohyoShokaiShosaiInfo['tSenkyoPk'] })
    this.state.tSenkyoPk = Number(tohyoShokaiShosaiInfo['tSenkyoPk'])
    this.setState({ tPresenterPk: tohyoShokaiShosaiInfo['tPresenterPk'] })
    this.state.tPresenterPk = Number(tohyoShokaiShosaiInfo['tPresenterPk'])
    this.setState({ tRank: tohyoShokaiShosaiInfo['tRank'] })
    this.setState({ tTotalCoin: tohyoShokaiShosaiInfo['tTotalcoin'] })
    this.setState({ tShimei: tohyoShokaiShosaiInfo['tShimei'] })
    this.setState({ tTitle: tohyoShokaiShosaiInfo['tTitle'] })
    this.setState({ tImageFileNm: tohyoShokaiShosaiInfo['tImageFileNm'] })

    // 初期表示情報取得
    this.findTohyoShokaiShosai()
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

  // 投票照会詳細情報取得（前画面からのパラメータ）
  getTohyoShokaiShosaiInfo = async () => {
    try {
      return JSON.parse(await AsyncStorage.getItem('tohyoShokaiShosaiInfo'))
    } catch (error) {
      return
    }
  }
  // 投票照会詳細情報検索（API呼び出し）
  findTohyoShokaiShosai = async () => {
    await fetch(restdomain + '/tohyo_shokai_shosai/find', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: new Headers({ 'Content-type': 'application/json' })
    })
      .then(function(response) {
        return response.json()
      })
      .then(
        function(json) {
          // 結果が取得できない場合は終了
          if (typeof json.data === 'undefined') {
            return
          }
          // 検索結果の取得
          var resList = json.data
          this.setState({ resultList: resList })
          var coin = json.tohyo_coin
          this.setState({ tohyo_coin: coin })
          if (resList.length != 0) {
            this.state.senkyo_nm = resList[0].senkyo_nm
          }
          // 各評価ポイントの集計
          var sum1 = 0,
            sum2 = 0,
            sum3 = 0,
            sum4 = 0,
            sum5 = 0
          for (var i in this.state.resultList) {
            sum1 += this.state.resultList[i].document_pt
            sum2 += this.state.resultList[i].presentation_pt
            sum3 += this.state.resultList[i].expression_pt
            sum4 += this.state.resultList[i].influence_pt
            sum5 += this.state.resultList[i].breakthrough_pt
          }
          this.setState({ sum_document: sum1 })
          this.setState({ sum_presentation: sum2 })
          this.setState({ sum_expression: sum3 })
          this.setState({ sum_influence: sum4 })
          this.setState({ sum_breakthrough: sum5 })
        }.bind(this)
      )
      .catch(error => console.error(error))
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
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
        <ScrollView>
          <Card>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <View style={{ flex: 2 }}>
                <Text style={{ fontSize: 14 }}>
                  {this.state.senkyoNm}
                  {'\n'}
                </Text>
                <View style={styles.targe_item}>
                  <View style={styles.target_avatar_view}>
                    <Avatar
                      small
                      rounded
                      source={{
                        uri: restdomain + `/uploads/${this.state.tImageFileNm}`
                      }}
                      activeOpacity={0.7}
                    />
                  </View>
                  <View style={styles.target_name_view}>
                    <Text style={{ fontSize: 18 }}>{this.state.tShimei}</Text>
                  </View>
                </View>
                <Text style={{ fontSize: 14 }}>
                  『{this.state.tTitle}』{'\n'}
                </Text>
                <Text style={{ fontSize: 14 }}>
                  全体順位　：
                  {this.state.tRank}位{'\n'}
                  獲得コイン：
                  {this.state.tTotalCoin} coin
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  alignItems: 'flex-end'
                }}
              >
                <Image source={require('./../images/RadarChart.png')} />
              </View>
            </View>
          </Card>
          {this.state.resultList.map((n, i) => {
            return (
              <Card>
                <View style={styles.targe_com_item}>
                  <View style={styles.target_avatar_com_view}>
                    <Avatar
                      small
                      rounded
                      source={{
                        uri: restdomain + `/uploads/${n.tohyo_image}`
                      }}
                      activeOpacity={0.7}
                    />
                    <Text style={{ fontSize: 12 }}>{n.tohyo_shimei}</Text>
                  </View>
                  <View style={styles.target_eval_com_view}>
                    <Text style={{ fontSize: 12 }}>
                      投票：
                      {this.state.tohyo_coin[i]}
                      coin
                      {'\n'}
                      資料作成：
                      {n.document_pt}
                      点、発表力：
                      {n.presentation_pt}
                      点、表現力：
                      {n.expression_pt}
                      点、
                      {'\n'}
                      影響力：
                      {n.influence_pt}
                      点、限界突破：
                      {n.breakthrough_pt}点
                    </Text>
                    <Divider style={{ backgroundColor: 'gray' }} />
                    <Text style={{ fontSize: 12 }}>{n.tohyo_comment}</Text>
                  </View>
                </View>
              </Card>
            )
          })}
        </ScrollView>
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
    marginLeft: 10,
    justifyContent: 'center'
  },
  targe_com_item: {
    flexDirection: 'row',
    marginTop: 0,
    marginLeft: 0,
    marginRight: 0
  },
  target_avatar_com_view: {
    flex: 1
  },
  target_eval_com_view: {
    flex: 4,
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
