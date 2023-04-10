import * as React from 'react'
import { IAuth, AuthContextType } from '../types/providers'
import { LayoutProps } from '../types'
import vars from '../utils/vars'
import { apiProvider } from '../api';
import { Role } from '../types/models';

enum AuthActionType {
    LOGIN = 'LOGIN',
    LOGOUT = 'LOGOUT',
    SET_USER = 'SET_USER',
    TOGGLE_LOADING_USER = 'TOGGLE_LOADING_USER',
    SET_ROLE = 'SET_ROLE'
}

interface AuthAction {
    type: AuthActionType;
    payload: any;
}

const initialState: IAuth = {
    isAuth: false,
    user: null,
    token: '',
    loading: true,
    role: null
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
        case AuthActionType.SET_ROLE: {
            return {
                ...state,
                role: action.payload
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
            const { roles, ...restData } = response.data
            const userRoles = roles.map((role: Role) => role.name)
                .join('').toLowerCase()

            dispatch({
                type: AuthActionType.SET_USER,
                payload: restData
            })

            dispatch({
                type: AuthActionType.TOGGLE_LOADING_USER
            })

            dispatch({
                type: AuthActionType.SET_ROLE,
                payload: userRoles
            })

            return {
                success: true,
                data: response.data,
            }
        }
    } catch (error: any) {
        if (error.response.status >= 400 && error.response.status < 500) {
            logout(dispatch)

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

            await getUser(dispatch)

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
