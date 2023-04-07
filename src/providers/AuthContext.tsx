import * as React from 'react'
import { IAuth, AuthContextType } from '../types/providers'
import { LayoutProps } from '../types'
import vars from '../utils/vars'
import { apiProvider } from '../api';

enum AuthActionType {
    LOGIN = 'LOGIN',
    LOGOUT = 'LOGOUT',
    SET_USER = 'SET_USER',
    TOGGLE_LOADING_USER = 'TOGGLE_LOADING_USER'
}

interface AuthAction {
    type: AuthActionType;
    payload: any;
}

const initialState: IAuth = {
    isAuth: false,
    user: null,
    token: '',
    loading: true
}

const setLocalCredentials = async (token: string) => {
    await localStorage.setItem(vars.authToken, token)

    return true;
}

const AuthContext = React.createContext<AuthContextType>({ state: initialState, dispatch: () => null })

const getInitialState = () => {
    const localInitialState = initialState;

    if (localStorage.getItem(vars.authToken)) {
        localInitialState.token = localStorage.getItem(vars.authToken);
    }

    return localInitialState;
}

function authReducer(state: IAuth, action: AuthAction): IAuth {
    switch (action.type) {
        case AuthActionType.LOGIN: {
            return {
                ...state,
                token: action.payload.token,
                isAuth: true
            }
        }
        case AuthActionType.TOGGLE_LOADING_USER: {
            return {
                ...state,
                loading: !state.loading
            }
        }
        case AuthActionType.SET_USER: {
            return {
                ...state,
                user: action.payload,
                isAuth: true
            }
        }
        case AuthActionType.LOGOUT: {
            return initialState
        }
        default: {
            console.log(`Unhandled action type: ${action.type}`)
            return initialState;
        }
    }
}

export const AuthProvider: React.FC<LayoutProps> = ({ children }) => {
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

export async function getUser(dispatch: any) {
    try {
        dispatch({
            type: AuthActionType.TOGGLE_LOADING_USER
        })

        const response = await apiProvider.get('/user')

        if (response.status >= 200 && response.status < 300) {
            dispatch({
                type: AuthActionType.SET_USER,
                payload: response.data
            })

            dispatch({
                type: AuthActionType.TOGGLE_LOADING_USER
            })

            return {
                success: true,
                data: response.data,
            }
        }

        return false;
    } catch (error: any) {
        if (error.response.status >= 400 && error.response.status < 500) {
            return {
                success: false,
                status: error.response.status,
                data: error.response.data.errors
            };
        }
    }
}

export async function loginUser(dispatch: any, values: any) {
    try {
        const response = await apiProvider.post('/login', values)

        if (response.status >= 200 && response.status < 300) {
            const { data } = response;

            dispatch({
                type: AuthActionType.LOGIN,
                payload: {
                    token: data
                }
            })

            await setLocalCredentials(data)

            return { success: true };
        }

        return false;
    } catch (error: any) {
        if (error.response.status >= 400 && error.response.status < 500) {
            return {
                success: false,
                status: error.response.status,
                data: error.response.data.errors
            };
        }
    }
}

export async function logout(dispatch: any) {
    try {
        dispatch({ type: AuthActionType.LOGOUT })

        await localStorage.removeItem(vars.authToken)
    } catch (e) {
        console.log(e);
    }
}
