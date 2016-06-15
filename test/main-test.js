import Main from '../src/app/main'

import Drawer from 'material-ui/Drawer'
import {ListItem} from 'material-ui/List'

import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-addons-test-utils'

import {mount} from 'enzyme'
import chai, {expect} from 'chai'
import chaiEnzyme from 'chai-enzyme'

chai.use(chaiEnzyme())

describe('Main component', function() {
  let mainEle, appBar;

  beforeEach(function() {
    mainEle = mount(
      <Main children={<div>hi</div>}/>
    )
    appBar = mainEle.find('#appbar')
  })

  describe('app bar', function() {
    it('should show the app name as the title', function() {
      expect(appBar.find('h1').first().text()).to.equal('Lang Cheatsheets')
    })

    it('should allow opening the left drawer with the left icon', function() {
      appBar.find('button').first().simulate('click')
      expect(mainEle.find(Drawer).node.props.id).to.equal('appdrawer')
      expect(mainEle.find(Drawer).node.props.open).to.equal(true)
    })
  })

  describe('drawer', function() {
    let drawerEle;

    beforeEach(function() {
      appBar.find('button').first().simulate('click')
      drawerEle = mainEle.find('#appdrawer')
    })

    it('should have a home link', function() {
      console.log(drawerEle.find(ListItem))
      expect(drawerEle.find(ListItem).first()).to.have.text('Home')
    })

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