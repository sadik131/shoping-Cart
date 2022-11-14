import React, { useContext, useEffect, useReducer, useState } from "react";
import data from "./data"
import reducer from "./reducer"
const ReactContext = React.createContext()

const AppProvider = ({ children }) => {
    const [items, setItems] = useState(data)
    
    const initialState = {
        items,
        totalPrice: 0,
        totalAmount: 0
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    const removeItem = (id) => {
        return dispatch({
            type: "REMOVE_ITEM",
            payload: id
        })
    }

    const incriment = (id) => {
        return dispatch({
            type: "INCRIMENT",
            payload: id
        })
    }

    const decriment = (id) => {
        return dispatch({
            type: "DECRIMENT",
            payload: id
        })
    }

    useEffect(() => {
        dispatch({type:"GET_TOTAL"})
    }, [state.items]);
    return <ReactContext.Provider value={{
        ...state,
        removeItem,
        incriment,
        decriment
    }}>{children}</ReactContext.Provider>
}

const useGlobalContext = () => {
    return useContext(ReactContext)
}

export { useGlobalContext, AppProvider }