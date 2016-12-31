import React from 'react'
import { getItemByCategoryAndSlug } from '../scripts/contentful'

class BlogDescription extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      data: null
    }
  }

  componentDidMount() {
    this.getData()
  }

  async getData() {
    try {
      const data = await getItemByCategoryAndSlug({ category: 'websiteData', slug: 'main' })
      this.setState({ data: data })
    }
    catch(err) {
      console.log(err)
    }
  }

  render() {
    return (
      <div className="ea--website--data--container">
        {
          this.state.data ?
            <div className="ea--website--data">
              <h2 className="ea--website--data--title">{this.state.data.title}</h2>
              <p className="ea--website--data--description">{this.state.data.description}</p>
            </div>
            :
            <span/>
        }
      </div>
    )
  }

}

export default BlogDescription