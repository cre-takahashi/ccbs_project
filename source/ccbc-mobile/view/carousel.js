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
import Carousel from 'react-native-snap-carousel' // Version can be specified in package.json
import {
  Header,
  Button,
  Icon,
  Avatar,
  Rating,
  FormInput,
  Card
} from 'react-native-elements'
import KeyboardAwareScrollView from 'react-native-keyboard-aware-view'

export default class ThumbnailCarousel extends Component {
  constructor(props) {
    super()
    this.state = {
      errors: []
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

  handleSnapToItem(index) {
    console.log('snapped to ', index)
  }

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

  _renderItem = ({ item, index }) => {
    return (
      <KeyboardAvoidingView
        behavior="padding"
        style={{ marginTop: 10, marginBottom: 0, marginRight: 10 }}
      >
        <ScrollView>
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
            <Text style={{ fontSize: 12 }}>【コメント】</Text>
            <FormInput multiline style={{ fontSize: 12 }}>
              ここが良かったね。
              {'\n'}
              ここをこうすると更に良くなるはず。
              {'\n'}
              次も頑張ってほしいです。
            </FormInput>
          </Card>
        </ScrollView>
      </KeyboardAvoidingView>
    )
  }

  render = () => {
    console.log('videos: updating')

    return (
      <View>
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
        <CarouselBackgroundView style={{ height: 500 }}>
          <Carousel
            ref={c => {
              this._carousel = c
            }}
            data={this.state.videos}
            renderItem={this._renderItem.bind(this)}
            onSnapToItem={this.handleSnapToItem.bind(this)}
            sliderWidth={Dimensions.get('window').width}
            itemWidth={Dimensions.get('window').width}
            layout={'default'}
            containerCustomStyle={{ flex: 1 }}
            slideStyle={{ flex: 1 }}
            firstItem={0}
          />
        </CarouselBackgroundView>
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
  background-color: black;
  height: 200;
  width: 100%;
`

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
    justifyContent: 'center'
  },
  rating_value_view: {
    flexDirection: 'column',
    marginLeft: 10
  }
})
