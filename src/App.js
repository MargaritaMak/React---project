import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import Column from './components/Column';
import Box from './components/box';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [{
        id: 0,
        user: 'Margarita'
      },
      {
        id: 2,
        user: ''
      },
      {
        id: 3,
        user: ''
      }],
      data2: [{
        id: 1,
        user: ''
      },
      {
        id: 4,
        user: 'Monika'
      },
      {
        id: 5,
        user: ''
      }],
    }
  }


  onBoxClick = (id) => {
    const { data, data2 } = this.state;
    let item = data.find(item => {
      return item.id == id
    })
    if (item) {
      const itemIndex = data.indexOf(item)
      data.splice(itemIndex, 1)
      data2.push(item)
    } else {
      item = data2.find(item => {
        return item.id == id
      })
      const itemIndex = data2.indexOf(item)
      data2.splice(itemIndex, 1)
      data.push(item)
    }
    this.setState({
      data: data,
      data2: data2
    })
  }


  render() {
    return (
      <table>
        <tr>
          <Column value={this.state.data} onClick={this.onBoxClick} />
        </tr>
        <tr>
          <Column value={this.state.data2} onClick={this.onBoxClick} />
        </tr>
      </table>
    )
  }
}

export default App;
