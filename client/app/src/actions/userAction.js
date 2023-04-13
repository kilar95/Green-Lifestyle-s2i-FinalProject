import * as userAPI from '../api/userAPI.js'

export const updateUserData = (id, property, value) => async (dispatch) => {
    dispatch({ type: "UPDATE_START" })
    try {
        const { data } = await userAPI.updateUserData(id, property, value)
        dispatch({ type: "UPDATE_SUCCESS", data: data })
    } catch (error) {
        dispatch({ type: "UPDATE_FAIL" })
    }
}


export const calculateResults = (id) => async (dispatch) => {
    dispatch({ type: "CALCULATION_START" })
    try {
        const { data } = await userAPI.calculateResults(id)
        dispatch({ type: "CALCULATION_SUCCESS", data: data })
    } catch (error) {
        console.log(error);
        dispatch({ type: "CALCULATION_FAIL" })
    }
}

export const resetResults = (id) => async (dispatch) => {
    dispatch({ type: "RESET_START" })
    try {
        const { data } = await userAPI.resetResults(id)
        dispatch({ type: "RESET_SUCCESS", data: data })
    } catch (error) {
        console.log(error);
        dispatch({ type: "RESET_FAIL" })
    }
}