import React from 'react';
import './App.sass';
import HeaderBar from './components/HeaderBar'
import PageContent from './components/PageContent'
import { observable } from 'mobx'
import { observer } from 'mobx-react'
import models from './Models'
import makes from './Makes'

const AppState = observable({
  models : models,
  makes: makes,
  editName: (id, event) =>{
    AppState.models[id].name = event.target.value;
  }
})


class App extends React.Component {
  render(){
    return (
      <>
      <HeaderBar />
      <PageContent AppState={AppState}/>
      </>
    )
  }
}

export default App;
