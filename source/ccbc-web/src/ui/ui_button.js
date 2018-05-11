import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import { fullWhite } from 'material-ui/styles/colors'
import ActionAndroid from 'material-ui/svg-icons/action/android'
import FontIcon from 'material-ui/FontIcon'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const style = {
  margin: 12
}

const RaisedButtonExampleSimple = () => (
  <MuiThemeProvider>
    <div>
      <RaisedButton label="Default" style={style} />
      <RaisedButton label="Primary" primary={true} style={style} />
      <RaisedButton label="Secondary" secondary={true} style={style} />
      <RaisedButton label="Disabled" disabled={true} style={style} />
      <br />
      <br />
      <RaisedButton label="Full width" fullWidth={true} />
      <RaisedButton icon={<ActionAndroid />} style={style} />
      <RaisedButton
        backgroundColor="#a4c639"
        icon={<ActionAndroid color={fullWhite} />}
        style={style}
      />
      <RaisedButton
        href="https://github.com/callemall/material-ui"
        target="_blank"
        secondary={true}
        icon={<FontIcon className="muidocs-icon-custom-github" />}
        style={style}
      />
    </div>
  </MuiThemeProvider>
)

export default RaisedButtonExampleSimple
