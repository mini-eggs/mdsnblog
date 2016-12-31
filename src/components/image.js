import React from 'react'
import Zoom from '../scripts/zoom'

class Image extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      src: props.src,
      hasLoaded: false,
      zoom: props.zoom
    }
  }

  imageHasBeenLoaded() {
    this.setState({ hasLoaded: true }, Zoom)
  }

  render() {

    const attr = {}
    let wrapperClass = 'ea--full--width'
    if(this.state.zoom) {
      attr['data-action'] = 'zoom'
    }
    else {
      wrapperClass = 'ea--full--width ea--image--tint'
    }

    return (
      <div className={wrapperClass}>
        {
          !this.state.hasLoaded ?
            <div className="ea--off--screen">
              <img role="presentation" src={this.state.src} onLoad={ () => { this.imageHasBeenLoaded() }} />
            </div>
            :
            <span/>
        }
        <img {...attr} role="presentation" src={this.state.src} style={{opacity: this.state.hasLoaded ? '1' : '0' , transitionDuration: (this.props.speed || 350) + 'ms'}} />
      </div>
    )
  }

}

export default Image
