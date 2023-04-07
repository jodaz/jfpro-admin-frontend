import * as React from 'react'

export interface IAuth {
    isAuth: boolean;
    token: string | null;
    user: any;
    loading: boolean;
}

export type AuthContextType = {
    state: IAuth,
    dispatch: any
}
