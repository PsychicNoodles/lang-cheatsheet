import React, {Component} from 'react'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import Toggle from 'material-ui/Toggle'
import IconButton from 'material-ui/IconButton'
import ActionList from 'material-ui/svg-icons/action/list'

class KoreanConsonantRules extends Component {
  constructor(props) {
    super(props)
    let ruleKeys = ["Resyllabification", "Syllable-final Closure", "Nasal Assimilation",
                    "ㄴ to ㄹ Assimilation", "Tensification", "ㅎ Aspiration",
                    "Double Consonant Reduction", "Palatalization"]
    let rules = ruleKeys.reduce((o, k) => { // convert to an object with all true values
      o[k] = true
      return o
    }, {})
    this.state = {ruleListOpen: false, rules: rules, tmpRules: rules}
  }

  componentDidMount() {
    this.props.setBarRightIcon(<IconButton><ActionList/></IconButton>, () => {
      this.setState({ruleListOpen: true, tmpRules: this.state.rules})
    })
  }

  handleCancel() {
    this.setState({ruleListOpen: false})
  }

  handleSave() {
    this.setState({ruleListOpen: false, rules: this.state.tmpRules})
  }

  handleToggle(key, isToggled) {
    let rules = this.state.rules
    rules[key] = isToggled
    this.setState({tmpRules: rules})
  }

  render() {
    console.log(this.state)
    let actions = [
      <FlatButton label="Cancel" primary={true} onTouchTap={this.handleCancel}/>,
      <FlatButton label="Save" primary={true} onTouchTap={this.handleSave}/>
    ]
    let toggles = Object.keys(this.state.tmpRules).map((key) => {
      <Toggle label={key} toggled={this.state.tmpRules[key]}
              onToggle={(evt, isToggled) => this.handleToggle(key, isToggled)}/>
    })

    return (
      <div>
        <FlatButton label="hi"/>
        <Dialog title="Enable Rules" actions={actions} autoScrollBodyContent={true}
                modal={true} open={this.state.ruleListOpen}>
          {toggles}
        </Dialog>
      </div>
    )
  }
}

export default KoreanConsonantRules
