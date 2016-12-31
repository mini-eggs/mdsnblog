import React from 'react'
import { getItemByCategory } from '../scripts/contentful'
import Grid from './grid'

class Home extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      items:[]
    }
  }

  componentWillReceiveProps(props) {
    this.setState({ items: [] }, () => { this.getItems() })
  }

  componentDidMount() {
    this.getItems()
  }

  async getItems() {
    try {
      const items = await getItemByCategory({ category: 'blogPost' })
      console.log(items)
      this.setState({ items: items }, () => { this.gridLoaded() })
    }
    catch(err) {
      console.log(err)
    }
  }

  gridLoaded() {
  }

  render() {
    return (
      <div className="ea--page--home">
        <Grid items={this.state.items} />
      </div>
    )
  }

}

export default Home
