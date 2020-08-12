import React, { Component } from 'react';
import { Provider } from 'react-redux';

import GlobalStore from './redux/globalStore';
import Message from './components/Message';

class App extends Component{

  store = GlobalStore();

  render(){
  return (
    <Provider store={this.store}>
      <Message />
    </Provider>
  )};
}

export default App;
