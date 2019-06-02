import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card.js';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import { plants } from './plants';

ReactDOM.render(<div>
    <Card id={plants[0].id} name={plants[0].name} link={plants[0].link} />
    <Card id={plants[1].id} name={plants[1].name} link={plants[1].link} />
</div>, document.getElementById('root'));
serviceWorker.unregister();
