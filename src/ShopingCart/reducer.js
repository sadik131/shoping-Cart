const reducer = (state, action) => {
    // console.log(action)
    if (action.type === "REMOVE_ITEM") {
        return {
            items: state.items.filter(item => {
                return item.id !== action.payload
            })
        }
    }

    if (action.type === "INCRIMENT") {
        let updateCount = state.items.map(item => {
            if (action.payload === item.id) {
                return {
                    ...item,
                    amount: item.amount + 1
                }
            }
            return item
        }
        )
        return { ...state, items: updateCount }
    }

    if (action.type === "DECRIMENT") {
        let updateCount = state.items.map(item => {
            if (item.id === action.payload) {
                return {
                    ...item,
                    amount: item.amount - 1
                }
            }
            return item
        }).filter(item => item.amount !== 0)
        return { ...state, items: updateCount }
    }

    if (action.type === "GET_TOTAL") {
        let { totalAmount ,totalPrice } = state.items.reduce((accum, curVal) => {
            let {amount , price} = curVal
            const itemTotal = price * amount
            accum.totalPrice += itemTotal
            accum.totalAmount += amount
            // console.log(amount , price)
            return accum
         }, {
            totalAmount:0,
            totalPrice:0
        })
        totalPrice = parseFloat(totalPrice.toFixed(2))
        return { ...state, totalAmount ,totalPrice }
    }

    return state
}

export default reducer
