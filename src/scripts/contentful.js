import * as contentful from 'contentful'
import credentials from '../keys/contentful'

const client = contentful.createClient(credentials)

const getItemByCategoryAndSlug = async props => {
  return new Promise( async (resolve, reject) => {
    const entries = await client.getEntries()
    entries.toPlainObject().items.forEach( item => {
      const id = item.sys.contentType.sys.id
      const slug = item.fields.slug
      if(id === props.category && slug === props.slug) {
        resolve(item.fields)
      }
    })
    reject()
  })
}
export {getItemByCategoryAndSlug}

const getItemByCategory = async props => {
  let items = []
  return new Promise( async (resolve, reject) => {
    const entries = await client.getEntries()
    entries.toPlainObject().items.forEach( item => {
      const id = item.sys.contentType.sys.id
      if(id === props.category) {
        items.push(item.fields)
      }
    })
    if(items.length > 0) {
      resolve(items)
    }
    else {
      reject()
    }
  })
}
export {getItemByCategory}