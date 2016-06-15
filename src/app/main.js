/**
 * In this file, we create a React component
 * which incorporates components providedby material-ui.
 */
import React, {Component, PropTypes} from 'react'
import {withRouter} from 'react-router'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import {List, ListItem, MakeSelectable} from 'material-ui/List'

import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const SelectableList = MakeSelectable(List)

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {open: false, rightIconEle: null, rightIconTap: null}
  }

  onListChange(evt, value) {
    this.props.router.push(value)
    this.setState({
      open: false
    })
  }

  setRightIcon(cls, fn) {
    this.setState({
      rightIconEle: cls,
      rightIconTap: fn
    })
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div>
          <AppBar
            title="Lang Cheatsheets" id="appbar"
            onLeftIconButtonTouchTap={() => this.setState({open: true})}
            iconElementRight={this.state.rightIconEle}
            onRightIconButtonTouchTap={this.state.rightIconTap}/>
          <Drawer docked={false} open={this.state.open} id="appdrawer"
                  onRequestChange={(open) => this.setState({open})}>
            <ListItem primaryText="Home" id="home"
                      onTouchTap={(evt) => this.onListChange(evt, '/')}/>
            <SelectableList onChange={this.onListChange.bind(this)}>
              <ListItem primaryText="한국어" secondaryText="Korean"
                        primaryTogglesNestedList={true}
                        value="" // this needs to be set for some reason or else it turns grey
                        nestedItems={[
                          <ListItem primaryText="Consonant Pronunciation Rules"
                                    value="korean/consonant-rules"
                                    id="korean-consonant-rules"/>
                        ]}/>
              <ListItem primaryText="日本語" secondaryText="Japanese"
                        primaryTogglesNestedList={true}
                        value=""
                        nestedItems={[
                          <ListItem primaryText="Coming Soon™" value="/"/>
                        ]}/>
            </SelectableList>
          </Drawer>
          <div id="content">
          {React.cloneElement(this.props.children,
            {setBarRightIcon: this.setRightIcon.bind(this)})}
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default withRouter(Main)
