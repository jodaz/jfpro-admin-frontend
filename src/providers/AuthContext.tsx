import * as React from 'react'
import vars from '../utils/vars'

const setLocalCredentials = async (token: string, data: any) => {
    await localStorage.setItem(vars.authToken, token)
    await localStorage.setItem(vars.user, JSON.stringify(data));

    return true;
}

const AuthContext = React.createContext()

const initialState = {
    isAuth: false,
    user: {},
    token: '',
    userCoords: null,
    openGeolocation: false,
    userPlan: null
}

const getInitialState = () => {
    const localInitialState = { ...initialState };

    if (localStorage.getItem(vars.user)) {
        localInitialState.user = JSON.parse(localStorage.getItem(vars.user))
    }
    if (localStorage.getItem(vars.authToken)) {
        localInitialState.token = localStorage.getItem(vars.authToken);
        localInitialState.isAuth = true;
    }

    return localInitialState;
}

function authReducer(state, action) {
    if (action) {
        switch (action.type) {
            case 'LOGIN': {
                return {
                    ...state,
                    user: action.payload.user,
                    token: action.payload.token,
                    isAuth: true
                }
            }
            case 'LOGOUT': {
                return initialState
            }
            default: {
                throw new Error(`Unhandled action type: ${action.type}`)
            }
        }
    }
}

export function AuthProvider({ children }) {
    const [state, dispatch] = React.useReducer(authReducer, getInitialState())

    return (
        <AuthContext.Provider value={{ state, dispatch }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = React.useContext(AuthContext)

    if (context === undefined) {
        throw new Error('useAuth must be used within a AuthProvider')
    }

    return context
}

export async function loginUser(dispatch, values) {
    try {
        const { data, token } = values

        dispatch({
            type: 'LOGIN',
            payload: {
                user: data,
                token: token
            }
        })
        await setLocalCredentials(token, data)
    } catch (e) {
        console.log(e);
    }
}

export async function logout(dispatch) {
    try {
        dispatch({ type: 'LOGOUT' })

        await localStorage.removeItem(vars.authToken)
        await localStorage.removeItem(vars.user);
    } catch (e) {
        console.log(e);
    }
}
