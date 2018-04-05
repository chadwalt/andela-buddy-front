import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import registerServiceWorker from './registerServiceWorker';
import Root from './root';
import store from './store/configureStore'

ReactDOM.render(<Root store={ store }/>, document.getElementById('root'));

registerServiceWorker();
