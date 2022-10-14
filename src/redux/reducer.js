
const reducer = (state = 0, action) => {
    switch (action.type){
        case 'SUM':
            return state + action.payload;
        default:
            return state;
    }
}

export default reducer;