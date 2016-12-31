import React from 'react'
import Navigation from './navigation'

class Container extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="ea--page--wrap">
        <Navigation/>
        <div className="ea--inline ea--absolute ea--scroll-vertical ea--fill--calc--100">
          {this.props.children}
        </div>
      </div>
    )
  }

}

export default Container
