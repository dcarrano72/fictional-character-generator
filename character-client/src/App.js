import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

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

  render() {
    return (
      <div className="App">


        <Header />
        <Main novels={this.state.novels} />
        <Footer />


      </div>
    )
  }

}

export default App;
