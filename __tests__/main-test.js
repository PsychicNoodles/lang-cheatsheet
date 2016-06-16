// import Main from '../src/app/main'

// import Drawer from 'material-ui/Drawer'
// import {ListItem} from 'material-ui/List'
// import IconButton from 'material-ui/IconButton'

// import React from 'react'
// import ReactDOM from 'react-dom'
// import TestUtils from 'react-addons-test-utils'

// import {mount} from 'enzyme'
// import chai, {expect} from 'chai'
// import chaiEnzyme from 'chai-enzyme'

// chai.use(chaiEnzyme())

// describe('Main component', function() {
//   let mainEle, appBar;

//   beforeEach(function() {
//     mainEle = mount(
//       <Main children={<div>hi</div>}/>
//     )
//     appBar = mainEle.find('#appbar')
//   })

//   describe('app bar', function() {
//     it('should show the app name as the title', function() {
//       expect(appBar.find('h1').first().text()).to.equal('Lang Cheatsheets')
//     })

//     it('should allow opening the left drawer with the left icon', function() {
//       console.log(appBar.find('button').first().html())
//       let iconButton = appBar.find(IconButton).first()
//       expect(mainEle.find(Drawer)).to.have.prop('id', 'appdrawer')
//       expect(mainEle.find(Drawer)).to.have.prop('open', true)
//     })
//   })

//   describe('drawer', function() {
//     let drawerEle;

//     beforeEach(function() {
//       appBar.find('button').first().simulate('click')
//       drawerEle = mainEle.find('#appdrawer')
//     })

//     it('should have a home link', function() {
//       expect(drawerEle.find(ListItem).first()).to.have.text('Home')
//     })

//     // it('should have Korean and Japanese submenus', function() {
//     //   let korean = drawerEle.find(ListItem).at(1),
//     //       japanese = drawerEle.find(ListItem).at(2)

//     // })

//     // it('should link to each Korean feature page')

//     // it('should link to each Japanese feature page')

//     // it('should close when choosing a link')

//     // it('should close when swyping away')

//     // it('should close when tapping off the drawer')
//   })
// })

jest.unmock('../src/app/main')

import Main from '../src/app/main'

import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import {ListItem} from 'material-ui/List'
import IconButton from 'material-ui/IconButton'

import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-addons-test-utils'

describe('Main component', function() {
  let mainEle, appBar;

  beforeEach(function() {
    mainEle = TestUtils.renderIntoDocument(
      <Main children={<div>hi</div>}/>
    )
    appBar = TestUtils.findRenderedComponentWithType(mainEle, AppBar)
  })

  describe('app bar', function() {
    it('should show the app name as the title', function() {
      expect(appBar.props.title).toEqual('Lang Cheatsheets')
    })

    it('should allow opening the left drawer with the left icon', function() {
      let iconButton = TestUtils.scryRenderedComponentsWithType(mainEle, IconButton)[0]
      let drawer = TestUtils.findRenderedComponentWithType(mainEle, Drawer)
      TestUtils.Simulate.touchTap(ReactDOM.findDOMNode(iconButton).firstChild)
      expect(drawer.props.id).toEqual('appdrawer')
      expect(drawer.props.open).toEqual(true)
    })
  })

  describe('drawer', function() {
    // let drawerEle;

    // beforeEach(function() {
    //   let iconButton = TestUtils.scryRenderedComponentsWithType(mainEle, IconButton)[0]
    //   drawerEle = TestUtils.findRenderedComponentWithType(mainEle, Drawer)
    //   TestUtils.Simulate.touchTap(ReactDOM.findDOMNode(iconButton).firstChild)
    // })

    // it('should have a home link', function() {
    //   expect(drawerEle.find(ListItem).first()).to.have.text('Home')
    // })

    // it('should have Korean and Japanese submenus', function() {
    //   let korean = drawerEle.find(ListItem).at(1),
    //       japanese = drawerEle.find(ListItem).at(2)

    // })

    // it('should link to each Korean feature page')

    // it('should link to each Japanese feature page')

    // it('should close when choosing a link')

    // it('should close when swyping away')

    // it('should close when tapping off the drawer')
  })
})