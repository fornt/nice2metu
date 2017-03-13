export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';

export function increment() {
	return {
		type: INCREMENT_COUNTER
	}
}
export function decrement() {
	return {
		type: DECREMENT_COUNTER 
	}
}
/*
	导出逢奇数加1的方法，此方法返回一个方法，包含dispath和getState，dispath用于分发方法，getState用于获取state
*/
export function incrementIfOdd() {
	return (dispatch, getState) => {
		const {counter} = getState();
		if(counter%2 === 0){
			return
		}
		dispatch(increment())
	}
}


/*
	这些方法前面都已经export,在引入此文件时，import * as actions 就能生成一个actions的对象，包含所有export
*/