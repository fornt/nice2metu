import React,{ Component, PropTypes } from 'react';

class Counter extends Component {
	render() {
		const { increment, decrement, counter, incrementIfOdd } = this.props
		return (
		<p>
		 	Clicked: {counter} times
		 	{' '}
		 	<button onClick={increment}>+1</button>
		 	{' '}
		 	<button onClick={decrement}>-1</button>
		 	{' '}
		 	<button onClick={incrementIfOdd}>-1</button>
		</p> 
	)
	}
}
//限制组件props的类型安全
Counter.PropTypes={
	increment: PropTypes.func.isRequire,
	decrement: PropTypes.func.isRequire,
	incrementIfOdd: PropTypes.func.isRequire,
	counter:PropTypes.number.isRequire
}

export default Counter;