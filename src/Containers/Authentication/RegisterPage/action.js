import {
    REGISTER,
    REGISTER_SUCCESS,
    REGISTER_FAILED
}
    from './constants'

export const registerAction = userInfo => {
    return {
        type: REGISTER,
        payload: userInfo
    }
}

export const registerSuccessAction = msg => {
    return {
        type: REGISTER_SUCCESS,
        payload: msg
    }
}

export const registerFailedAction = msg => {
    return {
        type: REGISTER_FAILED,
        payload: msg
    }
}