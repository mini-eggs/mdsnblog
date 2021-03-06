import React from 'react'

const Loader = props => {
  return (
    <div className="ea--loader">
      <div className="ea--loading--vertical--align">
        <img role="presentation" className="ea--loader--svg" src='/loader.svg' />
      </div>
    </div>
  )
}

export default Loader
