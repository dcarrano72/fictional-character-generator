import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import View1 from './components/View1';
import View2 from './components/View2';
import View3 from './components/View3';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      novels: []
    }
    this.getNovels = this.getNovels.bind(this)
  }
  componentDidMount() {
    this.getNovels()
  }
  getNovels() {
    fetch('http://localhost:3000/novels')
      .then(response => response.json())
      .then(json => this.setState({
        novels: json
      }))
      .catch(error => console.error(error))
  }

  // createChar() {
  //   const1
  //   const2

  //   this.setState({
  //     firstname: const1
  //     age: const2
  //   })
  // }

  render() {
    return (
      <div className="App">


        <Header />
        <View1 />
        <View2 />
        <View3 />
        <Main novels={this.state.novels} />


      </div>
    )
  }

}

export default App;
