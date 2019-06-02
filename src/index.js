import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CardList from './CardList.js';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import { plants } from './plants';

ReactDOM.render(
    <CardList plants={plants} />
    , document.getElementById('root'));
serviceWorker.unregister();
