

export const reducer = (state, action) => {
    switch (action.type) {
        case 'number_sum_N':
            return {...state, number: state.number + action.payload}
        case 'number_To_int':
            return {...state, number: parseInt(state.number)}
        case 'number_Multiple_7':
            return {...state, number: state.number * action.payload}
        case 'number_Divide_25':
            return {...state, number: state.number / action.payload}
        case 'login':
            return {...state, user: {name: action.payload}}
        default:
            return state
    }
}