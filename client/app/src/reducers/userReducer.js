const userReducer = (
    state = { token: null, user: null, loading: false, error: false, updateLoading: false },
    action
) => {
    switch (action.type) {
        case "AUTH_START":
            return { ...state, loading: true, error: false };
        case "AUTH_SUCCESS":
            localStorage.setItem("profile", JSON.stringify({ ...action?.data }))
            return { ...state, token: action.data.token, user: action.data.user, loading: false, error: false };
        case "AUTH_FAIL":
            return { ...state, loading: false, error: true };


        case "UPDATE_START":
            return { ...state, updateLoading: true, error: false }
        case "UPDATE_SUCCESS":
            localStorage.setItem("profile", JSON.stringify({ ...action?.data }))
            return { ...state, user: action.data, updateLoading: false, error: false }
        case "UPDATE_FAIL":
            return { ...state, updateLoading: false, error: true }


        case "CALCULATION_START":
            return { ...state, updateLoading: true, error: false }
        case "CALCULATION_SUCCESS":
            localStorage.setItem("profile", JSON.stringify({ ...action?.data }))
            return { ...state, user: action.data, updateLoading: false, error: false }
        case "CALCULATION_FAIL":
            return { ...state, updateLoading: false, error: true }


        case "RESET_START":
            return { ...state, updateLoading: true, error: false }
        case "RESET_SUCCESS":
            localStorage.setItem("profile", JSON.stringify({ ...action?.data }))
            return { ...state, user: action.data, updateLoading: false, error: false }
        case "RESET_FAIL":
            return { ...state, updateLoading: false, error: true }


        case "LOG_OUT":
            localStorage.clear();
            return { ...state, user: null, token: null, loading: false, error: false }
        default:
            return state
    }
}

export default userReducer