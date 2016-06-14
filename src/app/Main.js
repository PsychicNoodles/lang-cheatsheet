/**
 * In this file, we create a React component
 * which incorporates components providedby material-ui.
 */
import React, {Component} from 'react'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {open: false}
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div>
          <AppBar
            title="Language Cheatsheets"
            onLeftIconButtonTouchTap={() => this.setState({open: true})}
          />
          <Drawer docked={false} open={this.state.open}
                  onRequestChange={(open) => this.setState({open})}>
            <MenuItem>Item 1</MenuItem>
            <MenuItem>Item 2</MenuItem>
          </Drawer>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default Main;
