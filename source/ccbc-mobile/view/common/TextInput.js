import React from 'react'
import { Platform, TextInput as Input } from 'react-native'

/**
 * ReactNative 0.56（0.54以上）でiOSの日本語入力の変換が動かない問題があるため、
 * TextInputを仮実装。（Androidは問題なし）
 * https://engineer.kasajei.com/entry/2018/07/28/ReactNative_TextInput_iOS
 */
export default class TextInput extends React.Component {
  state = {
    editing: false
  }
  static defaultProps = {
    onFocus: () => {},
    onEndEditing: () => {}
  }
  shouldComponentUpdate(nextProps) {
    return (
      Platform.OS !== 'ios' ||
      !this.state.editing ||
      this.props.value === nextProps.value
    )
  }

  render() {
    return (
      <Input
        {...this.props}
        onFocus={() => {
          this.props.onFocus()
          this.setState({ editing: true })
        }}
        onEndEditing={() => {
          this.props.onEndEditing()
          this.setState({ editing: false })
        }}
      />
    )
  }
}
