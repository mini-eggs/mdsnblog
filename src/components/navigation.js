import React from 'react'
import { Link } from 'react-router'
import BlogDescription from './blogDescription'
import BlogLinks from './blogLinks'

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

        <div className="ea--mobile--menu--container">
          <div className="ea--mobile--menu">
            <div className="ea--mobile--menu--icon--container">
              <div className="ea--inline ea--menu--icon--container" onClick={ () => { this.showNavigation() }}>
                <div className="ea--menu--icon" />
              </div>
            </div>
            
            <div className="ea--brand--name ea--brand--name--mobile ea--text--right">
                <Link to="/">MDSN</Link>
            </div>
          </div>
        </div>

        <div id="ea--slide--out--menu--spoof--page" className="ea--slide--out--menu--spoof--page" onClick={ () => { this.closeNavigation() }} />
          <div id="ea--slide--out--navigation" className="ea--slide--out--menu--container ea--direction--rtl">
            <div className="ea--direction--ltr">
            <div className="ea--close--icon--container">
              <div className="ea--inline ea--menu--icon--close--inner " onClick={ () => { this.closeNavigation() }}>
                <div className="ea--menu--icon--close" />
              </div>
            </div>
            <div className="ea--slide--out--menu">
              <BlogDescription/>
              <BlogLinks/>
              {
                Array(99).fill(1).map( (e,i) => {
                  return (
                    <div key={i}>
                      <Link to="/" onClick={ () => { this.closeNavigation() }}>home</Link>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>

        <div className="ea--menu--container">
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
