import React from 'react'
import { Link } from 'react-router'
import { getItemByCategory } from '../scripts/contentful'

const CustomNavLink = props => {
  const item = props.item
  return (
    <Link to={item.link} className="ea--menu--button--link" onClick={() => { props.onClick() }} >
      {item.name}
    </Link>
  )
}
const CustomSocialLink = props => {
  const item = props.item
  return (
    <a href={item.link} className="ea--menu--button--link" onClick={() => { props.onClick() }} >
      {item.name}
    </a>
  )
}

class BlogLinks extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      social: [],
      navigation: [],
      onClick: props.onClick
    }
  }

  componentDidMount() {
    this.getSocialLinks()
  }

  async getSocialLinks() {
    try {
      const socialLinksAwait = getItemByCategory({ category: 'socialLinks' })
      const navigationLinksAwait = getItemByCategory({ category: 'navigationLinks' })
      const socialLinks = await socialLinksAwait
      const navigationLinks = await navigationLinksAwait
      this.setState({ social: socialLinks, navigation: navigationLinks })
    }
    catch(err) {
      console.log(err)
    }
  }

  render() {
    return (
      <div>
        <div className="ea--links--container">
          <h2 className="ea--website--data--title">Navigation</h2>
          {
            this.state.navigation.map( (item, index) => <CustomNavLink onClick={() => { this.state.onClick() }} key={index} item={item} /> )
          }
        </div>
        <div className="ea--links--container">
          <h2 className="ea--website--data--title">Links</h2>
          {
            this.state.social.map( (item, index) => <CustomSocialLink onClick={() => { this.state.onClick() }} key={index} item={item} /> )
          }
        </div>
      </div>
    )
  }

}

export default BlogLinks