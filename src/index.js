import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import List from './List';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Reducer from './reducer'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NoteDetail from './NoteDetail';
import NoteFormEdit from './NoteFormEdit';

let initialData = undefined
const dataFromLocalStorage = localStorage.getItem('store')

if (dataFromLocalStorage) {
  initialData = JSON.parse(dataFromLocalStorage)
}

const store = createStore(Reducer, initialData);

store.subscribe(() => {
  console.log('data change', store.getState())
  localStorage.setItem('store', JSON.stringify(store.getState()))
})

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
    <Route exact path="/" component={List} />
      <Route path="/:id" component={NoteDetail} exact={true} />
      <Route path="/:id/edit" component={NoteFormEdit} />
      </div>
    </Router>
  </Provider>
  , document.getElementById('root'));

  registerServiceWorker();