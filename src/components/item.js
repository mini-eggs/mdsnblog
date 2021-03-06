import React from 'react'
import { Link } from 'react-router'
import { getItemByCategoryPaginated } from '../scripts/contentful'
import Grid from './grid'
import Loader from './loader'

class Item extends React.Component {

  type = 'typeOfContentHere'

  slug = '/slugHere'

  title = 'titleHere'

  constructor(props) {
    super(props)
    this.state = {
      items: [],
      loading: true,
      page: 0,
      size: 10
    }
  }

  componentDidMount() {
    this.getItems()
    const el = document.getElementById('ea--page--home--scroll')
    el.addEventListener('scroll', e => { this.handleScroll(e) })
  }

  componentWillReceiveProps(props) {
    // this.setState({ items: [], loading: true, page: 0 }, () => { this.getItems() })
  }

  componentWillUnmount() {
    const el = document.getElementById('ea--page--home--scroll')
    el.removeEventListener('scroll', e => { this.handleScroll(e) })
  }

  handleScroll(e) {
    if( (e.target.scrollTop > (e.target.scrollHeight - e.target.offsetHeight) - window.innerHeight/2 ) && !this.state.loading ) {
      this.setState({ loading: true }, () => { this.getItems() })
    }
  }

  async getItems() {
    try {
      const items = await getItemByCategoryPaginated({ category: this.type, page: this.state.page, size: this.state.size })
      this.setState({ items: this.state.items.concat(items), loading: false, page: (this.state.page + 1) }, () => { this.getItemsComplete() })
    }
    catch(err) {
      console.log(err)
    }
  }

  getItemsComplete() {
    // this throws an error
    const el = document.getElementById('ea--page--home--scroll')
    if(!(el.scrollHeight > window.innerHeight)) {
      this.getItems()
    }
  }

  render() {
    return (
      <div id="ea--page--home--scroll" className="ea--height--full ea--mobile--top--fix ">
        <div className="ea--height--full ea--scroll-vertical">
          {
            this.state.items.length > 0 ? <Link to={this.slug} className="ea--page--type--header">{this.title}</Link> : <span/>
          }
          {
            this.state.items.length > 0 ? <Grid items={this.state.items} /> : <Loader/>
          }
        </div>
      </div>
    )
  }

}

export default Item
