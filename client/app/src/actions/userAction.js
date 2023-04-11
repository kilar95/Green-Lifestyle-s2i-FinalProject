import * as userAPI from '../api/userAPI.js'

export const updateUserData = (id, property, value) => async (dispatch) => {
    dispatch({ type: "UPDATE_START" })
    try {
        const { data } = await userAPI.updateUserData(id, property, value)
        console.log('Updated, this is the data coming from the action: ' + data);
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
        dispatch({ type: "CALCULATION_FAIL" })
    }
}