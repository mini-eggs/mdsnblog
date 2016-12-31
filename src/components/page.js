import React from 'react'
import { browserHistory } from 'react-router'
import { getItemByCategoryAndSlug } from '../scripts/contentful'
import Image from './image'

const PageItem = props => {

  const page = props.page
  const image = 'https://' + page.image.fields.file.url

  console.log(page)

  return (
    <div className="ea--page ea--page--max--width">
      <div className="ea--page--inner">
        <h1 className="ea--page--header">{page.name}</h1>
        <Image zoom={true} src={image} />
        <article className="ea--page--content">
          {page.description}
        </article>
      </div>
    </div>
  )
}

class Page extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      slug: props.params.page,
      page: false
    }
  }

  componentDidMount() {
    this.getPage()
  }

  async getPage() {
    try {
      const page = await getItemByCategoryAndSlug({ category: 'blogPost', slug: this.state.slug })
      this.setState({ page: page })
    }
    catch(err) {
      console.log(err)
      browserHistory.push('/')
    }
  }

  render() {
    return (
      <div>
        {
          !this.state.page ?
            <div>
              loading
            </div>
            :
            <PageItem page={this.state.page} />
        }
      </div>
    )
  }

}

export default Page
