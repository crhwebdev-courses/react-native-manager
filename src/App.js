import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import Config from '../.config';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: Config.API_KEY,
      authDomain: Config.AUTH_DOMAIN,
      databaseURL: Config.DATABASE_URL,
      projectId: Config.PROJECT_ID,
      storageBucket: Config.STORAGE_BUCKET,
      messagingSenderId: Config.MESSEGING_SENDER_ID
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
