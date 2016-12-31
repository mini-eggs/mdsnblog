import React from 'react'
import { Link } from 'react-router'
import Image from './image'

const Item = props => {

  const item = props.item
  console.log(item)
  const image = 'https://' + item.image.fields.file.url

  return (
    <Link to={'/' + item.slug}>
      <div className="ea--grid--item">
        <Image speed={250} className="ea--grid--item--image" src={image} />
      </div>
    </Link>
  )
}

const Grid = props => {

  const items = props.items.concat(props.items).concat(props.items).concat(props.items).concat(props.items).concat(props.items).concat(props.items).concat(props.items).concat(props.items).concat(props.items)

  const fg = items.filter( (item, index) => index % 4 === 0 )
  items.shift()
  const sg = items.filter( (item, index) => index % 4 === 0 )
  items.shift()
  const tg = items.filter( (item, index) => index % 4 === 0 )
  items.shift()
  const fg2 = items.filter( (item, index) => index % 4 === 0 )

  const largeGroups = [ fg, sg, tg, fg2 ]

  return (
    <div id="ea--grid--container" className="ea--grid--container">
      {
        largeGroups.map( (group, index) => {
          return (
            <div key={index} className="ea--grid--large--group">
              {
                group.map( (item, index) => <Item key={index} item={item} /> )
              }
            </div>
          )
        })
      }
    </div>
  )
}

export default Grid
