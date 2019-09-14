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
  }
  componentDidMount() {
    this.getNovels()
  }
  getNovels() {
    fetch('http://localhost:3000/novels')
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(error => console.error(error))
  }
  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <Main />
          <Footer />
        </div>
      </div>
    )
  }

}

export default App;
