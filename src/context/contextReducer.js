export const contextReducer = (state, action) => {
    let transactions;

    switch (action.type) {
        case 'DELETE_TRANSACTION': {
            transactions = state.filter(el => el.id !== action.payload)
            localStorage.setItem('transactions', JSON.stringify(transactions))
            return transactions
        }

        case 'ADD_TRANSACTION': {
            transactions = [action.payload, ...state]
            localStorage.setItem('transactions', JSON.stringify(transactions))
            return transactions
        }

        default: return state;
    }
}

