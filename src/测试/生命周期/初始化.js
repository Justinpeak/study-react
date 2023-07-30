import { Component } from 'react'

export default class App extends Component {
  UNSAFE_componentWillMount() {
    console.log('1')
  }
  componentDidMount() {
    console.log('2')
  }
  render() {
    console.log('3')

    return <div>App</div>
  }
}
