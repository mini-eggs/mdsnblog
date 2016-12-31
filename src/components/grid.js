import React from 'react'
import { Link } from 'react-router'
import Image from './image'

const Item = props => {

  const item = props.item
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

  const items = props.items

  const helpers = Array(5).fill().map( (item, index) => index + 1 )

  const sizesClasses = [
    'ea--grid--small--group',
    'ea--grid--medium--group',
    'ea--grid--large--group',
    'ea--grid--xlarge--group',
    'ea--grid--xxlarge--group'
  ]

  const sizes = helpers.map( (item, index) => {
    let arr = []
    for(let e = 0; e < (index + 1); e++) {
      arr.push( items.slice( items.length/item * e, items.length/item * (e + 1) ) )
    }
    arr = arr.sort((a, b) => b.length - a.length)
    return { class: sizesClasses[index], arr: arr }
  })

  return (
    <div id="ea--grid--container" className="ea--grid--container">
      {
        sizes.map( (size, index) => {
          return (
            <div key={index}>
              {
                size.arr.map( (arr, index) => {
                  return (
                    <div key={index} className={size.class}>
                      {
                        arr.map( (a, index) => {
                          return (
                            <Item key={index} item={a} />
                          )
                        })
                      }
                    </div>
                  )
                })
              }
            </div>
          )
        })
      }
    </div>
  )
}

export default Grid
