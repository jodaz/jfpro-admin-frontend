import * as React from 'react'
import { IAuth, AuthContextType } from '../types/providers'
import { LayoutProps } from '../types'
import vars from '../utils/vars'
import { apiProvider } from '../api';

enum AuthActionType {
    LOGIN = 'LOGIN',
    LOGOUT = 'LOGOUT'
}

interface AuthAction {
    type: AuthActionType;
    payload: any;
}

const initialState: IAuth = {
    isAuth: false,
    token: ''
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
        localInitialState.isAuth = true;
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

export async function loginUser(dispatch: any, values: any) {
    try {
        const response = await apiProvider.post('/login', values)

        if (response.status >= 200 && response.status < 300) {
            const { data } = response;

            dispatch({
                type: 'LOGIN',
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
        dispatch({ type: 'LOGOUT' })

        await localStorage.removeItem(vars.authToken)
    } catch (e) {
        console.log(e);
    }
}
