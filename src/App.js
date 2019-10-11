import React, { Component } from 'react';
import { Provider } from  "react-redux";
import UsersContainer from './compoments/UsersContainer/UsersContainer';
import store from '../src/store/init.reducers'

class App extends Component {

  render() {
      return (
          <Provider store={store}>
              <div>
                  <UsersContainer/>
              </div>
          </Provider>
      );
  }
}

export default App;
