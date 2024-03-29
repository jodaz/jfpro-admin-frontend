import * as React from 'react'
import { User } from './models';

export interface IAuth {
    isAuth: boolean;
    token: string | null;
    user: User | null;
    loading: boolean;
    role: any;
}

export type AuthContextType = {
    state: IAuth,
    dispatch: any
}
