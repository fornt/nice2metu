import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers';

//applyMiddlewar 来自 redux可以包装的store的dispatch
//thunk 的作用 是使action 创建函数可以返回一个function 代替一个 action 对象


export default function configStore ( initialState ){
	const store = createStore(
		reducer,
		applyMiddleware(thunk),
		initialState,
	)
	//redux 的热替换
	if (module.hot) {
		module.hot.accept('../reducers', () =>{
			const nextReducer = require('../reducers')
			store.replaceReducer(nextReducer)
		})
	}
	return store
}