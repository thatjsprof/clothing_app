import types from './user.types'

export const setCurrentUser = user => {
    return {
        type: types.setCurrentUser, 
        payload: user
    }
}