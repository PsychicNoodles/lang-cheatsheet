import React, {Component} from 'react';

class Home extends Component {
  componentDidMount() {
    this.props.setBarRightIcon(null, null)
  }

  render() {
    return (
      <div>Home</div>
    )
  }
}

export default Home
