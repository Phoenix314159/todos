import React, { Component } from 'react'
import axios from 'axios'

export default class ResourceList extends Component {
  state = {
    resources: []
  }

  async componentDidMount () {
    const {data} = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`)
    this.setState({resources: data})
  }
  async componentDidUpdate(prevProps) {
    if(prevProps.resource !== this.props.resource) {
      const {data} = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`)
      this.setState({resources: data})
    }

  }

  render () {
    return (
      <div>{this.state.resources.length}</div>
    )
  }
}