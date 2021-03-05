import React from 'react';
import './App.sass';
import HeaderBar from './components/HeaderBar'
import PageContent from './components/PageContent'


class App extends React.Component {
  render(){
    return (
      <>
      <HeaderBar />
      <PageContent />
      </>
    )
  }
}

export default App;
