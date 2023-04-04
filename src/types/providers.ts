import * as React from 'react'

export interface IAuth {
    isAuth: boolean;
    token: string | null;
}

export type AuthContextType = {
    state: IAuth,
    dispatch: any
}
