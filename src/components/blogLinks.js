import React from 'react'
import { getItemByCategory } from '../scripts/contentful'

const CustomSocialLink = props => {
  const item = props.item
  // const image = 'https://' + item.image.fields.file.url

  return (
    <a href={item.link} className="ea--menu--button--link">
      {item.name}
    </a>
  )
}

class BlogLinks extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      social: []
    }
  }

  componentDidMount() {
    this.getSocialLinks()
  }

  async getSocialLinks() {
    try {
      const socialLinks = await getItemByCategory({ category: 'socialLinks' })
      this.setState({ social: socialLinks })
    }
    catch(err) {
      console.log(err)
    }
  }

  render() {
    return (
      <div>
        {
          this.state.social.map( (item, index) => <CustomSocialLink key={index} item={item} /> )
        }
      </div>
    )
  }

}

export default BlogLinks