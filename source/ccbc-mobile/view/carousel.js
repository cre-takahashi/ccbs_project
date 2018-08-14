import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  Image,
  AsyncStorage,
  Dimensions,
  KeyboardAvoidingView
} from 'react-native'
import styled from 'styled-components/native' // Version can be specified in package.json
import Carousel, { Pagination } from 'react-native-snap-carousel' // Version can be specified in package.json
import {
  Header,
  Button,
  Icon,
  Avatar,
  FormInput,
  Card,
  Divider
} from 'react-native-elements'
import { Rating, AirbnbRating } from 'react-native-ratings'
import KeyboardAwareScrollView from 'react-native-keyboard-aware-view'
import StarRating from 'react-native-star-rating'

export default class ThumbnailCarousel extends Component {
  constructor(props) {
    super()
    this.state = {
      errors: [],
      starCount1: 1,
      starCount2: 1,
      starCount3: 1,
      starCount4: 1,
      starCount5: 1
    }
    this.props = props
    this._carousel = {}
    this.init()
  }

  init() {
    this.state = {
      videos: [
        {
          id: 'WpIAc9by5iU',
          thumbnail: 'https://img.youtube.com/vi/D9ioyEvdggk/hqdefault.jpg',
          title: 'Led Zeppelin - Stairway To Heaven'
        },
        {
          id: 'sNPnbI1arSE',
          thumbnail: 'https://img.youtube.com/vi/sNPnbI1arSE/hqdefault.jpg',
          title: 'Eminem - My Name Is'
        },
        {
          id: 'VOgFZfRVaww',
          thumbnail: 'https://img.youtube.com/vi/VOgFZfRVaww/hqdefault.jpg',
          title: ''
        }
      ]
    }

    console.log('ThumbnailCarousel Props: ', this.props)
  }

  componentWillMount() {
    this.setState({ starCount1: 1 })
    this.setState({ starCount2: 1 })
    this.setState({ starCount3: 1 })
    this.setState({ starCount4: 1 })
    this.setState({ starCount5: 1 })
  }

  // handleSnapToItem(index) {
  //   console.log('snapped to ', index)
  // }

  // _renderItem = ({ item, index }) => {
  //   return (
  //     <ThumbnailBackgroundView>
  //       <CurrentVideoTO
  //         onPress={() => {
  //           console.log('clicked to index', index)
  //           this._carousel.snapToItem(index)
  //         }}
  //       >
  //         <CurrentVideoImage source={{ uri: item.thumbnail }} />
  //       </CurrentVideoTO>
  //       {/*<NextVideoImage source={{ uri: this.state.currentVideo.nextVideoId }}/>*/}
  //       <VideoTitleText>{item.title}</VideoTitleText>
  //     </ThumbnailBackgroundView>
  //   )
  // }

  onStarRatingPress1(rating) {
    this.setState({
      starCount1: rating
    })
  }
  onStarRatingPress2(rating) {
    this.setState({
      starCount2: rating
    })
  }
  onStarRatingPress3(rating) {
    this.setState({
      starCount3: rating
    })
  }
  onStarRatingPress4(rating) {
    this.setState({
      starCount4: rating
    })
  }
  onStarRatingPress5(rating) {
    this.setState({
      starCount5: rating
    })
  }

  _renderItem = ({ item, index }) => {
    return (
      <Card style={{ flex: 1, height: 400 }}>
        <View style={styles.targe_item}>
          <View style={styles.target_avatar_view}>
            <Avatar
              large
              rounded
              source={require('./../images/person11.png')}
              activeOpacity={0.7}
            />
          </View>
          <View style={styles.target_name_view}>
            <Text style={{ fontSize: 20 }}>札幌　太郎</Text>
          </View>
        </View>
        <View style={styles.target_title_view}>
          <Text style={{ fontSize: 18 }}>
            『新しい価値を創造するために・・・』
          </Text>
        </View>
        <View style={styles.target_coin_view}>
          <Text style={{ fontSize: 14 }}>25 点、250 coin</Text>
        </View>
        <View style={styles.rating_item}>
          <View style={styles.rating_title_view}>
            <Text style={{ fontSize: 12 }}>資料作成：</Text>
          </View>
          <View style={styles.rating_point_view}>
            <Text style={{ fontSize: 14 }}>{this.state.starCount1}点</Text>
          </View>
          <View style={styles.airbngrating_value_view}>
            <StarRating
              disabled={false}
              maxStars={10}
              rating={this.state.starCount1}
              selectedStar={rating => this.onStarRatingPress1(rating)}
              starSize={25}
              emptyStarColor={'orange'}
              fullStarColor={'orange'}
            />
          </View>
        </View>
        <View style={styles.rating_item}>
          <View style={styles.rating_title_view}>
            <Text style={{ fontSize: 12 }}>発表力　：</Text>
          </View>
          <View style={styles.rating_point_view}>
            <Text style={{ fontSize: 14 }}>{this.state.starCount2}点</Text>
          </View>
          <View style={styles.airbngrating_value_view}>
            <StarRating
              disabled={false}
              maxStars={10}
              rating={this.state.starCount2}
              selectedStar={rating => this.onStarRatingPress2(rating)}
              starSize={25}
              emptyStarColor={'orange'}
              fullStarColor={'orange'}
            />
          </View>
        </View>
        <View style={styles.rating_item}>
          <View style={styles.rating_title_view}>
            <Text style={{ fontSize: 12 }}>表現力　：</Text>
          </View>
          <View style={styles.rating_point_view}>
            <Text style={{ fontSize: 14 }}>{this.state.starCount3}点</Text>
          </View>
          <View style={styles.airbngrating_value_view}>
            <StarRating
              disabled={false}
              maxStars={10}
              rating={this.state.starCount3}
              selectedStar={rating => this.onStarRatingPress3(rating)}
              starSize={25}
              emptyStarColor={'orange'}
              fullStarColor={'orange'}
            />
          </View>
        </View>
        <View style={styles.rating_item}>
          <View style={styles.rating_title_view}>
            <Text style={{ fontSize: 12 }}>影響力　：</Text>
          </View>
          <View style={styles.rating_point_view}>
            <Text style={{ fontSize: 14 }}>{this.state.starCount4}点</Text>
          </View>
          <View style={styles.airbngrating_value_view}>
            <StarRating
              disabled={false}
              maxStars={10}
              rating={this.state.starCount4}
              selectedStar={rating => this.onStarRatingPress4(rating)}
              starSize={25}
              emptyStarColor={'orange'}
              fullStarColor={'orange'}
            />
          </View>
        </View>
        <View style={styles.rating_item}>
          <View style={styles.rating_title_view}>
            <Text style={{ fontSize: 12 }}>限界突破：</Text>
          </View>
          <View style={styles.rating_point_view}>
            <Text style={{ fontSize: 14 }}>{this.state.starCount5}点</Text>
          </View>
          <View style={styles.airbngrating_value_view}>
            <StarRating
              disabled={false}
              maxStars={10}
              rating={this.state.starCount5}
              selectedStar={rating => this.onStarRatingPress5(rating)}
              starSize={25}
              emptyStarColor={'orange'}
              fullStarColor={'orange'}
            />
          </View>
        </View>
        <Text style={{ fontSize: 12 }}>【コメント】</Text>
        <FormInput multiline style={{ fontSize: 12 }}>
          ここが良かったね。
          {'\n'}
          ここをこうすると更に良くなるはず。
          {'\n'}
          次も頑張ってほしいです。
        </FormInput>
      </Card>
    )
  }

  onPressLogoutButton = () => {
    this.props.navigation.navigate('Login')
  }
  onPressMenuButton = () => {
    this.props.navigation.navigate('Menu')
  }

  get pagination() {
    const { entries, activeSlide } = this.state
    return (
      <Pagination
        dotsLength={this.state.videos.length}
        activeDotIndex={activeSlide}
        //containerStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 8,
          backgroundColor: 'rgba(255, 255, 255, 0.92)'
        }}
        inactiveDotStyle={
          {
            // Define styles for inactive dots here
          }
        }
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    )
  }

  render = () => {
    console.log('videos: updating')

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
        <ScrollView keyboardShouldPersistTaps="always">
          <Card style={{ flex: 1 }}>
            <View style={styles.target_total_coin_view}>
              <Text style={{ fontSize: 18 }}>2018年7月部会</Text>
              <Text style={{ fontSize: 12 }}>
                発表者に対して評価とコメントをつけて下さい。
                {'\n'}
                （配布しきれなかったコインは自動で回収されます）
              </Text>
              <Text style={{ fontSize: 13 }}>配布コイン数:75000</Text>
              <Text style={{ fontSize: 13 }}>1点辺りのコイン数:100</Text>
              <Text style={{ fontSize: 13 }}>投票コイン数:30000</Text>
            </View>
          </Card>
          <Text />
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around'
            }}
          >
            <Divider style={{ flex: 1, backgroundColor: 'white' }} />
            <Text style={{ flex: 1, fontSize: 13, textAlign: 'center' }}>
              Presenter
            </Text>
            <Divider style={{ flex: 1, backgroundColor: 'white' }} />
          </View>
          <CarouselBackgroundView style={{ height: 460 }}>
            <Carousel
              ref={c => {
                this._carousel = c
              }}
              data={this.state.videos}
              renderItem={this._renderItem.bind(this)}
              // onSnapToItem={this.handleSnapToItem.bind(this)}
              onSnapToItem={index => this.setState({ activeSlide: index })}
              sliderWidth={Dimensions.get('window').width}
              itemWidth={Dimensions.get('window').width}
              layout={'default'}
              containerCustomStyle={{ flex: 1 }}
              slideStyle={{ flex: 1 }}
              firstItem={0}
            />
            <View>{this.pagination}</View>
          </CarouselBackgroundView>
          <Button
            title="save"
            icon={{ name: 'sign-in', type: 'font-awesome' }}
          />
        </ScrollView>
      </View>
    )
  }
}

const VideoTitleText = styled.Text`
  color: white;
  top: 28;
  justify-content: center;
`
const CurrentVideoImage = styled.Image`
  top: 25;
  box-shadow: 5px 10px;
  width: 256;
  height: 144;
  border-radius: 10;
`

const ThumbnailBackgroundView = styled.View`
  justify-content: center;
  align-items: center;
  width: 256;
`

const CurrentVideoTO = styled.TouchableOpacity``
const CarouselBackgroundView = styled.View`
  height: 200;
  width: 100%;
`
// const CarouselBackgroundView = styled.View`
//   background-color: black;
//   height: 200;
//   width: 100%;
// `

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
  target_avatar_view: {},
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
    justifyContent: 'center',
    minWidth: 30
  },
  rating_value_view: {
    flexDirection: 'column',
    marginLeft: 10
  },
  airbngrating_value_view: {
    flexDirection: 'column',
    marginLeft: 10
  }
})
