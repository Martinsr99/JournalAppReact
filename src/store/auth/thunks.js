import { checkingCredentials } from "./authSlice"

export const checkingAuthentication = (email,password) => {
    return async(dispatch) => {
        dispatch(checkingCredentials('checking'))
    }
}

export const startGoogleSignIn = () => {
    return async(dispatch) => {
        dispatch(checkingCredentials('checking'))
    }
}