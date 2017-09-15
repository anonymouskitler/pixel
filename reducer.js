const data = (state = {text:'hel'}, action) =>{
	switch (action.type) {
		case 'TEST_NOW':
			return Object.assign({}, state, {text: action.data})
		default:
			return state
	}
}

export default data