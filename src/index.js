import React from 'react';
import { render } from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import '../node_modules/normalize.css/normalize.css';
import './index.css';

render(<h1>myRecipes</h1>, document.getElementById('root'));
registerServiceWorker();
