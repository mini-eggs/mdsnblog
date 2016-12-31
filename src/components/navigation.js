import React from 'react'
import { Link } from 'react-router'

class Navigation extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
  }

  showNavigation() {
    this.addActiveClass('ea--slide--out--navigation')
    this.addActiveClass('ea--slide--out--menu--spoof--page')
  }

  closeNavigation() {
    this.removeActiveClass('ea--slide--out--navigation')
    this.removeActiveClass('ea--slide--out--menu--spoof--page')
  }

  addActiveClass(el) {
    const menu = document.getElementById(el)
    let className = menu.className
    menu.className = className + ' active'
  }

  removeActiveClass(el) {
    const menu = document.getElementById(el)
    let className = menu.className
    menu.className = className.replace(' active', '')
  }

  render() {
    return (
      <div className="ea--inline">

        <div id="ea--slide--out--menu--spoof--page" className="ea--slide--out--menu--spoof--page" onClick={ () => { this.closeNavigation() }} />

        <div id="ea--slide--out--navigation" className="ea--slide--out--menu--container">
          <div className="ea--close--icon--container">
            <div className="ea--inline ea--menu--icon--close--inner " onClick={ () => { this.closeNavigation() }}>
              <div className="ea--menu--icon--close" />
            </div>
          </div>
          <div className="ea--slide--out--menu">
            <div>Things will go here</div>
            <div>
              <Link to="/" onClick={ () => { this.closeNavigation() }}>home</Link>
            </div>
          </div>
        </div>

        <div className="ea-menu-container">
          <div className="ea--inline ea--menu--icon--container" onClick={ () => { this.showNavigation() }}>
            <div className="ea--menu--icon" />
          </div>
          <div className="ea--brand--name">
            <div className="ea-rotate-90-deg-neg">
              <Link to="/">MDSN</Link>
            </div>
          </div>
          <div className="ea--menu--social--icons">
            <div className="ea--social--icon--container">
              icon
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default Navigation
