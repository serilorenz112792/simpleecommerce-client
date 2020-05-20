import {
    REGISTER_SUCCESS,
    REGISTER_FAILED
}
    from './constants'


const initialState = {
    msg: {
        content: '',
        id: ''
    }
}
const registerReducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case REGISTER_SUCCESS:
            return {
                ...state,
                msg: payload
            }
        case REGISTER_FAILED:
            return {
                ...state,
                msg: {
                    content: payload.msg,
                    id: payload.id
                }
            }
        default:
            return state
    }
}

export default registerReducer