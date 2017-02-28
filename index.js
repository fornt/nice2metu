import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './container/app';
import configStore from './store/store';
const store = configStore()
render( 
	<Provider store={ store }>
		<App/>
	</Provider>,
	document.getElementById('root')
)
