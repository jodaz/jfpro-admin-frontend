import * as React from 'react'
import { User } from './models';

export interface IAuth {
    isAuth: boolean;
    token: string | null;
    user: User;
    loading: boolean;
}

export type AuthContextType = {
    state: IAuth,
    dispatch: any
}
